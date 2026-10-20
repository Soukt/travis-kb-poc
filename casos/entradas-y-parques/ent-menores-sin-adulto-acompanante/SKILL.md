---
name: ent-menores-sin-adulto-acompanante
description: El cliente pregunta si unos menores de su reserva pueden entrar al
  parque o a un espectáculo sin un adulto.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando parte del grupo son menores que irían solos o con otro menor. Es delicado porque afecta a la seguridad de menores.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` los viajeros y sus edades.
3. Revisa con `consultar-condiciones-entrada` la edad mínima para acceder sin adulto y si se exige autorización.
4. Prepara una respuesta con lo que dicen las condiciones para que booking la revise antes de enviarla.

## Qué no hace

- No autoriza el acceso de menores solos.
- No redacta autorizaciones en nombre de los padres.

## Cuándo pasa a una persona

- Los menores no cumplen las condiciones y el cliente pide una alternativa o un cambio de entradas.

## Cómo lo puede pedir el cliente

- «Mis hijos adolescentes quieren ir solos al parque un día. ¿Pueden entrar sin nosotros?»
- «los chavales pueden entrar solos o tiene q ir un adulto?»
- «Buenas tardes, ¿se necesita autorización firmada para que los menores accedan al parque sin sus padres?»
- «yo no voy a entrar, mi hija y su amiga si, hay algun problema?»
