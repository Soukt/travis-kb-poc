---
name: otra-sorteo-premio-ganado-reclamar
description: El cliente dice haber ganado un sorteo o concurso de la agencia y
  pregunta cómo canjear el premio.
metadata:
  area: otras
  modo: persona
  acciones:
    - buscar-informacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ha recibido un aviso de premio a nombre de la agencia, legítimo o no, y quiere saber qué hacer.

## Qué hace el agente

1. Busca con `buscar-informacion` si hay alguna promoción o sorteo aprobado que coincida con lo que cuenta.
2. Si el aviso le llegó por un canal sospechoso o le piden pagar algo, le advierte que no facilite datos bancarios.
3. Recoge con `pedir-datos-cliente` cómo le comunicaron el premio y qué le pidieron.
4. Crea un ticket con `crear-ticket-booking` para que booking lo valide.

## Qué no hace

- No confirma que el premio exista ni su contenido.
- No pide datos bancarios.
- No canjea el premio.

## Cuándo pasa a una persona

- Siempre: implica un premio con valor económico que debe validar booking.

## Cómo lo puede pedir el cliente

- «Me han dicho que he ganado un viaje en un sorteo vuestro, ¿cómo lo canjeo?»
- «e ganado el concurso de redes, q tengo q hacer»
- «Les escribo porque se me ha comunicado que he resultado ganador de una promoción de la agencia.»
- «Me ha llegado un mensaje de que he ganado un premio y me piden pagar unos gastos de gestión, ¿es vuestro?»
