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
        .tabla-a.color-acento-botones.mb-3
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
    p.mb-5(data-aos="fade-left") Además de las leyes, el sistema presupuestal se desarrolla mediante decretos reglamentarios que regulan aspectos específicos relacionados con la ejecución presupuestal, el control del gasto público y la administración financiera del Estado.
    //- InicioTabla
    .row.justify-content-center
      .col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span  Decretos colombianos relacionados con la gestión presupuestal y financiera pública
        .tabla-a.color-acento-botones.mb-3
          table
            thead
              tr
                th.text-center(style="width: 7%") Tipo
                th.text-center(style="width: 10%") Número de norma
                th.text-center(style="width: 8%") Año
                th.text-center(style="width: 60%") Tema
                th.text-center(style="width: 10%") Enlace
            tbody
              tr
                td Decreto
                td 617
                td 2022
                td Modifica el Decreto 1429 de 2016 sobre la participación de alcaldes en la junta directiva de la ADRES y establece disposiciones de control fiscal.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=188826", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 256
                td 2022
                td Modifica y adiciona el Decreto 1068 de 2015 en materia de financiación de obligaciones pensionales con recursos del Fonpet.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=179026", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 175
                td 2022
                td Modifica el Decreto 2555 de 2010 sobre el patrimonio técnico de sociedades fiduciarias y administradoras de fondos de pensiones.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=176986", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 53
                td 2022
                td Regula la emisión de bonos por parte de fondos de inversión colectiva y promueve el desarrollo del mercado de capitales.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=175666", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 169
                td 2022
                td Incorpora rendimientos financieros al presupuesto del Sistema General de Regalías del bienio 2021-2022.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=176766", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 147
                td 2022
                td Adiciona el Presupuesto General de la Nación para la vigencia fiscal de 2022.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=176626", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 506
                td 2022
                td Establece un ajuste al Presupuesto General de la Nación para la vigencia fiscal de 2022.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=185113", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 616
                td 2022
                td Modifica disposiciones del sistema de salud relacionadas con la contribución solidaria en el régimen subsidiado.
                td.text-center
                  a(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%20No.%20616%20de%202022.pdf", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 670
                td 2022
                td Reglamenta parcialmente el artículo 238 de la Ley 1819 de 2016 en materia tributaria.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=186266", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 371
                td 2021
                td Establece el Plan de Austeridad del Gasto para los órganos que hacen parte del Presupuesto General de la Nación.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=161366", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 412
                td 2018
                td Modifica el Decreto 1068 de 2015 en materia del régimen presupuestal y del Sistema Integrado de Información Financiera  SIIF Nación.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=85479", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 1068
                td 2015
                td Expide el Decreto Único Reglamentario del Sector Hacienda y Crédito Público.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=72893", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 3035
                td 2013
                td Reglamenta normas orgánicas del presupuesto.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56266", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 2785
                td 2013
                td Reglamenta disposiciones de la Ley 179 de 1994 y la Ley 225 de 1995.
                td.text-center
                  a(href="https://www.suin-juriscol.gov.co/viewDocument.asp?id=1776981", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 574
                td 2012
                td Crea la Comisión Intersectorial de Estadísticas de Finanzas Públicas.
                td.text-center
                  a(href="https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos%2F1122532", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 2768
                td 2012
                td Regula la constitución y funcionamiento de las cajas menores.
                td.text-center
                  a(href="https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos%2F1489002", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 1949
                td 2012
                td Reglamenta parcialmente la Ley 1530 de 2012 en materia presupuestal.
                td.text-center
                  a(href="https://www.suin-juriscol.gov.co/viewDocument.asp?id=1375288&", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 4836
                td 2011
                td Reglamenta normas orgánicas del presupuesto y modifica varios decretos relacionados con la gestión presupuestal.
                td.text-center
                  a(href="https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos%2F1552544", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 111
                td 1996
                td Compila la Ley 38 de 1989, la Ley 179 de 1994 y la Ley 225 de 1995 que conforman el Estatuto Orgánico del Presupuesto.
                td.text-center
                  a(href="https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos%2F1024830", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 115
                td 1996
                td Establece normas sobre la elaboración y ejecución de los presupuestos de empresas industriales y comerciales del Estado.
                td.text-center
                  a(href="https://www.suin-juriscol.gov.co/viewDocument.asp?id=1025788", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 663
                td 1993
                td Actualiza el Estatuto Orgánico del Sistema Financiero.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1348", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Decreto
                td 410
                td 1971
                td Expide el Código de Comercio.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
    p(data-aos="fade-right") La normativa presupuestal también ha sido desarrollada mediante decisiones de la Corte Constitucional, las cuales han precisado el alcance de diversas disposiciones relacionadas con la gestión fiscal y el gasto público.
    //- InicioTabla
    .row.justify-content-center
      .col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span  Sentencias relacionadas con el control constitucional en materia fiscal y presupuestal
        .tabla-a.color-acento-botones.mb-3
          table
            thead
              tr
                th.text-center(style="width: 7%") Tipo
                th.text-center(style="width: 10%") Número de sentencia
                th.text-center(style="width: 8%") Año
                th.text-center(style="width: 60%") Tema
                th.text-center(style="width: 10%") Enlace
            tbody
              tr
                td Sentencia
                td 320
                td 2022
                td Demanda de inconstitucionalidad contra el artículo 89 de la Ley 617 de 2000 relacionado con la racionalización del gasto público nacional.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6146", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
              tr
                td Sentencia
                td 195
                td 1997
                td Demanda de inconstitucionalidad contra el artículo 38 de la Ley 14 de 1983 sobre fortalecimiento de los fiscos territoriales.
                td.text-center
                  a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4188", target="_blank")
                    img.mx-auto(src="@/assets/curso/tema1/adjunto-icono.svg", style="width: 30px; display: block;")
    //- Imagen con titulo
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Ciclo presupuestal en el sector público: formulación, aprobación, ejecución y cierre
    //- Fin Imagen con titulo
    p(data-aos="fade-right") El <b>ciclo presupuestal en el sector público</b> constituye un proceso continuo mediante el cual el Estado planifica, asigna, utiliza y evalúa los recursos públicos. Su finalidad es asegurar que el presupuesto responda a las prioridades del desarrollo, a las necesidades sociales y a los principios de responsabilidad fiscal.
    p(data-aos="fade-right") Este proceso se estructura en <b>cuatro fases interrelacionadas</b> que permiten ordenar la gestión de los recursos públicos desde su planeación inicial hasta la evaluación final de los resultados. Cada fase cumple una función específica dentro del sistema de administración financiera del Estado y aporta información clave para fortalecer la toma de decisiones y mejorar la eficiencia del gasto público. A continuación, se presentan las características principales de cada fase del ciclo presupuestal.       
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
