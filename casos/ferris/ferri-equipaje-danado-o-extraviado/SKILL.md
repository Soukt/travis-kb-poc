---
name: ferri-equipaje-danado-o-extraviado
description: El cliente ha entregado su equipaje a la naviera durante la
  travesía y al recogerlo estaba dañado o no aparece.
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

El equipaje estaba bajo custodia de la naviera, por ejemplo en una consigna o bodega de equipajes, y el cliente quiere reclamar.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma con `consultar-trayecto-ferri` el trayecto realizado.
3. Pide con `pedir-datos-cliente` la descripción del equipaje, el daño o la pérdida y si lo comunicó a la naviera.
4. Abre un caso con `crear-ticket-booking` con todo lo recogido.

## Qué no hace

- No promete indemnización ni la cuantifica.
- No reconoce responsabilidad de nadie.

## Cuándo pasa a una persona

- Siempre: es una reclamación con posible compensación económica.

## Cómo lo puede pedir el cliente

- «Mi maleta ha salido rota de la consigna del barco.»
- «no aparece una de nuestras maletas q dejamos en la zona de equipajes»
- «Quiero presentar una reclamación por el daño sufrido en mi equipaje durante el trayecto.»
- «Han perdido la bolsa con la ropa de los niños, ¿quién me lo paga?»
