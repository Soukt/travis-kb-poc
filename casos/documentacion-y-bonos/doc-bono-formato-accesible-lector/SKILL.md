---
name: doc-bono-formato-accesible-lector
description: El cliente tiene una discapacidad visual y necesita la información
  del bono en un formato que pueda leer con su lector de pantalla.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente o quien le ayuda indica que el bono no es legible con herramientas de accesibilidad.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` qué bonos tiene emitidos.
3. Le da en texto plano los datos clave de su reserva con `consultar-reserva`: fechas, alojamiento, viajeros y servicios.
4. Busca con `buscar-informacion` si la agencia ofrece formatos accesibles y prepara la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No pide detalles sobre la discapacidad del cliente.
- No presenta su resumen en texto como si fuera el bono oficial.

## Cuándo pasa a una persona

- El cliente necesita un documento oficial en formato accesible para presentarlo en destino.

## Cómo lo puede pedir el cliente

- «Soy ciego y mi lector no lee el bono, ¿me podéis dar la información en texto?»
- «mi padre tiene poca vista y no puede leer el pdf, hay otra forma?»
- «Necesito la documentación en un formato compatible con lector de pantalla.»
- «el bono es una imagen y el móvil no me lo lee en voz alta, ¿qué hago?»
