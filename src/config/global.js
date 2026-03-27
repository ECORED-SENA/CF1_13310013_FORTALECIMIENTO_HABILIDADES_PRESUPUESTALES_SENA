export default {
  global: {
    Name: 'Gestión integral del presupuesto público institucional',
    Description:
      'El presupuesto del SENA organiza y asegura los recursos que hacen posible su misión: formar talento, impulsar innovación y apoyar el empleo. Se financia, principalmente, con aportes parafiscales y asignaciones del Presupuesto General de la Nación, y se distribuye entre funcionamiento e inversión. Su ejecución exige planeación, registro de compromisos, control de pagos y seguimiento con indicadores, garantizando transparencia, eficiencia y alineación con metas institucionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        titulo:
          'Comprender el presupuesto público en Colombia de acuerdo con el marco normativo y legal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificar el sistema presupuestal colombiano',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Reconocer los tipos de presupuesto',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Planificar el presupuesto público conforme a los objetivos estratégicos institucionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Utilizar herramientas y técnicas de proyección financiera en la aplicación del presupuesto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Aplicar el método para la formulación del presupuesto',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Asistir en la gestión del presupuesto de acuerdo con la normatividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Ejecutar compromisos y pagos de la planeación presupuestal',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Apoyar en el control de la ejecución del presupuesto de los recursos públicos según la normatividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Implementar mecanismos de control en reportes financieros',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Identificar desviaciones presupuestales',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Proponer recomendaciones sobre el control del presupuesto, teniendo en cuenta los objetivos institucionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Implementar mecanismos de control en reportes financieros',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Elaborar recomendaciones del presupuesto de acuerdo con los objetivos institucionales',
            hash: 't_5_1',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Presupuesto público',
      referencia: 'SENA. (2024). Presupuesto General SENA – Transparencia.',
      tipo: 'Sitio web',
      link:
        'https://www.sena.edu.co/es-co/transparencia/Paginas/presupuesto-general.aspx ',
    },
  ],
  glosario: [
    {
      termino: 'Compromiso',
      significado:
        'Actos realizados por los órganos que, al contratar y obligar el presupuesto, desarrollan el objeto de la apropiación presupuestal.',
    },
    {
      termino: 'Fondos públicos',
      significado:
        'Recursos financieros tributarios y no tributarios generados por la producción o prestación de bienes y servicios de entidades públicas.',
    },
    {
      termino: 'Gastos generales',
      significado:
        'Gastos relacionados con la adquisición de bienes y servicios necesarios para cumplir funciones legales, incluyendo impuestos y multas.',
    },
    {
      termino: 'Hacienda nacional',
      significado:
        'Representa el patrimonio del Estado en entidades no empresariales del sector público.',
    },
    {
      termino: 'Ingresos públicos',
      significado:
        'Valores monetarios recibidos o causados por ingresos corrientes, venta de bienes y servicios, transferencias y otros.',
    },
    {
      termino: 'Planeación',
      significado:
        'Selección de misiones, objetivos, estrategias, políticas, programas y procedimientos para alcanzarlos.',
    },
    {
      termino: 'Presupuesto general de la nación',
      significado:
        'Documento oficial que define el gasto del gobierno por vigencia fiscal y la forma de obtener los recursos necesarios.',
    },
    {
      termino: 'Presupuestos del sector público',
      significado:
        'Conjunto de presupuestos aprobados por el Congreso, gobiernos regionales y locales, empresas públicas y organismos descentralizados.',
    },
    {
      termino: 'Programación del ingreso y del gasto',
      significado:
        'Proceso técnico que determina el comportamiento probable de la ejecución mensual y trimestral de ingresos y gastos.',
    },
    {
      termino: 'Programación presupuestaria en las entidades',
      significado:
        'Fase en la que las entidades definen prioridades, demanda global de gasto, metas presupuestarias y estructura de financiamiento.',
    },
    {
      termino: 'Recursos',
      significado: 'Grupo de ingresos que financia el gasto autorizado.',
    },
    {
      termino: 'Reserva presupuestal',
      significado:
        'Compromisos pendientes de pago para la vigencia siguiente identificados en el SIIF.',
    },
    {
      termino: 'Rezago presupuestal',
      significado:
        'Suma de reservas presupuestales y cuentas por pagar pendientes para la siguiente vigencia fiscal.',
    },
    {
      termino: 'Rubro',
      significado:
        'Título que designa un grupo de partidas o cuentas contables.',
    },
    {
      termino: 'Transacción',
      significado:
        'Operación sustentada que genera un registro contable y afecta cuentas de distinta naturaleza.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2023). Ley 2342 de 2023. Por la cual se decreta el Presupuesto General de la Nación para la vigencia fiscal 2024. Diario Oficial No. 52.418.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2023). Ley 2294 de 2023. Por la cual se expide el Plan Nacional de Desarrollo 2022-2026: Colombia, potencia mundial de la vida. Diario Oficial No. 52.272.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1989). Ley 38 de 1989. Por la cual se expiden normas sobre el presupuesto general de la Nación. Diario Oficial No. 38.639.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2003). Ley 819 de 2003. Por la cual se dictan normas orgánicas en materia de presupuesto, responsabilidad y transparencia fiscal. Diario Oficial No. 45.231.',
      link: '',
    },
    {
      referencia:
        'Contraloría General de la República. (2020). Guía para la ejecución presupuestal en entidades públicas.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2018). Manual para la planificación y seguimiento de proyectos de inversión pública.',
      link: '',
    },
    {
      referencia:
        'Fedesarrollo. (2021). Eficiencia en la ejecución presupuestal en Colombia: retos y oportunidades.',
      link: '',
    },
    {
      referencia:
        'González García, F. (2021). Control y ejecución del presupuesto público. Ediciones U.',
      link: '',
    },
    {
      referencia:
        'Marcel, M., Guzmán, M., y Saginés, M. (2014). Presupuestos para el desarrollo en América Latina. Banco Interamericano de Desarrollo.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. (2019). Aspectos generales del proceso presupuestal colombiano (4.ª ed. rev.). Dirección General del Presupuesto Público Nacional.',
      link: '',
    },
    {
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos. (2020). Revisión de la gestión financiera pública en Colombia.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1996). Decreto 111 de 1996.',
      link: '',
    },
    {
      referencia:
        'Restrepo, L. (2017). Planeación estratégica y gestión del presupuesto en el sector público. ECOE Ediciones.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (2024). Presupuesto general SENA – transparencia.',
      link:
        'https://www.sena.edu.co/es-co/transparencia/Paginas/presupuesto-general.aspx',
    },
    {
      referencia:
        'Sierra, A. (2019). Gestión financiera pública en Colombia: conceptos y aplicaciones. Universidad Nacional de Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
}
