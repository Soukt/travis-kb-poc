---
name: aloj-admite-llegada-tarde
description: El cliente va a llegar tarde o de noche y quiere saber si el
  alojamiento le permite hacer la entrada a esa hora.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente prevé llegar fuera del horario habitual y pregunta si podrá entrar. Si además pide que se avise al alojamiento, aplica el aviso de llegada tarde.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba la fecha de llegada y el alojamiento con `consultar-reserva`.
3. Consulta con `consultar-horarios-hotel` si el alojamiento admite llegada tarde y hasta cuándo atiende la recepción.
4. Explica lo que indica el alojamiento y, si conviene avisar, le ofrece tramitar el aviso.

## Qué no hace

- No asegura que haya alguien en recepción si la acción no lo confirma.
- No da instrucciones de acceso que no procedan del alojamiento.

## Cuándo pasa a una persona

- El alojamiento no admite llegada tarde y el cliente no puede adelantar su llegada.
- La información de horarios no está disponible.

## Cómo lo puede pedir el cliente

- «Buenas noches, llegaremos bastante tarde, ¿habrá problema para entrar en el hotel?»
- «llegamos de madrugada, nos abren?»
- «Hola, el vuelo aterriza muy tarde, la recepción sigue abierta tan tarde o cómo hacemos»
- «Quería saber si el alojamiento permite hacer la entrada por la noche.»
