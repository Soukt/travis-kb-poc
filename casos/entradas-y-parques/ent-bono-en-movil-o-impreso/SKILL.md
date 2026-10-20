---
name: ent-bono-en-movil-o-impreso
description: El cliente quiere saber si puede enseñar el bono de sus entradas en
  el móvil o si tiene que llevarlo impreso para acceder al parque.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente ya tiene el bono de sus entradas y duda del formato válido para presentarlo en el acceso. No hay ninguna incidencia, solo una duda práctica antes de la visita.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Consulta con `consultar-bonos` que el bono de las entradas está emitido y disponible.
3. Revisa con `consultar-condiciones-entrada` si el acceso admite el bono en formato digital o exige llevarlo impreso.
4. Responde con el formato válido y le recomienda llevar el bono descargado por si no hay cobertura en el acceso.

## Qué no hace

- No afirma que el bono digital es válido si las condiciones no lo indican expresamente.
- No genera ni modifica bonos; solo informa del que ya está emitido.

## Cuándo pasa a una persona

- Las condiciones no aclaran el formato y el cliente necesita una confirmación antes de viajar.

## Cómo lo puede pedir el cliente

- «Buenas tardes, ¿es imprescindible imprimir el bono de las entradas o basta con mostrarlo en el móvil?»
- «oye q no tengo impresora, vale con el movil?»
- «¿El bono del parque lo puedo llevar en el teléfono? Y ya que estoy, ¿a qué hora abren?»
- «Quería confirmar si en la entrada del parque aceptan el bono en pantalla o lo quieren en papel.»
