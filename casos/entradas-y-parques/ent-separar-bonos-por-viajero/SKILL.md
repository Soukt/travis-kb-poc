---
name: ent-separar-bonos-por-viajero
description: El cliente tiene un único bono para todo el grupo y pide bonos
  separados porque entrarán al parque en momentos distintos.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica a grupos o familias que no llegarán juntos al parque o que se separan durante la visita. Que se pueda separar depende del proveedor de las entradas.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` los viajeros y las entradas de la reserva.
3. Revisa con `consultar-bonos` si el bono es único o ya incluye códigos individuales.
4. Comprueba con `consultar-condiciones-entrada` si el acceso admite entrar por separado con un bono de grupo.
5. Prepara la respuesta o la petición al proveedor para que booking la revise antes de enviarla.

## Qué no hace

- No promete que se puedan emitir bonos individuales.
- No reenvía el bono a los acompañantes.

## Cuándo pasa a una persona

- La separación implica una reemisión con coste o el proveedor no la admite y el cliente insiste.

## Cómo lo puede pedir el cliente

- «Somos un grupo y vamos a llegar en horas diferentes. ¿Podéis hacer una entrada para cada uno?»
- «mi marido entra mas tarde con el pequeño, puede entrar sin mi si el bono es uno solo?»
- «Solicitamos, si es posible, bonos individuales para cada viajero de la reserva.»
- «el bono va todo junto, como entramos si nos separamos? y la piscina del hotel abre por la mañana?»
