<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Concesión de aguas

    .d-flex.flex-wrap.mb-5
      .col-xl-7.pe-xl-5.d-flex.flex-wrap.align-items-center.order-2.order-xl-1
        .cajon.color-acento-contenido.p-4.d-flex.flex-wrap(data-aos="fade-right")
          .col-md-11.ps-lg-4
            p La concesión de aguas es el proceso de autorización que otorga un ente oficial en este caso puede ser la Agencia Nacional de Licencias Ambientales ANLA o la Corporación Autónoma para la Defensa de la Meseta CDM según el departamento y municipio, para el correcto uso y manejo de aguas hídricas externas e internas y su disposición final. Según FENAVI (2020b) se trata de la autorización que se otorga a una persona natural o jurídica, pública o privada, para tener el derecho a usar o aprovechar las aguas públicas o sus cauces; ya sea aquellas que escurren por cauces naturales como: los ríos, quebradas o arroyos; o las que se encuentra estancadas en lagos, lagunas, charcas o embalses. Decreto-Ley 2811 de 1974 y artículo 2.2.3.2.5.3., Decreto 1076 de 2015.
      img.mb-4.mb-xl-0.col-xl-5.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema3/img-6.png" data-aos="fade-left" style="max-width: 500px")

    p.mb-5 En la implementación de una granja avícola biosegura se requiere la autorización de uso de una fuente hídrica, el uso de agua potable para los procesos productivos en todas las etapas de producción, los procesos de limpieza y desinfección de equipos y la desinfección de los utensilios e instalaciones de la granja.

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-6.mb-4
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src="@/assets/curso/temas/tema3/img-7.svg" data-aos="zoom-in-up" alt="")
      .col-md-6.mb-4.mb-md-0.movil.mt-0
        a.anexo.mb-5(href=("https://www.minambiente.gov.co/wp-content/uploads/2021/10/Decreto-2811-de-1974.pdf") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Decreto-Ley 2811 de 1974.

        a.anexo.mb-3(href=("http://www.ideam.gov.co/documents/11769/46844622/Dec+1076_2015.pdf/8c28b13e-0937-42bd-b4a2-4b99114f9362") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Decreto 1076 de 2015.
  
    .tarjeta.tarjeta--azul2.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Solicitud
            p Para realizar la solicitud es necesario diligenciar el Formato Único Nacional de Solicitud de Concesión de Aguas, se debe cancelar por el servicio de evaluación de las fuentes hídricas que se van a utilizar en los procesos productivos en la avicultura.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-8.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Formato
            p En el formato se deben registrar los datos del solicitante diferenciando si es persona natural, jurídica, pública o privada, debe contener la información general del predio, información de la fuente de abastecimiento, el uso para el cual se solicita, la documentación que se debe anexar y las firmas y fechas correspondientes.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-9.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Permiso
            p El permiso es la autorización que la entidad competente le da al solicitante para hacer uso del agua, para beneficio de su producción avícola. Para obtener un permiso de concesión de aguas se debe tener en cuenta el uso y se otorgará según la prioridad del mismo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-10.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Usos
            p Para las granjas avícolas bioseguras, se tendrán en cuenta los usos agropecuarios comunitarios e individuales para la salud y bienestar de los animales, así como para garantizar procesos de higiene y desinfección. Es esencial que las aguas residuales tengan un tratamiento final, para prevenir la contaminación.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-11.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Entidades competentes
            p Según (Fenavi, 2014) las Corporaciones Autónomas Regionales son las entidades competentes para otorgar la concesión de aguas, hacer evaluación y seguimiento en los municipios que conforman su jurisdicción y el acto administrativo por medio del cual se otorga la concesión de aguas por medio de una resolución.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-12.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Normativa
            p En el proceso de concesión de agua para productores avícolas, se deben seguir los parámetros técnicos establecidos por la normativa ambiental vigente. Existen leyes, decretos y resoluciones, así como un diagrama de flujo y un video tutorial para facilitar los trámites en línea, brindando orientación a los productores.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-13.png', alt='Texto que describa la imagen')

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-6.mb-4
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src="@/assets/curso/temas/tema3/img-14.svg" data-aos="zoom-in-up" alt="")
      .col-md-6.mb-4.mb-md-0.movil.m-auto
        a.anexo.mb-5(href=("https://www.car.gov.co/vercontenido/1162") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p Enlace web. concesión de aguas superficiales en Colombia.

    .col-xl-10.mx-auto.mb-5
      .tarjeta.color-primario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/decorador-1.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Solicitud de permisos virtuales
                p.text-small Este video le permite conocer cómo se puede hacer el proceso de solicitud de permisos para el uso de recurso hídrico.

              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=6haI_G35ED0&t=419s')" target="_blank")
                  span Ver video
                  i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema3',
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
