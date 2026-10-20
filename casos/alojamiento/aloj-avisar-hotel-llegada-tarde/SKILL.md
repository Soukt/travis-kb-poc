---
name: aloj-avisar-hotel-llegada-tarde
description: El cliente pide que la agencia avise al alojamiento de que llegará
  más tarde de lo habitual para que no le anulen la habitación.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente sabe de antemano que llegará tarde y quiere dejar constancia ante el alojamiento. El agente prepara el aviso y booking lo revisa antes de enviarlo.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma el alojamiento, la fecha de llegada y los viajeros con `consultar-reserva`.
3. Comprueba con `consultar-horarios-hotel` si el alojamiento admite llegada tarde y en qué condiciones.
4. Redacta el aviso con la hora aproximada de llegada que indica el cliente y lo deja en `crear-ticket-booking` para que booking lo revise y lo envíe.
5. Informa al cliente de que el aviso queda en revisión y de que recibirá confirmación.

## Qué no hace

- No da por confirmado el aviso hasta que booking lo envíe y el alojamiento responda.
- No contacta directamente con el alojamiento.
- No modifica las fechas de la reserva.

## Cuándo pasa a una persona

- El alojamiento no admite llegada tarde y hay riesgo de perder la primera noche.
- El cliente pide además cambiar fechas o noches.

## Cómo lo puede pedir el cliente

- «Por favor, ¿pueden avisar al hotel de que llegaremos tarde por la noche?»
- «porfa decidle al hotel q llegamos tarde q no nos quiten la habitación»
- «Hola, vamos en coche y saldremos tarde del trabajo, podéis avisar al apartamento? Y otra cosa, hay parking?»
- «Les ruego comuniquen al establecimiento nuestra llegada a última hora.»
