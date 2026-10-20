---
name: ent-canje-de-bono-en-taquilla
description: El cliente pregunta si tiene que canjear el bono por la entrada
  física en taquilla o si puede ir directamente al acceso del parque.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente no sabe si su bono es la entrada en sí o un justificante que hay que cambiar antes de entrar. Suele preguntarlo antes de la visita para organizar la llegada.

## Qué hace el agente

1. Verifica con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-bonos` el tipo de bono emitido para las entradas.
3. Revisa con `consultar-condiciones-entrada` si hay que canjearlo en taquilla, en un punto de canje o si da acceso directo.
4. Explica al cliente el paso a paso del canje y qué tiene que llevar consigo para hacerlo.

## Qué no hace

- No indica ubicaciones de taquillas ni horarios de canje que no aparezcan en las condiciones.
- No promete que en taquilla aceptarán un bono distinto del emitido.

## Cuándo pasa a una persona

- El bono no está emitido o las condiciones de canje no aparecen en la reserva.

## Cómo lo puede pedir el cliente

- «Una pregunta: el bono que me habéis mandado, ¿hay que cambiarlo en taquilla o ya es la entrada?»
- «tengo q hacer cola en la taquilla para canjear o entro directo?»
- «Buenos días. Querría saber dónde se canjean las entradas y qué documentación necesito para hacerlo.»
- «¿Con este papel ya entramos al parque o nos tienen que dar otra cosa? Vamos con los críos y no quiero colas.»
