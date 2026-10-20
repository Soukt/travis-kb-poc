import { randomBytes } from "node:crypto";
import { readFile } from "node:fs/promises";
import { createServer, type ServerResponse } from "node:http";
import { join, normalize, sep } from "node:path";
import { PUERTO } from "./catalogo.ts";

try {
  process.loadEnvFile(join(import.meta.dirname, "..", ".env"));
} catch {
  // .env is optional when the variables come from the shell
}

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Faltan GITHUB_CLIENT_ID y GITHUB_CLIENT_SECRET (en .env o en el entorno).");
  process.exit(1);
}

const ORIGEN = `http://localhost:${PUERTO}`;
const CARPETA_ADMIN = join(import.meta.dirname, "..", "admin");
const TIPOS: Record<string, string> = { ".html": "text/html; charset=utf-8", ".yml": "text/yaml; charset=utf-8" };
const ALCANCES_PERMITIDOS = new Set(["public_repo", "repo"]);
const estadosPendientes = new Set<string>();

function responder(res: ServerResponse, estado: number, cuerpo: string, tipo = "text/plain; charset=utf-8") {
  res.writeHead(estado, { "Content-Type": tipo });
  res.end(cuerpo);
}

// Decap's popup handshake: announce, wait for the opener's ping, answer only to our own origin.
function paginaDeVuelta(estado: "success" | "error", contenido: object): string {
  const mensaje = `authorization:github:${estado}:${JSON.stringify(contenido)}`;
  return `<!doctype html><meta charset="utf-8"><script>
const origen = ${JSON.stringify(ORIGEN)};
const mensaje = ${JSON.stringify(mensaje)};
window.addEventListener("message", function alRecibir(evento) {
  if (evento.origin !== origen) return;
  window.removeEventListener("message", alRecibir);
  window.opener.postMessage(mensaje, origen);
});
window.opener.postMessage("authorizing:github", origen);
</script>`;
}

async function servirAdmin(ruta: string, res: ServerResponse) {
  const relativa = ruta === "/admin/" ? "index.html" : ruta.slice("/admin/".length);
  const absoluta = normalize(join(CARPETA_ADMIN, relativa));
  if (!absoluta.startsWith(CARPETA_ADMIN + sep)) return responder(res, 403, "Prohibido");
  try {
    const extension = absoluta.slice(absoluta.lastIndexOf("."));
    responder(res, 200, await readFile(absoluta, "utf8"), TIPOS[extension] ?? "application/octet-stream");
  } catch {
    responder(res, 404, "No encontrado");
  }
}

async function intercambiarCodigo(codigo: string): Promise<string> {
  const respuesta = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code: codigo, redirect_uri: `${ORIGEN}/callback` }),
  });
  const datos = (await respuesta.json()) as { access_token?: string; error_description?: string };
  if (!datos.access_token) throw new Error(datos.error_description ?? "GitHub no devolvió token");
  return datos.access_token;
}

createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", ORIGEN);

  if (url.pathname === "/") {
    res.writeHead(302, { Location: "/admin/" });
    return res.end();
  }
  if (url.pathname.startsWith("/admin/")) return servirAdmin(url.pathname, res);

  if (url.pathname === "/auth") {
    const alcance = url.searchParams.get("scope") ?? "public_repo";
    if (!ALCANCES_PERMITIDOS.has(alcance)) return responder(res, 400, "Alcance no permitido");
    const estado = randomBytes(16).toString("hex");
    estadosPendientes.add(estado);
    const destino = new URL("https://github.com/login/oauth/authorize");
    destino.search = new URLSearchParams({ client_id: CLIENT_ID, redirect_uri: `${ORIGEN}/callback`, scope: alcance, state: estado }).toString();
    res.writeHead(302, { Location: destino.toString() });
    return res.end();
  }

  if (url.pathname === "/callback") {
    const estado = url.searchParams.get("state") ?? "";
    const codigo = url.searchParams.get("code");
    if (!estadosPendientes.delete(estado) || !codigo) {
      return responder(res, 400, paginaDeVuelta("error", { message: "Estado no válido" }), "text/html; charset=utf-8");
    }
    try {
      const token = await intercambiarCodigo(codigo);
      return responder(res, 200, paginaDeVuelta("success", { token, provider: "github" }), "text/html; charset=utf-8");
    } catch (error) {
      const mensaje = error instanceof Error ? error.message : String(error);
      return responder(res, 502, paginaDeVuelta("error", { message: mensaje }), "text/html; charset=utf-8");
    }
  }

  responder(res, 404, "No encontrado");
}).listen(PUERTO, "localhost", () => {
  console.log(`Panel: ${ORIGEN}/admin/`);
});
