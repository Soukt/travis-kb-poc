---
name: ferri-acceso-y-salida-del-camarote
description: El cliente quiere saber cuándo podrá entrar en el camarote tras
  embarcar y cuándo tiene que dejarlo antes de llegar.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente tiene camarote en un trayecto largo o nocturno y quiere organizar el descanso o la llegada.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el camarote contratado y los horarios del trayecto.
3. Busca con `buscar-informacion` las normas aprobadas de entrega y desalojo del camarote.
4. Responde con lo que diga la información aprobada.

## Qué no hace

- No inventa horarios de entrega ni de desalojo.
- No promete quedarse en el camarote hasta el desembarque.

## Cuándo pasa a una persona

- El cliente necesita permanecer en el camarote por un motivo de salud.

## Cómo lo puede pedir el cliente

- «¿Nada más embarcar podemos ir al camarote?»
- «a q hora nos echan del camarote por la mañana?»
- «Disculpe, ¿hay que desalojar el camarote antes de llegar a puerto?»
- «Llegamos de madrugada, ¿podemos quedarnos en el camarote hasta que bajen los coches?»
