---
name: ferri-vehiculo-incluido-en-reserva
description: El cliente quiere confirmar que su coche está incluido en el
  billete de barco y que los datos del vehículo son correctos.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
  simulado: "true"
---
## Cuándo aplica

El cliente viaja con vehículo y quiere asegurarse, antes de ir al puerto, de que figura en la reserva con el tipo y la matrícula que indicó.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados.
3. Obtiene con `consultar-trayecto-ferri` el vehículo registrado en cada trayecto: tipo, categoría y matrícula.
4. Responde con los datos tal y como figuran y pide al cliente que compruebe que la matrícula es la correcta.

## Qué no hace

- No modifica los datos del vehículo.
- No confirma que un vehículo no registrado pueda embarcar.

## Cuándo pasa a una persona

- El vehículo no figura en el trayecto o sus datos no coinciden con los que da el cliente.

## Cómo lo puede pedir el cliente

- «¿Me podéis confirmar que el coche va incluido en el billete del barco?»
- «sale la matricula de mi coche en la reserva? es q no la veo»
- «Buenos días, desearía verificar el tipo de vehículo registrado en mi reserva de ferri.»
- «Hola, ¿el coche está metido en la reserva? Y ya que estoy, ¿a qué hora hay que estar en el puerto?»
