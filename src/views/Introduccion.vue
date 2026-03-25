<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center
      p(data-aos="fade-right") El curso <b>Fortalecimiento de habilidades en la gestión presupuestal en el SENA</b> brinda una visión integral del presupuesto público como herramienta clave para garantizar la legalidad y transparencia en el uso de los recursos del Estado. Inicia con el reconocimiento del sistema presupuestal colombiano, su base normativa (como el Decreto 111 de 1996, la Ley 38 de 1989 y la Ley 819 de 2003) y el ciclo presupuestal, que abarca desde la formulación hasta el cierre. Asimismo, se estudian los tipos de presupuesto, sus estructuras, los principios que lo orientan y el papel del SENA como entidad ejecutora del gasto público en proyectos de inversión.          
          .col-lg-9(data-aos="fade-left")           
            .row.justify-content-center
              .col-md-7.col-lg-5.ps-lg-0.px-0
                figure
                  img(src="@/assets/curso/intro/img1.png", alt="", style="width: 430px").m-auto
              .col-md-7.col-lg-7.bg-color-5
                .row.align-items-center.h-100
                  .col
                    .p-4
                      p.mb-0 Posteriormente, el proceso formativo avanza hacia la planeación presupuestal estratégica. El aprendiz conocerá herramientas de proyección financiera, el enfoque de presupuesto orientado a resultados (POR) y diversas estrategias para gestionar los recursos, como traslados, adiciones o vigencias futuras. También se aborda la formulación presupuestal a partir de la identificación de necesidades institucionales, el análisis de fuentes de ingreso y la priorización de recursos, todo ello enmarcado en metodologías técnicas y herramientas digitales actualizadas que permiten una gestión rigurosa y sustentada.
          .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src="@/assets/curso/intro/img2.png", alt="", style="width: 300px").m-auto

    p(data-aos="fade-left") En las últimas unidades se profundiza en la ejecución, el control y la evaluación del presupuesto. Se analizan los procedimientos de compromisos y pagos, los mecanismos de seguimiento mediante indicadores clave, las auditorías, el control interno y externo, así como el uso de sistemas de información oficiales. Finalmente, se orienta al aprendiz en la elaboración de recomendaciones que articulen los planes institucionales con el presupuesto aprobado, mediante el diseño de indicadores financieros y la formulación de estrategias de mejora continua. De esta manera, el curso contribuye a la formación de servidores públicos capaces de tomar decisiones fundamentadas, alineadas con los principios de buen gobierno y sostenibilidad financiera.

</template>

<script>
export default {
  name: 'Introduccion',
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
