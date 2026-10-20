---
name: ent-codigo-qr-no-leido-acceso
description: El cliente está en el acceso del parque y el lector no reconoce el
  código del bono de sus entradas.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-bonos
    - reenviar-bono
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente está ya en el parque o a punto de entrar y el torno o el personal no consigue leer el código. Es una incidencia urgente que puede impedir la visita.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Revisa con `consultar-bonos` que el bono está emitido, vigente y corresponde a la fecha de hoy.
3. Reenvía el bono con `reenviar-bono` al email de la reserva por si la copia del cliente está dañada, y le sugiere subir el brillo de la pantalla o pedir que lo lean en taquilla.
4. Si sigue sin funcionar, abre con `crear-ticket-booking` una incidencia urgente con los datos del bono y lo que ocurre en el acceso.

## Qué no hace

- No promete que el parque le dejará entrar.
- No emite un bono nuevo ni ofrece compensaciones.

## Cuándo pasa a una persona

- El código sigue sin leerse tras el reenvío y las comprobaciones básicas.
- El personal del parque indica que el bono no es válido.

## Cómo lo puede pedir el cliente

- «Estamos en la puerta y el torno no lee el QR. ¿Qué hacemos?»
- «URGENTE no nos deja pasar, el codigo no funciona»
- «Buenos días, el personal del acceso dice que no reconoce el código del bono. Necesitamos ayuda ahora mismo.»
- «el lector da error con las entradas y la cola detras esta enorme, socorro»
