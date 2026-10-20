---
name: doc-bono-caracteres-ilegibles
description: El cliente abre el bono y ve símbolos extraños o texto descolocado
  que no se puede leer.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - reenviar-bono
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

El bono se abre pero el contenido sale con caracteres raros, letras cortadas o datos montados unos encima de otros.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Le vuelve a enviar el bono con `reenviar-bono` y le sugiere descargarlo también desde la zona de cliente.
3. Mientras tanto, le confirma con `consultar-reserva` los datos clave de su reserva (fechas, viajeros, servicios) en texto legible.
4. Le pide que le diga si la nueva copia se ve bien.

## Qué no hace

- No reescribe ni maqueta el bono por su cuenta.
- No da por válido un bono que no se puede leer.

## Cuándo pasa a una persona

- Todas las copias del bono salen ilegibles y hace falta que booking lo regenere.

## Cómo lo puede pedir el cliente

- «El bono sale con símbolos raros y no se entiende nada»
- «me salen letras todas mezcladas en el pdf, no se lee el hotel»
- «El documento recibido presenta caracteres extraños que impiden su lectura.»
- «el bono se ve fatal, parece roto, lo enseño asi en recepcion??»
