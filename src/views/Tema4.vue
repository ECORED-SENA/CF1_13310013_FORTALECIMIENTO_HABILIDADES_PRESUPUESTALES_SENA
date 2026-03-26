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
    //- Inicio Tema1
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
