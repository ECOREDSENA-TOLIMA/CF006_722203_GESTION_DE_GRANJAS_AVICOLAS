<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Describe la importancia de la bioseguridad y su papel fundamental en la producción en dichas empresas, esto solo si se tiene en cuenta la normatividad vigente, tales como: leyes, decretos y resoluciones de las diferentes entidades relacionadas con el sector pecuario y avícola.
    p.mb-5 Adicionalmente también se exponen los conceptos y aspectos básicos a tener en cuenta cuando se hace gestión de una empresa avícola, tales como: 

    .col-xl-8.mx-auto
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
