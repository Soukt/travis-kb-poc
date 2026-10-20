---
name: ent-acceso-denegado-en-el-torno
description: El cliente está en el parque y el personal le niega la entrada
  aunque tiene su bono.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-condiciones-entrada
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el parque rechaza el acceso por un motivo distinto a un fallo de lectura: fecha, tipo de entrada, edad o un bono que considera no válido. Es urgente porque el cliente está en el sitio.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` la fecha y el tipo de entradas contratadas.
3. Revisa con `consultar-bonos` que el bono está emitido y vigente.
4. Comprueba con `consultar-condiciones-entrada` si el motivo que da el parque encaja con las condiciones.
5. Abre con `crear-ticket-booking` una incidencia urgente con el motivo del rechazo y lo comprobado.

## Qué no hace

- No discute el criterio del parque ni le da la razón al cliente sin comprobarlo.
- No ofrece reembolsos ni compensaciones.

## Cuándo pasa a una persona

- Siempre: un acceso denegado en el sitio lo gestiona booking con el proveedor.

## Cómo lo puede pedir el cliente

- «No nos dejan entrar al parque, dicen que la entrada no es para hoy.»
- «en la puerta nos dicen q el bono no vale, estamos con los niños esperando»
- «Solicito ayuda inmediata: el personal del parque nos ha denegado el acceso pese a tener el bono.»
- «nos han parado en el torno xq dicen q la entrada de mi hijo es de niño y ya es mayor, que hacemos»
