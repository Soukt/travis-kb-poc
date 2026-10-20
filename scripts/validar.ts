import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { AREAS, MODOS, NOMBRE_VALIDO, SECCIONES } from "./catalogo.ts";
import { accionesMencionadas, leerSkill } from "./skill.ts";

const RAIZ = join(import.meta.dirname, "..");
const CAMPOS_PERMITIDOS = new Set(["name", "description", "license", "compatibility", "metadata", "allowed-tools"]);

const errores: string[] = [];
const fallo = (ruta: string, mensaje: string) => errores.push(`${ruta}: ${mensaje}`);

async function catalogoDeAcciones(): Promise<Set<string>> {
  const ficheros = (await readdir(join(RAIZ, "acciones"))).filter((fichero) => fichero.endsWith(".md"));
  const nombres = new Set<string>();
  for (const fichero of ficheros) {
    const { frontmatter } = await leerSkill(join(RAIZ, "acciones", fichero));
    if (frontmatter.name !== fichero.replace(/\.md$/, "")) {
      fallo(`acciones/${fichero}`, "el name no coincide con el nombre del fichero");
    }
    nombres.add(String(frontmatter.name));
  }
  return nombres;
}

async function validarCaso(area: (typeof AREAS)[number], carpeta: string, acciones: Set<string>, vistos: Map<string, string>) {
  const ruta = `casos/${area.slug}/${carpeta}/SKILL.md`;
  let leida;
  try {
    leida = await leerSkill(join(RAIZ, ruta));
  } catch (error) {
    fallo(ruta, error instanceof Error ? error.message : String(error));
    return;
  }
  const { frontmatter, body } = leida;

  for (const campo of Object.keys(frontmatter)) {
    if (!CAMPOS_PERMITIDOS.has(campo)) fallo(ruta, `campo de cabecera no permitido por el estándar: ${campo}`);
  }

  const nombre = frontmatter.name;
  if (typeof nombre !== "string" || nombre.length === 0 || nombre.length > 64 || !NOMBRE_VALIDO.test(nombre)) {
    fallo(ruta, "name: 1-64 caracteres, minúsculas, números y guiones sueltos");
  } else {
    if (nombre !== carpeta) fallo(ruta, `name (${nombre}) no coincide con la carpeta`);
    if (!nombre.startsWith(`${area.prefix}-`)) fallo(ruta, `name debe empezar por ${area.prefix}-`);
    const anterior = vistos.get(nombre);
    if (anterior) fallo(ruta, `name repetido, ya está en ${anterior}`);
    vistos.set(nombre, ruta);
  }

  const descripcion = frontmatter.description;
  if (typeof descripcion !== "string" || descripcion.trim().length === 0 || descripcion.length > 1024) {
    fallo(ruta, "description: obligatoria, máximo 1024 caracteres");
  }

  const metadata = frontmatter.metadata as Record<string, unknown> | undefined;
  if (!metadata || typeof metadata !== "object") {
    fallo(ruta, "falta metadata");
    return;
  }
  if (metadata.area !== area.slug) fallo(ruta, `metadata.area debe ser ${area.slug}`);
  if (!MODOS.some((modo) => modo.value === metadata.modo)) fallo(ruta, `metadata.modo no válido: ${String(metadata.modo)}`);
  if (metadata.simulado !== "true") fallo(ruta, 'metadata.simulado debe ser "true"');

  const declaradas = Array.isArray(metadata.acciones) ? metadata.acciones.map(String) : [];
  if (!Array.isArray(metadata.acciones)) fallo(ruta, "metadata.acciones debe ser una lista");
  for (const accion of declaradas) {
    if (!acciones.has(accion)) fallo(ruta, `acción declarada que no existe en el catálogo: ${accion}`);
  }
  for (const accion of accionesMencionadas(body)) {
    if (!declaradas.includes(accion)) fallo(ruta, `el texto usa \`${accion}\` pero no está en metadata.acciones`);
  }
  if (metadata.modo === "persona" && !declaradas.includes("crear-ticket-booking")) {
    fallo(ruta, "un caso en modo persona tiene que usar crear-ticket-booking");
  }

  for (const seccion of SECCIONES) {
    if (!body.includes(`## ${seccion}`)) fallo(ruta, `falta la sección «${seccion}»`);
  }
}

async function main() {
  const acciones = await catalogoDeAcciones();
  const vistos = new Map<string, string>();
  const recuento: Record<string, number> = {};

  const areasEnDisco = await readdir(join(RAIZ, "casos")).catch(() => []);
  for (const carpeta of areasEnDisco) {
    if (!AREAS.some((area) => area.slug === carpeta)) fallo(`casos/${carpeta}`, "área desconocida");
  }

  for (const area of AREAS) {
    const carpetas = await readdir(join(RAIZ, "casos", area.slug)).catch(() => []);
    recuento[area.slug] = carpetas.length;
    for (const carpeta of carpetas) {
      await validarCaso(area, carpeta, acciones, vistos);
    }
  }

  const total = Object.values(recuento).reduce((suma, numero) => suma + numero, 0);
  console.log(`${total} casos en ${AREAS.length} áreas, ${acciones.size} acciones en el catálogo`);
  for (const [area, numero] of Object.entries(recuento)) console.log(`  ${area}: ${numero}`);

  if (errores.length > 0) {
    console.error(`\n${errores.length} errores:`);
    for (const error of errores) console.error(`  ${error}`);
    process.exit(1);
  }
  console.log("\nTodo válido.");
}

await main();
