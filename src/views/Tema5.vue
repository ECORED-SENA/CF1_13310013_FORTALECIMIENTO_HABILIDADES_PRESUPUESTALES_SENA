<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Proponer recomendaciones sobre el control del presupuesto, teniendo en cuenta los objetivos institucionales
    p(data-aos="fade-right") La formulación de recomendaciones para el control del presupuesto permite fortalecer la gestión financiera pública y asegurar que la ejecución de los recursos responda a los objetivos institucionales. Este proceso implica analizar la información financiera, evaluar los mecanismos de control existentes y proponer acciones que mejoren la transparencia, la eficiencia y la responsabilidad en el manejo de los recursos públicos. A partir de este análisis, las entidades pueden ajustar procedimientos, fortalecer sus sistemas de seguimiento y garantizar coherencia entre planeación, ejecución y control presupuestal.
    Separador
    #t_5_1
    .titulo-segundo.color-acento-contenido
      h2 5.1 Implementar mecanismos de control en reportes financieros
    p(data-aos="fade-left") La implementación de mecanismos de control en los reportes financieros permite mejorar la confiabilidad de la información presupuestal y facilitar el seguimiento de la ejecución del gasto. Estos mecanismos integran herramientas de supervisión, auditoría y análisis que permiten identificar riesgos, corregir desviaciones y fortalecer la toma de decisiones institucionales.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema5/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Mecanismos de control interno y externo
    //- Titulo nivel 3
    p(data-aos="fade-left") Los mecanismos de control interno fortalecen la capacidad de las entidades para gestionar sus procesos presupuestales y anticipar posibles fallas antes de que afecten el cumplimiento de sus objetivos. Sierra (2019) explica que estos controles integran auditorías internas, matrices de riesgo, revisión documental y supervisión operativa, lo cual contribuye a consolidar una cultura de responsabilidad institucional.
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Contraloría General (2020) señala que un sistema sólido de control interno favorece la transparencia, previene desviaciones presupuestales y facilita la corrección oportuna de los procesos administrativos.
    p.mb-5(data-aos="fade-left") El control externo complementa esta labor mediante la intervención de organismos de vigilancia del Estado, como la Contraloría y la Procuraduría, que verifican la legalidad, la eficiencia y la sostenibilidad de la gestión presupuestal. González García (2021) explica que estas entidades examinan informes financieros, contratos y registros contables con el fin de garantizar la integridad del proceso presupuestal y proteger el patrimonio público. Antes de continuar con el análisis, se sintetizan las características principales de estos mecanismos de control.    
    //- Inicio Tarjetas
    .row(data-aos="fade-right").justify-content-center
      .col-sm-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta01_1.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Control interno
          p.text-center Se desarrolla dentro de la entidad mediante auditorías internas, análisis de riesgos, revisión documental y supervisión administrativa.
      .col-sm-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta01_1.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Control externo
          p.text-center Es ejercido por organismos de vigilancia del Estado que verifican la legalidad, transparencia y eficiencia en el uso de los recursos públicos.
    //- Fin Tarjetas
    p(data-aos="fade-left") La interacción entre ambos tipos de control fortalece la confianza institucional y contribuye a garantizar una administración pública responsable y transparente.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Auditorías y seguimiento a la gestión presupuestal
    //- Titulo nivel 3
    p(data-aos="fade-left") Las auditorías permiten realizar una revisión profunda de la ejecución presupuestal, evaluando el cumplimiento de la normativa vigente, la calidad del gasto público y la coherencia entre los recursos asignados y los resultados alcanzados. La Contraloría General (2020) señala que estas auditorías examinan riesgos administrativos, documentación de soporte y procesos financieros, generando recomendaciones que contribuyen al fortalecimiento de la gestión institucional.
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 González García (2021) destaca que el valor de las auditorías reside en su capacidad para promover aprendizaje organizacional, ya que cada hallazgo constituye una oportunidad para mejorar procedimientos, ajustar controles internos y fortalecer la transparencia administrativa.
    p(data-aos="fade-left") El seguimiento a la gestión presupuestal, por su parte, constituye un proceso permanente que acompaña la ejecución del presupuesto durante todo el ciclo fiscal. El Ministerio de Hacienda (2019) explica que este seguimiento debe sustentarse en indicadores oportunos y reportes confiables, los cuales permiten identificar retrasos en la ejecución y adoptar medidas correctivas. A continuación, se sintetizan las principales diferencias entre auditoría y seguimiento presupuestal.
    //- Inicio Tarjetas
    .row(data-aos="fade-right").justify-content-center
      .col-sm-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta01_1.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Auditoría presupuestal
          p.text-center Evaluar la legalidad, eficiencia y calidad del uso de los recursos públicos.
      .col-sm-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta01_1.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Seguimiento presupuestal
          p.text-center Analizar de manera continua el avance de la ejecución financiera durante el periodo fiscal. 
    //- Fin Tarjetas
    p(data-aos="fade-left") La articulación entre auditoría y seguimiento fortalece la vigilancia del gasto público y promueve una gestión orientada al cumplimiento de resultados institucionales.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema5/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Herramientas para ajustes presupuestarios y su justificación
    //- Titulo nivel 3
    p(data-aos="fade-left") Los ajustes presupuestarios constituyen instrumentos que permiten modificar la distribución inicial de los recursos para responder a cambios en las necesidades institucionales. Entre estos ajustes se encuentran los traslados presupuestales, las adiciones, las incorporaciones y los recortes, los cuales deben sustentarse en criterios técnicos y normativos.
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Ministerio de Hacienda (2019) señala que cualquier modificación presupuestal debe justificarse mediante análisis financieros, evidencia documental y coherencia con los objetivos estratégicos de la entidad. Sierra (2019) destaca que una justificación adecuada integra estudios financieros, verificación de la disponibilidad real de recursos y evaluación de riesgos institucionales, evitando decisiones improvisadas.
    p(data-aos="fade-left") La Contraloría General (2020) indica que estos instrumentos permiten fortalecer la flexibilidad fiscal sin comprometer la transparencia en la administración de los recursos públicos. Asimismo, González García (2021) afirma que un ajuste presupuestal correctamente fundamentado refleja madurez institucional y contribuye a mejorar la eficiencia del gasto público.
    Separador
    #t_5_2
    .titulo-segundo.color-acento-contenido
      h2 5.2 Elaborar recomendaciones del presupuesto de acuerdo con los objetivos institucionales
    p(data-aos="fade-left") La elaboración de recomendaciones presupuestales permite orientar la gestión financiera hacia el cumplimiento de los objetivos institucionales y fortalecer la coherencia entre planeación, asignación de recursos y resultados esperados. Este proceso implica analizar la estructura del presupuesto, revisar su relación con los planes estratégicos y proponer acciones que mejoren la eficiencia, la transparencia y la sostenibilidad del gasto público.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema5/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Definición de la apertura presupuestal y su relación con la planeación estratégica
    //- Titulo nivel 3
    p(data-aos="fade-left") La apertura presupuestal marca el inicio formal de la ejecución financiera y constituye el vínculo entre la planeación estratégica y las acciones operativas del año fiscal. El Ministerio de Hacienda (2019) explica que este proceso implica distribuir las apropiaciones aprobadas, asignar rubros presupuestales y habilitar recursos conforme al presupuesto autorizado.
    .row.align-items-center.mb-2
      .col-lg-9(data-aos="fade-left")
        .row.justify-content-center
          .col-md-6.col-lg-5.ps-lg-0.px-0
            figure
              img(src="@/assets/curso/tema5/img4.png", alt="", style="width: 430px").m-auto
          .col-md-6.col-lg-7.bg-color-5
            .row.align-items-center.h-100
              .col
                .p-4
                  p.mb-0 Sierra (2019) señala que esta etapa asegura coherencia entre las proyecciones institucionales y las posibilidades reales de ejecución, consolidándose como un mecanismo de alineación organizacional.
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema5/img5.png", alt="", style="width: 300px").m-auto
    p(data-aos="fade-left") La relación entre apertura presupuestal y planeación estratégica es directa, ya que las metas institucionales se traducen en asignaciones financieras específicas para programas, proyectos y actividades prioritarias. Cuando este proceso se desarrolla con rigor técnico y claridad institucional, fortalece la capacidad de la entidad para cumplir los objetivos definidos en sus planes de acción. Antes de profundizar en esta relación, se sintetizan los principales elementos que conforman la apertura presupuestal.
    //- Inicio Tarjetas
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
                        img(src='@/assets/curso/tema5/tarjeta02_1.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Distribución de apropiaciones
                        p.card-text.text-center
                        | Asignar recursos a programas, proyectos o dependencias institucionales.
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema5/tarjeta02_2.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Definición de rubros presupuestales
                        p.card-text.text-center
                        | Organizar el presupuesto según categorías de gasto autorizadas.
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema5/tarjeta02_3.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Habilitación de recursos
                        p.card-text.text-center
                        | Permitir el inicio de la ejecución presupuestal conforme a la normativa vigente.
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema5/tarjeta02_4.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Articulación con planes institucionales
                        p.card-text.text-center
                        | Garantizar coherencia entre presupuesto aprobado y metas estratégicas.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema5/img6.png', style="max-width: 250px", alt='', data-aos="zoom-in").m-auto    
          p(data-aos="fade-left") Estos elementos consolidan la apertura presupuestal como el punto de partida de la gestión financiera anual y como un instrumento clave para materializar la planeación institucional.
    //- Fin Tarjetas
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema5/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Diseño de indicadores estratégicos financieros
    //- Titulo nivel 3
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diseño de indicadores financieros estratégicos permite evaluar el desempeño presupuestal con precisión y orientar la toma de decisiones institucionales. Fedesarrollo (2021) señala que estos indicadores deben medir aspectos como la ejecución presupuestal, la oportunidad del gasto, la eficiencia administrativa y la sostenibilidad financiera. González García (2021) indica que un indicador efectivo combina claridad conceptual, disponibilidad de información y relevancia frente a los objetivos institucionales.
    p.mb-4(data-aos="fade-left") Cuando los indicadores se integran con los planes estratégicos de la entidad, permiten realizar un seguimiento continuo del desempeño financiero y facilitan la adopción de ajustes oportunos en la gestión presupuestal. El Ministerio de Hacienda (2019) recomienda que estos indicadores se articulen con los sistemas de información oficiales, garantizando la disponibilidad de datos confiables y actualizados. A continuación se sintetizan algunos indicadores financieros estratégicos utilizados en la gestión pública.
    //- Inicio Tarjetas
    .row(data-aos="fade-right").justify-content-center
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta03_1.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Nivel de ejecución presupuestal
          p.text-center Evaluar el porcentaje de recursos ejecutados frente al presupuesto aprobado.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta03_2.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Oportunidad en la ejecución del gasto
          p.text-center Analizar la rapidez con que se comprometen y ejecutan los recursos.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta03_3.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Eficiencia en la asignación de recursos
          p.text-center Relacionar el uso de los recursos con los resultados obtenidos.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta03_4.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Sostenibilidad financiera
          p.text-center Examinar la estabilidad fiscal y la capacidad institucional para mantener su gestión en el tiempo.
    //- Fin Tarjetas
    p(data-aos="fade-left") El uso sistemático de estos indicadores fortalece la capacidad de análisis financiero y orienta el presupuesto hacia resultados institucionales verificables.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema5/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Alineación de los planes institucionales con el presupuesto aprobado
    //- Titulo nivel 3
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La alineación entre los planes institucionales y el presupuesto aprobado garantiza que los recursos públicos se orienten al cumplimiento de la misión y de los objetivos estratégicos de la entidad. Restrepo (2017) sostiene que esta articulación permite organizar prioridades, evitar la dispersión de recursos y asegurar que cada inversión tenga un propósito claro dentro de la estrategia institucional.
    p.mb-4(data-aos="fade-left") Sierra (2019) explica que el análisis de esta alineación requiere revisar metas, indicadores, programas y proyectos para verificar su correspondencia con las asignaciones presupuestales. Cuando este ejercicio se realiza de manera rigurosa, el presupuesto deja de ser únicamente un instrumento administrativo y se convierte en una herramienta estratégica para impulsar el desarrollo institucional. Antes de continuar, se presentan algunos aspectos clave que permiten fortalecer esta alineación.
    //- Inicio Tarjetas
    .row(data-aos="fade-right").justify-content-center
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta04_1.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Metas institucionales
          p.text-center Definir los resultados que la entidad busca alcanzar.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta04_2.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Programas y proyectos
          p.text-center Traducir las metas estratégicas en acciones operativas.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta04_3.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Asignación presupuestal
          p.text-center Destinar recursos financieros para la ejecución de programas y proyectos.
      .col-sm-6.col-lg-3.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema5/tarjeta04_4.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Indicadores de gestión
          p.text-center Evaluar el avance y el impacto de las acciones institucionales.
    //- Fin Tarjetas
    p(data-aos="fade-left") La OCDE (2020) destaca que la coherencia entre planeación y presupuesto contribuye a mejorar la eficiencia institucional y fortalecer la confianza ciudadana en la administración pública.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema5/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Estrategias para mejorar la eficiencia en la asignación de recursos
    //- Titulo nivel 3
    .row.justify-content-center.align-items-stretch.mb-4.g-0.bg-color-5      
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 La mejora de la eficiencia en la asignación de recursos presupuestales requiere analizar los procesos de planeación financiera, fortalecer los criterios de priorización y promover el uso de información confiable para la toma de decisiones. Fedesarrollo (2021) recomienda aplicar herramientas como análisis de costo–beneficio, evaluación de impacto y priorización basada en evidencia para asegurar que los recursos se destinen a programas que generen mayor valor público.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema5/img9.png', alt='', style="object-fit: cover;")
    p(data-aos="fade-left") El Ministerio de Hacienda (2019) señala que la eficiencia presupuestal también depende de la integración entre sistemas de información financiera, mecanismos de control institucional y procesos de evaluación del gasto público. González García (2021) afirma que las entidades que revisan continuamente sus procesos de gestión financiera logran mejorar sus niveles de ejecución y optimizar el uso de los recursos. A continuación se resumen algunas estrategias que contribuyen a fortalecer la eficiencia en la asignación de recursos.
    //- Inicio Tarjetas
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-12.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-xl-4 col-lg-3")
                .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                  img(src='@/assets/curso/tema5/tarjeta05_1.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.mb-3.card-title.text-center Análisis de costo–beneficio
                  p.card-text.text-center
                  | Evaluar la relación entre recursos invertidos y beneficios obtenidos.
                .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                  img(src='@/assets/curso/tema5/tarjeta05_2.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.mb-3.card-title.text-center Priorización de programas
                  p.card-text.text-center
                  | Concentrar recursos en proyectos de alto impacto institucional.
                .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                  img(src='@/assets/curso/tema5/tarjeta05_3.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.mb-3.card-title.text-center Evaluación de impacto
                  p.card-text.text-center
                  | Analizar los resultados reales generados por la inversión pública.
                .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                  img(src='@/assets/curso/tema5/tarjeta05_4.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.mb-3.card-title.text-center Integración de sistemas de información
                  p.card-text.text-center
                  | Fortalecer la disponibilidad y confiabilidad de los datos financieros.
    p(data-aos="fade-left") La aplicación de estas estrategias favorece una gestión presupuestal más eficiente, transparente y orientada al logro de resultados institucionales.
    //- Fin Tarjetas
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema5/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Herramientas para la toma de decisiones financieras estratégicas
    //- Titulo nivel 3
    p(data-aos="fade-left") La toma de decisiones financieras estratégicas requiere el uso de herramientas analíticas que permitan evaluar escenarios, anticipar riesgos y valorar alternativas de acción dentro de la gestión presupuestal. Entre estas herramientas se encuentran el análisis de escenarios, las matrices de riesgo, los indicadores clave de desempeño, los sistemas de información presupuestal y los estudios de impacto fiscal.
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La OCDE (2020) señala que estas herramientas facilitan la evaluación de diferentes alternativas de gestión financiera y permiten prever efectos potenciales antes de adoptar decisiones presupuestales. Sierra (2019) indica que su aplicación fortalece la gobernanza financiera institucional y contribuye a reducir la incertidumbre en contextos de presión fiscal.
    p(data-aos="fade-left") Antes de cerrar este apartado, se sintetizan algunas herramientas clave utilizadas para apoyar la toma de decisiones financieras estratégicas.
    //- Inicio Tarjetas
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-12.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-xl-4 col-lg-3")
                .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                  img(src='@/assets/curso/tema5/tarjeta06_1.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.mb-3.card-title.text-center Análisis de escenarios
                  p.card-text.text-center
                  | Evaluar posibles efectos financieros de diferentes decisiones.
                .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                  img(src='@/assets/curso/tema5/tarjeta06_2.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.mb-3.card-title.text-center Matrices de riesgo
                  p.card-text.text-center
                  | Identificar y gestionar riesgos asociados a la ejecución presupuestal.
                .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                  img(src='@/assets/curso/tema5/tarjeta06_3.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.mb-3.card-title.text-center Indicadores clave de desempeño
                  p.card-text.text-center
                  | Medir resultados y orientar ajustes en la gestión financiera.
                .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                  img(src='@/assets/curso/tema5/tarjeta06_4.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.mb-3.card-title.text-center Sistemas de información presupuestal
                  p.card-text.text-center
                  | Integrar datos financieros para facilitar análisis y seguimiento.
                .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                  img(src='@/assets/curso/tema5/tarjeta06_5.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                  h4.mb-3.card-title.text-center Estudios de impacto fiscal
                  p.card-text.text-center
                  | Analizar las consecuencias financieras de políticas o proyectos.
    p(data-aos="fade-left") El uso adecuado de estas herramientas fortalece la capacidad de planificación y permite que las decisiones presupuestales respondan a criterios técnicos, estratégicos y éticos dentro de la administración pública.
    //- Fin Tarjetas
</template>

<script>
export default {
  name: 'Tema3',
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
