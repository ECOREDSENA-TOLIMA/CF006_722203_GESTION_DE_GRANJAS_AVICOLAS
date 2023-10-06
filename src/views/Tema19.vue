<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 19
      h1 Plagas y vectores

    p.mb-5 Para que la gestión de una empresa avícola tenga éxito, es necesario que se haga un control adecuado de las plagas y los vectores que pueden en un momento dado transmitir enfermedades y lograr hasta la muerte de los animales, lo cual lleva a pérdidas en la producción.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Plagas y vectores 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema19/img-84.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las plagas se refieren a organismos no deseados que pueden causar daño o perjuicio a las aves de corral y a la producción avícola en general. Estos organismos pueden incluir insectos como moscas, mosquitos, garrapatas, ácaros, pulgas, piojos y cucarachas, así como roedores como ratas y ratones.
        br
        br
        | Los vectores, por otro lado, son organismos que pueden transmitir enfermedades de un animal a otro. En el caso de las granjas avícolas, los vectores más comunes son los insectos, como moscas y mosquitos.

    p.mb-5 Es fundamental mantener altos estándares de limpieza y desinfección en una empresa avícola para evitar la aparición de plagas y vectores. Esto no solo contribuye a prevenir enfermedades, sino también a proteger las utilidades y el bienestar de los animales y las personas involucradas en la industria avícola.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Tipos 

    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0(data-aos="fade-right")
        span En las granjas avícolas, los principales tipos de plagas y vectores que pueden afectar la producción y la salud de las aves son los insectos y los roedores. Los insectos, como moscas, mosquitos, garrapatas, ácaros, pulgas, piojos y cucarachas, pueden transmitir enfermedades aviares de un ave a otra, además de causar irritación y estrés en las aves. Por otro lado, los roedores, como ratas y ratones, pueden causar daños en las instalaciones, contaminar los alimentos y transmitir enfermedades a través de sus heces y orina. El control efectivo de estas plagas y vectores es esencial para mantener la bioseguridad en las granjas avícolas y prevenir pérdidas económicas y problemas de salud en las aves.
      .col-12.col-md-4
        figure
          img(src="@/assets/curso/temas/tema19/img-85.png", alt="Texto que describa la imagen")
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Biología 

    p La biología de una plaga y vector permite identificar sus características físicas y ciclo evolutivo, esto permite tomar medidas de control y evitar el ingreso a la producción avícola. 
    p.mb-5 La biología de roedores se describe en las siguientes tablas:  

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Tabla 1.
        span <em>Biología de roedores</em>
      img.d-md-block(src="@/assets/curso/temas/tema19/t1.png" data-aos="fade-left")
      figcaption Nota. Características y diferencias de roedores. Elaboración propia

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        h5 Tabla 2.
        span <em>Biología de mosca</em>
      img.d-md-block(src="@/assets/curso/temas/tema19/t2.png" data-aos="fade-left")
      figcaption Nota. Ciclo evolutivo y características de la mosca. Elaboración propia

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Comportamiento de los roedores

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema19/img-88.svg" data-aos="fade-right")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Comportamiento de las moscas 
    
    p.mb-5 Para un correcto y efectivo control de plagas y vectores se requiere conocer cuál es el comportamiento en su estado natural, (Fenavi, 2018b) describe el comportamiento de los roedores así:

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema19/img-89.svg" data-aos="fade-right")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Comportamiento de los escarabajos 

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema19/img-90.svg" data-aos="fade-right")

    Separador
    #t_19_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 19.1 Control de plagas 

    p El control de plagas se hace con una serie de actividades que regulan y manejan las especies nocivas de plagas, evitando la afección a la salud y el daño medio ambiental. 
    p.mb-5 El control de plagas se realiza para manejar y evitar el ingreso y/o radicación de las plagas a las producciones avícolas.

    .tarjeta.tarjeta.color-acento-contenido.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Introducción al control de plagas
            p El control de plagas se lleva a cabo mediante una serie de actividades que regulan y manejan las especies nocivas de plagas, con el objetivo de evitar impactos negativos en la salud y el medio ambiente. Su implementación es crucial para prevenir el ingreso y la generación de plagas en los galpones avícolas, lo cual podría disminuir la producción avícola.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-91.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Clases y métodos de control de plagas
            p Los métodos de control de plagas varían según el tipo de plaga presente, como roedores, moscas o escarabajos. En el caso de los roedores, se pueden utilizar métodos naturales, culturales, mecánicos y químicos. Para el control de moscas, existen métodos mecánicos, biológicos y químicos. Y para el control de escarabajos, se utilizan principalmente métodos químicos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-92.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Métodos de control de roedores
            p Dentro de los métodos de control de plagas, se detallan los enfoques específicos para el control de roedores. Estos métodos incluyen medidas naturales, como el uso de predadores como aves, gatos, perros y serpientes. Además, se pueden aplicar métodos culturales para manipular el hábitat y realizar una higienización adecuada. Los métodos mecánicos involucran el uso de barreras físicas, como guarda-ratas, dispositivos electromagnéticos, ultrasónicos y luz UV. Por último, se pueden emplear métodos químicos, como atrayentes, repelentes, esterilizantes químicos y venenos, como fumigantes y anticoagulantes.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-93.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Métodos de control de moscas
            p Se detallan los métodos utilizados para el control de moscas, tanto en sus etapas adultas como de larvas. Para las etapas adultas, se recomiendan métodos mecánicos, como el uso de luz UV y trampas adhesivas. Para las larvas, se recomienda la remoción frecuente del abono y el uso de agua hirviendo. También se pueden emplear métodos biológicos, utilizando depredadores, parasitoides y microorganismos eficientes. Los métodos químicos, como la fumigación, el pulverizado y los métodos de pintado, también son opciones para el control de moscas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-94.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Métodos de control de escarabajos
            p El método principal es el químico, el cual implica la aplicación de choque, la remoción de la cama y la humectación de los pisos. Además, se recomienda utilizar insecticidas de efecto residual y aplicarlos en áreas de almacenamiento de camas y alrededores. También se pueden utilizar láminas de cartón o zinc en aves de postura o reproductoras.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-95.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Medidas de prevención
            p Para el control de roedores, se recomienda evitar el desorden, quitar escombros y malezas, implementar estibas, manejar basuras de manera adecuada y ubicar el alimento y las materias primas de manera estratégica. Para el control de moscas, es importante tratar la humedad, evitar fugas y raciones laxantes, y mantener una ventilación adecuada. En el caso de los escarabajos, se sugiere examinar diferentes áreas del galpón y realizar este proceso preferiblemente de noche.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-96.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Mapa de puntos de control
            p Los mapas de puntos de control permiten ubicar de forma estratégica cebos, trampas, rejillas y cintas que ayudan al control de plagas como moscas, roedores y escarabajos. Estos mapas facilitan el seguimiento del proceso y contribuyen a una mejor efectividad en el control.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-97.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Productos químicos y periodicidad de aplicación
            p Se utilizan productos químicos como insecticidas, larvicidas y raticidas para el control de plagas. Es importante rotar los productos para evitar resistencias y seguir las instrucciones del fabricante. La periodicidad de aplicación varía según las condiciones ambientales de la granja avícola, el tipo de construcción, la entrada y salida de animales, los insumos, los materiales almacenados y el manejo de residuos orgánicos e inorgánicos. Se recomienda realizar fumigaciones quincenales y realizar inspecciones semanales para evaluar la eficacia del control de plagas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-98.png', alt='Texto que describa la imagen')
    
    Separador
    #t_19_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 19.2 Plaguicidas 

    p.mb-5 Un plaguicida según Decreto 1843 de 1991 es todo agente de naturaleza “química, física o biológica que sólo en mezcla o en combinación se utilice para: la prevención, represión, atracción, o control de insectos, ácaros y agentes patógenos” entre otros, que afecten a los animales, personas o plantas en una granja avícola. 

    .tarjeta.tarjeta.color-acento-botones.p-4.mb-5
      SlyderA(tipo="b")
        //- .row
        //-   .col-md-6.mb-4.mb-md-0
        //-     h4 Plaguicidas
        //-     p Según el Decreto 1843 de 1991, un plaguicida es cualquier agente de naturaleza química, física o biológica que se utiliza en mezcla o combinación para prevenir, controlar o repeler insectos, ácaros, agentes patógenos y otros organismos que favorecen a animales, personas o plantas en una granja avícola.

        //-   .col-md-6
        //-     figure
        //-       img(src='@/assets/curso/temas/tema19/img-99.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Tipos
            p En la industria avícola, se utilizan diferentes tipos de plaguicidas, entre los más comunes se encuentran:
            p <strong>Acaricidas:</strong> controla ácaros como garrapatas y corrucos.
            p <strong>Bactericidas:</strong> combate bacterias.
            p <strong>Fungicidas:</strong> controla de hongos.
            p <strong>Herbicidas:</strong> controla algas, plantas terrestres y acuáticas. 
            p <strong>Insecticidas:</strong> controla insectos como escarabajos, polillas y pulgas.
            p <strong>Larvicidas:</strong> combate larvas de insectos.
            p <strong>Molusquicidas:</strong> utilizados para controlar moluscos como caracoles de jardín y babosas.
            p <strong>Nematicidas:</strong> empleados para eliminar nematodos o gusanos.
            p <strong>Ovicidas:</strong> utilizados para controlar huevecillos de insectos.
            p <strong>Roedores:</strong> empleados para controlar roedores.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-100.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Manejo
            p El manejo de los plaguicidas se realiza teniendo en cuenta las categorías toxicológicas de los productos y el rombo de seguridad, el cual identifica los diferentes riesgos mediante colores: azul para riesgo a la salud, rojo para riesgo de inflamabilidad, amarillo para riesgos por reactividad y blanco para riesgo específico. El manejo de los plaguicidas varía según su toxicidad. Por ejemplo, los rodenticidas, clasificados como categoría I (extremadamente peligrosos), deben manipularse con guantes de protección.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-101.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Disposición de residuos
            p Una vez se ha agotado el producto, los envases deben ser sometidos a un proceso de triple lavado y posteriormente inutilizados sin destruir la información de las etiquetas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-102.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Fichas técnicas
            p La Ficha de Datos de Seguridad (FDS) es un documento que describe los peligros de un plaguicida y proporciona información sobre su manipulación, uso y almacenamiento seguro. La FDS debe elaborarse de acuerdo con la estructura sugerida por el Sistema Globalmente Armonizado de clasificación y etiquetado de productos químicos (SGA).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-103.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Envases, empaques y embalaje
            p Los envases, empaques y embalajes de plaguicidas desechados o vencidos por parte del consumidor son considerados residuos posconsumo de plaguicidas en Colombia. Estos están regulados por la Resolución 1675 de 2013, que establece los elementos que deben contener los Planes de Gestión de Devolución de Productos Posconsumo de Plaguicidas. La devolución y acopio de estos productos se realiza con el objetivo de facilitar su tratamiento, valorización y disposición final controlada. Los fabricantes, importadores y participantes de la cadena comercial de plaguicidas, incluido el consumidor final, son responsables de participar en el proceso de devolución de los envases y embalajes de plaguicidas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema19/img-104.png', alt='Texto que describa la imagen')
  
    .row.align-items-center.mb-4(data-aos="fade-down-left")
      .col-md-6.mb-4
        figure.desktop.d-none.d-sm-block.d-sm-none.d-lg-block.d-none.d-md-block
          img(src='@/assets/curso/temas/tema19/imagen.svg', alt='')
      .col-md-6.mb-4.mb-md-0.movil.m-auto
        a.anexo.mb-5(href=("https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1359845") target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo.</strong> Decreto 1843 de 1991



</template>

<script>
export default {
  name: 'Tema19',
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
