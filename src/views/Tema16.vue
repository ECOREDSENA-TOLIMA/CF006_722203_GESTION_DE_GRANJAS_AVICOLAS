<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 16
      h1 Camas
    
    p.mb-5 La cama es un aspecto importante a tener en cuenta en el alojamiento de las aves, según FENAVI (2019a) tiene como funciones principales: “ayudar a conservar una temperatura adecuada, aislando a las aves del frío y la humedad; de igual manera, actúa como un amortiguador, protegiéndolas de golpes y raspaduras, siendo además un absorbente de la humedad del suelo, de heces y de pérdidas producidas por los bebederos. Su espesor no debe ser inferior a cinco cm” (p.14).

    Separador
    #t_16_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 16.1 Tipos de camas

    p Existen diversas opciones de materiales para ser utilizados como cama, pero según FENAVI (2018b) los más requeridos son “viruta de madera, cascarilla de arroz y pasto picado. Sea cual sea el material seleccionado, se debe tener en cuenta cada uno de los siguientes elementos:

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Que posea una buena capacidad de retención de humedad.
      li 
        i.lista-ul__vineta
        | Que garantice la salud de las patas.
      li 
        i.lista-ul__vineta
        | Que evite lesiones en canales o suciedad en el huevo, según sea el sistema productivo” (p.38). 

    p.mb-5 La figura a continuación, muestra los tipos de camas de las aves de corral con los diversos materiales.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 7.
        span <em>Tipos de camas</em>
      img.d-md-block(src="@/assets/curso/temas/tema16/img-74.svg" data-aos="fade-left" alt="En la figura 7 se muestran los tipos de camas de diferentes materiales.")
      figcaption Nota. Tipos de camas de aves de corral. AviNews, (2015).

    Separador
    #t_16_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 16.2 Características

    p.mb-5 La cama, como elemento importante del ambiente de las aves, posee propiedades físicas y químicas que pueden incidir directamente sobre los microorganismos presentes en ella. En la figura se muestran las propiedades físicas de la cama:
    
    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Figura 8.
        span <em>Características de la cama</em>
      img.d-md-block(src="@/assets/curso/temas/tema16/img-75.svg" data-aos="fade-left" alt="En la figura 8 se muestran las características de la cama.")
      figcaption Nota. Propiedades físicas y químicas de la cama. Construcción propia con base en FENAVI (2019a). 

    Separador
    #t_16_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 16.3 Manejo de la cama 

    p Es importante un buen manejo de la cama avícola desde el inicio de la producción hasta el final de esta; ya que, una cama adecuada y bien manejada es clave dentro del sistema de bioseguridad de la granja evitando así, problemas higiénico sanitarios que retrasen la producción avícola.
    p  Un manejo inadecuado de la cama en cuanto a calidad y cantidad, puede dar lugar a:
    ul.lista-ul
      li 
        i.lista-ul__vineta
        | Lesiones que dificulten el desplazamiento de las aves. 
      li 
        i.lista-ul__vineta
        | Trastornos oculares.
      li 
        i.lista-ul__vineta
        | Propagación de enfermedades respiratorias y digestivas.
      li 
        i.lista-ul__vineta
        | Llevar a un bajo consumo de alimento y agua.







</template>

<script>
export default {
  name: 'Tema16',
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
