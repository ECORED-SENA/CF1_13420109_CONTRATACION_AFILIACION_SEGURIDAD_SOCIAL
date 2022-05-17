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
        p(data-aos="fade-up") para no caer en la confusión sobre un contrato laboral y uno civil se deben mirar los tres elementos del contrato laboral y no incurrir en errores contractuales. Conforme al Código Sustantivo del Trabajo en el artículo 23 señala que son: prestación personal del servicio, continuada subordinación y retribución o remuneración del servicio.

    br
    .row.mt-5
      .col-sm-1(style="place-self:center;")
        figure.text-center.m-auto.text-center
          img(src="@/assets/curso/tema2/5.svg" style="max-width:30px;display:inline")
      .col-sm-11(style="place-self:center;")
        h3(data-aos="fade-up") Tipos de contratos laborales con normatividad colombiana

    p.mt-5(data-aos="fade-up") En Colombia los contratos laborales están regidos bajo la normatividad del Código Sustantivo del Trabajo del artículo 22 al 75. En este documento se pueden consultar los diferentes tipos de contratación y características. #[strong(style="padding:5px;background-color:#D0EAE2;") En el proceso de vinculación de personal en Colombia se utilizan los contratos por tiempo de duración, a saber:] 

    .row.mt-5.col-md-9.m-auto.p-5(style="background-color:#16697A;border-radius:10px")
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
        figure.text-center.m-auto
          img(src="@/assets/curso/tema2/6.svg" data-aos="fade-right" style="max-width:300px;display:inline")

    p.mt-5(data-aos="fade-up") Seguramente en algún momento alguien es contratado por alguna de las modalidades anteriores, pero #[strong(style="padding:5px;background-color:#D0EAE2;") ¿cómo se diferencian y qué características tienen?] En el siguiente cuadro se presenta la respuesta a esta pregunta:

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Tabla 1.] Cuadro comparativo de contratos laborales en tiempo y regulación contenido

    .tabla-a.color-acento-botones.mt-5 
      table
        thead(style="border-top:none;")
          tr
            th.p-4(style="background-color:#FFA400;") Contrato laboral
            th.p-4(style="background-color:#FFA400;") Tiempo
            th.p-4(style="background-color:#FFA400;") Regulación
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
</style>
