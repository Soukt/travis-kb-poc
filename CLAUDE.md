# CLAUDE.md

Repo de prueba de concepto: el conocimiento de un agente de atención al cliente postventa, guardado como ficheros. **Todo el contenido es simulado.** Quien te pide cambios suele ser alguien de booking sin conocimientos técnicos: contesta en español llano, sin jerga.

## Qué se puede tocar

- Solo `casos/` (y `acciones/` si lo piden expresamente).
- Nunca `scripts/`, `admin/`, `.github/`, `package*.json` ni este fichero.
- Un caso nuevo o modificado por pull request. Rama `caso/<name>`; título de la PR en español, diciendo qué cambia.

## Antes de crear un caso

Busca si ya existe uno parecido (`grep -ril "<palabra>" casos/`). Si existe, dilo y propón editarlo en vez de crear otro. Si no está claro en qué área va, pregunta.

## Dónde va y cómo se llama

`casos/<área>/<name>/SKILL.md`. Áreas y prefijo obligatorio del `name`:

| Área | Prefijo |
| --- | --- |
| alojamiento | `aloj-` |
| entradas-y-parques | `ent-` |
| ferris | `ferri-` |
| vuelo-y-hotel | `vh-` |
| cambios-y-cancelaciones | `camb-` |
| pagos-y-facturas | `pago-` |
| viajeros-y-datos | `viaj-` |
| documentacion-y-bonos | `doc-` |
| otras | `otra-` |

`name`: minúsculas, números y guiones sueltos (nunca `--`), máximo 64 caracteres, igual que el nombre de su carpeta.

## Formato exacto

```markdown
---
name: aloj-ejemplo-de-caso
description: El cliente … (una frase que diga cuándo aplica)
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

1-3 frases.

## Qué hace el agente

1. Paso, nombrando la acción entre comillas invertidas: `verificar-identidad`.
2. …

## Qué no hace

- …

## Cuándo pasa a una persona

- …

## Cómo lo puede pedir el cliente

- «frase literal del cliente»
```

Copia el formato de un caso existente del área antes de escribir.

## Reglas del contenido

- `modo`: `autonomo` (lo resuelve solo), `copiloto` (prepara la respuesta y la revisa booking) o `persona` (lo pasa a booking). `persona` es obligatorio si hay dinero de por medio, excepciones a las condiciones, quejas formales o datos de otra persona, y entonces usa `crear-ticket-booking`.
- Solo acciones que existan en `acciones/`. Toda acción nombrada en el texto va en `metadata.acciones`. Si se usan datos de la reserva, `verificar-identidad` va primero.
- Nunca nombres de empresas o marcas reales, teléfonos, emails, URLs, precios, porcentajes ni plazos concretos: el dato lo da una acción.

## Antes de abrir la PR

```bash
npm ci
npm run validar
```

Si falla, corrígelo. No abras la PR con la validación en rojo. En la descripción de la PR cuenta en dos líneas qué has cambiado y por qué.
