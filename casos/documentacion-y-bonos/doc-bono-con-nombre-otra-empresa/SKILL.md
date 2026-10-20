---
name: doc-bono-con-nombre-otra-empresa
description: El cliente ve en el bono el nombre de otra empresa y desconfía de
  si su reserva es legítima.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - buscar-informacion
    - verificar-identidad
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

Cuando el bono incluye el nombre de un proveedor o intermediario y el cliente no lo reconoce.

## Qué hace el agente

1. Busca con `buscar-informacion` la explicación aprobada sobre por qué los bonos pueden mostrar el nombre de un proveedor.
2. Comprueba con `verificar-identidad` que es el titular de la reserva.
3. Le confirma con `consultar-reserva` que la reserva está hecha con la agencia y su estado.
4. Le tranquiliza explicándole que el bono es válido y quién presta el servicio.

## Qué no hace

- No da detalles comerciales de la relación con proveedores más allá de la información aprobada.
- No pone en duda la validez del bono sin motivo.

## Cuándo pasa a una persona

- La reserva no aparece o el bono no corresponde a ninguna reserva del cliente.

## Cómo lo puede pedir el cliente

- «En el bono sale el nombre de otra empresa, ¿es una estafa?»
- «quien es esta empresa q sale en el bono? yo reserve con vosotros»
- «La documentación incluye la denominación de una entidad que desconozco.»
- «me da mala espina que el bono no ponga vuestro nombre, ¿es de fiar?»
