<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 14
      h1 Equipos y herramientas en establecimientos avícolas

    p.mb-5 El propósito principal uso y manejo de los equipos es volver eficiente la producción avícola teniendo en cuenta los procesos de sanitización de estos con el fin de fortalecer los sistemas de bioseguridad implementados en la granja, a continuación, podrá conocer algunos conceptos importantes para tener éxito en la gestión de una empresa avícola.
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 14.1 Concepto 
    
    p.mb-5 Los Equipos son recursos físicos con los cuales se puede resolver o ejecutar una tarea en la granja avícola; y las herramientas son utensilios elaborados con la finalidad de hacer más sencillo y facilitar la elaboración de una tarea o actividad mecánica que debe ser realizada con la aplicación de energía y fuerza.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 14.2 Tipos 

    p Los equipos y herramientas a utilizar en una granja avícola dependen de la edad de las aves, tipo de producción, sistema de producción y alojamientos.  
    p Los equipos, los utensilios y las instalaciones de las granjas avícolas según Anzola (2008), deben cumplir con las siguientes condiciones: 
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Fabricados con materiales inertes
      li 
        i.lista-ul__vineta
        | No tóxicos
      li 
        i.lista-ul__vineta
        | Resistentes a la corrosión
      li 
        i.lista-ul__vineta
        | No recubiertos con pinturas o materiales desprendibles
      li 
        i.lista-ul__vineta
        | Que sean fáciles de limpiar y desinfectar. 
      li 
        i.lista-ul__vineta
        | Se deben instalar a una distancia y separación de otros equipos y paredes.
      li 
        i.lista-ul__vineta
        | Las superficies no deben ser porosos ni absorbentes.
      li 
        i.lista-ul__vineta
        | Deben ser a prueba de fugas. 
      li 
        i.lista-ul__vineta
        | No deben representar riesgo de contaminación y/ o daño para los productos aviares.
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 14.3 Mantenimiento

    p Según Anzola (2008), se debe contar con un programa de mantenimiento de los equipos y utensilios para eliminar la posibilidad de convertirse en una fuente de contaminación por la presencia de agentes contaminantes (lubricantes, soldadura, pintura, etc.) y daño para los productos aviares.
    p Adicionalmente se debe contar con manuales de procedimientos que incluyan: 
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | El mantenimiento preventivo y correctivo.
      li 
        i.lista-ul__vineta
        | La calibración de equipos e instrumentos de medición.
      li 
        i.lista-ul__vineta
        | El cronograma de actividades.
      li 
        i.lista-ul__vineta
        | El responsable de su ejecución y
      li 
        i.lista-ul__vineta
        | Los recursos requeridos para tal fin.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 14.4 Fichas técnicas

    p Cada una de los equipos y herramientas deben contar con su respectiva ficha técnica en la cual se identifican los siguientes ítems: Descripción, características, datos técnicos, atributos y recomendaciones de uso el cual se encuentra en la sección de materiales complementarios.
      







</template>

<script>
export default {
  name: 'Tema14',
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
