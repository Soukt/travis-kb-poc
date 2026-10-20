import { execSync } from "node:child_process";
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, posix } from "node:path";
import { marked } from "marked";
import { ACCIONES, AREAS, MODOS, REPO } from "./catalogo.ts";
import { leerSkill } from "./skill.ts";

interface Caso {
  name: string;
  titulo: string;
  description: string;
  area: (typeof AREAS)[number];
  modo: string;
  acciones: string[];
  cuerpo: string;
  frases: string[];
}

const RAIZ = join(import.meta.dirname, "..");
const SALIDA = join(RAIZ, "_site");
const paginas = new Map<string, string>();

const escapar = (texto: string) =>
  texto.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function versionPublicada(): string {
  const sha = process.env.GITHUB_SHA ?? execSync("git rev-parse HEAD", { cwd: RAIZ }).toString().trim();
  const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid", dateStyle: "long", timeStyle: "short" });
  return `versión <a href="https://github.com/${REPO}/commit/${sha}"><code>${sha.slice(0, 7)}</code></a> · generada el ${fecha} (hora de Madrid)`;
}

const etiquetaModo = (modo: string) => {
  const encontrado = MODOS.find((candidato) => candidato.value === modo);
  const textos: Record<string, string> = { autonomo: "Responde solo", copiloto: "Copiloto", persona: "Pasa a booking" };
  return `<span class="modo modo-${modo}" title="${escapar(encontrado?.label ?? modo)}">${textos[modo] ?? modo}</span>`;
};

function chipsAcciones(acciones: string[], raiz: string): string {
  if (acciones.length === 0) return "";
  const chips = acciones.map((accion) => `<a class="chip" href="${raiz}acciones/${accion}/index.html">${accion}</a>`).join("");
  return `<div class="chips">${chips}</div>`;
}

function filaCaso(caso: Caso, raiz: string, conArea: boolean): string {
  const area = conArea ? `<span class="area-mini">${escapar(caso.area.label)}</span>` : "";
  return `<li class="caso" data-modo="${caso.modo}">
  <div class="caso-cabecera"><a class="caso-titulo" href="${raiz}${caso.area.slug}/${caso.name}/index.html">${escapar(caso.titulo)}</a>${etiquetaModo(caso.modo)}</div>
  <div class="caso-pie">${area}<code class="identificador">${caso.name}</code>${chipsAcciones(caso.acciones, raiz)}</div>
</li>`;
}

function barraModos(casos: Caso[]): string {
  const total = casos.length || 1;
  const tramos = MODOS.map((modo) => {
    const cuantos = casos.filter((caso) => caso.modo === modo.value).length;
    return `<span class="tramo modo-${modo.value}" style="width:${(cuantos / total) * 100}%" title="${escapar(modo.label)}: ${cuantos}"></span>`;
  }).join("");
  return `<div class="barra">${tramos}</div>`;
}

function pagina(ruta: string, titulo: string, migas: [string, string][], contenido: string, version: string) {
  const profundidad = ruta.split("/").length - 1;
  const raiz = profundidad === 0 ? "./" : "../".repeat(profundidad);
  const navegacion = migas.length
    ? `<nav class="migas"><a href="${raiz}index.html">Inicio</a>${migas.map(([enlace, texto]) => ` <span>›</span> ${enlace ? `<a href="${raiz}${enlace}">${escapar(texto)}</a>` : escapar(texto)}`).join("")}</nav>`
    : "";
  paginas.set(
    ruta,
    `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapar(titulo)} · Conocimiento de Travis</title>
<link rel="stylesheet" href="${raiz}estilos.css">
</head>
<body>
<div class="aviso">Contenido simulado para una prueba de concepto. No son procedimientos reales.</div>
<main>
${navegacion}
${contenido.replaceAll("{{raiz}}", raiz)}
<footer>${version}</footer>
</main>
<script src="${raiz}web.js" defer></script>
</body>
</html>
`,
  );
}

