<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Comprender el presupuesto público en Colombia de acuerdo con el marco normativo y legal
    
    p(data-aos="fade-right") Comprender el presupuesto público en Colombia implica entrar en la estructura que sostiene la vida administrativa del Estado. En esencia, significa reconocer cómo el país organiza sus propósitos, distribuye los recursos y define la ruta para atender las necesidades colectivas. El sistema presupuestal constituye uno de los instrumentos centrales de la gestión pública, ya que orienta la planificación financiera, articula las decisiones de política fiscal y garantiza que los recursos estatales se asignen conforme a prioridades de desarrollo y bienestar social.
    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este componente formativo se examina el sistema presupuestal colombiano desde sus fundamentos normativos. Se analizan las leyes y disposiciones que orientan las decisiones financieras del Estado y se estudia el ciclo presupuestal, comprendido como una secuencia de etapas que va desde la planificación hasta la ejecución y el seguimiento del gasto público.
    p(data-aos="fade-left") Asimismo, se abordan los proyectos de inversión como mecanismos mediante los cuales la acción estatal se materializa en programas y obras concretas. Finalmente, se revisan los tipos de presupuesto y su estructura, con el propósito de comprender cómo cada componente contribuye a fortalecer la transparencia, la eficiencia administrativa y el uso responsable de los recursos públicos.
    Separador
    //- Inicio Tema1
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1	Identificar el sistema presupuestal colombiano    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")        
        p(data-aos="fade-left") El estudio del presupuesto público en Colombia exige comprender la arquitectura normativa que orienta la planeación, la distribución de recursos y el seguimiento a la gestión estatal. Este entramado legal, consolidado en leyes orgánicas como la <b>Ley 38 de 1989</b> y la <b>Ley 819 de 2003</b>, constituye la base sobre la cual se proyectan las decisiones fiscales del país.
        p(data-aos="fade-left") A este marco normativo se suman lineamientos técnicos orientados a fortalecer la transparencia y la eficiencia en la administración pública. De acuerdo con el <b>Ministerio de Hacienda (2019</b>) y el <b>Departamento Nacional de Planeación DNP (2018</b>), estos lineamientos permiten que cada entidad avance con rigor hacia una ejecución responsable y coherente con las metas nacionales.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='')
      //- Imagen con titulo
      .bg-full-width.mt-5
        .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
            h3.titulo-con-imagen__texto Introducción al sistema presupuestal colombiano
      //- Fin Imagen con titulo  
    .row.mb-10
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img3.png", data-aos="zoom-in" style="max-width: 458px")
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg
          p.mb-0 El <b>sistema presupuestal colombiano</b> se concibe como un proceso que articula planificación, regulación y ejecución del gasto público. Su esencia consiste en coordinar la política fiscal con los objetivos macroeconómicos y las prioridades del desarrollo nacional.
        .row.align-items-start.mb-10(data-aos="fade-left")  
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p(data-aos="fade-left") A partir de la <b>Ley 38 de 1989</b>, el presupuesto dejó de entenderse como un ejercicio aislado y pasó a integrarse dentro de un sistema más amplio en el que convergen diversos instrumentos de planeación financiera del Estado. Entre estos instrumentos se encuentran el <b>Plan Financiero</b>, el <b>Plan Operativo Anual de Inversiones</b> y el <b>Presupuesto anual</b>. Esta visión integradora permite armonizar el uso de los recursos con las metas del <b>Plan Nacional de Desarrollo</b>, asegurando coherencia y sostenibilidad fiscal.        
    p.mt-3(data-aos="fade-left") Los principales instrumentos que integran este sistema pueden sintetizarse de la siguiente manera:
    //- Carrusel
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slyder01_1.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Plan financiero
                    p Establece las proyecciones de ingresos, gastos y financiamiento del Estado dentro del marco de la política macroeconómica.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slyder01_2.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Plan Operativo Anual de Inversiones (POAI)
                    p Organiza la programación anual de los proyectos de inversión pública en concordancia con el Plan Nacional de Desarrollo.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slyder01_3.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Presupuesto anual
                    p Autoriza los ingresos y gastos del Estado para cada vigencia fiscal y permite ejecutar las políticas públicas.
    //- Fin Carrusel
    p.mt-5(data-aos="fade-left") Asimismo, la Corte Constitucional ha destacado que el presupuesto opera como un mecanismo distributivo que, a diferencia del mercado, asigna los recursos de manera deliberada y consciente. Esta característica refuerza su carácter estratégico dentro de la acción estatal. Desde esta perspectiva, el sistema presupuestal cumple dos funciones centrales:
    .row.bg-color-8
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row.justify-content-center.mb-3(data-aos="fade-right")
              .col-md-5.mb-4.mb-md-0
                .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
                  figure.mb-4
                    img.mx-auto(src='@/assets/curso/tema1/tarjeta01_1.svg', alt='', style="width: 100px;")
                  h4 Proyección de ingresos y gastos
                  p.mb-0 Permite estimar los recursos y obligaciones del Estado con una perspectiva de mediano plazo.
              .col-md-5
                .p-4.br-15.h-100.text-center.shadow-sm.rounded-4.bg-color-10
                  figure.mb-4
                    img.mx-auto(src='@/assets/curso/tema1/tarjeta01_1.svg', alt='', style="width: 100px;")
                  h4 Disciplina fiscal
                  p.mb-0 Garantiza el cumplimiento de las reglas fiscales establecidas en la <b>Ley 819 de 2003.</b>
          //- Fin Tarjetas
          p(data-aos="fade-left") En este sentido, Restrepo (2017) señala que este sistema no se limita a ordenar cifras, sino que estructura la capacidad del Estado para responder de forma eficiente y oportuna a las demandas sociales.
    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Normatividad vigente del sistema presupuestal colombiano
    //- Fin Imagen con titulo
    .bg-color-fondo-resaltado.mb-3.br-20.overflow-hidden
      .row.g-0.align-items-stretch.justify-content-center
        .col-lg-5.d-none.d-lg-flex
          img.img-fluid(src='@/assets/curso/tema1/img4.png', alt='Checklist', style="width: 100%; object-fit: cover; object-position: left center;")        
        .col-12.col-lg-7.bg-color-5.p-4.p-lg-5.pe-lg-0
          p.p-4(data-aos="fade-left") El sistema presupuestal colombiano se sustenta en un conjunto de normas legales y reglamentarias que orientan la planeación, ejecución, control y seguimiento del gasto público. Entre las disposiciones más relevantes se encuentran la Ley 38 de 1989, la Ley 819 de 2003 y el Decreto 111 de 1996, normas que estructuran el Estatuto Orgánico del Presupuesto y establecen los principios de disciplina fiscal, planeación y responsabilidad en la administración de los recursos del Estado.
    p.mb-5(data-aos="fade-left") A este marco se suman otras leyes y decretos que fortalecen la transparencia, el control del gasto, la planeación del desarrollo y la organización administrativa del sector público. A continuación, se presentan algunas de las principales normas que conforman este marco regulatorio.
    //- InicioTabla
    .row.justify-content-center
      .col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span  Normativa colombiana relacionada con la gestión pública y presupuestal
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.text-center(style="width: 7%") Tipo
                th.text-center(style="width: 10%") Número de norma
                th.text-center(style="width: 8%") Año
                th.text-center(style="width: 60%") Título
                th.text-center(style="width: 10%") Enlace
            tbody
              tr
                td Ley
                td 2294
                td 2023
                td Por el cual se expide el Plan Nacional de Desarrollo 2022-2026 “Colombia Potencia Mundial de la Vida”.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=209510", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 1712
                td 2014
                td Por medio de la cual se crea la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional y se dictan otras disposiciones.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882 ", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 1473
                td 2011
                td Por medio de la cual se establece una regla fiscal y se dictan otras disposiciones.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43236", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 1474
                td 2011
                td Por la cual se dictan normas orientadas a fortalecer los mecanismos de prevención, investigación y sanción de actos de corrupción y la efectividad del control de la gestión pública.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=43292", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 1106
                td 2006
                td Por medio de la cual se prorroga la vigencia de la Ley 418 de 1997 prorrogada y modificada por las Leyes 548 de 1999 y 782 de 2002 y se modifican algunas de sus disposiciones.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=22629", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 715
                td 2001
                td Por la cual se dictan normas orgánicas en materia de recursos y competencias conforme a la Constitución Política y se organizan servicios como educación y salud.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4452", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 617
                td 2000
                td Por la cual se reforma parcialmente la Ley 136 de 1994 y se establecen normas para la racionalización del gasto público nacional y el fortalecimiento de la descentralización.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3771", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 550
                td 1999
                td Por la cual se establece un régimen que promueve la reactivación empresarial y la reestructuración de los entes territoriales.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=190", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 448
                td 1998
                td Por medio de la cual se adoptan medidas relacionadas con el manejo de obligaciones contingentes de las entidades estatales.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=182", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 489
                td 1998
                td Por la cual se dictan normas sobre la organización y funcionamiento de las entidades del orden nacional.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=186", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 152
                td 1994
                td Por la cual se establece la Ley Orgánica del Plan de Desarrollo.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=327", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 80
                td 1993
                td Por la cual se expide el Estatuto General de Contratación de la Administración Pública.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=304", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Ley
                td 4
                td 1992
                td Mediante la cual se establecen normas y criterios para la fijación del régimen salarial y prestacional de los empleados públicos.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1166", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")





    //- InicioTabla


    //- Fin Tema1

 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
