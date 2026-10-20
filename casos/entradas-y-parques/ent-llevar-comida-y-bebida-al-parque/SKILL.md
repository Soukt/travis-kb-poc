---
name: ent-llevar-comida-y-bebida-al-parque
description: El cliente quiere saber si puede entrar al parque con comida,
  bebida u otros objetos y qué está prohibido.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente prepara la mochila para la visita y quiere evitar problemas en el control de acceso.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Revisa con `consultar-condiciones-entrada` si las entradas recogen normas sobre comida, bebida u objetos.
3. Busca con `buscar-informacion` las respuestas aprobadas sobre objetos permitidos y prohibidos en el parque.
4. Responde con las normas encontradas y aclara lo que no consta.

## Qué no hace

- No inventa normas del parque.
- No asegura que el control de seguridad acepte algo que no figura como permitido.

## Cuándo pasa a una persona

- El cliente quiere reclamar porque le retiraron objetos en el acceso.

## Cómo lo puede pedir el cliente

- «¿Se pueden llevar bocadillos al parque?»
- «podemos meter agua y la nevera pequeña?»
- «Buenas tardes, ¿qué objetos están prohibidos en el acceso al parque?»
- «dejan entrar con palo selfie? y botellas de cristal?»