async function leerCasos(): Promise<Caso[]> {
  const casos: Caso[] = [];
  for (const area of AREAS) {
    const carpetas = await readdir(join(RAIZ, "casos", area.slug)).catch(() => []);
    for (const carpeta of carpetas.sort()) {
      const { frontmatter, body } = await leerSkill(join(RAIZ, "casos", area.slug, carpeta, "SKILL.md"));
      const metadata = frontmatter.metadata as { modo: string; acciones: string[] };
      const seccionFrases = body.split("## Cómo lo puede pedir el cliente")[1] ?? "";
      casos.push({
        name: String(frontmatter.name),
        titulo: String(frontmatter.description),
        description: String(frontmatter.description),
        area,
        modo: metadata.modo,
        acciones: metadata.acciones ?? [],
        cuerpo: body,
        frases: [...seccionFrases.matchAll(/«([^»]+)»/g)].map((coincidencia) => coincidencia[1]),
      });
    }
  }
  return casos;
}

function portada(casos: Caso[], version: string) {
  const resumenModos = MODOS.map((modo) => {
    const cuantos = casos.filter((caso) => caso.modo === modo.value).length;
    return `<div class="dato"><span class="cifra">${cuantos}</span>${etiquetaModo(modo.value)}</div>`;
  }).join("");
  const tarjetas = AREAS.map((area) => {
    const delArea = casos.filter((caso) => caso.area.slug === area.slug);
    return `<a class="tarjeta" href="{{raiz}}${area.slug}/index.html"><span class="tarjeta-titulo">${escapar(area.label)}</span><span class="tarjeta-cifra">${delArea.length} casos</span>${barraModos(delArea)}</a>`;
  }).join("");
  pagina(
    "index.html",
    "Inicio",
    [],
    `<header class="portada">
  <h1>Conocimiento de Travis</h1>
  <p class="entradilla">${casos.length} casos que sigue el agente de atención al cliente, en ${AREAS.length} áreas, y las ${ACCIONES.length} acciones que puede usar.</p>
  <input id="buscador" type="search" placeholder="Busca un caso: «check-in», «añadir un niño», «factura»…" autocomplete="off" data-indice="{{raiz}}buscar.json" data-raiz="{{raiz}}">
</header>
<ul id="resultados" class="lista" hidden></ul>
<section id="inicio">
  <div class="datos">${resumenModos}</div>
  <h2>Áreas</h2>
  <div class="tarjetas">${tarjetas}<a class="tarjeta tarjeta-acciones" href="{{raiz}}acciones/index.html"><span class="tarjeta-titulo">Acciones</span><span class="tarjeta-cifra">${ACCIONES.length} en el catálogo</span></a></div>
</section>`,
    version,
  );
}

function paginasDeArea(casos: Caso[], version: string) {
  for (const area of AREAS) {
    const delArea = casos.filter((caso) => caso.area.slug === area.slug);
    const filtros = [`<button class="filtro activo" data-filtro="">Todos (${delArea.length})</button>`]
      .concat(
        MODOS.map((modo) => {
          const cuantos = delArea.filter((caso) => caso.modo === modo.value).length;
          return `<button class="filtro" data-filtro="${modo.value}">${etiquetaModo(modo.value)} ${cuantos}</button>`;
        }),
      )
      .join("");
    pagina(
      `${area.slug}/index.html`,
      area.label,
      [["", area.label]],
      `<h1>${escapar(area.label)}</h1>
${barraModos(delArea)}
<div class="filtros">${filtros}</div>
<ul class="lista">${delArea.map((caso) => filaCaso(caso, "{{raiz}}", false)).join("")}</ul>`,
      version,
    );
  }
}

