---
name: otra-mensaje-reserva-hecha-otra-empresa
description: El cliente pregunta por una reserva que en realidad hizo con otra
  empresa o directamente con el proveedor.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Los datos que aporta el cliente no corresponden a ninguna reserva de la agencia porque la contrató en otro sitio.

## Qué hace el agente

1. Intenta la verificación con `verificar-identidad` usando el localizador y el email que aporta.
2. Si la reserva no existe en la agencia, se lo explica con tacto.
3. Busca con `buscar-informacion` la respuesta aprobada para estos casos.
4. Le sugiere revisar el email de confirmación para identificar con quién reservó.

## Qué no hace

- No da información de reservas de otras empresas.
- No asume que la reserva es de la agencia solo porque el cliente lo diga.

## Cuándo pasa a una persona

- Si el cliente insiste y aporta un justificante de pago a la agencia.

## Cómo lo puede pedir el cliente

- «Tengo un vuelo reservado y no encuentro la reserva, ¿me la buscáis?»
- «este localizador es vuestro? no se donde lo compre»
- «Les escribo para consultar una reserva hecha directamente con el hotel.»
- «Compré las entradas en la web del parque y quería saber si vosotros me las podéis cambiar.»
