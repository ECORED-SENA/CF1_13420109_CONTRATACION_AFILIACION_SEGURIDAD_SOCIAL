<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.banner-interno__fondo
  background-image: url(assets/curso/fondo_temas.svg) !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #fff !important
.curso-main-container > .container
  overflow-x: clip !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding-bottom: 0px !important
.titulo-segundo:after
  border-left-color: #16697A !important
.titulo-principal__numero
  background-color: #16697A !important
.titulo-principal__numero span
  color: white !important
</style>
