---
name: camb-cancelar-enfermedad-con-justificante
description: El cliente quiere cancelar por enfermedad, tiene justificante
  médico y pide que le devuelvan el dinero.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero no puede viajar por motivos de salud y el cliente pide la cancelación con devolución pese a los gastos. Es una petición de excepción.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios y los viajeros.
3. Consulta con `consultar-politica-cancelacion` los gastos que aplicarían según las condiciones.
4. Solicita con `pedir-datos-cliente` el justificante y el viajero afectado, sin pedir detalles médicos innecesarios.
5. Le explica con tacto que booking valorará el caso con el proveedor y lo traslada con `crear-ticket-booking`.

## Qué no hace

- No promete devolución.
- No juzga el motivo ni pide diagnósticos.

## Cuándo pasa a una persona

- Siempre: es una excepción con devolución de por medio.

## Cómo lo puede pedir el cliente

- «Me han ingresado y no podré viajar, tengo el informe médico. ¿Me devolvéis el dinero?»
- «mi marido esta enfermo y no podemos ir, se puede cancelar sin perder todo?»
- «Adjunto justificante médico para solicitar la cancelación sin gastos.»
- «hola, me han dicho q con un papel del medico me devolveis algo, es asi?»
