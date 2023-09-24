<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Filtros sanitarios

    p Son estrategias de bioseguridad mediante barreras (baterías sanitarias, pediluvios, rodiluvios, o arcos de desinfección, etc.) cuyo propósito es frenar o impedir el ingreso o salida de patógenos en las unidades productivas que permiten disminuir el riesgo de diseminación de enfermedades en la zona.

    p Los establecimientos avícolas deben implementar un estricto control de bioseguridad que incluye filtros sanitarios regulados por parámetros que deben cumplirse al ingreso de la granja. Debe adicionalmente haber baños con duchas y ropa para dotar a los trabajadores y personas externas que ingresan al recinto avícola para desarrollar actividades.

    p.mb-5 Los vehículos que transportan pollos de un día de nacidos BB, insumos que requiere una granja para su funcionamiento y pollos a los centros de faena deben ser desinfectados y fumigados.  Por otra parte, dentro del filtro sanitario se necesita una caja de desinfección para el tema de equipos y materiales que se usan, entre otros, para inmunizar a la población avícola.

    Separador
    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.1 Clases 

    p En las granjas avícolas bioseguras es importante el uso las diferentes clases de filtros mencionados en el numeral anterior, además se encuentran los pediluvios, rodiluvios, arcos de desinfección, unidades sanitarias y cajas de desinfección, que ayudan prevenir el ingreso de patógenos y agentes infecciosos. La Resolución 2674 de2013 establece que:

    p "Cuando sea requerido, se deben implementar filtros sanitarios (lavas botas, pediluvios o instalaciones para limpieza y desinfección de calzado, lavamanos de accionamiento no manual y toallas desechables o secador de manos, aspiradoras de polvo y contaminación, etc.), debidamente dotados y provistos de sustancias desinfectantes en cantidad suficiente para impedir el paso de contaminación de unas zonas a otras".

    p.mb-5 En cualquier caso, se debe garantizar la limpieza y desinfección de manos de los operarios al ingreso de la sala de proceso o de manipulación de los productos.

    .row.align-items-center.mb-4(data-aos="fade-down-left")
      .col-md-6.mb-4
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src='@/assets/curso/temas/tema10/img-1.svg', alt='')
      .col-md-6.mb-4.mb-md-0.movil.m-auto
        a.anexo.mb-5(href=("http://www.suin-juriscol.gov.co/viewDocument.asp?id=30033811") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Resolución 2674, 2013

    Separador
    #t_10_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.2 Pediluvio

    p Es una estructura impermeable de plástico o cemento que contiene una sustancia desinfectante para el calzado de las personas. También puede estar constituido por una manta o tapete a la cual se agrega permanentemente una solución desinfectante. 

    p Por lo que es necesario que existan las siguientes zonas: un área de limpieza, una de desinfección y otra de secado. Sus dimensiones pueden variar de acuerdo al flujo de personas que ingresan; no obstante, una de las características que debe cumplir es que todas deben hacer uso del sistema; este también se utiliza para nombrar a pequeñas pozas que sirven para la desinfección de los zapatos y/o botas de todo el personal a la entrada de cualquier explotación pecuaria.

    p.mb-5 Por otro lado, un pediluvio según Fenavi (2014) es una poceta con una sustancia desinfectante, ubicada en un lugar estratégico antes de ingresar a áreas restringidas (p.100), el cual es utilizado en las granjas avícolas para la desinfección de las botas de los operarios y es un recipiente que contiene soluciones desinfectantes que generalmente se ubican a la entrada principal de la granja y a la entrada del galpón avícola. 

    Separador
    #t_10_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.3 Rodalubios 

    p.mb-5 Es un sistema de desinfección de neumáticos por inmersión parcial que consiste en una fosa de concreto que contiene la solución desinfectante por la cual pasa el vehículo. Como requerimiento mínimo se necesita que los neumáticos de los vehículos den dos vueltas completas para una correcta inmersión en la solución desinfectante.

    Separador
    #t_10_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.4 Arcos de desinfección

    p Es un sistema de desinfección de vehículos que se realiza mediante el paso a través de un arco de tubería metálica o plástica que pulveriza una solución desinfectante alrededor del mismo. 

    p.mb-5 Puede activarse y desactivarse automáticamente por medio de sensores, o manualmente por la acción de un operario. Un arco u otro sistema adecuado de desinfección debe implementarse en la entrada de la granja y de la planta de incubación, para que cumpla con la desinfección de los vehículos que ingresen, adicionalmente se debe usar una solución desinfectante con una concentración conocida y previamente establecida.
    
    Separador
    #t_10_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.5 Unidades sanitarias

    p.mb-5 Son básicamente los servicios sanitarios de duchas, lavamanos, sanitario y vestier, que se deben ubicar en el área sucia de la granja para que los operarios se cambien y se vistan con el uniforme de trabajo previamente lavado y desinfectado, generalmente tienen que ser unidades para hombres y otra unidad para mujeres.

    Separador
    #t_10_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 10.6 Cajas de desinfección

    p Las cajas de desinfección se utilizan como medio para colocar cámaras fotográficas, teléfonos y elementos que puedan causar una contaminación de tipo microbiológico.



</template>

<script>
export default {
  name: 'Tema10',
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
