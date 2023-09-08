<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plan de Ordenamiento Territorial (POT)

    p(data-aos="fade-down") El plan de ordenamiento territorial según la ley orgánica expedida en la Ley 1454 de 2011 lo define como: el “conjunto de objetivos, directrices, políticas, estrategias, metas, programas, actuaciones y normas, destinadas a orientar y administrar el desarrollo físico del territorio y la utilización del suelo” (p.2); además se comprende acciones político-administrativas propias para el desarrollo de un territorio de acuerdo al desarrollo de las granjas avícolas bioseguras. 

    p(data-aos="fade-down-left") Por otro lado, la Ley 388 de 1997 afirma que el ordenamiento del territorio municipal y distrital comprende:

    p(data-aos="fade-down") Un conjunto de acciones político-administrativas y de planificación física concertadas, emprendidas por los municipios o distritos y áreas metropolitanas, en ejercicio de la función pública que les compete, dentro de los límites fijados por la Constitución y las leyes, en orden a disponer de instrumentos eficientes para orientar el desarrollo del territorio bajo su jurisdicción y regular la utilización, transformación y ocupación del espacio, de acuerdo con las estrategias de desarrollo socioeconómico y en armonía con el medio ambiente y las tradiciones históricas y culturales (p.2).

    p.mb-5(data-aos="fade-down-left") Para el establecimiento de una granja avícola biosegura el POT es muy importante porque le indica al productor la ubicación estratégica de las instalaciones, teniendo en cuenta el uso del suelo del municipio determinado por la autoridad competente. Aquí es vital conocer algunos aspectos importantes para la adecuada gestión de una empresa avícola en Colombia.

    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-md-6.mb-4
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src="@/assets/curso/temas/tema2/img-4.svg" data-aos="zoom-in-up" alt="")
      .col-md-6.mb-4.mb-md-0.movil.mt-0
        a.anexo.mb-5(href=("http://wsp.presidencia.gov.co/Normativa/Leyes/Documents/ley145428062011.pdf") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Ley 1454 de 2011.

        a.anexo.mb-3(href=("https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Ley 388 de 1997.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_1 2.1 Aspectos estructurales que define el POT

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
        h5 Figura 4.
        span <em>Componentes del POT</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-5.svg" data-aos="fade-left")



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
