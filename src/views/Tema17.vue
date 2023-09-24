<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 17
      h1 Sanitización y estabilización de la pollinaza y gallinaza
    
    p.mb-5 Según Fenavi (2014), la sanitización es un “proceso u operaciones físicas (tratamiento térmico), químicas o biológicas (compostaje) o mezcla de éstas, a los que se somete la gallinaza o pollinaza para garantizar la eliminación de agentes infectocontagiosos para las aves, otros animales y para los seres humanos, antes de ser retirada del galpón de origen. (p. 101).

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Sanitización y estabilización de la pollinaza y gallinaza

    p Según la guía rápida de (FENAVI, 2018c) la sanitización es el:
    p “Proceso térmico al que se debe someter la gallinaza y la pollinaza con el fin de reducir o eliminar la presencia de microrganismo patógenos generadores de enfermedades antes de que el material sea retirado de la granja o se reutilice” (p.1). 
    p.mb-5 La estabilización es la “transformación de la materia orgánica mediante procesos aeróbicos o anaeróbicos, en formas oxidadas más sencillas y estables” (p.99).

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema17/img-76.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En general, lo que busca el proceso es romper materiales orgánicos complejos de difícil asimilación o descomposición, en otros, más simples que pueden ser aprovechados, por ejemplo: el realizado por las plantas y el suelo agrícola.

    p.mb-5 Por otro lado, los procesos de acondicionamiento y estabilización de suelos a partir de la pollinaza y la gallinaza se usan para programas de fertilización agrícola, como se describe en la figura.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 9.
        span <em>Sanitización y estabilización</em>
      img.d-md-block(src="@/assets/curso/temas/tema17/img-77.png" data-aos="fade-left" alt="En la figura 9 se muestra la sanitización y estabilización.")
      figcaption Nota. Nota: Ciclo de producción de estabilizadores de suelo a partir gallinaza y pollinaza. Fuente: (FENAVI, 2018a).

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Parámetros 

    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/tema17/imagen.svg', alt='Texto que describa la imagen')

    p Según (FENAVI, 2018a) los dos parámetros principales en el proceso de estabilización a través del método de compostaje que deben ser tenidos en cuenta son:

    ul.lista-ul.mb-5.ms-md-3
      li 
        i.lista-ul__vineta
        | Temperatura.
      li 
        i.lista-ul__vineta
        | Aireación.

    //- img.mb-5(src="@/assets/curso/temas/tema17/img-79.svg" data-aos="fade-right")

    //- .titulo-segundo.color-acento-contenido(data-aos="fade-right")
    //-   h3 Técnicas de estabilización
    
    //- p La técnica recomendada para la estabilización de la gallinaza/pollinaza es el compostaje. 
    //- p.mb-5 El compostaje es el proceso de descomposición y transformación de los residuos orgánicos generados en la granja, como estiércol de aves, plumas, restos de alimentos y paja, en un producto final llamado compost. 

    //- img.mb-5(src="@/assets/curso/temas/tema17/img-80.svg" data-aos="fade-right")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Técnicas de sanitización

    p Según la guía rápida (FENAVI, 2018c) el procedimiento a seguir para desarrollar una adecuada sanitización es: 
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Homogeneizar la cama.
      li 
        i.lista-ul__vineta
        | Humedecer la cama y formar pilas.
      li 
        i.lista-ul__vineta
        | Cubrir con plástico.
      li 
        i.lista-ul__vineta
        | Medir diariamente la temperatura de las camas.
      li 
        i.lista-ul__vineta
        | Enfriar pilas.
      li 
        i.lista-ul__vineta
        | Empacar.
      li 
        i.lista-ul__vineta
        | Retirar el material. 
    
    //- .col-xl-10.mx-auto.mb-5
    //-   .titulo-sexto.color-acento-contenido(data-aos="fade-right")
    //-     h5 Figura 10.
    //-     span <em>Técnica para sanitizar</em>
    //-   img.d-md-block(src="@/assets/curso/temas/tema17/img-81.svg" data-aos="fade-left" alt="En la figura 10 se muestra un conjunto de microorganismos patógenos.")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Almacenamiento

    p La gallinaza/pollinaza sanitizada o estabilizada debe evitar el contacto con humedad y la contaminación con otros productos agrícolas.
    p Es muy importante que el agricultor utilice el 100% de la gallinaza/pollinaza estabilizada que adquiera lo más pronto posible o procurar el almacenado en un lugar protegido de la humedad y la luz solar. 




</template>

<script>
export default {
  name: 'Tema17',
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
