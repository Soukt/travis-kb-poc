---
name: ent-menor-extraviado-en-el-parque
description: El cliente escribe angustiado porque ha perdido de vista a un menor
  de su grupo dentro del parque.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - buscar-informacion
    - verificar-identidad
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica en una urgencia en el sitio. Lo primero es que el cliente avise de inmediato al personal del parque, antes que cualquier gestión con la agencia.

## Qué hace el agente

1. Le indica de inmediato que avise al personal más cercano del parque o a los servicios de emergencia, sin esperar a completar trámites.
2. Busca con `buscar-informacion` si hay un procedimiento aprobado para menores extraviados en el parque y se lo transmite.
3. Una vez atendida la urgencia, comprueba con `verificar-identidad` que habla con el titular.
4. Abre con `crear-ticket-booking` una incidencia urgente para que booking haga seguimiento.

## Qué no hace

- No retrasa la indicación de avisar al personal del parque por verificar la identidad.
- No pide datos personales del menor por el chat.

## Cuándo pasa a una persona

- Siempre: es una urgencia que afecta a un menor.

## Cómo lo puede pedir el cliente

- «No encontramos a nuestro hijo en el parque, ¿qué hacemos?»
- «SOCORRO se ha perdido mi hija en el parque»
- «Necesito ayuda urgente, un menor de nuestro grupo se ha separado de nosotros.»
- «mi sobrino no esta, hace un rato estaba en la cola, ayuda»
