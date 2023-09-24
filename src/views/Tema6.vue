<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Normatividad para granjas avícolas bioseguras

    p.mb-5 En Colombia se han expedido leyes, decretos y resoluciones como se muestra en el punto anterior, con el objeto de reglamentar la producción avícola con procesos de bioseguridad, por otro lado, desde el Instituto Colombiano Agropecuario ICA, se han establecido parámetros y procedimientos técnicos, que son de cumplimiento obligatorio para todas las granjas avícolas del país con el fin de ser certificadas como bioseguras, como se muestra a continuación:

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Registro productor de material genético aviar y licencias de venta de material genético aviar
    p.mb-5 La Resolución 3650, (2014) establece los “requisitos para el registro como productor de material genético aviar y expedición de licencias de venta de material genético aviar” (p.1), dando importancia a la necesidad de controlar, coordinar, prevenir, y erradicar la aparición de enfermedades que afecten el material genético aviar que puedan evitar la expedición de licencias de venta del mismo. 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Certificación de granjas avícolas bioseguras de postura y/o levante
    p.mb-5 La Resolución 3651, (2014) establece los “requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones” (p.1)., en dónde se da importancia a la certificación con fines comerciales teniendo en cuenta la organización de la granja a nivel de infraestructura, planes sanitarios y requerimientos que los productores deben cumplir para obtener el certificado y mejorar la producción y calidad con procedimientos que fortalezcan el sistema de bioseguridad de la granja.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Certificación granjas avícolas bioseguras de pollo de engorde 
    p.mb-5 En la Resolución 3652, (2014) se establecen “requisitos para la certificación de granjas avícolas bioseguras de pollo y se dictan otras disposiciones” (p.1). Dando importancia a los procesos de bioseguridad en la producción de pollo de engorde, para que cumplan con parámetros técnicos que orientan a los productores en cuanto a documentación y registros a utilizar, estos también dan cuenta sobre la implementación de infraestructura adecuada y en los requerimientos para certificarse ante la entidad competente.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Registro Sanitario de Predio Pecuario - RSPP
    p La Resolución 090464, (2021) establece el Registro Sanitario de Predio Pecuario RSPP y destaca la diferencia que se hace de predio pecuario y predio avícola en la “producción y/o comercialización de aves incluidas las de traspatio”, y establece los requisitos de expedición, cancelación, modificación del RSPP y las obligaciones que contrae el titular del predio. 
    p.mb-5 Para ampliar la información, acceder a la línea de tiempo que se muestra a continuación donde se analizan las normas existentes.

    h2 Normatividad granjas avícolas bioseguras
    p.mb-5 A continuación, se mencionan los grandes hitos en temas de normatividad del sector avícola en Colombia. 

    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario
          p.text-small(numero="2005" titulo="Resolución 5109 de 2005") Requisitos de rotulado y etiquetado.
          
          p.text-small(numero="2007" titulo="Resolución 789 de 2007") Manejo de insumos, sustancias químicas y biológicas de uso pecuario.
          
          p.text-small(numero="2013" titulo="Resolución 1382 de 2013") Límites máximos para residuos de medicamentos veterinarios.
          
          p.text-small(numero="2014" titulo="Resolución 2087 de 2014") Protocolo para el monitoreo, control, y vigilancia de olores ofensivos.
          
          p.text-small(numero="2014a" titulo="Resolución 0754 de 2014") Planes de gestión integral de residuos sólidos.

          p.text-small(numero="2014b" titulo="Resolución 3650 de 2014") Registro productor de material genético aviar y licencia de venta de materia genético aviar.

          p.text-small(numero="2014c" titulo="Resolución 3651 de 2014") Certificación de granjas avícolas bioseguras de postura y/o levante.

          p.text-small(numero="2014d" titulo="Resolución 3652 de 2014") Certificación granjas avícolas bioseguras de engorde.

          p.text-small(numero="2021" titulo="Resolución 490464 de 2021") Registro sanitario de predio pecuario- RSPP.

      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema6/img-30.svg" data-aos="fade-left")

    .row.align-items-center.mb-4(data-aos="fade-down-left")
      .col-md-6.mb-4
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src='@/assets/curso/temas/tema6/img-31.svg', alt='')
      .col-md-6.mb-4.mb-md-0.movil.m-auto
        a.anexo.mb-5(href=("https://www.ica.gov.co/getattachment/74c359e3-9201-4db9-849f-98ab5a9e2d0b/2021R90464.aspx") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Resolución 090464 (2021)


</template>

<script>
export default {
  name: 'Tema6',
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
