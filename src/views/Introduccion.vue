<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") En las empresas, indistintamente de la actividad económica que desarrollen, existe un proceso que se encarga del ingreso del personal para que realice una función específica de acuerdo con la necesidad que se tenga. En unas organizaciones el área o dependencia que realiza este proceso se llama gestión humana, en otras, recursos humanos o talento humano, entre otros nombres; lo que cabe resaltar, es que en estas áreas se realiza una gestión bastante importante que se llama contratación y afiliación en la cual después de un proceso de preselección, se selecciona la persona a #[strong(style="padding:5px;background-color:#D0EAE2;") contratar y afiliar a la seguridad social.]

    .col-md-8.m-auto.mt-5
      .p-4.row(style="background-color:#0C0A3E;border-radius:20px;")
        .col-md-2
          figure.text-center.m-auto
            img(src="@/assets/curso/introduccion/1.svg" style="display:inline;max-width:60px;" data-aos="fade-left")
        .col-md-10(style="place-self:center;")
          p.mb-0.text-white(data-aos="fade-right") En el siguiente video se pueden observar las generalidades y objeto de estudio de esta unidad temática en relación con la contratación y vinculación laboral:
    
    figure.mt-5.col-md-10.m-auto
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
