<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contratación y afiliación a seguridad social

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.text-center
            img(src="@/assets/curso/tema2/1.svg" style="max-width:150px;display:inline;" data-aos="fade-left")
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p.mb-0(data-aos="fade-up") En las organizaciones existen diferentes necesidades para ejecutar actividades que deben ser desempeñadas por las personas que la integran; debido a esto, y según la naturaleza de la actividad en las empresas, se toma la decisión de utilizar diferentes tipos de contratos y vincular al ser humano para que desempeñe estas funciones y, finalmente, crear una relación contractual.

    .row.col-md-10.m-auto.p-5(style="background-color:#16697A;border-radius:10px;")
      .col-md-10(style="place-self:center;")
        p.mb-0.text-white(data-aos="fade-up") Cada contrato tiene una normativa legal constituida como el Código Sustantivo del Trabajo y la Ley 100 de 1993 que brinda protección tanto al empleador como al empleado. Entre estas figuran indemnizaciones, periodos y el derecho de afiliación a seguridad social con porcentajes de aportes, entre otros derechos y deberes.
      .col-md-2(style="place-self:center")
        figure.text-center.m-auto
          img(src="@/assets/curso/tema2/2.svg" style="display:inline;max-width:90px;")

    Separador

    .titulo-segundo.mt-5
      h2#t_2_1 2.1  Definición de contrato laboral

    p(data-aos="fade-up") En este espacio se verán las definiciones tanto de contrato laboral como de trabajo según lo estipula la legislación.

    .row.mt-5.col-md-10.m-auto
      .col-md-6.col-xl-6.col-lg-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="border-radius:0px;background-color:#D0EAE2;")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/3.svg')})`}")
              h4(style="background-color:#D0EAE2;position: absolute;bottom: -15px;padding: 15px;width: 100%;text-align: center;") Trabajo
            .tarjeta-flip__contenido.p-4.p-xl-5(style="border-radius:0px;background-color:#D0EAE2;")
              p #[strong Conforme al Código Sustantivo del Trabajo en el artículo 5°:] “Es toda actividad humana libre, ya sea material o intelectual, permanente o transitoria, que una persona natural ejecuta conscientemente al servicio de otra, y cualquiera que sea su finalidad, siempre que se efectúe en ejecución de un contrato de trabajo”.
      .col-md-6.col-xl-6.col-lg-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false" style="border-radius:0px;")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/4.svg')})`}")
              h4(style="background-color:#FCE1B0;position: absolute;bottom: -15px;padding: 15px;width: 100%;text-align: center;") Contrato laboral
            .tarjeta-flip__contenido.p-4.p-xl-5(style="border-radius:0px;background-color:#FCE1B0;")
              p #[strong Conforme al Código Sustantivo del Trabajo en el artículo 22:] “Contrato de trabajo es aquel por el cual una persona natural se obliga a prestar un servicio personal a otra persona natural o jurídica, bajo la continuada dependencia o subordinación de la segunda y mediante remuneración”.
              p.mt-4 Acorde a estas definiciones que brinda el Código Sustantivo del Trabajo es importante aclarar que para que exista una relación laboral se debe generar un contrato para ser reconocido como tal, entendiendo que, según el tipo, puede ser verbal o escrito.

    .col-md-11.m-auto.mt-5
      .cajon.color-acento-botones.p-4.mb-4(style="background-color:#FFF5E2;")
        .h4.mb-0(data-aos="fade-up") Nota aclaratoria
        p.mt-3(data-aos="fade-up") Para no caer en la confusión sobre un contrato laboral y uno civil se deben mirar los tres elementos del contrato laboral y no incurrir en errores contractuales. Conforme al Código Sustantivo del Trabajo en el artículo 23 señala que son: prestación personal del servicio, continuada subordinación y retribución o remuneración del servicio.

    br
    .row.mt-5
      .col-sm-1(style="place-self:center;")
        figure.text-center.m-auto.text-center
          img(src="@/assets/curso/tema2/5.svg" style="max-width:30px;display:inline")
      .col-sm-11(style="place-self:center;")
        h3(data-aos="fade-up") Tipos de contratos laborales con normatividad colombiana

    p.mt-5(data-aos="fade-up") En Colombia los contratos laborales están regidos bajo la normatividad del Código Sustantivo del Trabajo del artículo 22 al 75. En este documento se pueden consultar los diferentes tipos de contratación y características. #[strong(style="padding:5px;background-color:#D0EAE2;") En el proceso de vinculación de personal en Colombia se utilizan los contratos por tiempo de duración, a saber:] 

    .row.mt-5.col-md-9.m-auto.pt-5.ps-5.pe-5(style="background-color:#16697A;border-radius:10px")
      .col-md-6(style="place-self:center;")
        ul.lista-ul
          li.text-white(data-aos="fade-up")
            i.fas.fa-check(style="color:#FFA400 !important;")
            | Contrato a término fijo.
          li.text-white(data-aos="fade-up")
            i.fas.fa-check(style="color:#FFA400 !important;")
            | Contrato a término indefinido.
          li.text-white(data-aos="fade-up")
            i.fas.fa-check(style="color:#FFA400 !important;")
            | Contrato por obra y labor.
          li.text-white(data-aos="fade-up")
            i.fas.fa-check(style="color:#FFA400 !important;")
            | Contrato ocasional, accidental o transitorio.
      .col-md-6(style="place-self:center;")
        figure.text-center.m-auto.justify-content-center
          img.m-auto(src="@/assets/curso/tema2/6.svg" data-aos="fade-right" style="max-width:300px;")

    p.mt-5(data-aos="fade-up") Seguramente en algún momento alguien es contratado por alguna de las modalidades anteriores, pero #[strong(style="padding:5px;background-color:#D0EAE2;") ¿cómo se diferencian y qué características tienen?] En el siguiente cuadro se presenta la respuesta a esta pregunta:

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Tabla 1.] Cuadro comparativo de contratos laborales en tiempo y regulación contenido

    .tabla-a.color-acento-botones.mt-5 
      table
        thead(style="border-top:none;")
          tr
            th.p-4(style="background-color:#FFA400;font-size:18px;") Contrato laboral
            th.p-4(style="background-color:#FFA400;font-size:18px;") Tiempo
            th.p-4(style="background-color:#FFA400;font-size:18px;") Regulación
        tbody
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") Contrato a término fijo.
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") Tiene fecha de inicio y fecha de finalización.
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") Código Sustantivo del Trabajo, artículo 46.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border-right:1px white solid;") Contrato a término indefinido.
            td.p-4(style="border:0px;background-color:#F8F8F8;border-right:1px white solid;") Tiene fecha de inicio pero no de finalización.
            td.p-4(style="border:0px;background-color:#F8F8F8;border-right:1px white solid;") Código Sustantivo del Trabajo, artículo 47.
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") Contrato por obra y labor.
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") Hasta que se finalice la obra o labor para lo cual es contratada la persona.
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") Código Sustantivo del Trabajo, artículo 45.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border-right:1px white solid;") Contrato ocasional, accidental o transitorio.
            td.p-4(style="border:0px;background-color:#F8F8F8;border-right:1px white solid;") No mayor a un mes.
            td.p-4(style="border:0px;background-color:#F8F8F8;border-right:1px white solid;") Código Sustantivo del Trabajo, artículo 6°.

    h5.mt-5(data-aos="fade-up") A continuación se pueden observar las características y usos de los diferentes tipos de contratos laborales en las empresas:

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Contrato a término fijo" :icono="require('@/assets/curso/tema2/7.svg')")
        .row
          h4 Características conforme al código sustantivo del trabajo
          ul.mt-3.ps-5(style="list-style:disc;")
            li.mb-0 Cuando se hace inferior a un año no se puede renovar más de tres veces.
            li.mb-0 Cuando su elaboración es anual se puede prorrogar las veces que la empresa lo desee.
            li.mb-0 Su creación no puede exceder los tres años.
            li.mb-0 Este tipo de contrato siempre se debe hacer por escrito.
            li.mb-0 El periodo de prueba si es inferior a un año no puede superar la quinta parte del 20% del contrato y si es por el año no excederá los dos meses.
            li.mb-0 El empleador debe avisar 30 días calendario antes si el contrato no será prorrogado, si no se entenderá como renovado.
            li.mb-0 Si hay despido sin justa causa, al trabajador se le debe pagar como indemnización los salarios restantes a la fecha de terminación del contrato.
            li.mb-0 Su finalización puede darse por justa causa, sin justa causa, pensión del trabajador, finalización del contrato o muerte del trabajador.
          h4.mt-5 Uso en las empresas
          p.mt-3 Las empresas en Colombia utilizan este contrato para actividades permanentes. En ocasiones para motivar al personal durante un periodo y luego cambiarlo a término indefinido, y también para actividades que finalizan gestión anual o periódica.
      .py-4.py-md-5(titulo="Contrato a término indefinido" :icono="require('@/assets/curso/tema2/7.svg')")
        .row
          h4 Características conforme al código sustantivo del trabajo
          ul.mt-3.ps-5(style="list-style:disc;")
            li.mb-0 Tiene inicio y no cuenta con fecha de finalización. 
            li.mb-0 El periodo de prueba no puede exceder los dos meses.
            li.mb-0 Para que se finalice la relación laboral debe ser por retiro voluntario del trabajador, pensión, por justa causa o sin justa causa o muerte del trabajador.
            li.mb-0 Si la finalización del contrato es sin justa causa, el empleador debe pagar una indemnización de 30 días el primer año laborado y para los siguientes años, una indemnización de 20 días de salario por cada año laborado.
          h4.mt-5 Uso en las empresas
          p.mt-3 Las organizaciones en Colombia manejan mucho este tipo de contrato, ya que generan confianza en sus trabajadores brindando una estabilidad laboral.
          p.mt-3 Lo utilizan en cargos permanentes razón de ser de su actividad económica.
      .py-4.py-md-5(titulo="Contrato por obra y labor" :icono="require('@/assets/curso/tema2/7.svg')")
        .row
          h4 Características conforme al código sustantivo del trabajo
          ul.mt-3.ps-5(style="list-style:disc;")
            li.mb-0 La duración depende de la culminación de la obra o labor, razón de ser de la relación laboral.
            li.mb-0 El periodo de prueba, si la obra es inferior a un año, no puede superar la quinta parte del 20% del contrato, y si es por el año no exceder los dos meses.
            li.mb-0 Para que se finalice la relación laboral debe ser por retiro voluntario del trabajador, pensión, por justa causa o sin justa causa o muerte del trabajador.
            li.mb-0 Si la finalización del contrato es sin justa causa el empleador debe pagar una indemnización proporcional al tiempo que estaba destinada la obra o labor de terminar.
          h4.mt-5 Uso en las empresas
          p.mt-3 Las compañías hacen uso de este contrato para actividades como construcción o labores como campañas electorales, producción de cine, televisión y demás.
          p.mt-4 #[strong Nota:] lo importante es no confundir la naturaleza del contrato y su razón de ser, ya que a veces, por desconocimiento, es mal utilizado en actividades que son permanentes en una empresa, como por ejemplo un asistente administrativo, entre otros cargos.
      .py-4.py-md-5(titulo="Contrato ocasional, accidental o transitorio" :icono="require('@/assets/curso/tema2/7.svg')")
        .row
          h4 Características conforme al código sustantivo del trabajo
          ul.mt-3.ps-5(style="list-style:disc;")
            li.mb-0 Cabe aclarar que tiene relación al contrato a término fijo frente a los tiempos y no puede ser inferior a un mes.
            li.mb-0 El periodo de prueba no puede superar la quinta parte del 20% del contrato. 
            li.mb-0 Para que se finalice la relación laboral debe ser por retiro voluntario del trabajador, pensión, por justa causa o sin justa causa o muerte del trabajador.
            li.mb-0 Si se despide sin justa causa al trabajador, se le debe pagar como indemnización los salarios restantes a la fecha de terminación del contrato.
          h4.mt-5 Uso en las empresas
          p.mt-3 Se utiliza por los empresarios cuando se manejan tareas específicas que no se desarrollan en la empresa, como también para cubrir ausentismos de personal, licencias y demás.
          p.mt-4 #[strong Nota:] se puede confundir en ocasiones con contratos de obra o labor, inclusive a término fijo. Es importante identificar la verdadera necesidad de la empresa frente a sus requerimientos contractuales y de personal.

    .row.mt-5
      .col-md-6
        figure.mb-5.mb-md-0
          img(src="@/assets/curso/tema2/8.svg" data-aos="fade-right")
      .col-md-6(style="place-self:center;")
        .cajon-b.color-primario.p-4
          p.mb-0(data-aos="fade-left") #[strong En los contratos laborales mencionados anteriormente,] los empleados tienen derecho a prestaciones sociales como prima de servicios, cesantías, intereses sobre las cesantías, vacaciones y auxilio de transporte; también cuentan con otros derechos contractuales como la licencia de paternidad, maternidad, luto y dotación.

    .col-md-9.m-auto.mt-5
      .cajon.color-acento-botones.p-4.mb-4(style="background-color:#FFF5E2;")
        .h4.mb-0(data-aos="fade-up") Nota aclaratoria
        p.mt-3(data-aos="fade-up") Al auxilio de transporte y dotación se tiene derecho cuando el ingreso base de cotización no supera los dos salarios mínimos legales vigentes.


    .tarjeta.color-secundario.p-4.mt-5.col-md-9.m-auto(style="background-color:#0C0A3E;")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-3.col-lg-2.text-center
          img(src="@/assets/curso/tema2/12.svg" style="display:inline;max-width:80px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(style="place-self:center;")
              p.text-white.mb-0 Para profundizar más sobre este tema, se debe consultar el #[strong Código Sustantivo del Trabajo] en la siguiente página web de la Secretaría del Senado de Colombia  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html" target="_blank")
                span(style="color:#0C0A3E !important;") Ir al sitio web
                i.fas.fa-file-download(style="color:#0C0A3E !important;")


    br
    .row.mt-5
      .col-sm-1(style="place-self:center;")
        figure.text-center.m-auto.text-center
          img(src="@/assets/curso/tema2/5.svg" style="max-width:30px;display:inline")
      .col-sm-11(style="place-self:center;")
        h3(data-aos="fade-up") Contratos no laborales con normatividad colombiana

    p.mt-5(data-aos="fade-up") Los dos contratos no laborales más utilizados en Colombia para apoyar la gestión de la actividad económica de una empresa, son los #[strong(style="padding:5px;background-color:#D0EAE2;") contratos de aprendizaje y de prestación de servicios profesionales.] Es importante conocer estos tipos de contrato debido al uso continuo que se le dan en las empresas colombianas:

    .mb-5.mt-5
      span(style="background-color:#0C0A3E;padding:15px 40px;text-align:center;color:#FFA400;border-radius:10px;font-weight:bold;" data-aos="fade-up") Contrato de aprendizaje

    LineaTiempoE.color-acento-contenido
      .row(titulo="La Ley 789 de 2002" subtitulo="establece en el artículo 30 su definición:")
        .col-auto
          figure
            img(src="@/assets/curso/tema2/9.svg" data-aos="fade-right")
        .col
          p(data-aos="fade-left") El contrato de aprendizaje es una forma especial dentro del Derecho Laboral, mediante la cual una persona natural desarrolla formación teórica práctica en una entidad autorizada, cambio de que una empresa patrocinadora proporcione los medios para adquirir formación profesional metódica y completa requerida en el oficio, actividad u ocupación y esto le implique desempeñarse dentro del manejo administrativo, operativo comercial o financiero propios del giro ordinario de las actividades de la empresa, por cualquier tiempo determinado no superior a dos (2) años, y por esto reciba un apoyo de sostenimiento mensual, el cual en ningún caso constituye salario.(Ley 789 de 2002. Artículo 30).

    .row.mt-5.p-5.cont_triangle(style="background-color:#16697A;border-radius:15px;position:relative;")
      .col-md-4
        figure.text-center.m-auto
          img(src="@/assets/curso/tema2/10.png" data-aos="fade-right" style="display:inline;max-width:300px")
      .col-md-8(style="place-self:center;")
        p.text-white.mb-0(data-aos="fade-left") El propósito de este contrato sin duda es fortalecer el conocimiento del aprendiz por medio de un ente conformador que apoya al estudiante para que realice las actividades de forma real, que en su institución de formación vio de forma teórica y simulada, apoyando su crecimiento profesional y experiencia en su hacer en la gestión empresarial.

    br
    .mb-5.mt-5
      span(style="background-color:#0C0A3E;padding:15px 40px;text-align:center;color:#FFA400;border-radius:10px;font-weight:bold;" data-aos="fade-up") Contrato por prestación de servicios

    .row.mt-5.p-5.cont_triangle(style="background-color:#16697A;border-radius:15px;position:relative;")
      .col-md-4
        figure.text-center.m-auto
          img(src="@/assets/curso/tema2/11.png" data-aos="fade-right" style="display:inline;max-width:300px")
      .col-md-8(style="place-self:center;")
        p.text-white.mb-0(data-aos="fade-left") Es un contrato que, aunque no es laboral, brinda una actividad humana a las empresas que lo requieren, ya sean los servicios profesionales de un contador, profesor, profesional o experto para desempeñar cierto rol sin generar relación laboral.
        p.text-white.mb-0.mt-4(data-aos="fade-left") Se crea para cubrir las necesidades que son llamadas objeto contractual que no requieren aplicar los tres elementos clave de un contrato laboral, debido a la libertad que tiene para ejecutar las actividades planeadas cumpliendo con los plazos de entrega o gestión. 
        p.text-white.mb-0.mt-4(data-aos="fade-left") Se debe tener en cuenta que en las organizaciones existen diferentes necesidades de personal y no todas las actividades pueden ser llevadas a cabo por medio de este tipo de contrato. Ejemplo: el asistente de gerencia que requiere tiempo completo en la empresa, es diferente al revisor fiscal o contador que puede llevar su gestión sin necesidad de estar tiempo completo en la empresa.

    .tarjeta.color-secundario.p-4.mt-5.col-md-9.m-auto(style="background-color:#0C0A3E;")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-3.col-lg-2.text-center
          img(src="@/assets/curso/tema2/12.svg" style="display:inline;max-width:80px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(style="place-self:center;")
              p.text-white.mb-0 Como material de apoyo, se invita a consultar el siguiente enlace sobre el #[strong Contrato de Aprendizaje SENA]  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.sena.edu.co/es-co/Empresarios/Paginas/contratoAprendizaje.aspx" target="_blank")
                span(style="color:#0C0A3E !important;") Descargar
                i.fas.fa-file-download(style="color:#0C0A3E !important;")

    Separador

    .titulo-segundo.mt-5
      h2#t_2_2 2.2 Elaboración de contratos en las organizaciones

    .row
      .col-md-8(style="place-self:center;")
        p(data-aos="fade-right") Los contratos con frecuencia son elaborados por el abogado laboral de la organización, según necesidades contractuales y de gestión en la empresa, teniendo en cuenta que deben cumplir con lo estipulado en la legislación laboral vigente. Es común ver cómo los abogados hacen el esquema y el asistente del área de administración del talento humano realiza la transcripción de los datos que, posteriormente, son enviados de nuevo al creador para su verificación y aprobación.
        .cajon-b.color-primario.pt-4.pb-4
          p.mb-0(data-aos="fade-left") También existen plataformas, algunas por cobrar y otras del Ministerio de Trabajo, con las bases de los contratos que cumplen con la normatividad legal vigente, pero su uso depende netamente de las decisiones y conocimientos de los expertos en la organización.
      .col-md-4
        figure.text-center.mt-md-0.mt-5
          img(src="@/assets/curso/tema2/13.svg" data-aos="fade-left")

    br
    .col-md-10.m-auto.mt-5
      .cajon.color-acento-botones.p-4.mb-4(style="background-color:#FFF5E2;")
        .h4.mb-0(data-aos="fade-up") Recomendación:
        p(data-aos="fade-up") sea el manejo que se le dé en la organización a los contratos es importante estar actualizando los modelos que se tienen por un abogado laboral para asegurar el cumplimiento legal y evitar sanciones o demandas.


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#92BFB1;")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/14.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-up") #[strong Una vez definido el tipo de contrato laboral requerido], se procede a dar continuidad al proceso de contratación en el cual se llama al candidato seleccionado y se le cita para firma de contrato, solicitándole la documentación establecida por la organización para tal fin. Se debe tener en cuenta que una vez se firme el contrato, las dos partes deben quedar con una copia del mismo.



      
</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
<style lang="sass">
.bloque-texto-a.color-secundario
  background-color: #FFE5B7
.bloque-texto-a.color-secundario:before
  background-color: #92BFB1
.slyder-f__btn i
  font-size: 2rem
  color: #FFA400
.cajon.color-acento-botones:before
  background-color: #FFA400
.tarjeta-flip__img
  border-radius: 0px !important
.tabs-b.color-acento-contenido .tabs-b__tab--active
  border-top-color: #FFA400 !important
  background-color: white !important
.tabs-b__tab
  background-color: #FFF9ED
  border-right: 2px solid #FFA400
  border-bottom: none !important
.cajon-b.color-primario:before
  background-color: #E1F2ED
.cajon-b:before
  right: 55%
  bottom: 0%
.linea-tiempo-e__item__header:before
  background-color: #FFA400
.linea-tiempo-e.color-acento-contenido .linea-tiempo-e__item__header:before
  border-color: #0C0A3E
.cont_triangle:before
  content: ''
  position: absolute
  width: 0
  height: 0
  border-width: 0 20px 20px 20px
  border-color: transparent transparent #16697A transparent
  border-style: solid
  top: -20px
  left: 102px
.cont_bloque1
  background: url(../assets/curso/tema2/14.svg)
  background-repeat: no-repeat
  background-size: contain
.cont_bloque1:before
  left: 38% !important
</style>
