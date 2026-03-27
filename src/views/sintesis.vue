<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5
      .col-12.ps-3(style="border-left: 10px solid #39A900;") 
        h3.mb-1 Fortalecimiento de las habilidades presupuestales del SENA
        p.mb-0 
          | Síntesis:           
          | Gestión integral del presupuesto público institucional
    p.mt-5 A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.   
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis  sobre gestión integral del presupuesto público institucional con cinco bloques principales: comprensión del presupuesto en Colombia, planeación institucional, gestión según la normatividad, control y seguimiento, y propuestas de mejora; incluye subtemas como sistema presupuestal, normatividad vigente, ciclo presupuestal, formulación y priorización de recursos, ejecución y registro de compromisos, mecanismos de control, auditoría, indicadores y alineación con planes institucionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
