import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { stringify } from "yaml";
import { ACCIONES, AREAS, MODOS, NOMBRE_VALIDO, PUERTO, REPO, SECCIONES } from "./catalogo.ts";

interface CasoGenerado {
  name: string;
  description: string;
  modo: string;
  acciones: string[];
  cuando_aplica: string;
  que_hace: string[];
  que_no_hace: string[];
  cuando_pasa_a_persona: string[];
  como_lo_pide: string[];
}

const RAIZ = join(import.meta.dirname, "..");
const GENERADOS = join(RAIZ, ".gen");
const NOMBRES_ACCIONES = new Set<string>(ACCIONES.map((accion) => accion.name));

const CONTENIDO_PROHIBIDO: [RegExp, string][] = [
  [/traventia/i, "nombra a la empresa"],
  [/https?:\/\/|www\./i, "URL"],
  [/[\w.+-]+@[\w-]+\.[\w.]+/, "email"],
  [/\b\d{9,}\b|\+\d{2}\s?\d/, "teléfono"],
  [/€|\beuros?\b|\d+\s?%/i, "importe o porcentaje"],
  [/\b\d+\s*(horas?|h\b|días?|semanas?|meses?|minutos?)/i, "plazo concreto"],
];

const errores: string[] = [];
const avisos: string[] = [];

function comprobar(caso: CasoGenerado, area: (typeof AREAS)[number], origen: string) {
  const donde = `${origen} · ${caso.name ?? "(sin name)"}`;
  const listas = ["acciones", "que_hace", "que_no_hace", "cuando_pasa_a_persona", "como_lo_pide"] as const;
  const listasRotas = listas.filter((lista) => !Array.isArray(caso[lista]));
  for (const lista of listasRotas) errores.push(`${donde}: ${lista} no es una lista`);
  if (listasRotas.length > 0 || typeof caso.name !== "string") return;

  if (!NOMBRE_VALIDO.test(caso.name) || caso.name.length > 64) errores.push(`${donde}: name no válido`);
  if (!caso.name.startsWith(`${area.prefix}-`)) errores.push(`${donde}: name sin prefijo ${area.prefix}-`);
  if (!MODOS.some((modo) => modo.value === caso.modo)) errores.push(`${donde}: modo ${caso.modo}`);
  for (const accion of caso.acciones) {
    if (!NOMBRES_ACCIONES.has(accion)) errores.push(`${donde}: acción inexistente ${accion}`);
  }
  const textoPasos = caso.que_hace.join(" ");
  for (const [, mencionada] of textoPasos.matchAll(/`([a-z0-9-]+)`/g)) {
    if (!caso.acciones.includes(mencionada)) errores.push(`${donde}: menciona ${mencionada} sin declararla`);
  }
  if (caso.modo === "persona" && !caso.acciones.includes("crear-ticket-booking")) {
    errores.push(`${donde}: modo persona sin crear-ticket-booking`);
  }

  const todoElTexto = [caso.description, caso.cuando_aplica, ...caso.que_hace, ...caso.que_no_hace, ...caso.cuando_pasa_a_persona, ...caso.como_lo_pide].join("\n");
  for (const [patron, motivo] of CONTENIDO_PROHIBIDO) {
    const encontrado = todoElTexto.match(patron);
    if (encontrado) avisos.push(`${donde}: ${motivo} («${encontrado[0]}»)`);
  }
}

function cuerpo(caso: CasoGenerado): string {
  const lista = (items: string[]) => items.map((item) => `- ${item}`).join("\n");
  const pasos = caso.que_hace.map((paso, indice) => `${indice + 1}. ${paso}`).join("\n");
  const frases = caso.como_lo_pide.map((frase) => `- «${frase.replace(/^[«"“']+|[»"”']+$/g, "")}»`).join("\n");
  const contenido = [caso.cuando_aplica.trim(), pasos, lista(caso.que_no_hace), lista(caso.cuando_pasa_a_persona), frases];
  return SECCIONES.map((seccion, indice) => `## ${seccion}\n\n${contenido[indice]}\n`).join("\n");
}

// Same layout Decap writes on save (YAML folded at 80, no blank line after the header),
// so its pull requests only show real changes.
function conCabecera(cabecera: object, contenido: string): string {
  return `---\n${stringify(cabecera)}---\n${contenido}`;
}

function skill(caso: CasoGenerado, area: (typeof AREAS)[number]): string {
  return conCabecera(
    {
      name: caso.name,
      description: caso.description.trim(),
      metadata: { area: area.slug, modo: caso.modo, acciones: caso.acciones, simulado: "true" },
    },
    cuerpo(caso),
  );
}

