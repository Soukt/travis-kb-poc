---
name: ferri-moto-embarque-y-amarre
description: El cliente viaja en moto y pregunta cómo se embarca, cómo se sujeta
  la moto en el garaje y qué hace con el casco y el equipaje.
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

El vehículo registrado en el trayecto es una moto y el cliente tiene dudas propias de este tipo de vehículo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma con `consultar-trayecto-ferri` que la moto figura en el trayecto y la hora de presentación.
3. Busca con `buscar-informacion` el procedimiento aprobado para motos: embarque, sujeción y qué se puede dejar en ella.
4. Responde con lo que diga la información aprobada.

## Qué no hace

- No da instrucciones técnicas de amarre propias.
- No asegura que se pueda dejar el equipaje en la moto si la información aprobada no lo dice.

## Cuándo pasa a una persona

- La moto no figura en el trayecto o lo hace con otra categoría de vehículo.

## Cómo lo puede pedir el cliente

- «Vamos en moto, ¿cómo se embarca? ¿La atan ellos o tengo que llevar mis cinchas?»
- «el casco lo dejo en la moto o me lo subo?»
- «Buenos días, viajo en motocicleta con maletas laterales. ¿Debo subirlas a la zona de pasaje?»
- «primera vez q meto la moto en un barco, hay q llegar antes q los coches?»
