# travis-kb-poc

**Prueba de concepto desechable. Todo el contenido es simulado.** Los casos los ha escrito una IA para probar la herramienta: no describen procedimientos reales de ninguna empresa y no deben usarse como tales.

Sirve para comprobar si [Decap CMS](https://decapcms.org) vale como forma de editar el conocimiento de un agente de atención al cliente guardado en un repo de GitHub:

- ¿Carga y busca bien con 900 casos?
- ¿Funciona una carpeta por caso con su `SKILL.md` y una colección por área?
- ¿Guardar un borrador crea una rama y una pull request, y qué hace «publicar» con `master` protegido?
- ¿La validación automática salta en cada pull request?

## Estructura

```
casos/<área>/<caso>/SKILL.md   un caso de uso por carpeta, en formato Agent Skills
acciones/<acción>.md           catálogo de acciones ficticias que los casos pueden usar
admin/                         panel de Decap (config.yml lo genera scripts/render.ts)
scripts/                       generación, validación y servidor local de login
```

Cada `SKILL.md` sigue el [estándar de skills](https://agentskills.io/specification): `name` (igual que su carpeta) y `description` arriba, y el resto de datos en `metadata`.

```markdown
---
name: aloj-hora-de-entrada-al-hotel
description: El cliente pregunta a qué hora puede entrar al hotel o dejar la habitación.
metadata:
  area: alojamiento
  modo: autonomo        # autonomo | copiloto | persona
  acciones:
    - verificar-identidad
    - consultar-horarios-hotel
  simulado: "true"
---

## Cuándo aplica
## Qué hace el agente
## Qué no hace
## Cuándo pasa a una persona
## Cómo lo puede pedir el cliente
```

## Web de consulta

Cada vez que algo entra en `master` se publica una web de solo lectura en **https://soukt.github.io/travis-kb-poc/**, con portada por áreas, buscador, una página por caso y el catálogo de acciones con los casos que usa cada una. Pie de página con el commit publicado. Se genera con `npm run web` en `_site/`.

El panel de Decap también se publica en **https://soukt.github.io/travis-kb-poc/admin/**, sin login: el workflow inyecta el secreto `DECAP_TOKEN`, un token de grano fino limitado a este repo (escribir ficheros y abrir PRs). Cualquiera con la URL puede proponer cambios y, como `master` solo exige PR y validación en verde, también publicarlos. Solo tiene sentido en esta prueba.

## Uso

```bash
npm install
cp .env.example .env     # rellenar con la OAuth App de GitHub
npm run dev              # panel en http://localhost:8080/admin/
npm run validar          # la misma validación que corre en cada pull request
```

La OAuth App se crea en GitHub > Settings > Developer settings > OAuth Apps, con *Homepage URL* `http://localhost:8080` y *Authorization callback URL* `http://localhost:8080/callback`.
