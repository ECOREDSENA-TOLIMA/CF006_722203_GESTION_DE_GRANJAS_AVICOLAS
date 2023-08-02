<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plan de Ordenamiento Territorial (POT)

    p El plan de ordenamiento territorial según la ley orgánica expedida en la Ley 1454 de 2011 lo define como: el “conjunto de objetivos, directrices, políticas, estrategias, metas, programas, actuaciones y normas, destinadas a orientar y administrar el desarrollo físico del territorio y la utilización del suelo” (p.2); además se comprende acciones político-administrativas propias para el desarrollo de un territorio de acuerdo al desarrollo de las granjas avícolas bioseguras. 

    p Por otro lado, la Ley 388 de 1997 afirma que el ordenamiento del territorio municipal y distrital comprende:

    p un conjunto de acciones político-administrativas y de planificación física concertadas, emprendidas por los municipios o distritos y áreas metropolitanas, en ejercicio de la función pública que les compete, dentro de los límites fijados por la Constitución y las leyes, en orden a disponer de instrumentos eficientes para orientar el desarrollo del territorio bajo su jurisdicción y regular la utilización, transformación y ocupación del espacio, de acuerdo con las estrategias de desarrollo socioeconómico y en armonía con el medio ambiente y las tradiciones históricas y culturales (p.2).

    p Para el establecimiento de una granja avícola biosegura el POT es muy importante porque le indica al productor la ubicación estratégica de las instalaciones teniendo en cuenta el uso del suelo del municipio determinado por la autoridad competente. Aquí es vital conocer algunos aspectos importantes para la adecuada gestión de una empresa avícola en Colombia.

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema2/img-4.svg" data-aos="fade-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.1 Requisitos 

    p Los planes de ordenamiento territorial según Mora Huertas (2019) deberán contemplar tres componentes:

    ul.lista-ul
      li 
        i.lista-ul__vineta
        | Componente general del plan, el cual estará constituido por los objetivos, estrategias y contenidos estructurales de largo plazo. 
      li 
        i.lista-ul__vineta
        | El componente urbano, el cual estará constituido por las políticas, acciones, programas y normas para encauzar y administrar el desarrollo físico urbano.
      li  
        i.lista-ul__vineta
        | El componente rural, el cual estará constituido por las políticas, acciones, programas y normas para orientar y garantizar la adecuada interacción entre los asentamientos rurales y la cabecera municipal, así como la conveniente utilización del suelo.

    p.mb-5 Estos componentes son importantes en la bioseguridad porque las instalaciones avícolas los deben contemplar para delimitar los usos del suelo en un territorio determinado, estos se sintetizan en la siguiente figura:

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 3.
        span <em>Componentes del POT</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-5.svg" data-aos="fade-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.2 Requisitos

    p En esta norma según la Ley 1454, 2011, se dictan “normas orgánicas sobre ordenamiento territorial” siendo relevantes para las granjas avícolas bioseguras porque ofrece los parámetros técnicos de ubicación de los predios avícolas y la construcción de sus instalaciones.  







</template>

<script>
export default {
  name: 'Tema2',
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
