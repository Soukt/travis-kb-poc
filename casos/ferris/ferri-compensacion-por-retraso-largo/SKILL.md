---
name: ferri-compensacion-por-retraso-largo
description: El cliente ha sufrido un retraso importante del barco y pide una
  compensación o la devolución de parte del billete.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El trayecto ya se ha realizado, o está en curso, con un retraso que el cliente considera compensable.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el trayecto y la información disponible sobre el retraso.
3. Pide con `pedir-datos-cliente` los gastos ocasionados y si tiene justificantes.
4. Abre un caso con `crear-ticket-booking` para que booking lo gestione con la naviera.

## Qué no hace

- No reconoce el derecho a compensación ni su importe.
- No da plazos de respuesta concretos.

## Cuándo pasa a una persona

- Siempre: es una reclamación económica.

## Cómo lo puede pedir el cliente

- «El barco salió con muchísimo retraso, ¿me corresponde alguna compensación?»
- «llegamos tardisimo por el ferri, quiero q me devolvais algo»
- «Por la presente solicito la compensación correspondiente al retraso sufrido en el trayecto de vuelta.»
- «Perdimos un día de vacaciones por el retraso y tuvimos que comer en el puerto, ¿me pagáis los gastos?»