function paginasDeCaso(casos: Caso[], version: string) {
  for (const caso of casos) {
    const ruta = `${caso.area.slug}/${caso.name}/index.html`;
    const fichero = `casos/${caso.area.slug}/${caso.name}/SKILL.md`;
    pagina(
      ruta,
      caso.titulo,
      [[`${caso.area.slug}/index.html`, caso.area.label], ["", caso.titulo]],
      `<article>
  <h1>${escapar(caso.titulo)}</h1>
  <div class="ficha">
    <div><span class="ficha-etiqueta">Modo</span>${etiquetaModo(caso.modo)}</div>
    <div><span class="ficha-etiqueta">Identificador</span><code>${caso.name}</code></div>
    <div><span class="ficha-etiqueta">Acciones</span>${chipsAcciones(caso.acciones, "{{raiz}}") || "Ninguna"}</div>
  </div>
  <div class="cuerpo">${marked.parse(caso.cuerpo, { async: false })}</div>
  <p class="enlaces"><a href="https://github.com/${REPO}/blob/master/${fichero}">Ver el fichero en GitHub</a> · <a href="https://github.com/${REPO}/commits/master/${fichero}">Historial de cambios</a></p>
</article>`,
      version,
    );
  }
}

function paginasDeAcciones(casos: Caso[], version: string) {
  const filas = ACCIONES.map((accion) => {
    const usos = casos.filter((caso) => caso.acciones.includes(accion.name)).length;
    return `<li class="caso"><div class="caso-cabecera"><a class="caso-titulo" href="{{raiz}}acciones/${accion.name}/index.html"><code>${accion.name}</code></a><span class="area-mini">${usos} casos</span></div><p>${escapar(accion.description)}</p></li>`;
  }).join("");
  pagina(
    "acciones/index.html",
    "Acciones",
    [["", "Acciones"]],
    `<h1>Acciones</h1>
<p class="entradilla">Lo que el agente puede hacer en nuestros sistemas. Son ficticias: las implementaría tecnología y aquí solo se describen.</p>
<ul class="lista">${filas}</ul>`,
    version,
  );

  for (const accion of ACCIONES) {
    const queLaUsan = casos.filter((caso) => caso.acciones.includes(accion.name));
    pagina(
      `acciones/${accion.name}/index.html`,
      accion.name,
      [["acciones/index.html", "Acciones"], ["", accion.name]],
      `<h1><code>${accion.name}</code></h1>
<p class="entradilla">${escapar(accion.description)}</p>
<h2>La usan ${queLaUsan.length} casos</h2>
<ul class="lista">${queLaUsan.map((caso) => filaCaso(caso, "{{raiz}}", true)).join("")}</ul>`,
      version,
    );
  }
}

