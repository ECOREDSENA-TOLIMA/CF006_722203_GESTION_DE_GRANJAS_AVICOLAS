<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Insumos pecuarios

    p.mb-5 Un insumo pecuario es definido en la Resolución 789 de 2007 como todo  “producto natural, sintético, biológico, de origen biotecnológico, utilizado para promover la producción pecuaria, así como para el diagnóstico, prevención, control, erradicación y tratamiento de plagas, enfermedades y agentes nocivos que afecten a las especies animales o sus productos” (p.3); los insumos pecuarios son indispensables para cumplir con los procedimientos de bioseguridad en una granja avícola porque son productos que ayudan a diagnosticar, prevenir, controlar y tratar los agentes que afectan las producciones avícolas.

    .tarjeta.tarjeta--azul2.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Tipos 
            p Los tipos de insumos pecuarios son reconocidos por  (Anzola et al., 2008) como: 
            p “Producto químico, biológico o de origen biotecnológico utilizado para promover la producción avícola. 
            p Se incluyen en esta definición las aves con destino a la reproducción, comerciales de primera generación y los huevos fértiles para incubación” (p.10). 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/img-57.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p <strong>Insumos quícimos:</strong>
            ul.lista-ul.mb-5
              li 
                i.lista-ul__vineta
                | Desinfectantes.
              li 
                i.lista-ul__vineta
                | Sanitizantes.
              li 
                i.lista-ul__vineta
                | Detergentes.
              li 
                i.lista-ul__vineta
                | Medicamentos veterinarios.
              li 
                i.lista-ul__vineta
                | Plaguicidas y otras sustancias peligrosas.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/img-58.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p <strong>Insumos biológicos:</strong> 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Vacunas utilizadas en planes sanitarios.
            p <strong>Insumos biotecnológicos:</strong>
            ul.lista-ul.mb-5
              li 
                i.lista-ul__vineta
                | La genética de las líneas aviares.
              li 
                i.lista-ul__vineta
                | Las aves comerciales como como gallinas ponedoras y pollo de engorde en sus diferentes líneas genéticas y los huevos. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/img-59.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p <strong>Buenas prácticas en insumos veterinarios</strong> 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                |  La prescripción de medicamentos, biológicos y plaguicidas debe ser por parte del médico veterinario o médico veterinario zootecnista.

            ul.lista-ul.mb-5
              li 
                i.lista-ul__vineta
                | El médico es quien determina su uso luego de una evaluación diagnóstica, considerando además la información contenida en el rótulo acerca de la cantidad, administración, duración del tratamiento y tiempo de retiro.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/img-62.png', alt='Texto que describa la imagen')  

        .row
          .col-md-6.mb-4.mb-md-0
            p <strong>Buenas prácticas en insumos veterinarios</strong> 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | En el almacenamiento de insumos veterinarios que requieran condiciones especiales de refrigeración y/o congelación, se debe monitorear y registrar la temperatura y deben ser estos equipos de uso exclusivo para este producto.

            ul.lista-ul.mb-5
              li 
                i.lista-ul__vineta
                | Los insumos deben estar clasificados de acuerdo con su uso (medicamentos, plaguicidas sustancias de limpieza y desinfección) y encontrarse durante su periodo de vida útil, en caso de haber expirado deben ser retirados de las instalaciones.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/img-63.png', alt='Texto que describa la imagen')
        
        .row
          .col-md-6.mb-4.mb-md-0
            p <strong>Insumos nutricionales:</strong>
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Los alimentos concentrados y suplementos.
            p <strong>Otros insumos:</strong>
            ul.lista-ul.mb-5 
              li 
                i.lista-ul__vineta
                | Materias primas.
              li 
                i.lista-ul__vineta
                | Envases.
              li 
                i.lista-ul__vineta
                | Empaques.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/img-61.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Usos 
            p En las siguientes resoluciones se puede revisar el uso de insumos en granjas avícolas. 
            ul.lista-ul.mb-5
              li 
                i.lista-ul__vineta
                | (Resolución 3651, 2014) para granjas avícolas bioseguras de postura y/o levante.
              li 
                i.lista-ul__vineta
                | (Resolución 3652, 2014)  para granjas avícolas bioseguras de engorde.
              li 
                i.lista-ul__vineta
                | (Resolución 3650, 2014) para productores de material genético aviar y licencias de venta de material genético aviar.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema12/img-60.png', alt='Texto que describa la imagen')

    .row.align-items-center.mb-4(data-aos="fade-down-left")
      .col-md-6.mb-4
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src='@/assets/curso/temas/tema12/imagen.svg', alt='')
      .col-md-6.mb-4.mb-md-0.movil.m-auto
        a.anexo.mb-5(href=("https://www.ica.gov.co/getattachment/e43634ab-bc8f-4979-ab3b-8e3f6a8fefee/789.aspx") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p resolución 789, 2007

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 12.1 Ingreso de insumos pecuarios

    p.mb-5 Para el ingreso de cualquier tipo de insumo pecuario en granjas o plantas de incubación avícolas debe existir un manual de procedimientos escritos para control de calidad de materias primas e insumos, donde se señalen las especificaciones de calidad y los criterios de aceptación y rechazo.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 12.2 Protocolos 

    p El protocolo de bioseguridad de ingreso de insumos pecuarios debe estar diseñado con el fin de evitar la contaminación de tipo biológico o químico para proteger la salud de las personas y los animales que van a estar en contacto con los insumos. 
    p Teniendo la emergencia sanitaria se expide la Resolución 773, 2020 donde señala aspectos a tener en cuenta para garantizar el cuidado de los proveedores y clientes al entregar y recibir insumos. 
    p Algunos aspectos del protocolo a tener en cuenta son: 

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Llevar registros de entradas y salidas.
      li 
        i.lista-ul__vineta
        | Recepcionar los insumos pecuarios o hacer entrega de la producción pecuaria preferiblemente en la entrada de la finca. 
      li 
        i.lista-ul__vineta
        | Desinfección de vehículos.
      li 
        i.lista-ul__vineta
        | Tener en cuenta los procedimientos técnicos de almacenamiento.
      li 
        i.lista-ul__vineta
        | El personal debe aplicar las buenas prácticas de higiene y elementos de protección al igual que se debe mantener el distanciamiento social.
      li 
        i.lista-ul__vineta
        | Ejecutar procesos de limpieza y desinfección de instalaciones, equipos, utensilios e insumos.

    .row.align-items-center.mb-4(data-aos="fade-down-left")
      .col-md-6.mb-4
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src='@/assets/curso/temas/tema12/imagen-1.svg', alt='')
      .col-md-6.mb-4.mb-md-0.movil.m-auto
        a.anexo.mb-5(href=("https://fenavi.org/wp-content/uploads/2020/05/RESOLUCION-773-DE-13-DE-MAYO-DE-2020.pdf") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p resolución 773, 2020

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 12.3 Procedimiento técnico

    p.mb-5 Los insumos pecuarios ya sean químicos y/o biológicos, deben tener procedimientos técnicos descritos en la ficha técnica y hoja de seguridad. Es importante que la empresa avícola acate todos los requerimientos que da el proveedor de estos insumos, con el fin de evitar su mal uso, despilfarro o algún accidente por contacto.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 12.4 Normativa sanitaria de insumos pecuarios

    p En las granjas avícolas bioseguras los insumos pecuarios son requeridos para los procesos de producción avícola y están regulados por diferentes normas de la siguiente manera:

    ul.lista-ul
      li 
        i.lista-ul__vineta
        | <strong>Control técnico de los insumos pecuarios:</strong> la Resolución 1056 de 1996 establece “disposiciones sobre el control técnico de los Insumos Pecuarios”; es importante para las granjas avícolas bioseguras porque establece procedimientos para el registro de productores y los requisitos de producción al igual que para los procedimientos de registro de insumos pecuarios teniendo en cuenta los parámetros técnicos.
      li 
        i.lista-ul__vineta
        | <strong>Manejo de insumos, sustancias químicas y biológicas de uso pecuario:</strong> en la Resolución 789 de 2007, se establecen “obligaciones y responsabilidades en el manejo de insumos, sustancias químicas y biológicas de uso pecuario y sus residuos o desechos con propiedades o características peligrosas, y se dictan otras disposiciones”. 
    
    p Para ampliar la información es indispensable revisar los capítulos II artículo 5 al 7 y capitulo III artículos 8 al 10, en donde hace referencia a la responsabilidad del manejo y de insumos, sustancias químicas y biológicas, y generación de residuos de los mismos insumos; en donde podemos encontrar todas las disposiciones y especificaciones sobre el correcto uso, almacenamiento y disposición final de los insumos pecuarios que se utilizan en la industria avícola.
    
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | <strong>Límites máximos para residuos de medicamentos veterinarios:</strong> la  Resolución 1382 de 2013, tiene por objeto establecer “los Límites Máximos para Residuos de Medicamentos Veterinarios en los alimentos de origen animal, destinados al consumo humano, con el fin de proteger la salud de la población”; estos procedimientos hacen que las granjas avícolas bioseguras reconozcan parámetros técnicos y procedimientos administrativos de inspección, vigilancia, control, medidas de seguridad y sanciones a tener en cuenta.

    .row.align-items-center.mb-4(data-aos="fade-down-left")
      .col-md-6.mb-4
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src='@/assets/curso/temas/tema12/imagen-2.svg', alt='')
      .col-md-6.mb-4.mb-md-0.movil.mt-0
        a.anexo.mb-5(href=("https://www.ica.gov.co/getattachment/043131ae-1652-49c9-959d-96ab4e371707/1996R1056.aspx") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Resolución 1056,1996

        a.anexo.mb-3(href=("https://fenavi.org/wp-content/uploads/2019/02/Resolucion-1382-de-2013.pdf") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Resolución 1382, 2013










</template>

<script>
export default {
  name: 'Tema12',
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
