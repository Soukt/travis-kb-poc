---
name: doc-bono-pdf-no-abre
description: El cliente ha recibido el bono pero el archivo no se abre, sale en
  blanco o aparece como dañado.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - buscar-informacion
    - verificar-identidad
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

El cliente tiene el archivo del bono pero no consigue verlo en su móvil u ordenador.

## Qué hace el agente

1. Busca con `buscar-informacion` las recomendaciones aprobadas para abrir los documentos de la agencia.
2. Le da esas recomendaciones, por ejemplo abrirlo con otro visor o desde otro dispositivo.
3. Comprueba con `verificar-identidad` que es el titular de la reserva.
4. Le vuelve a enviar el bono con `reenviar-bono` por si el archivo se dañó en el primer envío, y le recuerda que también puede descargarlo desde la zona de cliente.

## Qué no hace

- No recomienda programas ni aplicaciones concretas que no estén en la información aprobada.
- No envía el bono a otro email.

## Cuándo pasa a una persona

- Tras el reenvío el archivo sigue sin abrirse en distintos dispositivos.

## Cómo lo puede pedir el cliente

- «El PDF del bono no se abre, me dice que está dañado»
- «me sale todo en blanco cuando abro el bono»
- «No consigo visualizar el documento adjunto en mi teléfono.»
- «el archivo no va, y ya que estoy, ¿el traslado está incluido?»
