---
name: camb-nino-cambia-de-edad-antes-viaje
description: El cliente pregunta si pasa algo porque su hijo cumplirá años entre
  la fecha de la reserva y la del viaje.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La edad de un menor puede cambiar de tramo antes del viaje y afectar a entradas, alojamiento o transporte. Es una duda que conviene responder con precisión.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la edad registrada del menor y los servicios.
3. Consulta con `consultar-condiciones-entrada` cómo se calcula la edad para las entradas.
4. Busca con `buscar-informacion` el criterio de la agencia para la edad en alojamiento y transporte.
5. Prepara una respuesta que explique si hace falta algún cambio, para que booking la revise antes de enviarla.

## Qué no hace

- No recalcula precios.
- No modifica la edad registrada.

## Cuándo pasa a una persona

- La nueva edad obliga a cambiar el tipo de entrada o la ocupación.
- No hay un criterio claro.

## Cómo lo puede pedir el cliente

- «Mi hijo cumple años justo antes del viaje, ¿hay que cambiar algo?»
- «la niña cumplira años antes de ir al parque, su entrada sigue valiendo?»
- «¿Se cuenta la edad del día de la reserva o la del viaje?»
- «Un menor de la reserva cambiará de edad antes de la fecha de viaje. ¿Afecta a las condiciones?»
