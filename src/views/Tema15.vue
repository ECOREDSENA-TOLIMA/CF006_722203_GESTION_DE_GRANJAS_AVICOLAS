<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 15
      h1 Limpieza, desinfección e higienización
    
    p.mb-5 La limpieza y desinfección son aspectos importantes a tener en cuenta en las Buenas Prácticas de Producción y las Buenas Prácticas de Bioseguridad en las granjas avícolas; la limpieza es definida por Anzola (2008), como el “proceso o la operación de eliminación de suciedades y materiales extraños o indeseables” (p.9) y la desinfección como:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema15/img-66.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 “el tratamiento físico-químico aplicado a las superficies limpias, con el fin de destruir los microorganismos que pueden ocasionar contaminación y reducir sustancialmente el número de otros microorganismos indeseables, sin que dicho tratamiento afecte adversamente las características y calidad del producto u objeto del proceso” (p.10).

    p.mb-5 Como puede ver la limpieza, desinfección e higienización en la producción del sector avícola, es de vital importancia, porque si no se controlan los microorganismos, estos pueden causar la muerte de grandes cantidades de aves, llevando a la pérdida económica para el avicultor. 

    AcordionA.mb-5.bgr_7(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Limpieza, desinfección e higienización").p-0
        p Las operaciones de limpieza y desinfección deben llevarse a cabo siguiendo un Plan Operativo Estandarizado de Saneamiento (POES). Estas operaciones deben abarcar las instalaciones, áreas, equipos, personal y transporte de cada granja avícola.
        p El POES debe mostrar de manera clara y detallada el paso a paso de las operaciones, incluyendo qué se debe hacer, cómo hacerlo, quién es responsable de llevarlo a cabo, con qué se realiza y cuándo se deben realizar. Además, se debe dejar un registro periódico de estas operaciones.
        p La limpieza y desinfección, según PRONAVICOLA (2020), son fundamentales para evitar el ingreso de patógenos a las aves. Estos patógenos pueden ser transportados a través de diversos medios, como vehículos, técnicos, visitantes, personal, perros y gatos, aves silvestres, roedores, alimentos, agua, equipos y el aire.
      .row(titulo="Medios de ingreso de patógenos ").p-0
        p La bioseguridad en las granjas avícolas es de suma importancia para prevenir la propagación de patógenos que pueden afectar la salud de las aves. A continuación, se mencionan algunos de los principales agentes patógenos y medios de transmisión que pueden poner en riesgo a las granjas avícolas:
        ul.lista-ul.mb-5
          li 
            i.lista-ul__vineta
            | El hombre
          li 
            i.lista-ul__vineta
            | Moscas e insectos hematófagos
          li 
            i.lista-ul__vineta
            | Viento y polvo
          li 
            i.lista-ul__vineta
            | Aves de reemplazo gallinas criollas
          li 
            i.lista-ul__vineta
            | Cerdos y perros 
          li 
            i.lista-ul__vineta
            | Ausencia total o parcial del plan de vacunación
          li 
            i.lista-ul__vineta
            | Alimentos
          li 
            i.lista-ul__vineta
            | Aguas 
          li 
            i.lista-ul__vineta
            | Aves domésticas, silvestres y exóticas
          li 
            i.lista-ul__vineta
            | Ratas y ratones 
          li 
            i.lista-ul__vineta
            | Vacunas y virus vitos
          li 
            i.lista-ul__vineta
            | Vehículos
          li 
            i.lista-ul__vineta
            | Botas 
          li 
            i.lista-ul__vineta
            | Equipos
        p Es fundamental implementar medidas de bioseguridad rigurosas para prevenir la introducción y propagación de estos patógenos en las granjas avícolas. 
      .row(titulo="Productos 1").p-0
        p Según Anzola et al. (2008), los insumos utilizados en una granja avícola deben ser los productos autorizados para la limpieza y desinfección. Estos productos deben estar claramente definidos y contar con fichas técnicas que especifiquen sus concentraciones, modo de preparación, empleo y los equipos necesarios para su utilización. Además, es importante establecer la forma de rotación de los equipos. Estos productos se utilizan en equipos, utensilios, instalaciones y personal de la granja para garantizar una implementación eficiente y correcta de los programas de bioseguridad.
        p En cuanto a la desinfección, los desinfectantes son los productos más utilizados. Según Anzola et al. (2008), los desinfectantes son sustancias empleadas para destruir los microorganismos. Es fundamental que estos desinfectantes tengan una acción bactericida residual que perdure durante un tiempo adecuado y sean estables en presencia de residuos orgánicos (p.9).
      .row(titulo="Productos 2").p-0
        p De acuerdo con Anzola et al. (2008), los productos más utilizados para la limpieza en una granja avícola son los limpiadores, los cuales ayudan a eliminar la suciedad. Los limpiadores comunes incluyen jabones y detergentes (p.10).
        p En cuanto a los desinfectantes, los principios activos permitidos y disponibles comercialmente, según Semolinos (2021), son formulados en base a compuestos de amonio cuaternario, aldehídos (como el formaldehído y el glutaraldehído), sustancias cloradas (como el hipoclorito sódico y el dióxido de cloro), yodóforos, fenoles o sustancias peroxiacéticas (como el peróxido de hidrógeno y el ácido peracético).
        p Según el mismo autor, un desinfectante ideal debería cumplir con las siguientes características:
        ul.lista-ul.mb-5
          li 
            i.lista-ul__vineta
            | Acción rápida.
          li 
            i.lista-ul__vineta
            | Amplio espectro de acción.
          li 
            i.lista-ul__vineta
            | Alto poder de penetración incluso en condiciones difíciles.
          li 
            i.lista-ul__vineta
            | Eficacia independiente de las condiciones de trabajo.
          li 
            i.lista-ul__vineta
            | Destrucción total de microorganismos. 
          li 
            i.lista-ul__vineta
            | No corrosivo y 100% biodegradable.
      .row(titulo="Métodos").p-0
        p Las operaciones de limpieza y desinfección en una granja avícola utilizan métodos de limpieza por:
        p <strong>Arrastre mecánico.</strong>
        p La eliminación de los microorganismos junto con grasas naturales, suciedad y células descamativas, se hace por medio del uso de agua, jabón y fricción.
        p <strong>Sustancias químicas.</strong>
        p Se usan antisépticos y desinfectantes.
        p <strong>Esterilización</strong>
        p.mb-5 Se usan medios físicos o químicos.
        p Los tipos de limpieza pueden ser: 
        p.mb-5 <strong>Limpieza en seco:</strong>
        p Se realiza la remoción de los residuos por medio del uso de cepillos o un método físico, en equipos y superficies. 
        p <strong>Limpieza húmeda:</strong>
        p Se emplea una solución limpiadora compuesta por agua y un detergente normalmente.
        p <strong>Limpieza manual:</strong>
        p Se hace con acción mecánica fuerte, con el frotado o fregado con cepillo u otro elemento.
        p <strong>Limpieza en el sitio:</strong>
        p Utiliza una solución de limpieza aplicada a las superficies internas de los equipos, tanques y circuitos, por recirculación.
      .row(titulo="Frecuencia").p-0
        p La frecuencia de los procesos de limpieza y desinfección en una granja avícola puede variar dependiendo del tipo de utensilio, equipo o instalación y se clasifican generalmente en los siguientes intervalos:
        p <strong>Diarias:</strong> Algunos utensilios y equipos requieren ser limpiados y desinfectados a diario debido a su constante uso y exposición.
        p <strong>Semanales:</strong> Otros utensilios, equipos o áreas pueden requerir limpieza y desinfección semanalmente, considerando la frecuencia y nivel de contaminación a los que están expuestos.
        p <strong>Mensuales:</strong> Algunas instalaciones o áreas menos expuestas o de menor uso pueden requerir limpieza y desinfección mensualmente.
        p Es importante tener en cuenta estas frecuencias para mantener la higiene y la bioseguridad en la granja avícola.
      .row(titulo="Fichas técnicas").p-0
        p En relación a las fichas técnicas, los productos de limpieza y desinfección deben contar con información detallada que se encuentra en estos documentos. Según FENAVI (2011), las fichas técnicas proporcionan información como el nombre comercial del producto, número de registro (ICA u otros), laboratorio productor y distribuidor, composición, presentación, indicaciones de uso, dosis, clasificación toxicológica y condiciones de almacenamiento. En el caso de medicamentos o biológicos, también se incluyen contraindicaciones y períodos de resguardo (p.10). Es importante que los empleados conozcan estas fichas técnicas para garantizar su seguridad.
        p En las granjas avícolas bioseguras, es fundamental conocer y seguir las recomendaciones e indicaciones presentes en las fichas técnicas de los productos de limpieza y desinfección. Esto permite un uso adecuado de los productos, mejorando la eficacia de los procesos de limpieza y desinfección.
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 15.1 Equipos para lavado y desinfección

    .bloque-texto-g.color-acento-contenido2.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema15/img-67.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El lavado y desinfección de equipos es indispensable para evitar la proliferación microbiológica de agentes patógenos que pueden alterar la salud de los animales y retardar las etapas productivas, provocando un aumento en el consumo de alimento y baja en la rentabilidad. Los equipos y utensilios utilizados en estos procedimientos en una granja avícola fortalecen los programas de bioseguridad.

    h2 Tipos 

    p Los equipos se clasifican según el proceso, en la siguiente forma:
    p - De limpieza, se utilizan los siguientes equipos:
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Hidrolavadora
      li 
        i.lista-ul__vineta
        | Bomba de espalda o fumigadora
      li 
        i.lista-ul__vineta
        | La fumigadora estacionaria
      li 
        i.lista-ul__vineta
        |  Nebulizador
      li 
        i.lista-ul__vineta
        | Flameador y Utensilios como: 
      ul.lista-ul.mb-5
        li 
          i.lista-ul__vineta
          | Escobas
        li 
          i.lista-ul__vineta
          | Cepillos 
        li 
          i.lista-ul__vineta
          | Baldes
        li 
          i.lista-ul__vineta
          | Esponjas
    p - De desinfección, en este caso se pueden utilizan equipos como:
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Aspersor 
      li 
        i.lista-ul__vineta
        | Bromo nebulizador y 
      li 
        i.lista-ul__vineta
        | Utensilios como: 
      li 
        i.lista-ul__vineta
        | Baldes
      li 
        i.lista-ul__vineta
        | Paños 
      li 
        i.lista-ul__vineta
        | Guantes

    h2 Funcionamiento 

    p Los equipos de limpieza y desinfección tienen la descripción detallada del funcionamiento en la ficha técnica suministrada por el fabricante y muestra:
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Los requerimientos 
      li 
        i.lista-ul__vineta
        | Partes 
      li 
        i.lista-ul__vineta
        | Función
      li 
        i.lista-ul__vineta
        | Especificaciones técnicas
      li 
        i.lista-ul__vineta
        | Atributos
      li 
        i.lista-ul__vineta
        | Sistemas y subsistemas técnicos del equipo
      li 
        i.lista-ul__vineta
        | Descripción general del producto
    p Toda esta información es vital para el avicultor, por lo que es obligatorio que los elementos de limpieza y desinfección la ofrezcan de manera directa sobre la etiqueta o folletos que entrega junto con el producto. 

    h2 Operación 

    p Los equipos de limpieza y desinfección tienen la descripción de la forma como el cliente debe operar el producto, para ello da recomendaciones de uso y la descripción del mismo en la ficha técnica del equipo. 

    h2 Mantenimiento 

    p En una granja avícola es necesario implementar los siguientes programas:
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Definición de tiempos para el mantenimiento preventivo y correctivo de los equipos de limpieza y desinfección para evitar fallas técnicas, deterioro, manejo de inventarios. 
      li 
        i.lista-ul__vineta
        | También es importante capacitar al operario y tener en cuenta la ficha técnica y los manuales de uso para y mejorar la vida útil el equipo.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 15.2 Desinfectantes y detergentes

    p Según la Resolución 223 de 2021 define desinfectante un” agente que elimina la mayoría de los microorganismos patógenos, pero no necesariamente todas las formas microbianas esporuladas en objetos y superficies inanimados” (p.3) y detergente según Resolución 689 de 2016 define detergente a toda “sustancia o preparado que contenga jabón u otros tensoactivos que se utilicen en procesos de lavado con agua. Los detergentes podrán adoptar cualquier forma (líquido, polvos, pasta, barra, pastilla, formas moldeadas, entre otros)” (p. 4). 
    p.mb-5 Tanto desinfectantes como detergentes son insumos o sustancias químicas para la desinfección de una granja avícola; para el manejo de tales sustancias químicas según FENAVI (2020a) es importante tener en cuenta las condiciones generales como son: inventario de productos químicos, hojas de seguridad y rotulado de envase, compra del producto, transporte del producto, almacenamiento, utilización, kit de derrames y manejo de residuos.

    .tarjeta.tarjeta.color-acento-contenido.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Desinfectantes y detergentes
            p Estos productos son fundamentales para mantener la limpieza y la higiene en las instalaciones y equipos de una granja avícola, contribuyendo a prevenir la propagación de enfermedades y garantizar la salud de las aves. Las opciones de desinfectantes y detergentes son variadas, y es esencial seleccionar los más adecuados para cada necesidad en la granja avícola.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema15/img-68.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Clases y niveles de desinfectantes
            p Se presentan las diferentes clases de desinfectantes utilizados en la industria avícola, como fenoles, amonios, hipocloritos, halogenados, aldehídos y oxidantes. Además, se clasifican según su acción en alto nivel, nivel intermedio y nivel bajo. Esta clasificación ayuda a seleccionar el desinfectante adecuado según el tipo de superficie o equipo a desinfectar, así como el nivel de desinfección requerido en la granja avícola. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema15/img-69.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Dosificación y aplicación
            p La dosificación y aplicación correctas de desinfectantes y detergentes son fundamentales para lograr una eficacia y eficiencia óptimas. Se destacan los elementos clave a tener en cuenta, como seguir las indicaciones específicas de la ficha técnica del producto, que incluyen la cantidad de producto a utilizar, la forma de prepararlo, el tiempo de acción y los métodos de aplicación, como inmersión, aspersión o aplicación manual. Estos aspectos son cruciales para garantizar resultados efectivos en la desinfección en la granja avícola. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema15/img-70.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Categoría toxicológica
            p La categoría toxicológica de los desinfectantes y detergentes es un aspecto importante a considerar en la seguridad y el manejo adecuado de estos productos. En las fichas de seguridad se describen los diferentes riesgos asociados, como mutagenicidad, cancerogenicidad, toxicidad para la reproducción, irritación cutánea, lesiones o irritación ocular grave, y sensibilización respiratoria. Es necesario tener en cuenta esta información para garantizar la protección de los empleados y el personal involucrado en la aplicación de estos productos en la granja avícola.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema15/img-71.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Fichas de seguridad
            p Las fichas de seguridad son documentos esenciales que proporcionan información detallada sobre los riesgos y las medidas de seguridad relacionadas con los desinfectantes y detergentes utilizados en la granja avícola. Estas fichas contienen datos sobre propiedades fisicoquímicas, recomendaciones y precauciones de uso, indicaciones de almacenamiento y transporte, así como información del fabricante y notificaciones sanitarias obligatorias. Es importante que estas fichas estén disponibles y sean fácilmente accesibles para garantizar un manejo seguro de los productos en la granja avícola.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema15/img-72.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Usos y disposición final
            p Los desinfectantes y detergentes tienen diversos usos en la granja avícola, como la desinfección de superficies duras no porosas y ambientes relacionados con la industria alimentaria, restaurantes, hospitales, colegios, consultorios, veterinarias e instituciones en general. Es esencial realizar la desinfección después del proceso de limpieza y evitar mezclar productos con funciones similares. Además, es necesario tener en cuenta las indicaciones y condiciones para la disposición final de los residuos o desechos, cumpliendo con la normatividad ambiental vigente en cada país.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema15/img-73.png', alt='Texto que describa la imagen')

    .col-xl-5.mx-auto
      .tarjeta.color-acento-botones2.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3 Desinfectante y detergentes
                h3 Para profundizar en los temas sobre el uso de desinfectantes y detergentes en el mercado y su conceptualización puede revisar la Resolución 223 de 2021.

    .row.justify-content-center
      .col-lg-4
        a.anexo.mb-4(:href="('https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20223%20%20de%202021.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo.</strong> Resolución 223 de 2021.





</template>

<script>
export default {
  name: 'Tema15',
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
