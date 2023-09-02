<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 18
      h1 Mortalidad 
    p.mb-5 Las aves muertas (FENAVI, 2018c)  se deben manejar muy bien para  “evitar impactos ambientales y riesgo sanitario, ya que un ave mal manipulada se convierte en foco de vectores para la propagación de enfermedades. Para esto el compostaje se constituye en una alternativa con mucha viabilidad para estabilizar residuos”, contribuyendo a la bioseguridad de la granja. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema18/img-82.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para la reducción de emisiones causada por la descomposición de subproductos orgánicos avícolas, se recomienda su estabilización, preferiblemente, por medio de técnicas de valorización como el compostaje. De este modo, aparte de reducir la emisión de olores se está generando valor al producir materia orgánica compostada que se puede usar para aplicar en suelos.
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 18.1 Protocolo de recolección 

    p El protocolo de recolección de aves muertas, inicia cuando el operario hace un recorrido diario por los galpones de la granja para verificar la mortalidad, si existen aves muertas, se deben desarrollar los siguientes pasos para compostar adecuadamente:

    .row.mb-5
      .col-md.mb-5.mb-sm-0
        ol.lista-ol
          li 
            span.text-bold 1. 
            | Organizar una capa de 20 cm de pollinaza/gallinaza.
          li 
            span.text-bold 2. 
            | Hacer corte de las patas.
          li 
            span.text-bold 3. 
            | Introducir las patas en la cavidad abdominal.
          li 
            span.text-bold 4. 
            | Ubicar las capas de las aves a 15 cm de las paredes.
          li 
            span.text-bold 5. 
            | Hacer el humedecimiento de las aves.
          li 
            span.text-bold 6. 
            | Hacer el humedecimiento de las aves.
          li 
            span.text-bold 7. 
            | Esperar 30 días después de colocada la última ave.
          li 
            span.text-bold 8. 
            | Realizar el primer volteo y luego hacerlo periódicamente.
          li 
            span.text-bold 9. 
            | 30 días después del volteo realizar la evacuación final usando una zaranda para apartar carcaza y plumas.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 18.2 Prácticas de posición 

    p.mb-5 Las prácticas de disposición de la mortalidad deben hacerse en una caseta para compostaje, la cual debe estar ubicada en una zona alejada del área de producción para evitar la contaminación del galpón por corrientes de aire o paso de personal.     

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 11.
        span <em>Manejo de la mortalidad</em>
      img.d-md-block(src="@/assets/curso/temas/tema17/img-81.svg" data-aos="fade-left")
          
    p La zona destinada para la estructura debe contar con:
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Buena ventilación. 
      li 
        i.lista-ul__vineta
        | Evitar la obstaculización por paredes y arbustos.
      li 
        i.lista-ul__vineta
        | No debe estar cerca de fuente de agua.  
      li 
        i.lista-ul__vineta
        | Se debe elegir una distribución para facilitar la aireación.
      li 
        i.lista-ul__vineta
        | Evite el humedecimiento del material. 
      li 
        i.lista-ul__vineta
        | Facilite el acopio de la pollinaza o gallinaza a utilizar.
      li 
        i.lista-ul__vineta
        | Las paredes deben estar marcadas y los cajones numerados. 

    p La estructura debe contener:
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Cajones de 1,5 m de ancho por 1,6 m de altura.
      li 
        i.lista-ul__vineta
        | El techo debe estar a una altura entre los 2,2 m y 2,5 m.
      li 
        i.lista-ul__vineta
        | Debe tener un alero mínimo de un metro.  
      li 
        i.lista-ul__vineta
        | El piso debe ser de cemento.
      li 
        i.lista-ul__vineta
        | El borde es de 20, 3 cm y una pendiente de 3%.
      li 
        i.lista-ul__vineta
        | Las zanjas perimetrales deben direccionar las aguas lluvias. 
      li 
        i.lista-ul__vineta
        | El procedimiento de llenado debe seguir los pasos del protocolo de recolección y para el manejo que se le da al material se debe tener en cuenta los pasos del proceso de sanitización. 

    .col-xl-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 12.
        span <em>Disposición final de aves muertas</em>
      img.d-md-block(src="@/assets/curso/temas/tema18/img-83.svg" data-aos="fade-right")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 18.3 Compostaje 

    p.mb-5 Según FENAVI (2019b) la compostación es un “proceso obtenido de manera natural por descomposición aeróbica (con oxígeno) de residuos orgánicos como restos vegetales, animales y excremento, por medio de la reproducción masiva de bacterias aerobias termófilas que están presentes en forma natural en cualquier lugar”. (p. 34). 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 18.4 Técnicas de manejo 

    p Las técnicas de manejo de las aves muertas son: 

    .row
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | <strong>Fosas de desecho:</strong> son de bajo costo de excavación y tiende a producir poco olor, pero es depósito de enfermedades, por lo que se requiere un sistema de drenaje adecuado, aquí cabe aclarar que produce contaminación del agua. 
          li 
            i.fas.fa-check
            | <strong>Incineración:</strong> es una técnica que no contamina el agua del suelo, evita contaminación cruzada y deja poco subproducto para retirar de la granja. Tiene la desventaja de ser costoso, produce polución del aire y se debe asegurar que las carcasas estén completamente quemadas hasta convertirse en cenizas. 
          li 
            i.fas.fa-check
            | <strong>Compostaje:</strong> es una técnica de manejo más usada por lo que es de bajo costo, no contamina el agua ni el suelo y es amigable con el medio ambiente.  










</template>

<script>
export default {
  name: 'Tema18',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
