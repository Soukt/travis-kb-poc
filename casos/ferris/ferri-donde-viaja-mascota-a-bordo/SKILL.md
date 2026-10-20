---
name: ferri-donde-viaja-mascota-a-bordo
description: "El cliente pregunta dónde va su mascota durante la travesía: en el
  coche, en perreras, en el camarote o con él en cubierta."
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

La mascota ya está registrada en el trayecto y el cliente quiere saber cómo será el viaje para el animal.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` la modalidad contratada para la mascota y si viaja con vehículo.
3. Busca con `buscar-informacion` las normas aprobadas sobre dónde pueden estar los animales a bordo.
4. Explica dónde irá la mascota según su modalidad y qué zonas no puede usar.

## Qué no hace

- No asegura que la mascota pueda estar en zonas comunes si la información aprobada no lo dice.
- No cambia la modalidad contratada.

## Cuándo pasa a una persona

- El cliente quiere cambiar a una modalidad distinta, como un camarote que admita mascotas.

## Cómo lo puede pedir el cliente

- «¿Mi perro puede ir conmigo en la butaca o tiene que ir en una jaula?»
- «el perro se queda en el coche todo el viaje? me da pena»
- «Disculpe, ¿hay perreras a bordo y se puede visitar al animal durante la travesía?»
- «puedo sacar al perro a la cubierta a hacer pis? q el viaje es largo»
