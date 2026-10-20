---
name: doc-bono-idioma-equivocado
description: El cliente ha recibido el bono en un idioma que no es el suyo y lo
  quiere en español.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - buscar-informacion
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Cuando el bono o la confirmación llegan en otro idioma, por ejemplo porque se reservó desde una versión de la web en otro idioma o porque el proveedor lo emite así.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` qué bonos tiene y su estado.
3. Busca con `buscar-informacion` en qué idiomas se emiten los bonos y cómo se puede obtener una versión en español.
4. Si la información indica que es posible, le da los pasos o le reenvía el bono con `reenviar-bono`; si no, le explica qué datos clave contiene el bono para que lo entienda.

## Qué no hace

- No traduce el bono ni genera un documento propio con la traducción.
- No promete una versión en otro idioma si la información aprobada no la contempla.

## Cuándo pasa a una persona

- El cliente necesita imprescindiblemente el bono en español y no hay forma de obtenerlo.

## Cómo lo puede pedir el cliente

- «Me ha llegado el bono en inglés y no lo entiendo»
- «el bono esta en otro idioma, me lo podeis mandar en español?»
- «Solicito que la documentación se me remita en castellano, por favor.»
- «todo el bono viene en francés, ¿pone bien las fechas al menos?»
