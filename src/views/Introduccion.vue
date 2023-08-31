<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-right") Describe la importancia de la bioseguridad y su papel fundamental en la producción en dichas empresas, esto solo si se tiene en cuenta la normatividad vigente, tales como: leyes, decretos y resoluciones de las diferentes entidades relacionadas con el sector pecuario y avícola.
    p.mb-5(data-aos="fade-right") Adicionalmente también se exponen los conceptos y aspectos básicos a tener en cuenta cuando se hace gestión de una empresa avícola, tales como: 

    .col-xl-8.mx-auto.mb-5(data-aos="fade-right")
      .tarjeta.color-acento-contenido.p-5
        .row.justify-content-around.align-items-center
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    | Plan de Ordenamiento Territorial (POT). 
                  li 
                    i.fas.fa-check
                    | Seguridad y salud en el trabajo.
                  li 
                    i.fas.fa-check
                    | Planeación de cronogramas de bioseguridad, limpieza y desinfección.
                  li 
                    i.fas.fa-check
                    | Procedimientos estandarizados de saneamiento.
                  li 
                    i.fas.fa-check
                    | Insumos pecuarios.
                  li 
                    i.fas.fa-check
                    | Bienestar animal.
                  li 
                    i.fas.fa-check
                    | Alojamiento de aves.
    
    figure.mt-5.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/iGo5eRtorT8" title="Conceptos y normatividad de bioseguridad en granjas avícolas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
