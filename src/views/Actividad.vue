<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Fortalecer las competencias de análisis y aplicación en la gestión presupuestal establecido en la normatividad vigente',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal del presupuesto público en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar recursos y atender prioridades colectivas del Estado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Registrar contratos privados y acuerdos de mercado interno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir funciones judiciales y decisiones administrativas locales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar controles fiscales y reducir la planeación estatal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué norma compila la Ley 38 de 1989, la Ley 179 de 1994 y la Ley 225 de 1995?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La Ley 819 de 2003 sobre transparencia fiscal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El Decreto 111 de 1996 como estatuto orgánico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La Ley 152 de 1994 sobre planeación territorial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El Decreto 371 de 2021 sobre austeridad estatal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes instrumentos integra el sistema presupuestal colombiano?	',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La matriz anual de contratación del sector privado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cuenta global de servicios empresariales nacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El Plan Operativo Anual de Inversiones institucional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La política monetaria exclusiva del banco central.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la primera fase del ciclo presupuestal en el sector público?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El cierre con revisión de compromisos pendientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ejecución de pagos y obligaciones reconocidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La aprobación técnica y política del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La formulación de ingresos, metas y programas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué caracteriza al presupuesto de caja?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registra ingresos y pagos cuando ocurre el movimiento monetario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reconoce obligaciones apenas se firma la planeación anual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Distribuye recursos regionales según fórmulas territoriales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integra únicamente gastos de inversión en infraestructura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza al presupuesto de causación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controla solo la liquidez diaria de la entidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reconoce obligaciones cuando se generan, aunque no se paguen.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se limita a ingresos efectivos del periodo fiscal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Depende únicamente de recursos parafiscales del SENA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es una fuente principal de ingresos del SENA?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los aportes de cooperación judicial internacional permanente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los cobros por exportaciones mineras del Estado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los aportes parafiscales realizados por empleadores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los créditos externos para gasto de funcionamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué busca el Presupuesto Orientado a Resultados?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Concentrar el gasto solo en pagos inmediatos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la medición del desempeño institucional anual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Separar las metas del uso de recursos públicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Vincular recursos con productos, efectos y resultados medibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál herramienta analiza datos históricos para estimar comportamientos futuros?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las series temporales aplicadas a ingresos y gastos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las cajas menores usadas para gastos urgentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las auditorías externas de control disciplinario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los rubros contables de apertura institucional anual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué permiten las vigencias futuras?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la revisión del marco fiscal vigente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprometer recursos de presupuestos de años posteriores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el presupuesto anual ya aprobado legalmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar pagos solo al finalizar cada proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué hacen los traslados presupuestales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentan el total del presupuesto sin autorización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminan la especialización del gasto institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Modifican la distribución interna sin cambiar el monto total.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sustituyen la formulación técnica del presupuesto anual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una etapa de la metodología para formular el presupuesto?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La liquidación judicial de contratos incumplidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La enajenación obligatoria de activos improductivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La descentralización automática de competencias fiscales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La estimación de ingresos según fuentes y proyecciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué permite la priorización de recursos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ordenar necesidades por impacto, urgencia y disponibilidad financiera.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar pagos sin verificar soportes ni metas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente el análisis institucional previo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la transparencia del proceso presupuestal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es una herramienta tecnológica de gestión presupuestal mencionada en el contenido?	',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El sistema privado de facturación bancaria externa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'SIIF Nación para registrar operaciones financieras oficiales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La bolsa nacional de valores institucionales públicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El registro único de exportaciones empresariales locales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué se requiere antes de asumir un compromiso presupuestal?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contar con la evaluación ex post del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tener aprobada una adición con recursos externos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Disponer de disponibilidad presupuestal y registro del compromiso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cerrar la vigencia fiscal y consolidar reservas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la secuencia correcta dentro de la ejecución presupuestal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pago, obligación, compromiso y disponibilidad previa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Obligación, cierre, disponibilidad y compromiso legal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Adición, pago, traslado y rendición de cuentas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disponibilidad, compromiso, obligación y pago efectivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué permite medir el porcentaje de ejecución presupuestal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El avance del gasto frente al presupuesto aprobado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de contratos firmados por dependencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La rotación del personal financiero en la entidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El número de auditorías externas realizadas anualmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es un mecanismo de control interno?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La supervisión exclusiva de la Procuraduría General.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las auditorías internas y matrices de riesgo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La aprobación del Congreso para cada pago.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las sentencias constitucionales sobre gasto territorial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué puede generar una desviación presupuestal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La planeación rigurosa basada en evidencia técnica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La integración adecuada de sistemas financieros públicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los retrasos contractuales y errores de programación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La alineación entre metas y asignaciones aprobadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Para qué sirve la apertura presupuestal?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la relación entre presupuesto y planeación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la asignación de rubros autorizados anualmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Impedir el inicio de la ejecución financiera institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Distribuir apropiaciones y habilitar recursos para ejecutar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
