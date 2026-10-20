import { readFile } from "node:fs/promises";
import { parse } from "yaml";

export interface SkillLeida {
  frontmatter: Record<string, unknown>;
  body: string;
}

export async function leerSkill(ruta: string): Promise<SkillLeida> {
  const texto = await readFile(ruta, "utf8");
  const coincidencia = texto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!coincidencia) {
    throw new Error("no empieza por un bloque de cabecera entre ---");
  }
  const frontmatter = parse(coincidencia[1]);
  if (frontmatter === null || typeof frontmatter !== "object" || Array.isArray(frontmatter)) {
    throw new Error("la cabecera no es un objeto YAML");
  }
  return { frontmatter: frontmatter as Record<string, unknown>, body: coincidencia[2] };
}

export function accionesMencionadas(body: string): string[] {
  return [...body.matchAll(/`([a-z0-9-]+)`/g)].map((coincidencia) => coincidencia[1]);
}
