<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Procedimientos operativos estandarizados de saneamiento (POES)

    p El Procedimiento operativo estandarizado de saneamiento (POES), es definido por la Resolución 3652 de 2014 como:
    p “la descripción operativa y detallada de una actividad o proceso, en la cual se precisa la forma como se llevará a cabo el procedimiento, el responsable de su ejecución y la periodicidad con que debe realizarse, adicionalmente menciona los elementos, herramientas o productos que se van a utilizar. Por lo anterior, debe contar con un registro físico y sistemático que recopila, consigna y conserva de forma segura los datos en formatos que faciliten su consulta y verificación” (p.7).  
    p Cada granja avícola para certificarse como biosegura debe diseñar e implementar los POES de acuerdo a sus requerimientos:

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Instalaciones
      li 
        i.lista-ul__vineta
        | Equipos  
      li  
        i.lista-ul__vineta
        | Personal determinando responsables
      li 
        i.lista-ul__vineta
        | Acciones a ejecutar
      li
        i.lista-ul__vineta 
        | Tiempo 
      li
        i.lista-ul__vineta 
        | Recursos 
      li
        i.lista-ul__vineta 
        | Formatos necesarios.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 8.1 Objetivo 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-46.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El objetivo  de los POES según  Anzola (2008) es documentar, implementar, mantener métodos y por lo tanto sus procedimientos para lograr:
        br
        ul.lista-ul.mb-5
          li 
            i.lista-ul__vineta
            | La estandarización
          li 
            i.lista-ul__vineta
            | El monitoreo y  
          li  
            i.lista-ul__vineta
            | La aplicación de acciones y
          li 
            i.lista-ul__vineta
            | Establecer acciones de mejora en cada uno de los procesos de la granja.
        
    p Las granjas avícolas bioseguras en sus procedimientos operativos estandarizados de sanitización (POES) según la Resolución 3652 de 2014 requieren cumplir con:

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Requisitos documentales
      li 
        i.lista-ul__vineta
        | Requisitos de bioseguridad   
      li  
        i.lista-ul__vineta
        | De Infraestructura
      li 
        i.lista-ul__vineta
        | De pautas procedimentales y
      li 
        i.lista-ul__vineta 
        | De registro utilizando parámetros técnicos y formatos. 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 8.2 Ventajas

    p.mb-5 Las ventajas de los POES es que la granja avícola cuenta con documentación disponibles para procesos de reinducción e inducción y desarrollo de las actividades de la granja, por otra parte estos son dinámicos y pueden ser actualizados de acuerdo a los cambios en la normatividad,  por lo que es necesario asegurar el registro y documentación de la información con el fin de garantizar que los procesos se desarrollen de acuerdo a los protocolos ya que se pueden ver  las listadas las acciones y tareas a desarrollar en la granja avícola.  

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 8.3 Parámetros de verificación de los POES

    p Las granjas avícolas deberán cumplir a cabalidad con lo establecido en los Procedimientos Operativos Estandarizados (POE), los cuales son definidos por la Resolución 3651 de 2014 para granjas avícolas bioseguras de postura y/o levante.
    p Por otro lado, debe cumplir con las siguientes resoluciones:
    p.mb-5 A continuación, se mencionan los parámetros a tener en cuenta:       

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Ingreso de personas, objetos y vehículos a la granja.
      li 
        i.lista-ul__vineta
        | Sistema de tratamiento de agua.   
      li  
        i.lista-ul__vineta
        | Limpieza y desinfección de instalaciones, equipos y utensilios.
      li 
        i.lista-ul__vineta
        | Control integrado de plagas.
      li 
        i.lista-ul__vineta 
        | Manejo y eliminación de residuos sólidos. 
      li 
        i.lista-ul__vineta
        | Manejo y eliminación de los residuos líquidos. 
      li 
        i.lista-ul__vineta
        | Programa sanitario.   
      li  
        i.lista-ul__vineta
        | Capacitación
      li 
        i.lista-ul__vineta
        | Mantenimiento preventivo y/o correctivo de instalaciones y equipos.
      li 
        i.lista-ul__vineta 
        | Trazabilidad del huevo para consumo humano.

    .col-xl-10.mx-auto.mb-5
      .tarjeta.color-primario.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema8/decorador-1.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 ¿Qué es el POES?
                p.text-small Para profundizar en su aprendizaje puede ver el siguiente video, publicado por Fenavi en el que se describen los manuales de procedimientos de los POES en las granjas avícolas bioseguras de Colombia.

              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=wTO95XZVKoQ&list=PLhpZhu0CBmODMpfy6Vmf-wYL_HP4HrCDT&index=25')" target="_blank")
                  span Ver video
                  i.fas.fa-file-download

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 8.4 Documentación de aplicación del POES

    p Los formatos de control del POE son definidos por la Resolución 3651 de 2014 para granjas avícolas bioseguras de postura y/o levante, por la Resolución 3652 de 2014 para granjas avícolas bioseguras de Engorde y por la Resolución 3650 de 2014 para productores de material genético aviar y licencias de venta de material genético aviar. Los formatos evidencian la ejecución de las actividades establecidas y deben ser conservadas por un periodo no menor a un año y deben contener:
    p - Información General

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Nombre de la empresa.
      li 
        i.lista-ul__vineta
        | Nombre de la GAB de aves de postura y/o levante   
      li  
        i.lista-ul__vineta
        | Identificación del formato.
      li 
        i.lista-ul__vineta
        | Fecha de diligenciamiento.
      li 
        i.lista-ul__vineta 
        | Nombre y firma del responsable. 
      li 
        i.lista-ul__vineta
        | Observaciones

    p - Información Específica del Formato de Control por POE 
    
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Formato de ingreso de personas y vehículos a la GAB de postura y/o levante
      li 
        i.lista-ul__vineta
        | Formato de tratamiento de agua   
      li  
        i.lista-ul__vineta
        | Formato de control integrado de plagas
      li 
        i.lista-ul__vineta
        | Formato de mortalidad de las aves
      li 
        i.lista-ul__vineta 
        | Formato de manejo y disposición de la mortalidad en la GAB de postura y/o levante 
      li 
        i.lista-ul__vineta
        | Formato de tratamiento térmico de la gallinaza
      li 
        i.lista-ul__vineta 
        | Formato de vacunación  
      li 
        i.lista-ul__vineta
        | Formato del uso de medicamentos veterinarios
      li 
        i.lista-ul__vineta 
        | Formato de capacitación  
      li 
        i.lista-ul__vineta
        | Formato de mantenimiento
      li 
        i.lista-ul__vineta 
        | Formato de trazabilidad del huevo para consumo humano  
      li 
        i.lista-ul__vineta
        | Formato de calibración de equipos

    p Es necesario tener en cuenta que dependiendo de la importancia de los formatos su diligenciamiento puede ser:

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Formato de ingreso de personas y vehículos a la GAB de postura y/o levante
      li 
        i.lista-ul__vineta
        | Formato de tratamiento de agua   
      li  
        i.lista-ul__vineta
        | Formato de control integrado de plagas

    p Es necesario tener en cuenta que dependiendo de la importancia de los formatos su diligenciamiento puede ser:

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Diario
      li 
        i.lista-ul__vineta
        | Semanal   
      li  
        i.lista-ul__vineta
        | Mensual 

    p Lo anterior, con el fin de tener la evidencia para la validación adecuada de los procesos que se desarrollan en la granja avícola. Pueden consultar el anexo que es un formato de las actividades de limpieza y desinfección definida en los procedimientos de sanitización, como un ejemplo del formato POE.

    .row.justify-content-center
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Para conocer el ejemplo de formato POE puede consultar el siguiente PDF 








</template>

<script>
export default {
  name: 'Tema8',
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