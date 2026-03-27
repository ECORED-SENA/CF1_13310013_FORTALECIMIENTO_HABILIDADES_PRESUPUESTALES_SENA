<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Planificar el presupuesto público conforme a los objetivos estratégicos institucionales
    .row.align-items-center      
          .col-lg-9(data-aos="fade-left")
            p(data-aos="fade-right") La planificación del presupuesto público permite alinear la asignación de recursos con los objetivos estratégicos de las instituciones, garantizando coherencia entre la planeación, la gestión financiera y los resultados esperados. Este proceso implica organizar ingresos y gastos de manera anticipada, con base en metas institucionales, políticas públicas y prioridades definidas en los planes de desarrollo.
            .row.justify-content-center
              .col-md-7.col-lg-5.ps-lg-0.px-0
                figure
                  img(src="@/assets/curso/tema2/img1.png", alt="", style="width: 430px").m-auto
              .col-md-7.col-lg-7.bg-color-5
                .row.align-items-center.h-100
                  .col
                    .p-4
                      p.mb-0 Una adecuada planificación presupuestal facilita que las entidades públicas prioricen programas, optimicen el uso de los recursos y mantengan sostenibilidad fiscal. De esta manera, el presupuesto se convierte en un instrumento de gestión que articula la planeación institucional con la ejecución de proyectos orientados al bienestar colectivo.
          .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/tema2/img2.png", alt="", style="width: 300px").m-auto
    Separador
    //- Inicio Tema1
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Utilizar herramientas y técnicas de proyección financiera en la aplicación del presupuesto
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")        
        p(data-aos="fade-left") La proyección financiera constituye un elemento fundamental en la planificación del presupuesto público, ya que permite <b>anticipar escenarios económicos y estimar la disponibilidad de recursos.</b> A través de estos procesos se analizan tendencias, se estiman ingresos y se ordena el gasto con una visión estratégica alineada con los objetivos institucionales.
        p(data-aos="fade-left") El Ministerio de Hacienda (2019) señala que las proyecciones financieras se construyen considerando variables como crecimiento económico, inflación, capacidad de endeudamiento y prioridades establecidas por los planes de gobierno. Restrepo (2017) afirma que una proyección adecuada permite traducir metas institucionales en cifras claras, favoreciendo la coherencia entre la planeación y la ejecución presupuestal.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img3.png', alt='')
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Herramientas y técnicas de proyección financiera en el sector público
    //- Titulo nivel 3
    p(data-aos="fade-left") En el sector público se utilizan diversas herramientas que permiten analizar información financiera y proyectar escenarios futuros para la toma de decisiones. Estas técnicas contribuyen a mejorar la planificación del gasto y a garantizar una administración responsable de los recursos del Estado. A continuación, se presentan algunas de las herramientas más utilizadas en la proyección financiera del sector público.
    .row.bg-color-9
      .col-12
        .p-5
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema2/tarjeta01_1.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Series temporales
                        p.card-text.text-center
                        | Analizan datos históricos para estimar comportamientos futuros de ingresos o gastos.
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema2/tarjeta01_2.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Escenarios multianuales
                        p.card-text.text-center
                        | Permiten proyectar recursos y compromisos financieros en varios periodos fiscales.
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema2/tarjeta01_3.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Matrices de riesgo
                        p.card-text.text-center
                        | Identifican posibles factores que pueden afectar la sostenibilidad financiera.
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema2/tarjeta01_4.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Análisis de sensibilidad
                        p.card-text.text-center
                        | Evalúan cómo cambios en variables económicas pueden modificar las proyecciones presupuestales.         
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema2/img4.png', style="max-width: 250px", alt='', data-aos="zoom-in").m-auto
    p(data-aos="fade-left") La aplicación de estas herramientas se relaciona con la exigencia de <b>sostenibilidad fiscal y responsabilidad financiera</b>, establecida en la Ley 819 de 2003. Asimismo, la OCDE (2020) destaca que fortalecer la capacidad de proyección financiera contribuye a <b>reducir brechas de ejecución y mejorar la calidad del gasto público</b>. En consecuencia, la proyección financiera se consolida como un soporte clave para la toma de decisiones y la gestión eficiente del presupuesto público.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Presupuesto Orientado a Resultados (POR) y su implementación
    //- Titulo nivel 3
    p(data-aos="fade-left") El Presupuesto Orientado a Resultados (POR) representa un enfoque de gestión pública que vincula la asignación de recursos con productos, efectos y beneficios sociales medibles. Este modelo busca que el presupuesto no se limite a la ejecución de cifras, sino que permita identificar cambios concretos en el bienestar de la población. Marcel, Guzmán y Saginés (2014) señalan que el POR requiere indicadores claros, líneas base y metas verificables, elementos que facilitan la evaluación del desempeño de los programas      
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el contexto colombiano, la Ley 2294 de 2023, que establece el Plan Nacional de Desarrollo, impulsa una planeación que articula políticas públicas con resultados verificables. Esto refuerza la necesidad de que el presupuesto se relacione directamente con las prioridades del Estado y con el impacto de las intervenciones públicas.
    p(data-aos="fade-left") La implementación del POR implica <b>ajustes en los procesos institucionales, fortalecimiento de los sistemas de información y consolidación de una cultura organizacional orientada a la mejora continua.</b> La OCDE (2020) destaca que la transición hacia este modelo exige capacidades técnicas para medir resultados y ajustar programas con base en evidencia. Asimismo, González García (2021) indica que este enfoque fortalece el control fiscal, ya que permite relacionar los recursos asignados con los logros alcanzados.
    //- Inicio Tarjetas
    .row(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta02_1.svg', alt='')
          h4.card-title.text-center.mb-4 Indicadores de desempeño
          p.text-center Permiten medir avances y evaluar los resultados de los programas públicos.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta02_2.svg', alt='')
          h4.card-title.text-center.mb-4 Líneas base
          p.text-center Establecen la situación inicial sobre la cual se medirán los cambios.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta02_3.svg', alt='')
          h4.card-title.text-center.mb-4 Metas verificables
          p.text-center Definen los resultados esperados en un periodo determinado.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta02_4.svg', alt='')
          h4.card-title.text-center.mb-4 Evaluación de resultados
          p.text-center Permite comparar recursos asignados con los logros alcanzados.
    //- Fin Tarjetas
    p(data-aos="fade-left") En síntesis, el POR busca que el presupuesto público funcione como <b>un instrumento de gestión estratégica</b>, orientado a generar valor público y a fortalecer la rendición de cuentas sobre el uso de los recursos del Estado.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Estrategias de gestión presupuestal
    //- Titulo nivel 3
    p(data-aos="fade-left") La gestión presupuestal requiere mecanismos que permitan adaptar la ejecución financiera a las necesidades institucionales y a las dinámicas de la administración pública. Estas estrategias facilitan ajustes, ampliaciones o compromisos de recursos dentro del marco legal vigente, garantizando coherencia entre planeación, ejecución y control del gasto.
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Entre las principales estrategias de gestión presupuestal se encuentran los traslados presupuestales, las vigencias futuras, las adiciones presupuestales, las incorporaciones presupuestales y el crédito público, cada una con funciones específicas dentro del proceso financiero del Estado.
    //- Titulo nivel 4
    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")                     
        h3.titulo-nivel3 Traslados presupuestales
    //- Fin Titulo nivel 4
    p(data-aos="fade-left") Los <b>traslados presupuestales</b> permiten modificar la distribución interna de los recursos dentro de una entidad sin alterar el monto total del presupuesto aprobado. Este mecanismo se utiliza cuando surgen nuevas necesidades o cuando determinados proyectos requieren fortalecimiento para cumplir metas institucionales.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-5
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img7.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La Ley 38 de 1989 establece que estos movimientos deben respetar el principio de especialización del gasto y contar con justificación técnica. La Contraloría General (2020) señala que una gestión oportuna de los traslados contribuye a evitar retrasos en la ejecución y mantiene la coherencia entre el presupuesto y la planeación institucional.
    p(data-aos="fade-left") Su aplicación exige <b>análisis técnico, estudios de impacto y revisión de la disponibilidad de recursos.</b> Sierra (2019) destaca que este mecanismo introduce flexibilidad en la administración financiera, permitiendo optimizar el desempeño institucional bajo criterios de eficiencia y transparencia.
    //- Titulo nivel 4
    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")                     
        h3.titulo-nivel3 Vigencias futuras
    //- Fin Titulo nivel 4
    p(data-aos="fade-left") Las vigencias futuras permiten comprometer recursos de presupuestos de años posteriores para financiar proyectos cuya ejecución supera el periodo fiscal anual. Este instrumento se utiliza principalmente en obras de infraestructura o programas estratégicos que requieren continuidad en el tiempo.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-12      
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La Ley 819 de 2003 regula este mecanismo y establece que su aprobación debe ser consistente con el Marco Fiscal de Mediano Plazo. Asimismo, el Decreto 111 de 1996 determina criterios que garantizan que estos compromisos no superen la capacidad financiera del Estado.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img8.png', alt='', style="object-fit: cover;")
    p(data-aos="fade-right") El Ministerio de Hacienda (2019) señala que la aprobación de vigencias futuras requiere evaluar riesgos, cronogramas y sostenibilidad fiscal. Fedesarrollo (2021) advierte que una gestión inadecuada puede generar presiones financieras; sin embargo, cuando se utilizan correctamente, permiten garantizar continuidad en proyectos estratégicos y evitar interrupciones que incrementan los costos de inversión pública.
    //- Titulo nivel 4
    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")                     
        h3.titulo-nivel3 Adiciones presupuestales
    //- Fin Titulo nivel 4
    p(data-aos="fade-left") Las adiciones presupuestales incrementan el monto del presupuesto aprobado cuando se identifican nuevas fuentes de financiamiento o cuando los ingresos superan las proyecciones iniciales.    
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-5
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img9.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La Ley 2342 de 2023 contempla este mecanismo como parte del proceso presupuestal anual, siempre condicionado a la disponibilidad real de recursos y a la aprobación de las autoridades competentes. González García (2021) señala que estas adiciones permiten fortalecer programas prioritarios o atender necesidades emergentes sin comprometer la estabilidad fiscal.
    p(data-aos="fade-right") Su aplicación requiere un análisis riguroso del origen de los recursos y su relación con los objetivos institucionales. La Contraloría General (2020) enfatiza que cada adición debe acompañarse de controles que garanticen transparencia en la ejecución.
    //- Titulo nivel 4
    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")                     
        h3.titulo-nivel3 Incorporaciones presupuestales
    //- Fin Titulo nivel 4
    p(data-aos="fade-right") Las incorporaciones presupuestales consisten en incluir en el presupuesto recursos que no estaban contemplados inicialmente, como saldos no ejecutados, rendimientos financieros o transferencias adicionales. El Ministerio de Hacienda (2019) señala que este procedimiento debe asegurar que cada recurso incorporado se destine a rubros coherentes con la normatividad y con los fines institucionales. 
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-12      
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Sierra (2019) indica que este mecanismo permite fortalecer la liquidez institucional y apoyar programas que requieren recursos adicionales. La Contraloría General (2020) destaca que toda incorporación debe contar con soportes documentales que identifiquen origen, cuantía y justificación técnica, garantizando transparencia en el uso de los recursos.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img10.png', alt='', style="object-fit: cover;")
    //- Titulo nivel 4
    .bg-full-width.mt-4
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")                     
        h3.titulo-nivel3 Créditos
    //- Fin Titulo nivel 4
    p(data-aos="fade-right") El <b>crédito público</b> es un instrumento de financiamiento que permite a las entidades asumir obligaciones económicas destinadas a proyectos estratégicos o a la atención de necesidades urgentes.    
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-5
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img11.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La Ley 38 de 1989 y la Ley 819 de 2003 regulan su uso, estableciendo requisitos y límites que aseguren la sostenibilidad fiscal. El Ministerio de Hacienda (2019) señala que las operaciones de crédito deben alinearse con el <b>Marco Fiscal de Mediano Plazo</b> y demostrar capacidad de pago.
    p(data-aos="fade-right") Una adecuada gestión del crédito puede acelerar proyectos de alto impacto y fortalecer la infraestructura pública. Sin embargo, la OCDE (2020) advierte que un endeudamiento sin planificación puede generar presiones fiscales futuras. Por esta razón, Sierra (2019) recomienda evaluar <b>riesgos, tasas, costos y condiciones de mercado</b> antes de asumir cualquier compromiso financiero.
    Separador
    //- Inicio Tema2
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Aplicar el método para la formulación del presupuesto
    p(data-aos="fade-left") La formulación del presupuesto constituye un proceso técnico que permite <b>organizar los recursos institucionales de acuerdo con los objetivos estratégicos y las prioridades de gestión.</b> Este proceso integra análisis institucional, proyecciones financieras y criterios normativos con el fin de garantizar que los recursos públicos se asignen de manera coherente, eficiente y sostenible.
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Aplicar un método para la formulación presupuestal facilita <b>estructurar la planeación financiera, priorizar programas y establecer relaciones claras entre metas institucionales y asignación de recursos.</b> De esta manera, el presupuesto se consolida como un instrumento que orienta la toma de decisiones y fortalece la gestión institucional.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Metodología para la formulación del presupuesto
    //- Titulo nivel 3
    p(data-aos="fade-right") La <b>formulación del presupuesto</b> es un proceso técnico que permite traducir los objetivos institucionales en decisiones financieras. Este proceso integra análisis del contexto, estimaciones económicas y priorización del gasto, con el propósito de asegurar coherencia entre la planeación estratégica y el uso de los recursos públicos.
    p(data-aos="fade-right") El <b>Ministerio de Hacienda (2019)</b> señala que la formulación presupuestal se apoya en herramientas como el <b>Marco de Gasto de Mediano Plazo</b> y en proyecciones macroeconómicas que permiten estimar los recursos disponibles. Asimismo, <b>Sierra (2019)</b> destaca que este proceso debe involucrar distintas áreas de la entidad para integrar componentes técnicos, financieros y misionales, manteniendo coherencia con los principios de sostenibilidad fiscal establecidos en la <b>Ley 819 de 2003.</b> A continuación se sintetizan las principales etapas de esta metodología:
    .row.bg-color-9
      .col-12
        .p-5
          //- Inicio Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3
          .carousel-bg
            .row.justify-content-center.mb-5.align-items-center
              .col-lg-12.mb-3.mb-lg-0.order-lg-2
                SlyderF(columnas="col-xl-4 col-lg-6")
                  .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                    img(src='@/assets/curso/tema2/tarjeta03_1.svg' style="max-width: 100px").mx-auto.mb-3
                    h4.card-title.text-center.mb-4 Diagnóstico institucional
                    p.card-text.text-center
                      | Analizar el contexto de la entidad y los resultados previos para orientar la planeación financiera.
                  .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                    img(src='@/assets/curso/tema2/tarjeta03_2.svg' style="max-width: 100px").mx-auto.mb-3
                    h4.card-title.text-center.mb-4 Definición de objetivos
                    p.card-text.text-center
                      | Establecer prioridades institucionales que orientarán la programación del gasto.
                  .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                    img(src='@/assets/curso/tema2/tarjeta03_3.svg' style="max-width: 100px").mx-auto.mb-3
                    h4.card-title.text-center.mb-4 Estimación de ingresos
                    p.card-text.text-center
                      | Calcular los recursos disponibles según las fuentes de financiamiento y las proyecciones económicas.
                  .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes
                    img(src='@/assets/curso/tema2/tarjeta03_4.svg' style="max-width: 100px").mx-auto.mb-3
                    h4.card-title.text-center.mb-4 Asignación de recursos
                    p.card-text.text-center
                      | Distribuir el presupuesto entre programas y actividades conforme a las prioridades institucionales.
                p.mt-3(data-aos="fade-right") De esta manera, la metodología de formulación presupuestal permite organizar el proceso de planificación financiera y asegurar que las decisiones de gasto respondan a los objetivos estratégicos de la entidad.
          //- Titulo nivel 3
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3
            .titulo-con-imagen.mb-5(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
                h3.titulo-con-imagen__texto Identificación de necesidades institucionales y priorización de recursos
          //- Titulo nivel 3
          p.mt-3(data-aos="fade-right") La formulación del presupuesto requiere identificar con precisión las necesidades institucionales, proceso que implica reconocer brechas, analizar capacidades internas y determinar las demandas que se derivan de la misión de la entidad.
          .row.mb-5
            .col-xl-5.mb-4.mb-xl-0(data-aos="fade-right")
              .row.h-100.bg-color-6.align-items-center.rounded-4
                .col-12
                  .p-2.rounded.h-100
                    p.mb-0 El DNP (2018) señala que este análisis debe basarse en evidencia, revisión de resultados previos y diálogo entre las diferentes áreas institucionales, con el fin de comprender las condiciones que pueden influir en el cumplimiento de las metas.
            .col-xl-3.mb-4.mb-xl-0.text-center(data-aos="left")
              img(src="@/assets/curso/tema1/img5.png", alt="Asesora telefónica" style="width:350px").m-auto
            .col-xl-4.align-self-end(data-aos="fade-right")
              img.mb-3(src="@/assets/curso/tema2/icono.svg", alt="Icono comunicación" style="width:50px").d-none.d-xl-block
              p.mb-0 A partir de este análisis se realiza la priorización de recursos, que consiste en organizar las necesidades identificadas de acuerdo con criterios de impacto, urgencia y disponibilidad financiera. Marcel, Guzmán y Saginés (2014) explican que priorizar implica tomar decisiones responsables para asegurar que los recursos públicos se orienten hacia iniciativas que generen mayor valor público y contribuyan al cumplimiento de los objetivos institucionales.
    //- Inicio Tarjetas
    .row(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-13
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta04_1.svg', alt='' style="width:100px").m-auto
          h4.card-title.text-center.mb-4 Identificación de necesidades
          p.text-center Reconocer brechas institucionales y requerimientos asociados a la misión de la entidad.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-13
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta04_2.svg', alt='' style="width:100px").m-auto
          h4.card-title.text-center.mb-4 Análisis institucional
          p.text-center Evaluar capacidades, resultados previos y condiciones del entorno.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-13
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta04_3.svg', alt='' style="width:100px").m-auto
          h4.card-title.text-center.mb-4 Priorización de recursos
          p.text-center Organizar necesidades según impacto, urgencia y disponibilidad financiera.
    //- Fin Tarjetas
    p.mt-3(data-aos="fade-right") Este procedimiento permite construir un presupuesto coherente con la planeación estratégica y enfocado en la solución de problemas institucionales relevantes.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Fuentes de ingresos públicos y estimación de recaudos
    //- Titulo nivel 3
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img14.png', alt='')
      .col-lg-7(data-aos="fade-right")        
        p(data-aos="fade-left") Las entidades públicas financian sus actividades mediante diversas <b>fuentes de ingresos</b>, entre las que se incluyen tributos, tasas, contribuciones parafiscales, transferencias, rendimientos financieros y recursos de capital como créditos o enajenaciones. El Ministerio de Hacienda (2019) señala que comprender el comportamiento de estas fuentes permite proyectar con mayor precisión la capacidad financiera del Estado.
        p(data-aos="fade-right") Sierra (2019) destaca que cada fuente de ingreso posee características y regulaciones específicas, por lo que su gestión requiere un análisis detallado de la normativa vigente y una administración responsable que preserve la sostenibilidad fiscal.
    //- Inicio Tarjetas
    .row(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta05_1.svg', alt='')
          h4.card-title.text-center.mb-4 Tributos
          p.text-center Impuestos establecidos por el Estado para financiar el gasto público.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta05_2.svg', alt='')
          h4.card-title.text-center.mb-4 Tasas y contribuciones
          p.text-center Pagos asociados a servicios o beneficios específicos.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta05_3.svg', alt='')
          h4.card-title.text-center.mb-4 Transferencias
          p.text-center Recursos provenientes de otras entidades del Estado.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/tarjeta05_4.svg', alt='')
          h4.card-title.text-center.mb-4 Recursos de capital
          p.text-center Ingresos derivados de créditos, rendimientos o enajenaciones.
    //- Fin Tarjetas
    p(data-aos="fade-left") La <b>estimación de recaudos</b> se realiza mediante modelos de proyección que consideran variables macroeconómicas, comportamiento histórico y metas fiscales. La OCDE (2020) señala que proyecciones prudentes permiten evitar sobreestimaciones que afecten la ejecución presupuestal y contribuyen a una gestión financiera sostenible.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Herramientas de gestión presupuestal
    //- Titulo nivel 3
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-5
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img15.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La gestión presupuestal en el sector público se apoya en diversas herramientas tecnológicas y metodológicas que permiten planificar, ejecutar y controlar los recursos con mayor precisión. Estas herramientas facilitan la integración de información financiera y operativa, fortaleciendo la transparencia y el seguimiento de la ejecución presupuestal.
    p(data-aos="fade-left") Entre los sistemas más utilizados se encuentran <b>SIIF Nación, SUIFP, SECOP II y CHIP</b>, plataformas que permiten registrar operaciones financieras, realizar seguimiento a proyectos y garantizar trazabilidad en el manejo de los recursos públicos. El DNP (2018) indica que estos sistemas contribuyen a mejorar la coordinación institucional y a fortalecer la disciplina fiscal. A continuación, se sintetizan algunas herramientas utilizadas en la gestión presupuestal.
    //- Inicio Tarjetas
    .row.mt-5.justify-content-centerp(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .card.h-100
          img(src="@/assets/curso/tema2/tarjeta06_1.png", alt="", class="card-img-top")
          .card-body.bg-color-14
            h5.card-title.text-center La sonrisa
            p.card-text.text-center
              | «Se oye» por teléfono, transmite una comunicación positiva, genera agrado y predispone favorablemente al interlocutor.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .card.h-100
          img(src="@/assets/curso/tema2/tarjeta06_2.png", alt="", class="card-img-top")
          .card-body.bg-color-14
            h5.card-title.text-center La voz
            p.card-text.text-center
              | Es un elemento decisivo; permite crear confianza, influir, persuadir y tranquilizar al cliente.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .card.h-100
          img(src="@/assets/curso/tema2/tarjeta06_3.png", alt="", class="card-img-top")
          .card-body.bg-color-14
            h5.card-title.text-center El lenguaje
            p.card-text.text-center
              | Incluye el uso de expresiones positivas y negativas. Si predominan las negativas, puede impactar de forma desfavorable en la imagen de la empresa.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .card.h-100
          img(src="@/assets/curso/tema2/tarjeta06_4.png",  class="card-img-top")
          .card-body.bg-color-14
            h5.card-title.text-center La escucha activa
            p.card-text.text-center
              | Implica escuchar, analizar e interpretar al cliente. Se basa en una escucha global que permite comprender plenamente la situación expuesta.
    //- Fin Tarjetas
    p(data-aos="fade-left") Además de estas plataformas, la gestión presupuestal se apoya en matrices de riesgo, análisis costo–beneficio, programación de proyectos y reportes periódicos de desempeño. Fedesarrollo (2021) señala que la integración de estas herramientas fortalece el análisis de la ejecución y permite anticipar desviaciones, contribuyendo a una administración pública más eficiente y transparente.

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
