---
name: doc-boton-descarga-bono-falla
description: El cliente intenta descargar el bono desde la zona de cliente y le
  da un error o no pasa nada.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Cuando la descarga del bono falla, se queda cargando o abre una página en blanco.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` si los bonos están realmente disponibles o si el fallo se debe a que aún no se han emitido.
3. Si están disponibles, se los envía con `reenviar-bono` al email de la reserva como alternativa a la descarga.
4. Le sugiere probar desde otro navegador o dispositivo por si el problema es local.

## Qué no hace

- No promete que la web se vaya a arreglar en un momento concreto.
- No envía los bonos a otro email.

## Cuándo pasa a una persona

- Los bonos figuran como disponibles y el reenvío tampoco llega.
- El viaje es inminente y el cliente no ha podido obtener la documentación por ninguna vía.

## Cómo lo puede pedir el cliente

- «Le doy a descargar el bono y me sale un error»
- «el boton de descargar no hace nada!!»
- «Al intentar descargar la documentación aparece una página en blanco.»
- «no me deja bajar el pdf y salgo mañana de viaje, ayuda»
