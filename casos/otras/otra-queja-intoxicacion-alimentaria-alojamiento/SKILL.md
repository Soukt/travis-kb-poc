---
name: otra-queja-intoxicacion-alimentaria-alojamiento
description: El cliente cuenta que él o algún viajero se puso enfermo por la
  comida del alojamiento y quiere reclamar.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Uno o varios viajeros han tenido síntomas tras comer en el alojamiento y el cliente quiere que conste o reclamar.

## Qué hace el agente

1. Se interesa primero por el estado de los viajeros y, si hay síntomas graves, le indica que acuda a los servicios médicos o de emergencia.
2. Verifica la titularidad con `verificar-identidad`.
3. Consulta con `consultar-reserva` el alojamiento, las fechas y el régimen contratado.
4. Recoge qué comieron, cuándo, cuántos viajeros están afectados y si tienen informe médico, y crea un ticket prioritario con `crear-ticket-booking`.

## Qué no hace

- No da consejos médicos.
- No afirma que la causa sea la comida del hotel.
- No promete indemnización.

## Cuándo pasa a una persona

- Siempre: afecta a la salud de los viajeros y puede derivar en reclamación.

## Cómo lo puede pedir el cliente

- «Toda la familia ha acabado con gastroenteritis después de cenar en el bufé del hotel.»
- «creo q nos intoxicamos con la comida del hotel, estamos fatal»
- «Les comunico que varios miembros del grupo han sufrido una intoxicación alimentaria en el alojamiento.»
- «Mi hijo está malísimo por algo que comió en el hotel, ¿puedo cancelar los días que quedan?»
