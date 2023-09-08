<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Bioseguridad

    p Para definir bioseguridad se parte de su etimología de su “bio” que significa en griego vida y “seguridad” que significa protección, por tanto se relaciona con las acciones y medidas que ayudan a proteger la vida de los animales en las producciones pecuarias; según Fenavi (2014) la bioseguridad hace referencia a “todas aquellas medidas sanitarias y profilácticas, que tienen como objetivo proteger al hombre, animales y plantas de posibles riesgos generados por agentes biológicos, físicos, químicos y mecánicos que puedan afectar su salud y seguridad”(p. 115).

    p.mb-5 Por otro lado, según el decreto 2113, (2017) son “todas aquellas medidas sanitarias, procedimientos técnicos y normas de manejo que se aplican de forma permanente, con el propósito de prevenir la entrada y salida de agentes infecto contagiosos en la unidad de producción primaria” (p.1).

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-6.mb-4
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src="@/assets/curso/temas/tema4/img-15.svg" data-aos="zoom-in-up" alt="")
      .col-md-6.mb-4.mb-md-0.movil.m-auto
        a.anexo.mb-5(href=("https://www.minagricultura.gov.co/Normatividad/Decretos/Decreto%20No.%202113%20de%202017.pdf") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Decreto 2117 de 2017
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_1 4.1 Programa 

    p Un programa es un documento que contiene un conjunto medidas, acciones, procedimientos y medidas sanitarias para proteger la vida de los seres vivos de una producción primaria para obtener beneficios y control adicionales en la organización o empresa.

    p  Ayuda a instrumentar acciones necesarias para la prevención, la higiene y la seguridad en el desarrollo de las tareas y funciones, e implementar medidas correctivas y preventivas del trabajo para disminuir los riesgos y el daño a las personas, animales o bienes de una empresa. 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_2 4.2 Procedimientos 

    p Un procedimiento es un conjunto de acciones que se implementan o realizan dentro del programa de bioseguridad para controlar o evitar la entrada o ingreso de agentes patógenos que pueda alterar la salud de los animales; tales procedimientos son organizados en protocolos y cronogramas. Algunos procedimientos de bioseguridad que se pueden programar son: 

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Fumigaciones.
      li 
        i.lista-ul__vineta
        | Desinfección.
      li  
        i.lista-ul__vineta
        | Limpieza.
      li  
        i.lista-ul__vineta
        | Aplicación de vitaminas y suplementos.
      li  
        i.lista-ul__vineta
        | Registro de producción.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_3 4.3 Protocolos 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un protocolo de bioseguridad es un documento escrito donde se describen los procedimientos técnicos, higiénicos sanitarios de prevención de las enfermedades causadas por diferentes vectores; en estos documentos se hace una descripción detallada y ordenada de las acciones y procedimientos que se deben llevar a cabo en un tiempo estipulado para el correcto desempeño en granja avícola.  

      

    

</template>

<script>
export default {
  name: 'Tema4',
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