function enlacesRotos(): string[] {
  const rotos: string[] = [];
  for (const [ruta, html] of paginas) {
    for (const [, destino] of html.matchAll(/(?:href|src|data-indice)="([^"#]+)"/g)) {
      if (/^https?:/.test(destino)) continue;
      const resuelto = posix.normalize(posix.join(posix.dirname(ruta), destino));
      if (!paginas.has(resuelto) && !["estilos.css", "web.js", "buscar.json"].includes(resuelto)) {
        rotos.push(`${ruta} → ${destino}`);
      }
    }
  }
  return rotos;
}

const ESTILOS = `:root{--fondo:#fafaf9;--superficie:#fff;--texto:#1c1917;--suave:#57534e;--borde:#e7e5e4;--acento:#2563eb;--aviso:#fef3c7;--aviso-texto:#78350f;--autonomo:#15803d;--autonomo-fondo:#dcfce7;--copiloto:#b45309;--copiloto-fondo:#fef3c7;--persona:#6d28d9;--persona-fondo:#ede9fe}
@media (prefers-color-scheme:dark){:root{--fondo:#0c0a09;--superficie:#1c1917;--texto:#f5f5f4;--suave:#a8a29e;--borde:#292524;--acento:#60a5fa;--aviso:#422006;--aviso-texto:#fde68a;--autonomo:#4ade80;--autonomo-fondo:#052e16;--copiloto:#fbbf24;--copiloto-fondo:#451a03;--persona:#c4b5fd;--persona-fondo:#2e1065}}
*{box-sizing:border-box}body{margin:0;background:var(--fondo);color:var(--texto);font:16px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif}
a{color:var(--acento);text-decoration:none}a:hover{text-decoration:underline}code{font:0.88em ui-monospace,SFMono-Regular,Menlo,monospace}
.aviso{background:var(--aviso);color:var(--aviso-texto);text-align:center;font-size:14px;padding:6px 16px}
main{max-width:960px;margin:0 auto;padding:24px 16px 48px}h1{font-size:28px;line-height:1.2;margin:8px 0 8px}h2{font-size:18px;margin:32px 0 12px}
.portada{padding:16px 0 8px}.entradilla{color:var(--suave);font-size:17px;margin:0 0 16px;max-width:70ch}
#buscador{width:100%;font:inherit;font-size:17px;padding:12px 14px;border:1px solid var(--borde);border-radius:10px;background:var(--superficie);color:var(--texto)}
#buscador:focus{outline:2px solid var(--acento);outline-offset:1px}
.datos{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:20px}.dato{background:var(--superficie);border:1px solid var(--borde);border-radius:10px;padding:14px;display:flex;flex-direction:column;gap:6px;align-items:flex-start}.cifra{font-size:26px;font-weight:600}
.tarjetas{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}.tarjeta{background:var(--superficie);border:1px solid var(--borde);border-radius:10px;padding:14px;display:flex;flex-direction:column;gap:6px;color:var(--texto)}
.tarjeta:hover{border-color:var(--acento);text-decoration:none}.tarjeta-titulo{font-weight:600}.tarjeta-cifra{color:var(--suave);font-size:14px}
.barra{display:flex;height:8px;border-radius:4px;overflow:hidden;background:var(--borde);margin:6px 0 4px}.tramo.modo-autonomo{background:var(--autonomo)}.tramo.modo-copiloto{background:var(--copiloto)}.tramo.modo-persona{background:var(--persona)}
.modo{display:inline-block;font-size:12px;font-weight:600;padding:2px 8px;border-radius:999px;white-space:nowrap}.modo-autonomo{color:var(--autonomo);background:var(--autonomo-fondo)}.modo-copiloto{color:var(--copiloto);background:var(--copiloto-fondo)}.modo-persona{color:var(--persona);background:var(--persona-fondo)}
.lista{list-style:none;padding:0;margin:16px 0;display:flex;flex-direction:column;gap:10px}.caso{background:var(--superficie);border:1px solid var(--borde);border-radius:10px;padding:12px 14px}
.caso p{margin:4px 0 8px;color:var(--suave)}.caso-cabecera{display:flex;justify-content:space-between;gap:12px;align-items:baseline}.caso-titulo{font-weight:600}
.caso-pie{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px}.area-mini{font-size:13px;color:var(--suave)}.identificador{font-size:12px;color:var(--suave);margin-right:6px}
.chips{display:flex;flex-wrap:wrap;gap:6px}.chip{font:12px ui-monospace,SFMono-Regular,Menlo,monospace;border:1px solid var(--borde);border-radius:6px;padding:1px 6px;color:var(--suave)}
.filtros{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0}.filtro{font:inherit;font-size:14px;background:var(--superficie);color:var(--texto);border:1px solid var(--borde);border-radius:999px;padding:4px 12px;cursor:pointer;display:inline-flex;gap:6px;align-items:center}.filtro.activo{border-color:var(--acento);box-shadow:0 0 0 1px var(--acento)}
.migas{font-size:14px;color:var(--suave)}.migas span{margin:0 4px}
.ficha{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;background:var(--superficie);border:1px solid var(--borde);border-radius:10px;padding:14px;margin:16px 0}.ficha>div{display:flex;flex-direction:column;gap:6px;align-items:flex-start}.ficha-etiqueta{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:var(--suave)}
.cuerpo h2{font-size:17px;margin:24px 0 8px}.cuerpo ol,.cuerpo ul{padding-left:22px}.cuerpo li{margin:4px 0}.enlaces{margin-top:28px;font-size:14px}
footer{margin-top:40px;padding-top:16px;border-top:1px solid var(--borde);color:var(--suave);font-size:13px}
@media (max-width:600px){.datos{grid-template-columns:1fr}.caso-cabecera{flex-direction:column;gap:4px}}
`;

const SCRIPT = `(() => {
  const normalizar = (texto) => texto.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").toLowerCase();
  const escapar = (texto) => texto.replace(/[&<>"]/g, (letra) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[letra]);
  const textos = { autonomo: "Responde solo", copiloto: "Copiloto", persona: "Pasa a booking" };

  const buscador = document.getElementById("buscador");
  if (buscador) {
    const resultados = document.getElementById("resultados");
    const inicio = document.getElementById("inicio");
    const raiz = buscador.dataset.raiz;
    let indice = null;
    buscador.addEventListener("input", async () => {
      const consulta = normalizar(buscador.value.trim());
      if (!consulta) { resultados.hidden = true; inicio.hidden = false; return; }
      indice ??= await fetch(buscador.dataset.indice).then((respuesta) => respuesta.json());
      const terminos = consulta.split(/\\s+/);
      const encontrados = indice.filter((caso) => terminos.every((termino) => caso.texto.includes(termino)));
      resultados.innerHTML = encontrados.length
        ? encontrados.slice(0, 50).map((caso) => '<li class="caso"><div class="caso-cabecera"><a class="caso-titulo" href="' + raiz + caso.ruta + '">' + escapar(caso.titulo) + '</a><span class="modo modo-' + caso.modo + '">' + textos[caso.modo] + '</span></div><span class="area-mini">' + escapar(caso.area) + '</span></li>').join("") + (encontrados.length > 50 ? '<li class="area-mini">… y ' + (encontrados.length - 50) + ' más. Afina la búsqueda.</li>' : "")
        : '<li class="area-mini">Ningún caso coincide.</li>';
      resultados.hidden = false; inicio.hidden = true;
    });
  }

  const filtros = document.querySelectorAll(".filtro");
  filtros.forEach((boton) => boton.addEventListener("click", () => {
    filtros.forEach((otro) => otro.classList.toggle("activo", otro === boton));
    document.querySelectorAll(".caso[data-modo]").forEach((caso) => {
      caso.hidden = Boolean(boton.dataset.filtro) && caso.dataset.modo !== boton.dataset.filtro;
    });
  }));
})();
`;

async function main() {
  const casos = await leerCasos();
  const version = versionPublicada();

  portada(casos, version);
  paginasDeArea(casos, version);
  paginasDeCaso(casos, version);
  paginasDeAcciones(casos, version);

  const rotos = enlacesRotos();
  if (rotos.length > 0) {
    console.error(`${rotos.length} enlaces rotos:`);
    for (const roto of rotos.slice(0, 20)) console.error(`  ${roto}`);
    process.exit(1);
  }

  const indice = casos.map((caso) => ({
    ruta: `${caso.area.slug}/${caso.name}/index.html`,
    titulo: caso.titulo,
    descripcion: caso.description,
    area: caso.area.label,
    modo: caso.modo,
    texto: [caso.titulo, caso.description, caso.area.label, ...caso.frases, ...caso.acciones]
      .join(" ")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase(),
  }));

  await rm(SALIDA, { recursive: true, force: true });
  for (const [ruta, html] of paginas) {
    const destino = join(SALIDA, ruta);
    await mkdir(dirname(destino), { recursive: true });
    await writeFile(destino, html);
  }
  await writeFile(join(SALIDA, "estilos.css"), ESTILOS);
  await writeFile(join(SALIDA, "web.js"), SCRIPT);
  await writeFile(join(SALIDA, "buscar.json"), JSON.stringify(indice));
  await writeFile(join(SALIDA, ".nojekyll"), "");
  console.log(`${paginas.size} páginas en _site/ (${casos.length} casos, ${ACCIONES.length} acciones)`);
}

await main();
