export default {
  global: {
    componenteFormativo:
      'Conceptos y normatividad de bioseguridad en granjas avícolas',
    descripcionCurso:
      'El mayor riesgo que se puede tener en una granja avícola al no contar con un plan de bioseguridad es el ingreso de enfermedades que pueden afectar significativamente la producción, este concepto quiere decir ¨ hacer las cosas bien, aplicando todos los protocolos para evitar su ingreso¨, dichos sistemas deben ser acordes con cada región y las condiciones de cada productor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistema de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de sistemas de producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Requisitos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Componentes',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plan de Ordenamiento Territorial (POT)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Aspectos estructurales que define el POT',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Concesión de aguas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Programa',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procedimientos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Protocolos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Programa de bioseguridad para granjas en avícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características de la bioseguridad en una granja avícola',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Aplicabilidad',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Normatividad para granjas avícolas bioseguras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Legislación ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo:
          'Procedimientos operativos estandarizados de saneamiento (POES)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Objetivo',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Ventajas',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Parámetros de verificación de los POES',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Documentación de aplicación del POES',
            hash: 't_8_4',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Seguridad y salud en trabajo en granjas avícolas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Filtros sanitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Clases',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Pediluvio',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Rodaluvios',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Arcos de desinfección',
            hash: 't_10_4',
          },
          {
            numero: '10.5',
            titulo: 'Unidades sanitarias',
            hash: 't_10_5',
          },
          {
            numero: '10.6',
            titulo: 'Cajas de desinfección',
            hash: 't_10_6',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Ingreso de personas a granja y áreas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Importancia',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Protocolo',
            hash: 't_11_2',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Insumos pecuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '12.1',
            titulo: 'Ingreso de insumos pecuarios',
            hash: 't_12_1',
          },
          {
            numero: '12.2',
            titulo: 'Protocolos',
            hash: 't_12_2',
          },
          {
            numero: '12.3',
            titulo: 'Procedimiento técnico',
            hash: 't_12_3',
          },
          {
            numero: '12.4',
            titulo: 'Normativa sanitaria de Insumos pecuarios',
            hash: 't_12_4',
          },
        ],
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'Ingreso de animales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '13.1',
            titulo: 'Protocolos',
            hash: 't_13_1',
          },
          {
            numero: '13.2',
            titulo: 'Principios de bienestar animal',
            hash: 't_13_2',
          },
          {
            numero: '13.3',
            titulo: 'Normatividad de bienestar animal',
            hash: 't_13_3',
          },
        ],
      },
      {
        nombreRuta: 'tema14',
        numero: '14',
        titulo: 'Equipos y herramientas en establecimientos avícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '14.1',
            titulo: 'Concepto',
            hash: 't_14_1',
          },
          {
            numero: '14.2',
            titulo: 'Tipos',
            hash: 't_14_2',
          },
          {
            numero: '14.3',
            titulo: 'Mantenimiento',
            hash: 't_14_3',
          },
          {
            numero: '14.4',
            titulo: 'Fichas técnicas',
            hash: 't_14_4',
          },
        ],
      },
      {
        nombreRuta: 'tema15',
        numero: '15',
        titulo: 'Limpieza, desinfección e higienización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '15.1',
            titulo: 'Equipos para lavado y desinfección',
            hash: 't_15_1',
          },
          {
            numero: '15.2',
            titulo: 'Desinfectantes y detergentes',
            hash: 't_15_2',
          },
        ],
      },
      {
        nombreRuta: 'tema16',
        numero: '16',
        titulo: 'Camas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '16.1',
            titulo: 'Tipos de camas',
            hash: 't_16_1',
          },
          {
            numero: '16.2',
            titulo: 'Características',
            hash: 't_16_2',
          },
          {
            numero: '16.3',
            titulo: 'Manejo de la cama',
            hash: 't_16_3',
          },
        ],
      },
      {
        nombreRuta: 'tema17',
        numero: '17',
        titulo: 'Sanitización y estabilización de la poliniza y gallinaza',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema18',
        numero: '18',
        titulo: 'Mortalidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '18.1',
            titulo: 'Protocolo de recolección',
            hash: 't_18_1',
          },
          {
            numero: '18.2',
            titulo: 'Prácticas de disposición',
            hash: 't_18_2',
          },
          {
            numero: '18.3',
            titulo: 'Compostaje',
            hash: 't_18_3',
          },
          {
            numero: '18.4',
            titulo: 'Técnicas de manejo',
            hash: 't_18_4',
          },
        ],
      },
      {
        nombreRuta: 'tema19',
        numero: '19',
        titulo: 'Plagas y vectores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '19.1',
            titulo: 'Control de plagas',
            hash: 't_19_1',
          },
          {
            numero: '19.2',
            titulo: 'Plaguicidas',
            hash: 't_19_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_6_722203.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Protocolos de bioseguridad, ejemplo de la Empresa Avicol. 11.2',
      referencia:
        'Henao. M. F. (2012). Bioseguridad, acceso a plantas y granjas en Avicol. [Video]. YouTube. https://www.youtube.com/watch?v=ii6ADfwbTgo',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ii6ADfwbTgo',
    },
    {
      tema:
        'FICHA TÉCNICA uso de fichas técnicas del insumo amoniaco cuaternario para la desinfección. 12',
      referencia:
        'Productos Químicos Panamericanos. (2020). Ficha técnica: desinfectante amonio cuaternario. 5ta generación. https://pqpprofesional.com/wp-content/uploads/2023/01/FT-CC-570-Desinfectante-amonios-cuaternarios-5ta.-g-10-PQP-Profesional.pdf',
      tipo: 'PDF',
      link:
        'https://pqpprofesional.com/wp-content/uploads/2023/01/FT-CC-570-Desinfectante-amonios-cuaternarios-5ta.-g-10-PQP-Profesional.pdf',
    },
    {
      tema: 'HOJA DE SEGURIDAD 13.2',
      referencia:
        'Productos Químicos Panamericanos. (2020). Hoja de seguridad. Desinfectante amonio cuaternario, 5ta generación. https://www.pqp.com.co/wp-content/uploads/2020/03/HS-CC-307-Desinfectante-Amonio-Cuaternarios-5-Generaci%C3%B3n.pdf',
      tipo: 'PDF',
      link:
        'https://pqpprofesional.com/wp-content/uploads/2023/04/HS-CC-307-Desinfectante-Amonio-Cuaternarios-5-Generacion.pdf',
    },
    {
      tema: 'Organización Mundial de Sanidad Animal (OEI) 14.2',
      referencia:
        'Organización Mundial de Sanidad Animal. (2021). https://www.oie.int/es/que-hacemos/sanidad-y-bienestar-animal/bienestar-animal/',
      tipo: 'Web',
      link:
        'https://www.oie.int/es/que-hacemos/sanidad-y-bienestar-animal/bienestar-animal/',
    },
    {
      tema: 'Ficha técnica 15.4',
      referencia:
        'Vidapec. Criadora infrarroja de termostato. (s.f) https://vidapec.com/wp-content/uploads/2018/02/CPIJ0204005.pdf',
      tipo: 'PDF',
      link: 'https://vidapec.com/wp-content/uploads/2018/02/CPIJ0204005.pdf',
    },
    {
      tema: 'Especificaciones técnicas del producto Fumigadora 20L 17.2',
      referencia:
        'Lahura. Fumigadora 20L. (2019). https://www.lhaura.com/wp-content/uploads/2019/05/FUMIGADORA-20-LT.-MULITA-Ref.-10517ActualMay10_2019.pdf',
      tipo: 'PDF',
      link:
        'https://www.lhaura.com/wp-content/uploads/2019/05/FUMIGADORA-20-LT.-MULITA-Ref.-10517ActualMay10_2019.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas, acciones y procedimientos que se deben tomar para evaluar, evitar, prevenir, mitigar, manejar y/o controlar los posibles riesgos sanitarios y sus efectos directos e indirectos en la salud humana, el medio ambiente, la biodiversidad, la productividad y producción pecuaria.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'es la transferencia de agentes de riesgo de una fuente contaminada a otra que no los contiene, debido a la inexistente separación o protección inadecuada de los productos durante el almacenamiento, malas prácticas higiénicas del personal, áreas deficientes de limpieza y desinfección y movimiento entre áreas sin preservar las medidas sanitarias y de bioseguridad.',
    },
    {
      termino: 'Detergente',
      significado:
        'agente sintético utilizado para el proceso de limpieza, capaz de emulsificar la grasa. Los detergentes contienen surfactantes que no se precipitan en agua dura y pueden contener enzimas (proteasas/lipasas/amilasas) y blanqueadores.',
    },
    {
      termino: 'Desinfectante',
      significado:
        'agente o sustancia química utilizada para inactivar prácticamente todos los microorganismos patógenos reconocidos, pero no necesariamente todas las formas de vida microbiana (ej.: esporas). Su aplicación solamente está indicada sobre objetos inanimados.',
    },
    {
      termino: 'Galpón',
      significado:
        'establecimiento cerrado que aloja un grupo de aves de la misma especie y edad, bajo el mismo manejo sanitario, productivo y medidas de bioseguridad comunes.',
    },
    {
      termino: 'Limpieza',
      significado:
        'es la remoción de la materia orgánica e inorgánica visible (ej.: sangre, sustancias proteicas y otros residuos) presente en las superficies de los instrumentos o equipos para la salud. Es generalmente realizada con agua y detergente y debe ser iniciada inmediatamente después de la utilización de estos instrumentos o equipos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anzola, H., Pedraza, Á., & Lezzaca, M. (2008). Las buenas prácticas de bioseguridad en granjas de reproducción aviar y planta de incubación. Conceptos básicos para su aplicación en Colombia. Guía Metodológica. ICA, 56.',
      link:
        'https://www.ica.gov.co/getattachment/af9943f9-87a5-4897-9962-2d414fa0fdbf/Publicacion-10.aspx',
    },
    {
      referencia:
        'AviNews. (2015). Tipos y manejo de la cama - yacija para aves. En [Sitio Web]',
      link:
        'https://avicultura.info/tipos-y-manejo-de-la-cama-yacija-para-aves/',
    },
    {
      referencia: 'Corantioquia. (2019). Glosario. [Sitio Web]',
      link: 'https://www.corantioquia.gov.co/glosario/',
    },
    {
      referencia:
        'Cuellar, A. (2021). Sistemas de producción avícola y alojamiento en gallinas ponedoras. [Sitio Web]. Veterinaria digital.',
      link:
        'https://www.veterinariadigital.com/articulos/sistemas-de-produccion-avicola-y-alojamiento-en-gallinas-ponedoras/#Sistema_de_produccion_semiintensivo_o_de_piso',
    },
    {
      referencia:
        'Decreto 1072. (2015). [Ministerio del trabajo]. Por medio del cual se expide el decreto único reglamentario del Sector Trabajo (p. 326).',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR%20Sector+Trabajo+Actualizadoa+15+de+abril+de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8%0A',
    },
    {
      referencia:
        'Decreto 1076, 2915. [Ministerio de Ambiente y desarrollo económico]. Por medio del cual se expide el decreto único reglamentario del sector Ambiente y Desarrollo Sostenible.',
      link:
        'http://www.ideam.gov.co/documents/11769/46844622/Dec+1076_2015.pdf/8c28b13e-0937-42bd-b4a2-4b99114f9362',
    },
    {
      referencia:
        'Decreto 2113. (2017). [Ministerio de Agricultura y desarrollo rural]. «Por el cual se adiciona un Capítulo al Título 3 de la parte 13 del libro 2 del Decreto 1071 de 2015. Decreto Único Reglamentario del Sector administrativo Agropecuario Pesquero y de Desarrollo Rural». Diciembre.',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Decretos/Decreto No. 2113 de 2017.pdf',
    },
    {
      referencia:
        'Decreto 2981. (2013). [Ministerio de vivienda y desarrollo sostenible], «Reglamenta la prestación del servicio público de aseo». Diciembre 20 de 2013. (p. 44).',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56035',
    },
    {
      referencia:
        'Decreto 1843 (1991). Por el cual se reglamentan parcialmente los Títulos III, V, VI, VII y XI de la Ley 09 de 1979, sobre uso y manejo de plaguicidas.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1359845',
    },
    {
      referencia:
        'Decreto-Ley 2811,1974. [ Ministerio de Ambiente y desarrollo económico]. Por el cual se dicta el Código Nacional de Recursos Naturales Renovables y de Protección al Medio Ambiente.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Decreto-2811-de-1974.pdf',
    },
    {
      referencia: 'Fenavi. (2014). Guía Ambiental para el subsector avícola.',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/GUIA_AMBIENTAL_SUBSECTOR_AVICOLA.pdf',
    },
    {
      referencia:
        'Fenavi. (2018a). Guía rápida. Lo que usted debe saber sobre el manejo sanitario y la tenencia de pollos y gallinas. [Documento Web] Cartilla de la Federación de Avicultores de Colombia.',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/GUÍA-RÁPIDA-AVES-DE-TRASPATIO.pdf',
    },
    {
      referencia:
        'Fenavi. (2018b). Memorias de capacitación. Aspectos claves de la bioseguridad en avicultura. FENAVI. (2011). Código buenas prácticas avícolas - BPAV. En [Documento Web] Cartilla de la Federación de Avicultores de Colombia.',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/CÓDIGO-BUENAS-PRÁCTICAS-AVÍCOLAS-BPAV-V2.pdf',
    },
    {
      referencia:
        'FENAVI. (2018a). Estabilizador de Suelo a partir de Gallinaza/pollinaza. El aliado estratégico de su cultivo. En [Documento Web] Cartilla de la Federación de Avicultores de Colombia',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/cartilla_estab_suelo_a_partir_de_gallinaza_pollinaza_dic2014.pdf',
    },
    {
      referencia:
        'FENAVI. (2018b). Guía rápida. Consideraciones técnicas para la gestión del residuo hídrico en granjas avícolas. [Documento Web] Cartilla de la Federación de Avicultores de Colombia.',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Guia_Rapida_Ambiental_Gestion_integral_del_recurso_hidrico.pdf',
    },
    {
      referencia:
        'FENAVI. (2018c). Guía Rápida. Ambiental residuos orgánicos granjas. [Documento Web] Cartilla de la Federación de Avicultores de Colombia. 4.',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Guia_Rapida_Ambiental_Residuos_Organicos_-Granjas.pdf',
    },
    {
      referencia:
        'FENAVI. (2019). Guía rápida. Alternativa para el manejo de residuos sólidos ordinarios en granja.',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Guia_Rapida_Ambiental_Manejo_Residuos_Solidos.pdf',
    },
    {
      referencia:
        'FENAVI. (2019a). Aspectos productivos y administrativos de la industria avícola. En [Documento Web] Cartilla de la Federación de Avicultores de Colombia.',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/ASPECTOS-PRODUCTIVOS-Y-ADMINISTRATIVOS-EN-LA-INDUSTRIA-AV%C3%8DCOLA.pdf',
    },
    {
      referencia:
        'FENAVI. (2019b). Bioseguridad en la industria avícola. [Documento Web] Cartilla de la Federación de Avicultores de Colombia, 36',
      link:
        'https://fenavi.org/publicaciones-programa-tecnico/bioseguridad-en-la-industria-avicola/',
    },
    {
      referencia:
        'FENAVI. (2019c). Confort Animal en la industria avícola. [Documento Web] Cartilla de la Federación de Avicultores de Colombia',
      link:
        'https://fenavi.org/publicaciones-programa-tecnico/confort-animal-en-la-industria-avicola/#confort-animal-industria-avicola/1',
    },
    {
      referencia:
        'FENAVI. (2019d). Sanidad en la industria Avícola. [Documento Web] Cartilla de Federación de Avicultores de Colombia, 99-117',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/SANIDAD-EN-LA-INDUSTRIA-AVÍCOLA.pdf',
    },
    {
      referencia:
        'FENAVI. (2020a). Consideraciones ambientales del sector avícola en situaciones de contingencias. [Documento Web] Cartilla de la Federación de Avicultores de Colombia, 1-22',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/cartilla-consideraciones-ambientales-situaciones-de-emergencia/#cartilla-consideraciones-ambientales-situaciones-de-emergencia/1',
    },
    {
      referencia:
        'FENAVI. (2020b). Todo lo que debe saber sobre la Normativa Ambiental en el sector Avícola. 44.',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/cartillas/cartilla-normativa-ambiental-en-el-sector-avicola/',
    },
    {
      referencia: 'ICA. (2020). ¿Qué es el bienestar animal? En [Sitio Web].',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/bienestar-animal.aspx',
    },
    {
      referencia:
        'ICA. (2017). Bioseguridad. [Documento web] Serie - Manuales de Implementación.',
      link: 'http://repiica.iica.int/docs/b2046e/b2046e.pdf',
    },
    {
      referencia:
        'Ley 1454. (2011). [Congreso de Colombia]. «Por la cual se dictan normas orgánicas sobre: ordenamiento territorial y se modifican otras disposiciones». Junio 28 de 2011. 1-17.',
      link:
        'http://wsp.presidencia.gov.co/Normativa/Leyes/Documents/ley145428062011.pdf',
    },
    {
      referencia:
        'Ley 1774. (2016). [ Congreso de Colombia], «Se declara a los animales como seres sintientes y no cosas y por tanto recibirán especial protección contra el sufrimiento y el dolor...» enero 6 de 2016. 243-248.',
      link:
        'http://es.presidencia.gov.co/normativa/normativa/LEY%201774%20DEL%206%20DE%20ENERO%20DE%202016.pdf',
    },
    {
      referencia:
        'Ley 388. (1997). [Congreso de Colombia], «Plan de Ordenamiento Territorial».',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339#:~:text=PLAN%20DE%20ORDENAMIENTO%20TERRITORIAL&text=Se%20define%20como%20el%20conjunto,y%20la%20utilizaci%C3%B3n%20del%20suelo',
    },
    {
      referencia:
        'Mora Huertas, F. (2019). Guía rápida, Lo que usted debe saber sobre elementos básicos conceptuales de ordenamiento territorial. III Simposio internacional Avícola. FENAVI (pp. 1-8). Pedrozo, J. (2005). Manual de producción avícola. Manual SENA. Centro Latinoamericano de especies menores «CLEM».',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4271/avicultura_2005.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Resolución 0253. (2020). Por la cual se adopta el Manual de Condiciones de Bienestar Animal propias de cada una de las especies de producción del sector agropecuario; bovina, bufalina, aves de corral y animales acuáticos". [Ministerio de Agricultura y Desarrollo Rural]".',
      link:
        'https://fenavi.org/wp-content/uploads/2020/10/RESOLUCION-0253-DE-2020.pdf',
    },
    {
      referencia:
        'Resolución 090464. (2021). [Instituto Colombiano Agropecuario]. «Por medio de la cual se establece el Registro Sanitario de Predio Pecuario-RSPP». Enero 20 de 2021. 1-15. h',
      link:
        'https://www.ica.gov.co/getattachment/74c359e3-9201-4db9-849f-98ab5a9e2d0b/2021R90464.aspx',
    },
    {
      referencia:
        'Resolución 1056. (1996). [Instituto Colombiano Agropecuario (ICA]. Por la cual se dictan disposiciones sobre el control técnico de los Insumos Pecuarios y se derogan las Resoluciones No. 710 de 1981, 2218 de 1980 y 444 de 1993. 1056(710), 24.',
      link:
        'https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/1996/1996r1056',
    },
    {
      referencia:
        'Resolución 1111. (2017). [Ministerio del Trabajo]. «Por el cual se definen los Estándares mínimos del Sistema de Seguridad y Salud en el trabajo para empleadores y contratantes». Marzo 27 de 2017. 36.',
      link:
        'http://www.mintrabajo.gov.co/documents/20147/647970/Resolución+1111-+estándares+minimos-marzo+27.pdf',
    },
    {
      referencia:
        'Resolución 1382. (2013). [Ministerio de Salud], «Por la cual se establecen los límites máximos para residuos de medicamentos veterinarios en los alimentos de origen animal, destinados al consumo humano» mayo 2 de 2013',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolución 1382 de 2013.pdf',
    },
    {
      referencia:
        'Resolución 2184 (2019). [Ministerio de Ambiente y Desarrollo Económico]. Por el cual se modifica la resolución 668 sobre el uso racional de bolsas plásticas y se adoptan otras disposiciones.',
      link:
        'https://www.minambiente.gov.co/documento-entidad/resolucion-2184-de-2019/',
    },
    {
      referencia:
        'Resolución 2674. (2013). [Ministerio de salud y protección social] "Por el cual se reglamenta el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones (p. 37).',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'Resolución 3650. (2014). [Instituto Colombiano Agropecuario.]. "Por medio de la cual se establecen los requisitos para el registro como productor de material genético aviar y licencias de venta de material genético aviar. Noviembre 13 de 2014 (pp. 1-37).',
      link:
        'https://www.ica.gov.co/getattachment/3c2f3642-85a5-4622-91b5-5a31597c2cb4/2014R3-(1).aspx',
    },
    {
      referencia:
        'Resolución 3651. (2014). [Instituto Colombiano Agropecuario] «Por medio de la cual se establecen los requisitos para la certificación de granjas bioseguras de postura y/o levante y se dictan otras disposiciones». Noviembre 13 de 2014. 31.',
      link:
        'https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx',
    },
    {
      referencia:
        'Resolución 3652. (2014). [ICA] «Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de engorde y se dictan otras disposiciones». Noviembre 13 de 2014. 21.',
      link:
        'https://www.ica.gov.co/getattachment/124802ad-c49c-470d-809e-a9ce5ad3db76/2014R3652.aspx',
    },
    {
      referencia:
        'Resolución 773. (2020). [Ministerio de salud y protección social]. Por medio de la cual se adopta el protocolo de bioseguridad para el manejo y control del ingreso de insumos pecuarios». Mayo 14 de 2020',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolución No. 773 de 2020.pdf',
    },
    {
      referencia:
        'Resolución 789. (2007). [Instituto Colombiano Agropecuario]. "Por la cual se establecen obligaciones y responsabilidades en el manejo de insumos y sustancias químicas y biológicas de uso pecuario y sus residuos o desechos con propiedades o características peligrosas, y se dictan o. 1-15.',
      link:
        'https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/2007/789#:~:text=Resoluci%C3%B3n&text=Por%20la%20cual%20se%20establecen,y%20se%20dictan%20otras%20disposiciones',
    },
    {
      referencia:
        'Semolinos, M. (2021). Desinfección inteligente en explotaciones avícolas de reproducción: punto clave de la rentabilidad. En Product Manager, OX-CTA S.L.',
      link:
        'http://bioseguridad.net/wp-content/uploads/2016/05/0615-Maria_Somolinos1.pdf',
    },
    {
      referencia:
        'Valencia, C. A. M., & Rodríguez, M. L. B. (2010). Manual de Gestión Integral de Residuos. Manual de Gestión Integral de Residuos, 1, 105.',
      link:
        'http://www.ins.gov.co/lineas-de-accion/Red-Nacional-Laboratorios/Documentos de inters SRNL/PGIRH INS.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
