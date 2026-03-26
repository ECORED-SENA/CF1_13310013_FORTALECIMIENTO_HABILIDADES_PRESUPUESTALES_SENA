<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Apoyar en el control de la ejecución del presupuesto de los recursos públicos según la normatividad
    p(data-aos="fade-right") El control de la ejecución presupuestal permite verificar que los recursos públicos se utilicen conforme a la normatividad vigente, garantizando disciplina fiscal, transparencia y coherencia entre la planeación institucional y la gestión financiera.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-5      
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Este proceso integra procedimientos técnicos, sistemas de registro, indicadores de seguimiento y mecanismos de control que facilitan la verificación permanente del uso de los recursos. De esta manera, las entidades públicas aseguran que cada etapa del presupuesto responda a criterios de legalidad, eficiencia y responsabilidad administrativa.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema4/img1.png', alt='', style="object-fit: cover;")
    Separador
    //- Inicio Tema4.1
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Implementar mecanismos de control en reportes financieros
    p(data-aos="fade-left") La implementación de mecanismos de control en los reportes financieros fortalece la transparencia y la confiabilidad de la información presupuestal. Estos mecanismos permiten registrar, analizar y verificar la ejecución de los recursos, facilitando la toma de decisiones y el cumplimiento de la normativa fiscal. A continuación, se desarrollan los principales componentes que sustentan el control de la ejecución presupuestal.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema4/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Procedimientos para la ejecución presupuestal
    //- Titulo nivel 3
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La <b>ejecución presupuestal</b> corresponde al conjunto de acciones administrativas y financieras mediante las cuales una entidad pública utiliza los recursos previamente aprobados en el presupuesto. Este proceso se desarrolla siguiendo una secuencia normativa que permite registrar cada movimiento financiero y asegurar la correcta utilización de los recursos del Estado. 
    p.mb-4(data-aos="fade-left") De acuerdo con la <b>Ley 38 de 1989</b> y el <b>Decreto 111 de 1996</b>, la ejecución presupuestal se realiza mediante procedimientos que garantizan orden, control y trazabilidad en el manejo de los recursos públicos. En este sentido, <b>González García (2021)</b> señala que la aplicación rigurosa de estas etapas contribuye a mantener la disciplina fiscal y a evitar compromisos que superen la disponibilidad presupuestal. Asimismo, la <b>Contraloría General (2020)</b> resalta que cada procedimiento debe sustentarse en registros verificables que permitan controlar riesgos y fortalecer la transparencia institucional. A continuación, se presentan las principales etapas que estructuran el proceso de ejecución presupuestal:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema4/slyder01_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Disponibilidad presupuestal
                    p Certificación que confirma la existencia de recursos suficientes para respaldar un compromiso financiero.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema4/slyder01_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Compromiso
                    p Acto administrativo o contractual mediante el cual la entidad adquiere una obligación con cargo al presupuesto aprobado.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema4/slyder01_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Obligación
                    p Reconocimiento formal de la deuda generada a partir del compromiso previamente adquirido.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema4/slyder01_4.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Pago
                    p Desembolso efectivo de los recursos para cumplir la obligación reconocida.
    //- Fin Slideshow
    p(data-aos="fade-left") Estas etapas permiten organizar la ejecución del presupuesto y asegurar que cada operación financiera quede debidamente registrada, facilitando el control, la trazabilidad y la coherencia entre lo planeado y lo ejecutado.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema4/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Seguimiento de la ejecución presupuestal: indicadores clave
    //- Titulo nivel 3
    p(data-aos="fade-left") El <b>seguimiento de la ejecución presupuestal</b> permite analizar el comportamiento del gasto público durante el periodo fiscal y fortalecer los procesos de control institucional. Para ello se emplean indicadores que facilitan la evaluación del desempeño financiero y apoyan la toma de decisiones orientadas a mejorar la gestión de los recursos.
    p(data-aos="fade-left") De acuerdo con <b>Fedesarrollo (2021), González García (2021) y el Departamento Nacional de Planeación – DNP (2018)</b>, el uso de indicadores permite identificar avances, detectar retrasos en la gestión del gasto y orientar ajustes en la administración presupuestal. Estos indicadores se relacionan con el cumplimiento de compromisos, la gestión de pagos y la relación entre recursos ejecutados y resultados institucionales. A continuación se sintetizan algunos indicadores utilizados para realizar este seguimiento:
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/img3.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Porcentaje de ejecución presupuestal")
              p.mb-4 Permite valorar el avance del gasto frente al presupuesto aprobado durante el periodo fiscal.
          .row(titulo="Nivel de obligaciones registradas")
              p.mb-4 Permite analizar el grado de formalización de compromisos financieros asumidos por la entidad.
          .row(titulo="Oportunidad en los pagos")
              p.mb-4 Permite revisar el cumplimiento de las obligaciones dentro de los tiempos establecidos.
          .row(titulo="Eficiencia operativa del gasto")
              p.mb-4 Permite relacionar los recursos utilizados con el desempeño institucional alcanzado.          
    //- Fin Accordion
    p(data-aos="fade-left") El análisis conjunto de estos indicadores fortalece el control financiero y contribuye a mejorar la gestión presupuestal dentro de las entidades públicas.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema4/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Registro y control de la ejecución
    //- Titulo nivel 3
    p(data-aos="fade-left") El registro de la ejecución presupuestal implica documentar cada movimiento financiero con veracidad y oportunidad, asegurando que compromisos, obligaciones y pagos queden consignados en los sistemas oficiales. El Ministerio de Hacienda (2019) enfatiza que este registro debe cumplir los principios de legalidad, especialización y transparencia establecidos en la Ley 819 de 2003. Sierra (2019) afirma que un registro coherente permite comparar la planeación presupuestal con la ejecución real, fortaleciendo los controles internos y la confiabilidad de los reportes financieros.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-5
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema4/img4.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 El control de la ejecución presupuestal constituye un proceso permanente que verifica la correspondencia entre lo registrado en los sistemas y las operaciones efectivamente realizadas. González García (2021) señala que esta práctica previene desviaciones, mejora la calidad del gasto público y permite a las entidades demostrar responsabilidad en el manejo de los recursos. Cuando el registro es preciso y el control es constante, el presupuesto se consolida como una herramienta de gestión transparente y confiable.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema4/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Mecanismos de control interno y externo
    //- Titulo nivel 3
    p(data-aos="fade-left") La administración de los recursos públicos requiere mecanismos que permitan supervisar la gestión institucional, prevenir errores y asegurar el cumplimiento de la normatividad. En este contexto, las entidades del Estado cuentan con procedimientos que permiten evaluar sus propios procesos y, al mismo tiempo, con instancias externas que verifican la legalidad y transparencia en el uso de los recursos públicos.
    .row.mb-5
      .col-xl-6.mb-4.mb-xl-0.text-center(data-aos="left")
        img(src="@/assets/curso/tema4/img5.png", alt="Asesora telefónica" style="width:100%").m-auto
      .col-xl-6.align-self-end(data-aos="fade-right")
        img.mb-3(src="@/assets/curso/tema1/green-icon.svg", alt="Icono comunicación" style="width:50px").d-none.d-xl-block
        p.mb-0 La <b>Contraloría General (2020)</b> señala que los mecanismos aplicados dentro de las entidades incluyen supervisión administrativa, auditorías internas, matrices de riesgo y revisión documental, orientados al autocontrol y al mejoramiento continuo. <b>Sierra (2019)</b> destaca que estas prácticas contribuyen a fortalecer la confianza institucional y permiten corregir oportunamente fallas en los procesos financieros. De manera complementaria, la vigilancia ejercida por organismos estatales revisa cuentas fiscales, informes financieros y documentación de soporte con el fin de proteger el patrimonio público, como explica <b>González García (2021)</b>. A continuación se presenta una síntesis de estos mecanismos de supervisión:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Control interno")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/tema4/pestana01_1.png', alt='')
              .col-md-6.mb-4.mb-md-0
                h4 Control interno
                p Conjunto de prácticas institucionales orientadas a evaluar procesos administrativos, prevenir errores y fortalecer el autocontrol mediante auditorías, seguimiento operativo y gestión de riesgos <b>(Contraloría General, 2020; Sierra, 2019).</b>
          .py-3.py-md-4(titulo="Control externo")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/pestana01_2.png', alt='')
              .col-md-6
                h4 Control externo
                p Supervisión realizada por organismos de vigilancia del Estado que revisan la legalidad, eficiencia y transparencia en la administración de los recursos públicos (González García, 2021).    
    //- Cierres Pestanas horizontales
    p(data-aos="fade-left") La articulación de estos mecanismos fortalece el sistema de vigilancia financiera y contribuye a una gestión pública responsable y transparente.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema4/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Auditorías y seguimiento a la gestión presupuestal
    //- Titulo nivel 3
    p(data-aos="fade-left") Las auditorías constituyen procesos de revisión técnica, documental y operativa que evalúan si la utilización de los recursos públicos se ajusta a la normatividad vigente y a los principios presupuestales. La Contraloría General (2020) señala que estas evaluaciones examinan la ejecución del gasto, los soportes contractuales, los riesgos administrativos y el cumplimiento de metas institucionales, generando recomendaciones orientadas al mejoramiento de la gestión pública. González García (2021) destaca que una auditoría bien aplicada funciona como un mecanismo de aprendizaje institucional que fortalece las prácticas de transparencia y control.
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El seguimiento a la gestión presupuestal implica analizar de manera continua el comportamiento del gasto durante el año fiscal, comparando los avances financieros con las metas institucionales. El Ministerio de Hacienda (2019) señala que este seguimiento debe realizarse de forma permanente y sustentarse en información confiable y actualizada.
    p(data-aos="fade-left") A través de estos procesos, las entidades públicas fortalecen su capacidad de aprendizaje institucional y perfeccionan la administración de los recursos públicos.
    Separador
    //- Inicio Tema4.1
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Identificar desviaciones presupuestales
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")        
        p(data-aos="fade-left") La identificación de desviaciones presupuestales constituye un proceso fundamental dentro del control de la ejecución del gasto público. Su propósito consiste en reconocer diferencias entre lo planeado y lo ejecutado, permitiendo detectar oportunamente variaciones que puedan afectar el cumplimiento de metas institucionales. Este análisis contribuye a fortalecer la gestión financiera, facilitar la toma de decisiones y garantizar coherencia entre la planeación presupuestal y la ejecución real de los recursos públicos.       
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img7.png', alt='')
    p(data-aos="fade-left") La identificación de desviaciones presupuestales exige comparar de manera sistemática lo planeado con lo realmente ejecutado, examinando variaciones en compromisos, obligaciones y pagos que puedan alterar el cumplimiento de metas institucionales. González García (2021) explica que estas diferencias pueden originarse en retrasos en los procesos contractuales, estimaciones inadecuadas de costos o cambios en las condiciones institucionales. El análisis de estas variaciones permite reconocer riesgos, identificar oportunidades de mejora y fortalecer la capacidad de reacción de las entidades públicas.
    .row.justify-content-center.align-items-stretch.mb-3.g-0.bg-color-5(data-aos="fade-right")
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema4/img8.png', alt='', style="object-fit: cover;")
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 El Ministerio de Hacienda (2019) señala que este proceso implica revisar datos con rigurosidad, aplicar indicadores de seguimiento y validar los soportes que reflejan la ejecución real. Fedesarrollo (2021) sostiene que un sistema de monitoreo eficaz permite anticipar estas variaciones y evitar que se traduzcan en baja ejecución o en sobregiros presupuestales.
    p(data-aos="fade-left") Antes de profundizar en el análisis de las desviaciones, se sintetizan algunos de los factores que con mayor frecuencia generan variaciones en la ejecución presupuestal.
    .row.bg-color-9
      .col-12
        .p-5
          .bg-full-width.mt-5
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema4/tarjeta01_1.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Retrasos contractuales
                        p.card-text.text-center
                        | Demoras en procesos de contratación que afectan el ritmo de ejecución del presupuesto.
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema4/tarjeta01_2.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Variación en costos
                        p.card-text.text-center
                        | Cambios en los valores estimados inicialmente para la ejecución de proyectos o actividades.
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema4/tarjeta01_3.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Cambios institucionales
                        p.card-text.text-center
                        | Modificaciones en prioridades, estructura organizacional o políticas públicas.
                      .bg-color-10.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column
                        img(src='@/assets/curso/tema4/tarjeta01_4.svg' alt='' , style="max-width: 90px").mx-auto.mb-3
                        h4.mb-3.card-title.text-center Errores de programación
                        p.card-text.text-center
                        | Deficiencias en la planeación presupuestal o en la estimación de recursos requeridos.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/tema4/img9.png', style="max-width: 250px", alt='', data-aos="zoom-in").m-auto
    p(data-aos="fade-left") El análisis sistemático de estos factores permite que las entidades identifiquen causas estructurales de las desviaciones y adopten medidas correctivas oportunas.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema4/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Reportes financieros y análisis de cumplimiento
    //- Titulo nivel 3
    p(data-aos="fade-left") Los reportes financieros constituyen instrumentos fundamentales para comprender el estado de la ejecución presupuestal, ya que ofrecen una estructura organizada y verificable de la forma en que se utilizan los recursos públicos. Según la Contraloría General (2020), estos informes deben incluir información sobre compromisos, obligaciones, pagos y saldos disponibles, permitiendo evaluar el avance frente a lo programado.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-5
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Sierra (2019) destaca que la calidad de los reportes financieros depende de la precisión en el registro de la información y de la oportunidad con que se actualizan los sistemas de información institucional. De esta manera, los reportes financieros se consolidan como herramientas clave para fortalecer la transparencia y la rendición de cuentas en la gestión pública.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema4/img10.png', alt='', style="object-fit: cover;")
    p(data-aos="fade-left") A partir de estos informes se realiza el análisis de cumplimiento, el cual permite evaluar el nivel de avance en relación con las metas institucionales y detectar áreas que requieren ajustes. El Ministerio de Hacienda (2019) señala que este análisis debe sustentarse en indicadores comparativos que permitan identificar brechas en la ejecución, ritmos de gasto y capacidad operativa de la entidad. Para facilitar esta evaluación, se emplean diversos componentes dentro de los reportes financieros.
        //- Inicio Tarjetas
    .row(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema4/tarjeta02_1.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Compromisos presupuestales
          p.text-center Identificar recursos ya asignados mediante actos administrativos o contractuales.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/tarjeta02_2.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Obligaciones registradas
          p.text-center Reconocer deudas derivadas de compromisos previamente adquiridos.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/tarjeta02_3.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Pagos realizados
          p.text-center Verificar el desembolso efectivo de recursos.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema4/tarjeta02_4.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Saldos disponibles
          p.text-center Determinar recursos aún no comprometidos o ejecutados.      
    //- Fin Tarjetas
    p(data-aos="fade-left") El análisis de estos elementos permite valorar el grado de cumplimiento de las metas presupuestales y orientar decisiones correctivas dentro de la gestión financiera institucional.
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
