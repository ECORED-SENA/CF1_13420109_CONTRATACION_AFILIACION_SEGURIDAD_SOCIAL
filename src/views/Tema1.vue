<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Alistamiento y convocatoria según las necesidades de personal

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.text-center
            img(src="@/assets/curso/tema1/1.svg" style="max-width:200px;display:inline;" data-aos="fade-left")
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p.mb-0(data-aos="fade-up") El crecimiento de una empresa debido a la demanda de sus clientes frente a sus productos o servicios desencadena un aumento en la mano de obra para cubrir las necesidades del mercado; este aumento de personas en las empresas se ve reflejado en las áreas de las mismas ya sea producción, logística, mercadeo, financiera y administrativa según la gestión que se haga en la compañía.

    figure.mt-5.col-md-10.m-auto
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Jg3wnOumcDw" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Figura 1.] Ciclo de alistamiento y convocatoria

    figure.col-md-6.m-auto
      img(src="@/assets/curso/tema1/2.svg" data-aos="fade-up")

    Separador

    .titulo-segundo.mt-5
      h2#t_1_1 1.1  Preselección laboral

    p(data-aos="fade-up") Durante la selección de candidatos, las empresas pueden variar tanto el orden de la gestión, como las herramientas, según lo estipule o considere, es de anotar que para una buena selección se deben implementar las siguientes acciones o procesos.

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Figura 2.] Proceso de preselección en las empresas

    .row.mt-4.p-0.p-md-3(style="background-color:#16697A;border-radius:20px;")
      .col-md-4(style="place-self:center;")
        figure.text-center.m-auto
          img(src="@/assets/curso/tema1/3.svg" data-aos="fade-up" style="max-width:300px;display:inline")
      .col-md-8(style="place-self:center")
        SlyderF.slide_1.mb-4.mb-md-0(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4.h-100(style="background-color:#D0EAE2;")
            h4(style="color:#12263F;") Recepción de hojas de vida.
            p(style="color:#12263F;") Como resultado de la gestión hecha en la convocatoria laboral. 
          .tarjeta.color-acento-botones.p-4.h-100(style="background-color:#D0EAE2;")
            h4(style="color:#12263F;") Revisión de cumplimiento del perfil solicitado.
            p(style="color:#12263F;") Se realiza un filtro de las hojas de vida comparando el perfil requerido, versus el que se presenta para determinar la idoneidad del postulado. 
          .tarjeta.color-acento-botones.p-4.h-100(style="background-color:#D0EAE2;")
            h4(style="color:#12263F;") Citación del candidato para presentar pruebas.
            p(style="color:#12263F;") Pueden ser psicotécnicas, de conocimiento, personalidad, de campo, polígrafo, entre otras.
          .tarjeta.color-acento-botones.p-4.h-100(style="background-color:#D0EAE2;")
            h4(style="color:#12263F;") Entrevistas.
            p(style="color:#12263F;") El candidato pasa por una o varias entrevistas que pueden ser estructuradas, no estructuradas o mixtas. Los entrevistadores pueden implementar métodos como, por ejemplo, entrevistas de panel, grupales, estudios de casos y utilizar medios telefónicos y virtuales para el desarrollo tanto de la entrevistas como de las pruebas.
          .tarjeta.color-acento-botones.p-4.h-100(style="background-color:#D0EAE2;")
            h4(style="color:#12263F;") Verificación de los datos de la hoja de vida.
            p(style="color:#12263F;") Verificación de antecedentes y referenciación de datos de estudio, laboral, familiares, disciplinarios, legales e inclusive si es necesario, visita domiciliaria.
          .tarjeta.color-acento-botones.p-4.h-100(style="background-color:#D0EAE2;")
            h4(style="color:#12263F;") Exámenes médicos.
            p(style="color:#12263F;") Una vez el candidato es aprobado, es enviado a exámenes médicos ocupacionales de ingreso.

    Separador

    .titulo-segundo.mt-5
      h2#t_1_2 1.2  Valoración de resultados y decisión de contratar

    p(data-aos="fade-up") El área encargada de contratación recibe los resultados de todo el proceso, se reúne con las partes interesadas dando un informe de cada aspirante al cargo y toman la decisión de seleccionar al que mejor cumple con los requisitos del perfil solicitado.

    .col-md-9.m-auto.mt-5
      .cajon.color-acento-botones.p-4.mb-4(style="background-color:#FFF5E2;")
        .h4.mb-0(data-aos="fade-up") Nota aclaratoria
        p(data-aos="fade-up") La mayoría de veces, los exámenes médicos se hacen después de la valoración de los resultados y para la toma de decisiones se presenta una terna de candidatos.

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Figura 3.] Ciclo de valoración y elección de candidatos

    figure.m-auto.text-center.col-md-11.mt-5
      img(src="@/assets/curso/tema1/4.svg" data-aos="fade-up")



      
</template>

<script>
export default {
  name: 'Tema1',
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
.slide_1 .horizontal-scroll
  align-items: stretch !important
</style>
