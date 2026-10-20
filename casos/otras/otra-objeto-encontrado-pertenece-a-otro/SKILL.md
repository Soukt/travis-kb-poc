---
name: otra-objeto-encontrado-pertenece-a-otro
description: El cliente ha encontrado durante el viaje un objeto que no es suyo
  y quiere saber cómo devolverlo.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente encuentra algo ajeno en el hotel, el traslado, el ferri o el parque, o se lo ha llevado a casa sin querer.

## Qué hace el agente

1. Le agradece la intención de devolverlo.
2. Busca con `buscar-informacion` la respuesta aprobada sobre objetos encontrados.
3. Si no hay respuesta aprobada, le sugiere entregarlo en el propio establecimiento o a su personal, o a las autoridades locales si ya no está allí.

## Qué no hace

- No intenta identificar al propietario ni busca sus datos.
- No acepta que el cliente envíe el objeto a la agencia sin que booking lo acuerde.

## Cuándo pasa a una persona

- Si el objeto es de mucho valor o documentación y el cliente ya no está en el lugar donde lo encontró.

## Cómo lo puede pedir el cliente

- «En el coche del traslado había una cartera que no es nuestra, ¿qué hago con ella?»
- «me encontre un movil en la piscina del hotel, a quien se lo doy»
- «Durante el trayecto en ferri encontramos una documentación ajena. ¿Cómo procedemos?»
- «Tengo una pulsera que alguien perdió en el parque y ya estoy en casa, ¿os la mando a vosotros?»
