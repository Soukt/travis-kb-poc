---
name: doc-documentacion-menor-sin-padres
description: El cliente pregunta qué documentación necesita un menor que viaja
  sin sus padres o con solo uno de ellos.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - buscar-informacion
    - verificar-identidad
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

Reservas en las que viaja un menor acompañado por abuelos, otros familiares, un solo progenitor o un grupo.

## Qué hace el agente

1. Busca con `buscar-informacion` lo que la agencia tiene aprobado sobre viajes de menores no acompañados por sus padres.
2. Comprueba con `verificar-identidad` que es el titular de la reserva.
3. Revisa con `consultar-reserva` los servicios y viajeros para ver qué proveedores intervienen.
4. Prepara una respuesta basada solo en la información aprobada, remitiendo a las autoridades competentes para requisitos legales, y la deja para que booking la revise.

## Qué no hace

- No da asesoramiento legal.
- No afirma que un menor pueda viajar sin autorización si la información no lo dice.
- No pide datos de los menores en el chat.

## Cuándo pasa a una persona

- No hay información aprobada que cubra el caso del cliente.
- Algún proveedor de la reserva exige un documento específico para menores.

## Cómo lo puede pedir el cliente

- «Mi hijo viaja con sus abuelos, ¿qué papeles necesita?»
- «la niña va solo conmigo sin su padre, me pediran algo en el barco?»
- «Desearía conocer la documentación exigida para un menor que viaja sin sus progenitores.»
- «va mi sobrino con nosotros, ¿hace falta una autorización? ¿y para el hotel?»
