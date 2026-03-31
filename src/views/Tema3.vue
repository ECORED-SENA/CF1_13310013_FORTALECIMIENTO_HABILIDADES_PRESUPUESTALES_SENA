<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Asistir en la gestión del presupuesto de acuerdo con la normatividad
    p(data-aos="fade-right") La gestión del presupuesto público requiere aplicar procedimientos administrativos y financieros que aseguren el uso adecuado de los recursos del Estado. Este proceso se desarrolla conforme a la normatividad vigente y busca garantizar que la ejecución presupuestal mantenga coherencia con la planeación institucional, la disciplina fiscal y los principios de transparencia.
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este contexto, la ejecución presupuestal implica registrar compromisos, reconocer obligaciones y efectuar pagos de manera ordenada, asegurando que cada operación cuente con respaldo legal, disponibilidad presupuestal y documentación verificable.
    Separador
    //- Inicio Tema2
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Ejecutar compromisos y pagos de la planeación presupuestal
    p(data-aos="fade-left") La ejecución de compromisos y pagos representa la fase en la que las decisiones de la planeación presupuestal se concretan en operaciones financieras. Este proceso garantiza que los recursos aprobados en el presupuesto se utilicen para cumplir los objetivos institucionales, respetando los procedimientos establecidos por la normativa fiscal.    
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-5      
      .col-lg-7.bg-color-purple-light.d-flex.align-items-center.p-4.p-lg-5
        p.mb-0 Una adecuada ejecución presupuestal permite controlar el gasto, mantener la trazabilidad de las operaciones y asegurar el cumplimiento de las obligaciones financieras de la entidad. De esta manera, la gestión del presupuesto se mantiene alineada con los principios de legalidad, eficiencia y responsabilidad fiscal.
      .col-lg-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema3/img2.png', alt='', style="object-fit: cover;")
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Gestión de compromisos y obligaciones
    //- Titulo nivel 3
    p(data-aos="fade-left") La <b>gestión de compromisos y obligaciones</b> constituye un componente fundamental de la ejecución presupuestal, ya que permite convertir las decisiones de planeación en acciones administrativas respaldadas financieramente. De acuerdo con el Decreto 111 de 1996 y la Ley 38 de 1989, ninguna entidad pública puede asumir compromisos sin contar previamente con <b>disponibilidad presupuestal y registro del compromiso</b>, lo cual garantiza que exista respaldo financiero para cada operación.
    .bloque-texto-g.bloque-texto-g.bg-color-3.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 González García (2021) explica que este proceso incluye la revisión de saldos disponibles, la validación de contratos y el registro de compromisos presupuestales, asegurando que cada gasto cumpla con los principios de <b>especialización, legalidad y eficiencia</b>. De esta forma, la entidad mantiene coherencia entre la planeación y la ejecución del presupuesto, reduciendo riesgos administrativos y fortaleciendo la disciplina fiscal.    
    p(data-aos="fade-left") Posteriormente, la <b>obligación presupuestal</b> formaliza el reconocimiento de la deuda derivada de la ejecución del gasto, vinculando el compromiso con un proveedor o beneficiario específico. La Contraloría General (2020) señala que este procedimiento requiere verificar el cumplimiento de las condiciones contractuales, la recepción de los bienes o servicios y la existencia de los documentos de soporte correspondientes.
    //- Inicio Tarjetas
    .row(data-aos="fade-right")
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Compromiso presupuestal
          p.text-center Registro del gasto autorizado que cuenta con disponibilidad presupuestal.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Obligación presupuestal
          p.text-center Reconocimiento formal de la deuda con un proveedor o beneficiario.
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/tarjeta01_1.svg', style="width: 100px").mx-auto
          h4.card-title.text-center.mb-4 Soporte documental
          p.text-center Verificación de contratos, facturas y documentos que respaldan la operación.
    //- Fin Tarjetas
    p(data-aos="fade-left") Una gestión adecuada de compromisos y obligaciones permite <b>anticipar necesidades de pago, evitar retrasos en la ejecución y garantizar transparencia en el uso de los recursos públicos</b>, fortaleciendo así la gestión financiera institucional.
    //- Titulo nivel 3
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema2/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Control de pagos y desembolsos
    //- Titulo nivel 3
    p(data-aos="fade-left") A continuación, se presenta un pódcast que explica el control de pagos y desembolsos como un proceso fundamental para garantizar la adecuada gestión y utilización de los recursos públicos.
    //- Inicio Podcast
    .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2
      .row.g-0.align-items-stretchp(data-aos="fade-left")
        .col-lg-7.mb-3
          .p-4.p-md-5.bg-custom-dark-teal.h-100.rounded-4
            .row.align-items-center
              .col-md-5.text-center.mb-4.mb-md-0
                img(src="@/assets/curso/tema3/podcast.svg" style="width: 200px;").img-fluid
              .col-md-7.ps-md-4
                h2.mb-3.fw-bold(style="color:#000") Pódcast
                .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                  h5.mb-3.fw-bold Control de pagos y desembolsos
                  TarjetaAudio.color-primario(
                    texto="" 
                    :audio="require('@/assets/componentes/audios/podcast1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")        
        .col-lg-5
          figure.mb-0
            img(src='@/assets/curso/tema3/img4.png' style="width: 487px;").rounded-4
    //- Fin Podcast    
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
