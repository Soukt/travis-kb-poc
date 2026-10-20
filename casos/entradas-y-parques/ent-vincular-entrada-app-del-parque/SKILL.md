---
name: ent-vincular-entrada-app-del-parque
description: El cliente quiere saber si puede o debe vincular su entrada a la
  aplicación del parque y cómo hacerlo.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el parque tiene una aplicación propia para ver tiempos de espera, reservar atracciones o acceder, y el cliente no sabe si su entrada comprada en la agencia sirve en ella.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Comprueba con `consultar-bonos` qué código o referencia figura en el bono.
3. Revisa con `consultar-condiciones-entrada` si la entrada se puede vincular a la aplicación del parque o si es obligatorio hacerlo.
4. Busca con `buscar-informacion` si hay instrucciones aprobadas sobre la vinculación y se las da al cliente.

## Qué no hace

- No da instrucciones de la aplicación del parque que no estén aprobadas.
- No gestiona la cuenta del cliente en la aplicación del parque.

## Cuándo pasa a una persona

- La aplicación rechaza el código del bono y la vinculación es obligatoria para acceder.

## Cómo lo puede pedir el cliente

- «¿Puedo meter la entrada en la aplicación del parque para ver las colas?»
- «la app del parque me pide un numero de entrada y no se cual es»
- «Buenos días, ¿es obligatorio registrar las entradas en la aplicación oficial del parque antes de ir?»
- «intento añadir el bono en la app y me da error, lo necesito para entrar o no?»
