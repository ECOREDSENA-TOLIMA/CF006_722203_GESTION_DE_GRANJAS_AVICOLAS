<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistemas de producción

    p.mb-5 La importancia de los sistemas de producción avícola radica en que son alternativas de producción para pequeños, medianos y grandes productores velando por ofrecer productos de calidad, para lo cual, tienen en cuenta la seguridad alimentaria de una región y apuntan a mejorar y obtener rentabilidad de su granja avícola; por esto, se reconocen tipos de sistemas, requisitos a tener en cuenta y componentes de la producción en una granja avícola biosegura.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.1 Tipos de sistemas de producción

    p Los tipos de sistemas de producción avícola según (Pedrozo, 2005) se clasifican según la calidad de terreno y disposición de las aves, estos son: 
    
    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | Sistema extensivo, tradicional o de pastoreo, en este el terreno a disposición de las aves es muy amplio y la inversión económica es casi nula.
      li 
        i.lista-ul__vineta
        | Sistema semi-intensivo o de corral el cual se caracteriza por una extensión determinada de terreno para las aves por lo que hay acondicionamiento del ambiente y de las instalaciones.
      li  
        i.lista-ul__vineta
        |  Sistema intensivo o de confinamiento que pueden ser de piso y jaula, en este sistema se aprovecha el espacio y hay mayor densidad de animales por metro cuadrado.
    
    p.mb-5 Para el caso de la cría de aves en el sector productivo colombiano se encuentra los siguientes sistemas productivos según el lugar donde se alojan las aves pueden ser de tres tipos, estos son:

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema1/img-1.svg" data-aos="fade-left")

    p Sistema intensivo (jaula), Semi-intensivo (piso) y Extensivo (pastoreo); los cuales son descritos por Cuellar así: 

    p El primer tipo se denomina producción intensiva, donde las aves permanecen alojadas en jaulas y están cubiertas todo el tiempo. El segundo tipo se denomina producción semi-intensiva, donde los animales cuentan con un área al aire libre y otra con cubierta. El tercer tipo se denomina producción extensiva y se refiere al ambiente al aire libre donde las aves pasan parte de su tiempo (2021).

    p Estos sistemas de producción son también conocidos como industriales o de galpón con amplios niveles de producción tecnificadas y de programas de bioseguridad implementados; adicionalmente se encuentran los de corral o de manejo menor a 200 aves de producción doméstica, con pocos equipos y con instalaciones básicas construidas con materiales del predio y por último las de traspatio o pastoreo donde no hay programas de bioseguridad o control sobre las aves. 

    p.mb-5 Según la Resolución 0253 de 2020, los sistemas de producción se diferencian de la siguiente forma: para pollo de engorde, aves de postura en piso y aves de postura en jaula y se mencionan en la siguiente figura.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 1.
        span <em>Sistemas de producción de aves</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-2.svg" data-aos="fade-left")

    .row.justify-content-center
      .col-lg-6
        a.anexo.mb-4(:href="('https://fenavi.org/wp-content/uploads/2020/10/RESOLUCION-0253-DE-2020.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Para profundizar en el tema sobre sistemas de producción puede visualizar la Resolución 0253 de 2020.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.2 Requisitos 

    p Según el manual de bienestar animal adjunto a la Resolución 0253 de 2020 se reconocen requisitos y condiciones a tener en cuenta en los sistemas de producción de aves los cuales deben cumplir con las siguientes pautas:

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | De las que centran su atención en las condiciones generales de bienestar animal en aves de corral.
      li 
        i.lista-ul__vineta
        | De las instalaciones para el bienestar animal de las aves de corral.
      li  
        i.lista-ul__vineta
        | Del agua de bebida.
      li  
        i.lista-ul__vineta
        | Del alimento.
      li  
        i.lista-ul__vineta
        | De la salud animal.
      li  
        i.lista-ul__vineta
        | De bienestar térmico e iluminación. 
      li  
        i.lista-ul__vineta
        | Del manejo de las aves.
      li  
        i.lista-ul__vineta
        | De las buenas prácticas en el uso de medicamentos veterinarios.
      li  
        i.lista-ul__vineta
        | De las intervenciones dolorosas del manejo.
      li  
        i.lista-ul__vineta
        | Del sacrificio humanitario e eutanasia.
      li  
        i.lista-ul__vineta
        | De los planes de contingencia y emergencia.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.3 Componentes 

    p De acuerdo a las características productivas y el tipo de impacto ambiental los procesos avícolas según Fenavi se pueden dividir en tres grandes grupos: 

    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | Granjas de material genético (abuelas, reproductoras).
      li 
        i.lista-ul__vineta
        | Granjas comerciales (ponedoras de huevo de mesa, y de pollo de engorde).
      li  
        i.lista-ul__vineta
        | Incubadoras y plantas de beneficio de aves (2014).

    p.mb-5 En la siguiente figura se muestran los procesos avícolas descritos en la guía ambiental del subsector avícola: 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 2.
        span <em>Componentes del sistema de gestión agrícola</em>
      img.d-md-block(src="@/assets/curso/temas/tema1/img-3.svg" data-aos="fade-left")





      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