function configDecap(): string {
  const plantilla = SECCIONES.map((seccion) => `## ${seccion}\n\n`).join("\n");
  const coleccionesDeCasos = AREAS.map((area) => ({
    name: area.slug,
    label: area.label,
    label_singular: "Caso",
    folder: `casos/${area.slug}`,
    path: "{{slug}}/SKILL",
    create: true,
    identifier_field: "name",
    summary: "{{description}}",
    sortable_fields: ["name"],
    view_filters: MODOS.map((modo) => ({ label: modo.label, field: "metadata.modo", pattern: modo.value })),
    fields: [
      {
        label: "Nombre",
        name: "name",
        widget: "string",
        hint: `Identificador del caso. Empieza por ${area.prefix}- y usa solo minúsculas, números y guiones.`,
        pattern: [`^${area.prefix}(-[a-z0-9]+)+$`, `Empieza por ${area.prefix}- y usa solo minúsculas, números y guiones`],
      },
      {
        label: "Descripción",
        name: "description",
        widget: "text",
        hint: "Una frase que empiece por «El cliente…» y diga cuándo aplica. El agente decide con esto si usa el caso.",
      },
      {
        label: "Datos del caso",
        name: "metadata",
        widget: "object",
        collapsed: false,
        fields: [
          { label: "Área", name: "area", widget: "hidden", default: area.slug },
          { label: "Modo", name: "modo", widget: "select", options: MODOS.map((modo) => ({ label: modo.label, value: modo.value })) },
          {
            label: "Acciones que usa",
            name: "acciones",
            widget: "relation",
            collection: "acciones",
            search_fields: ["name", "description"],
            value_field: "name",
            display_fields: ["name"],
            multiple: true,
            required: false,
          },
          { label: "Simulado", name: "simulado", widget: "hidden", default: "true" },
        ],
      },
      { label: "Instrucciones", name: "body", widget: "markdown", default: plantilla },
    ],
  }));

  const config = {
    backend: {
      name: "github",
      repo: REPO,
      branch: "master",
      base_url: `http://localhost:${PUERTO}`,
      auth_endpoint: "auth",
      auth_scope: "public_repo",
      squash_merges: true,
    },
    publish_mode: "editorial_workflow",
    media_folder: "media",
    locale: "es",
    collections: [
      {
        name: "acciones",
        label: "Acciones (catálogo)",
        label_singular: "Acción",
        folder: "acciones",
        create: true,
        identifier_field: "name",
        fields: [
          { label: "Nombre", name: "name", widget: "string" },
          { label: "Descripción", name: "description", widget: "text" },
          { label: "Simulado", name: "simulado", widget: "hidden", default: "true" },
          { label: "Notas", name: "body", widget: "markdown", required: false },
        ],
      },
      ...coleccionesDeCasos,
    ],
  };
  return `# Generado por scripts/render.ts. No editar a mano.\n${stringify(config, { lineWidth: 0 })}`;
}

async function main() {
  const ficheros = (await readdir(GENERADOS)).filter((fichero) => fichero.endsWith(".json")).sort();
  const casosPorArea = new Map<string, CasoGenerado[]>();

  for (const fichero of ficheros) {
    const area = AREAS.find((candidata) => fichero.startsWith(`${candidata.slug}-`));
    if (!area) {
      errores.push(`${fichero}: no corresponde a ningún área`);
      continue;
    }
    const casos = JSON.parse(await readFile(join(GENERADOS, fichero), "utf8")) as CasoGenerado[];
    for (const caso of casos) comprobar(caso, area, fichero);
    casosPorArea.set(area.slug, [...(casosPorArea.get(area.slug) ?? []), ...casos]);
  }

  const nombres = new Map<string, number>();
  for (const casos of casosPorArea.values()) {
    for (const caso of casos) nombres.set(caso.name, (nombres.get(caso.name) ?? 0) + 1);
  }
  for (const [nombre, veces] of nombres) {
    if (veces > 1) errores.push(`name repetido ${veces} veces: ${nombre}`);
  }

  if (avisos.length > 0) {
    console.warn(`${avisos.length} avisos de contenido:`);
    for (const aviso of avisos) console.warn(`  ${aviso}`);
  }
  if (errores.length > 0) {
    console.error(`${errores.length} errores:`);
    for (const error of errores) console.error(`  ${error}`);
    process.exit(1);
  }

  await rm(join(RAIZ, "casos"), { recursive: true, force: true });
  await rm(join(RAIZ, "acciones"), { recursive: true, force: true });
  await mkdir(join(RAIZ, "acciones"), { recursive: true });
  await mkdir(join(RAIZ, "admin"), { recursive: true });

  for (const accion of ACCIONES) {
    const notas = "Acción ficticia para la prueba. La implementa tecnología; aquí solo se describe qué devuelve.\n";
    const cabecera = { name: accion.name, description: accion.description, simulado: "true" };
    await writeFile(join(RAIZ, "acciones", `${accion.name}.md`), conCabecera(cabecera, notas));
  }

  let total = 0;
  for (const area of AREAS) {
    for (const caso of casosPorArea.get(area.slug) ?? []) {
      const carpeta = join(RAIZ, "casos", area.slug, caso.name);
      await mkdir(carpeta, { recursive: true });
      await writeFile(join(carpeta, "SKILL.md"), skill(caso, area));
      total++;
    }
  }

  await writeFile(join(RAIZ, "admin", "config.yml"), configDecap());
  console.log(`${total} casos escritos, ${ACCIONES.length} acciones, admin/config.yml generado`);
}

await main();
