---
name: ent-justificante-para-el-seguro
description: El cliente necesita un justificante de la reserva o de los gastos
  de sus entradas para reclamar a su seguro de viaje.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente ha cancelado o perdido las entradas y su seguro le pide documentación. El documento lo revisa booking antes de enviarlo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` los servicios y su estado.
3. Revisa con `consultar-pagos` y `consultar-factura` los pagos y las facturas de las entradas.
4. Prepara el borrador del justificante con esos datos para que booking lo revise antes de enviarlo.

## Qué no hace

- No certifica hechos que no constan en la reserva.
- No envía documentos a la aseguradora directamente.

## Cuándo pasa a una persona

- El seguro pide un certificado con información que no está en la reserva.

## Cómo lo puede pedir el cliente

- «El seguro me pide un justificante de las entradas canceladas.»
- «necesito un papel para el seguro de q no fuimos al parque»
- «Buenos días, solicito un certificado de gastos de cancelación para presentar a mi aseguradora.»
- «me podeis hacer un documento con lo que he pagado y lo que he perdido? es para el seguro»
