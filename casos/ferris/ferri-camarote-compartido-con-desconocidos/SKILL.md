---
name: ferri-camarote-compartido-con-desconocidos
description: El cliente pregunta si su camarote es de uso exclusivo o si puede
  compartirlo con viajeros que no conoce.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente viaja solo o en grupo pequeño y el camarote contratado tiene más plazas que viajeros.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el tipo de camarote y si es de uso individual o compartido.
3. Busca con `buscar-informacion` cómo funcionan las plazas compartidas según la información aprobada.
4. Responde con claridad si el camarote es solo para su reserva o no.

## Qué no hace

- No promete uso exclusivo si el camarote es por plaza.
- No cambia el tipo de camarote.

## Cuándo pasa a una persona

- El cliente quiere pasar a un camarote de uso exclusivo.

## Cómo lo puede pedir el cliente

- «Viajo sola, ¿me pueden meter a alguien desconocido en el camarote?»
- «el camarote es solo pa nosotros o lo compartimos?»
- «Disculpe, ¿el camarote cuádruple se comparte con otros pasajeros si solo somos dos?»
- «me da cosa dormir con gente q no conozco, el camarote es privado?»
