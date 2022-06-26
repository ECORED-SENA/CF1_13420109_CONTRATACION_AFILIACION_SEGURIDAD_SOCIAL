<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Afiliaciones al sistema de seguridad social en Colombia según normativa

    p(data-aos="fade-up") Antes de iniciar el proceso de afiliación a seguridad social se debe entender su composición y la responsabilidad de las empresas y del Estado por garantizar este derecho que es irrenunciable por parte de las personas o trabajadores.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color:#92BFB1;")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mt-5.mb-5(data-aos="fade-up") Normalmente cuando se habla de Seguridad Social en Colombia se asocia a la salud y el derecho que tienen las personas a acceder a estos servicios, ya sea porque paga, cotiza o recibe este servicio de forma subsidiada del Estado, y lo que se debe tener claro es que la salud es un derecho fundamental. Pero, #[strong ¿qué es el sistema de seguridad social?]

    p.mt-5(data-aos="fade-up") #[strong(style="padding:5px;background-color:#D0EAE2;") Para responder esta pregunta lo primero que se debe conocer es que la Ley 100 de 1993] regula la seguridad social en Colombia y en la misma se establecen los mecanismos de acción y gestión frente a cualquier situación que involucre la prestación de los servicios de salud, pensión, riesgos laborales y servicios complementarios como componentes de la misma. De igual manera, ofrece una definición de la Seguridad Social en Colombia:

    .cajon.color-acento-botones.p-4.mt-5(style="background-color:#FFF5E2;")
      p(data-aos="fade-up") #[strong La Seguridad Social Integral es el conjunto de instituciones, normas y procedimientos, de que disponen la persona y la comunidad para gozar de una calidad de vida, mediante el cumplimiento progresivo de los planes y programas que el Estado y la sociedad desarrollen para proporcionar la cobertura integral de las contingencias, especialmente las que menoscaban la salud y la capacidad económica, de los habitantes del territorio nacional, con el fin de lograr el bienestar individual y la integración de la comunidad (Ley 100 de 1993, preámbulo).]

    .row.mt-5
      .col-md-7(style="place-self:center;")
        p(data-aos="fade-right") De acuerdo con lo anterior, se puede decir que el propósito de la seguridad social es garantizar la calidad de vida de las personas por medio del acceso al derecho fundamental a la salud y los componentes que la integran como salud, riesgos laborales y pensión. Para realizar las vinculaciones respectivas a estos componentes de la seguridad social, también es importante conocer, qué afiliaciones se deben hacer según cada contrato, las características de cada componente de afiliación, sus formatos y herramientas en la red para hacer la gestión dentro de las empresas.
      .col-md-5
        figure
          img(src="@/assets/curso/tema3/2.png" data-aos="fade-left")


    Separador

    .titulo-segundo.mt-5
      h2#t_3_1 3.1  Afiliación a seguridad social según el tipo de contratación

    p(data-aos="fade-up") Según el tipo de contrato, existen algunas características de afiliación. En el siguiente cuadro comparativo puede observar las diferentes afiliaciones que se deben hacer de acuerdo al tipo de contrato:

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Tabla 2.] Afiliaciones a seguridad social según tipo de contrato

    .tabla-a.color-acento-botones.mt-5(style="max-width:100%;overflow-x:unset")
      table(style="max-width:100%;overflow-x:unset")
        thead(style="border-top:none;")
          tr
            th.p-4(style="background-color:#FFA400;font-size:18px;") Contrato
            th.p-4(style="background-color:#FFA400;font-size:18px;") Tipos de Contratos
            th.p-4(style="background-color:#FFA400;font-size:18px;") Afiliación que debe hacer la empresa
            th.p-4(style="background-color:#FFA400;font-size:18px;") Nota aclaratoria
        tbody
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;text-align:center;") Laboral
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") 
              ul.lista-ul
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Contrato a término fijo. 
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Contrato a término indefinido.
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Contrato por obra y labor.
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Contrato ocasional, accidental o transitorio.
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") 
              ul.lista-ul
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a administradora de riesgos laborales. 
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a entidad promotora de salud.
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a caja de compensación familiar.
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a administradora de fondo de pensiones y cesantías.
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;")
              ul.lista-ul
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a administradora de riesgos laborales 24 horas antes de su ingreso.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border-right:1px white solid;text-align:center;" rowspan="2") No laboral
            td.p-4(style="border:0px;background-color:#F8F8F8;border-right:1px white solid;") 
              ul.lista-ul
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Contrato por prestación de servicios
            td.p-4(style="border:0px;background-color:#F8F8F8;border-right:1px white solid;")
              ul.lista-ul
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a administradora de riesgos laborales. 
            td.p-4(style="border:0px;background-color:#F8F8F8;border-right:1px white solid;")
              ul.lista-ul
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a administradora de riesgos laborales 24 horas antes de su ingreso y si es una actividad de alto riesgo debe asumir su costo la empresa.
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a entidad promotora de salud. No se hace la afiliación, pero sí se debe exigir en la contratación. 
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a administradora de fondo de pensiones. No se hace la afiliación, pero sí se debe exigir en la contratación.
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") 
              ul.lista-ul
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Contrato de aprendizaje.
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") 
              ul.lista-ul
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a administradora de riesgos laborales. 
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a entidad promotora de salud. 
            td.p-4(style="border:0px;background-color:#EBEBEB;border-right:1px white solid;") 
              ul.lista-ul
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a administradora de riesgos laborales 24 horas antes de su ingreso es decir en la etapa práctica y lo cancela la empresa.
                li(data-aos="fade-up") 
                  i.fas.fa-check
                  | Afiliación a entidad promotora de salud en etapa lectiva y práctica asumiendo su costo la empresa. 

    .tarjeta.color-secundario.p-4.mt-5.col-md-9.m-auto(style="background-color:#0C0A3E;")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-3.col-lg-2.text-center
          img(src="@/assets/curso/tema2/12.svg" style="display:inline;max-width:80px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(style="place-self:center;")
              p.text-white.mb-0 Para ampliar el contenido anterior, se invita a consultar el material de apoyo de la Ley 100 de 1993, disponible en la página web de la Función Pública del Gobierno de Colombia:   
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248#:~:text=Crea%20el%20sistema%20de%20seguridad%20social%20integral%20conformado%20por%20los,definen%20en%20la%20presente%20ley" target="_blank")
                span(style="color:#0C0A3E !important;") Descargar
                i.fas.fa-file-download(style="color:#0C0A3E !important;")

    Separador

    .titulo-segundo.mt-5
      h2#t_3_2 3.2 Afiliación a administradora de riesgos laborales

    .row
      .col-md-7
        p(data-aos="fade-right") Comúnmente las personas solo piensan o relacionan el concepto de ARL cuando se accidentan o tienen alguna enfermedad laboral y, aunque hace parte de unas de sus tantas funciones, es necesario saber que el propósito principal que tienen las administradoras de riesgos laborales conocida por sus siglas ARL, es trabajar mancomunadamente junto con la empresa contratante para generar estrategias de prevención y mitigación de enfermedades y accidentes, que puedan ocurrir en el ambiente de trabajo para garantizar un lugar óptimo donde el empleado pueda hacer sus actividades sin riesgos que desmejoren su calidad de vida.
      .col-md-5
        figure
          img(src="@/assets/curso/tema3/3.svg" data-aos="fade-left")

    .cajon.color-acento-botones.p-4.mt-5(style="background-color:#FFF5E2;")
      h4(data-aos="fade-up") La afiliación de ARL
      p(data-aos="fade-up") Se debe realizar máximo un día antes que el funcionario ingrese a laborar a la empresa para garantizar su cobertura, se debe tener claro el nivel de riesgo que se maneja en el cargo, así como el lugar de trabajo, documento de identidad, datos de residencia, EPS, fondo de pensiones y teléfono.

    p.mt-5(data-aos="fade-up") Cuando se habla de nivel de riesgo, se refiere al que está asociado a la actividad que desempeñará el funcionario y están distribuidos en niveles de 1 a 5 con un porcentaje de aporte para cada uno. En el gráfico a continuación se relacionan los niveles de riesgo con sus porcentajes de aportes respectivos:

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Figura 4.] Niveles de riesgo y porcentajes de las ARL

    figure.mt-5.text-center.m-auto.col-md-7
      img(src="@/assets/curso/tema3/4.svg" data-aos="fade-up")

    p.mt-5(data-aos="fade-up") La ARL la escoge la empresa contratante y la afiliación de sus colaboradores la hace por canales virtuales, es decir en la página web de la administradora de riesgos laborales, en donde cada empleador ingresa y genera un usuario y contraseña para hacer esta gestión. 

    p.mt-4(data-aos="fade-up") #[strong En la siguiente imagen se observa un ejemplo del portal web de una las ARL del país.]

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Figura 5.] Ingreso a página web de Positiva ARL

    figure.mt-5.text-center.m-auto.col-md-8
      img(src="@/assets/curso/tema3/5.svg" data-aos="fade-up")
      figcaption.mt-3(data-aos="fade-up"  style="font-weight:400;") #[strong Nota.] Captura de imagen tomada del portal de Ingreso ARL Positiva (https://www.positivaenlinea.gov.co/nuevo/). 

    p.mt-5(data-aos="fade-up") Es importante indicar que en estos portales se pueden realizar los siguientes trámites: reportar accidentes, descargar certificados, ingresar a capacitaciones, solicitar asesoría, mirar estado de cuenta y hacer seguimiento a los servicios y portafolio que tiene la entidad.

    p.mt-4(data-aos="fade-up") #[strong En el siguiente cuadro se comparten los enlaces de algunas Administradoras de Riesgos Laborales (ARL):]

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Tabla 3.]  Administradoras de riesgos laborales más conocidas en Colombia

    .tabla-a.color-acento-botones.mt-5.col-md-7.m-auto(style="overflow-x:unset;")
      table(style="max-width:100%;min-width:100%;")
        thead(style="border-top:none;")
          tr
            th.p-4.text-center(style="background-color:#D0EAE2;border-right:2px #92BFB1 solid;border-left:2px #92BFB1 solid;font-size:18px;") ARL
            th.p-4.text-center(style="background-color:#D0EAE2;border-right:2px #92BFB1 solid;border-left:2px #92BFB1 solid;font-size:18px;") Página web para afiliación
        tbody
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/6.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.colmenaseguros.com/Paginas/default.aspx" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/7.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.mapfre.com.co/seguros-todo-riesgo/arl/ " target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/8.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.axacolpatria.co/portal/Empresas/ARL" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/9.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.positivaenlinea.gov.co/nuevo/" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/10.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.segurosbolivar.com/arl" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/11.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://servicios.laequidadseguros.coop/EquidadARL" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/12.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.arlsura.com/index.php/ingreso-retiro-trabajadores" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")

    .tarjeta.color-secundario.p-4.mt-5.col-md-9.m-auto(style="background-color:#0C0A3E;")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-3.col-lg-2.text-center
          img(src="@/assets/curso/tema2/12.svg" style="display:inline;max-width:80px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(style="place-self:center;")
              p.text-white.mb-0 En el material complementario se recomienda ver un ejemplo del proceso de afiliación de un empleador en el portal web de la ARL SURA.  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=1ygOnSrZ8Ks&t=18s&ab_channel=ARLSURA" target="_blank")
                span(style="color:#0C0A3E !important;") Ver video
                i.fas.fa-play(style="color:#0C0A3E !important;")

    Separador

    .titulo-segundo.mt-5
      h2#t_3_3 3.3 Afiliación a entidad promotora de salud

    p(data-aos="fade-up") Otro proceso que se encuentra en la contratación laboral es el de afiliación a entidades promotoras de salud EPS, que tienen como función principal ingresar a los trabajadores al sistema de seguridad social en salud y están encargadas de velar que el empleado y sus beneficiarios tengan la cobertura necesaria para recibir una buena atención. A estas entidades las empresas les giran los aportes correspondientes y ellas administran este recurso para la razón por las que fueron creadas.

    .mt-4.h5(data-aos="fade-up") #[strong Algunos puntos clave para tener en cuenta en este proceso de afiliación se pueden ver en el siguiente recurso interactivo:]

    h4.mt-5.text-center(data-aos="fade-up") Afiliación a Entidades Promotoras de Salud (EPS)

    .row.col-md-9.m-auto.mt-4
      .col-md-6.mb-4.mb-md-0
        .tarjeta-avatar-b(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/13.svg' alt='' data-aos="fade-right")
          .tarjeta.tarjeta--azul(style="background-color:#FFA400;border-radius:0px;height:100%;")
            .p-5
              h4(data-aos="fade-up") Trabajador
              p.mt-4(data-aos="fade-up") Para la afiliación a EPS el trabajador es quien la escoge.
      .col-md-6
        .tarjeta-avatar-b(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/14.svg' alt='' data-aos="fade-right")
          .tarjeta.tarjeta--azul(style="background-color:#0C0A3E;border-radius:0px;height:100%;")
            .p-5
              h4.text-white(data-aos="fade-up") Talento humano
              p.mt-4.text-white(data-aos="fade-up") El encargado del área de talento humano es quien afilia, por medio de los formatos estipulados por las entidades promotoras de salud.

    .tarjeta.p-5.mt-5(style="background-color:#D0EAE2;")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.col-md-10.m-auto(titulo="Portales Web")
          .col-md-4.mb-4.mb-md-0
            figure.text-center
              img(src='@/assets/curso/tema3/15.svg', alt='' style="display:inline;max-width:250px")
          .col-md-8(style="place-self:center;")
            p Gracias a los recursos tecnológicos muchas de estas entidades promotoras de salud han migrado este proceso, de igual manera que las ARL, a sus páginas web y haciendo la actividad de afiliación más ágil. 
        .row.col-md-10.m-auto(titulo="Asesor EPS")
          .col-md-4.mb-4.mb-md-0
            figure.text-center
              img(src='@/assets/curso/tema3/16.svg', alt='' style="display:inline;max-width:250px")
          .col-md-8(style="place-self:center;")
            p Estas entidades asignan un asesor para apoyar ya sea la gestión física o virtual. Es importante que el encargado del proceso de afiliación en la empresa tenga este contacto el cual puede solicitar en las líneas telefónicas o página web de cada EPS. 
        .row.col-md-10.m-auto(titulo="Datos de afiliación")
          .col-md-4.mb-4.mb-md-0
            figure.text-center
              img(src='@/assets/curso/tema3/17.svg', alt='' style="display:inline;max-width:250px")
          .col-md-8(style="place-self:center;")
            p Para esta actividad se debe tener la información completa,  como son los documentos de identificación tanto del trabajador como de sus beneficiarios, datos de residencia, información de su ARL, fondo de pensiones y salario. 
        .row.col-md-10.m-auto(titulo="Elección EPS")
          .col-md-4.mb-4.mb-md-0
            figure.text-center
              img(src='@/assets/curso/tema3/18.svg', alt='' style="display:inline;max-width:250px")
          .col-md-8(style="place-self:center;")
            p El trabajador, por medio de su EPS, escoge su Institución Prestadora de Servicio de Salud IPS, según la ubicación para recibir atención donde lo desee.
        .row.col-md-10.m-auto(titulo="Lineamientos de ingreso")
          .col-md-4.mb-4.mb-md-0
            figure.text-center
              img(src='@/assets/curso/tema3/19.svg', alt='' style="display:inline;max-width:250px")
          .col-md-8(style="place-self:center;")
            p Acorde a cada entidad existen lineamientos para el ingreso: si es por primera vez o si es un afiliado antiguo, ya que en algunas EPS cuando es por primera vez, solicitan la documentación de forma física; cuando el colaborador es antiguo y tiene beneficiarios ya incluidos automáticamente queda ingresado. 
    
    p.mt-5(data-aos="fade-up") Es importante garantizar que el proceso quede radicado ya sea físico o virtual, ya que es responsabilidad de la organización esta gestión y no incurrir en fallas que traen sanciones. 

    h5.mt-4(data-aos="fade-up") En la siguiente imagen se muestra un ejemplo del ingreso a la página web de una EPS para afiliar a un trabajador.

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Figura 6.] Ingreso al portal web de Sura EPS

    figure.m-auto.col-md-5.mt-4
      img(src="@/assets/curso/tema3/20.svg" data-aos="fade-up")
    figcaption.mt-5(data-aos="fade-up" style="font-weight:400;") #[strong Nota.] Captura de imagen tomada del portal Ingreso EPS Sura (https://login.sura.com/sso/servicelogin.aspx?continueTo=https%3A%2F%2Fepsapps.suramericana.com%2FSemp%2F&service=epssura). 
    
    h5.mt-5(data-aos="fade-up") De las principales Entidades Promotoras de Salud (EPS) del país, las más utilizadas son:

    .tabla-a.color-acento-botones.mt-5.col-md-7.m-auto(style="overflow-x:unset;")
      table(style="max-width:100%;min-width:100%;")
        thead(style="border-top:none;")
          tr
            th.p-4.text-center(style="background-color:#D0EAE2;border-right:2px #92BFB1 solid;border-left:2px #92BFB1 solid;font-size:18px;") EPS
            th.p-4.text-center(style="background-color:#D0EAE2;border-right:2px #92BFB1 solid;border-left:2px #92BFB1 solid;font-size:18px;") Página web para afiliación y/o consultas
        tbody
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/21.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.epssanitas.com/usuarios/web/nuevo-portal-eps#gsc.tab=0" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/22.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.epssura.com/" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/23.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://portal.nuevaeps.com.co/Portal/home.jspx" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/26.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://enlinea.famisanar.com.co/Portal/home.jspx " target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/24.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://transaccional.saludtotal.com.co/Transaccional/plataforma/ingresar.aspx" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/25.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://corporativo.compensar.com/salud/transacciones" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")

    p.mt-5(data-aos="fade-up") Es importante saber que una vez se hace la afiliación el funcionario queda activo para recibir todos los servicios y no solo urgencias como ocurría anteriormente.

    Separador

    .titulo-segundo.mt-5
      h2#t_3_4 3.4  Afiliación a caja de compensación familiar 

    p(data-aos="fade-up") #[strong Las Cajas de Compensación Familiar - CCF] nacen como respuesta del Estado para mejorar las condiciones laborales y económicas de la clase obrera del país; por medio de estas el trabajador puede acceder a beneficios como subsidios de desempleo, familiares, de vivienda, educación y recreación, entre otras actividades que se hacen mancomunadamente con las empresas asociadas. Estas cajas las eligen los empleadores que a su vez asumen los costos de los aportes y utilizan los servicios para capacitar, entrenar, recrear y dar bienestar a sus colaboradores.

    .cajon.color-acento-botones.mt-5(style="background-color:#FFF5E2;")
      .row
        .col-md-6.ps-5.pt-5.pe-5(style="place-self:center;")
          p(data-aos="fade-up") Para generar la afiliación, las cajas de compensación tienen habilitada en sus páginas web el espacio para hacerlo, lo que mejora la experiencia en la gestión. En caso que el empleador no tenga acceso a la página debe hacer la solicitud de registro para asignación de usuario y no tener que remitirse personalmente a radicar los ingresos.  
          p.mt-4(data-aos="fade-up") Para el ingreso del trabajador se debe contar con información completa del documento de identidad, datos de ubicación de residencia, EPS, ARL y AFP. Para la vinculación de los beneficiarios del trabajador la empresa puede apoyar en la gestión o el mismo funcionario puede crear un usuario como empleado e inscribirse adjuntando la documentación que les soliciten para recibir subsidios, beneficios y demás estipulados.
        .col-md-6
          figure
            img(src="@/assets/curso/tema3/27.svg" data-aos="fade-left")

    h5.mt-5(data-aos="fade-up") En la siguiente imagen se muestra el ingreso al portal Web de una Caja de Compensación Familiar (CCF) para afiliar a un trabajador:

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Figura 7.] Ingreso al portal web de la caja de compensación familiar Cafam

    figure.m-auto.col-md-8.mt-4
      img(src="@/assets/curso/tema3/28.svg" data-aos="fade-up")
    figcaption.mt-5(data-aos="fade-up" style="font-weight:400;") #[strong Nota.] Captura de pantalla tomada del portal de ingreso de la caja de compensación familiar Cafam (https://www.cafam.com.co/tx/login). 

    .tarjeta.color-secundario.p-4.mt-5.col-md-8.m-auto(style="background-color:#0C0A3E;")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-3.col-lg-2.text-center
          img(src="@/assets/curso/tema2/12.svg" style="display:inline;max-width:80px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0(style="place-self:center;")
              p.text-white.mb-0 En el material complementario de este componente formativo se puede observar el video tutorial de afiliación de trabajadores a la Caja de Compensación Compensar, como ejemplo.  

    p.mt-5(data-aos="fade-up") Las cajas de compensación familiar más utilizadas por las empresas en Colombia son:

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Tabla 5.] CCF más reconocidas en Colombia

    .tabla-a.color-acento-botones.mt-5.col-md-7.m-auto(style="overflow-x:unset;")
      table(style="max-width:100%;min-width:100%;")
        thead(style="border-top:none;")
          tr
            th.p-4.text-center(style="background-color:#D0EAE2;border-right:2px #92BFB1 solid;border-left:2px #92BFB1 solid;font-size:18px;") CCF
            th.p-4.text-center(style="background-color:#D0EAE2;border-right:2px #92BFB1 solid;border-left:2px #92BFB1 solid;font-size:18px;") Página web para afiliación y/o consultas
        tbody
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/29.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.cafam.com.co/" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/31.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://corporativo.compensar.com/" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/30.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.colsubsidio.com/" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/33.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.comfenalcovalle.com.co/" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/32.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.comfacundi.com.co/" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")

    Separador

    .titulo-segundo.mt-5
      h2#t_3_5 3.5  Afiliación a administradora de fondo de pensiones y cesantías

    p(data-aos="fade-up") En Colombia existen entidades encargadas de administrar y gestionar los aportes a pensiones y cesantías que reciben por parte de las empresas o trabajadores independientes. Dentro de la gestión de estos aportes, está también el pago de pensión al funcionario que sale jubilado y el pago de cesantías al trabajador cuando finaliza el contrato o cuando son requeridas para estudio, compra de vivienda y demás necesidades que están estipuladas ante la ley.

    .cont_verde(style="position:relative;")
      .col-md-10.m-auto.mt-5.p-5(style="background-color:#16697A;position:relative;")
        h5.text-white.text-center(data-aos="fade-up") Afiliación al fondo de pensiones y cesantías

        .row.mt-5
          .col-md-6.mb-4.mb-md-0
            .p-5(style="background-color:#FFA400;height:100%;")
              figure
                img(src="@/assets/curso/tema3/34.svg" data-aos="fade-up" style="max-width:100px;")
              h5.mt-4(data-aos="fade-up") El empleador
              p.mt-4.mb-0(data-aos="fade-up") En cuanto a la Administradora de Fondo de Pensiones, mensualmente recibe los aportes correspondientes,  mientras que por concepto de cesantías, la empresa consigna el aporte anualmente teniendo en cuenta que cada mes hace su provisión.
          .col-md-6
            .p-5(style="background-color:#0C0A3E;height:100%;")
              figure
                img(src="@/assets/curso/tema3/35.svg" data-aos="fade-up" style="max-width:100px;")
              h5.mt-4.text-white(data-aos="fade-up") La afiliación
              p.mt-4.text-white.mb-0(data-aos="fade-up") Para pensiones y cesantías se hace una sola vez, es decir cuando el funcionario inicia su vida laboral o hace la solicitud de traslado de la misma, por ende, estas entidades cuentan con un asesor que hace el debido proceso en la entidad correspondiente.

        .mt-4.p-5(style="background-color:#D0EAE2;")
          p.mb-0(data-aos="fade-up") Si un funcionario viene laborando e ingresa a la empresa como trabajador nuevo, solo se le debe solicitar el certificado de afiliación a fondo de pensiones y cesantías para corroborar la información y hacer los debidos aportes. 

        .col-md-9.m-auto.row.mt-5
          .col-auto
            figure
              img(src="@/assets/curso/tema3/36.svg" data-aos="fade-right")
          .col(style="place-self:center;")
            p.text-white.mb-0(data-aos="fade-up") Si es su primer empleo, se debe verificar que no esté afiliado, consultando en las plataformas como RUAF, FOSYGA y demás entidades. 

        .col-md-9.m-auto.row.mt-4
          .col-auto
            figure
              img(src="@/assets/curso/tema3/37.svg" data-aos="fade-right")
          .col(style="place-self:center;")
            p.text-white.mb-0(data-aos="fade-up") Si definitivamente no aparece, se le puede preguntar al trabajador en dónde desea que lo afilien y se llama al asesor para hacer el diligenciamiento del formato en físico o la gestión en línea de afiliación a la administradora de fondo de pensiones y cesantías.

        .mt-5.p-5(style="background-color:#D0EAE2;")
          p.mb-0(data-aos="fade-up") Una vez el funcionario esté afiliado, puede crear un usuario y consultar certificados, saldos e historia laboral.


    p.mt-5(data-aos="fade-up") Debido a la contingencia causada por la Covid-19 muchas de estas entidades abrieron sus páginas web para realizar las afiliaciones. Es importante que en las organizaciones, el área responsable de vinculaciones, esté revisando las mejoras que se hacen en estas plataformas virtuales.
    h5.mt-4(data-aos="fade-up") En la siguiente imagen se muestran como ejemplo, las páginas web de ingreso al Fondo de Pensiones Colpensiones y al Fondo de Cesantías Porvenir:

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Figura 8.] Ejemplo de Ingreso a portales de fondo de pensiones y fondo de cesantías

    figure.m-auto.col-md-8.mt-4
      img(src="@/assets/curso/tema3/38.svg" data-aos="fade-up")
    figcaption.mt-4(data-aos="fade-up"  style="font-weight:400;") #[strong Nota.] Captura de pantalla tomada del portal de ingreso de Colpensiones (https://www.colpensionestransaccional.gov.co/sede_electronica/tramites/). 

    figure.m-auto.col-md-8.mt-5
      img(src="@/assets/curso/tema3/39.png" data-aos="fade-up")
    figcaption.mt-4(data-aos="fade-up"  style="font-weight:400;") #[strong Nota.] Captura de pantalla tomada del portal de ingreso de Cesantías Porvenir (https://transacciones.porvenir.com.co/Personas/Paginas/default.aspx). 

    p.mt-5(data-aos="fade-up") Para ver un ejemplo de #[strong afiliación a fondo de pensiones de Colpensiones], se invita observar el video tutorial que se encuentra en el material complementario. 

    p.mt-4(data-aos="fade-up") Para el fondo de pensiones el funcionario con apoyo del área de afiliaciones de la empresa puede registrarse, como también lo puede hacer la misma empresa. Y para las cesantías el proceso de afiliación lo puede hacer también el funcionario, o con apoyo de la empresa (esto es opcional).

    h5.mt-4(data-aos="fade-up") Los portales web de las administradoras de fondos y pensiones más utilizadas por los colombianos son:

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Tabla 6.] AFP y de cesantías más usadas en Colombia

    .tabla-a.color-acento-botones.mt-5.col-md-7.m-auto(style="overflow-x:unset;")
      table(style="max-width:100%;min-width:100%;")
        thead(style="border-top:none;")
          tr
            th.p-4.text-center(style="background-color:#D0EAE2;border-right:2px #92BFB1 solid;border-left:2px #92BFB1 solid;font-size:18px;") Fondos de pensiones y/o fondos de cesantías
            th.p-4.text-center(style="background-color:#D0EAE2;border-right:2px #92BFB1 solid;border-left:2px #92BFB1 solid;font-size:18px;") Página web para afiliación y/o consultas
        tbody
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/40.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.colpensiones.gov.co/" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/41.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.colfondos.com.co/dxp/web/guest" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/42.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.fna.gov.co/" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")
          tr
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              figure.text-center.m-auto
                img(src="@/assets/curso/tema3/43.svg" style="display:inline;max-width:150px;")
            td.p-4(style="border:0px;background-color:#fff;border:2px #92BFB1 solid;text-align:center;")
              a.boton.color-acento-botones.texto-blanco(href="https://www.porvenir.com.co/web/personas/inicio" target="_blank")
                span(style="color:#0C0A3E !important;") Visitar Portal Web
                i.fas.fa-link(style="color:#0C0A3E !important;")

    .tarjeta.color-secundario.p-4.mt-5.col-md-9.m-auto(style="background-color:#0C0A3E;")
      .row.justify-content-around.align-items-center
        .col-4.col-sm-3.col-lg-2.text-center
          img(src="@/assets/curso/tema2/12.svg" style="display:inline;max-width:80px")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-sm-0(style="place-self:center;")
              p.text-white.mb-0 Para conocer un ejemplo sobre la afiliación digital al fondo de cesantías con en el Fondo Nacional del Ahorro, se sugiere consultar el video que se encuentra en el material complementario. 

    Separador

    .titulo-segundo.mt-5
      h2#t_3_6 3.6  Proceso de afiliación a seguridad social dentro de las organizaciones

    p(data-aos="fade-up") El área de talento humano, por lo general, es la encargada del proceso de afiliación al personal que ingresa al sistema de seguridad social y en cada empresa se puede manejar un proceso diferente según sea la necesidad de contratación. En la siguiente figura se pueden observar los elementos clave dentro de un proceso de afiliación de un trabajador.

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Figura 9.] Proceso de afiliación al sistema de seguridad social 

    figure.m-auto.col-md-11.mt-4
      img(src="@/assets/curso/tema3/44.svg" data-aos="fade-up")

    .row.cajon.color-acento-botones.p-4.mt-5(style="background-color:#FFF5E2;")
      .col-auto
        figure
          img(src="@/assets/curso/tema3/45.svg" data-aos="fade-right")
      .col
        p.mb-0(data-aos="fade-left") Se debe tener en cuenta que el proceso de afiliación vaya acompañado de la firma del contrato, ya que una vez firmado, el encargado de las afiliaciones procede a hacer la gestión ante las entidades correspondientes al sistema de seguridad social con la documentación y soportes requeridos.
        p.mt-4.mb-0(data-aos="fade-up") Además, es importante tener presente que la afiliación a la administradora de riesgos laborales, se debe hacer máximo un día antes de iniciar labores el trabajador.

    Separador

    .titulo-segundo.mt-5
      h2#t_3_7 3.7  Documentación solicitada para la vinculación del trabajador

    p(data-aos="fade-up") Cuando un candidato es seleccionado para vincularse a una empresa, debe presentar una serie de documentos requeridos para el proceso de contratación y afiliación al sistema de seguridad social e iniciar su historia laboral en la empresa. Esta documentación debe solicitarse antes de su vinculación.
    p.mt-4(data-aos="fade-up") A continuación, se presenta la compilación de un listado de los documentos más utilizados para la gestión de firma de contrato y afiliaciones, teniendo en cuenta que algunos no son necesarios para todos los cargos, excepto los de afiliación al sistema de seguridad social.

    p.mt-5(style="border-left:5px #16697A solid;padding:6px;" data-aos="fade-up") #[strong Tabla 7.] Documentación más solicitada en las empresas para firmar contratos y hacer afiliaciones al sistema de seguridad social

    .tabla-a.color-acento-botones.mt-5.col-md-8.m-auto
      table
        thead(style="border-top:none;")
          tr
            th.p-4(style="background-color:#FFA400;border:0;font-size:18px;") Documentos para contratación 
            th.p-4(style="background-color:#FFA400;border:0;font-size:18px;") Uso
        tbody
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Documento de identidad del trabajador. 
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Afiliación y contrato.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Certificado de estudios de hijos mayores de siete años para subsidio de la caja de compensación. 
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Afiliación.
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Libreta militar – Opcional. 
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Certificados de estudios. 
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Certificaciones laborales.  
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Certificados de antecedentes judiciales y de policía, procuraduría, contraloría, RNMC.
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Recomendaciones personales o familiares.  
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Licencia de conducción si es la razón de ser del cargo. 
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Foto del trabajador – Opcional.
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Tarjeta profesional si se requiere para ejercer la profesión.
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Licencias de trabajo si se requiere para ejercer la profesión.
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Hoja de vida actualizada.
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Afiliación y contrato.
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Certificado de EPS. 
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Afiliación.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Certificado de Fondo de Pensiones. 
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Afiliación.
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Certificado de Fondo de Cesantías.  
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Afiliación.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Certificado de cuenta bancaria de nómina.
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Certificado de vacunas - si es requisito para ejercer.  
            td.p-4(style="border:0px;background-color:#EBEBEB;border:0;") Contrato.
          tr
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Certificados y cursos especiales según corresponda cada cargo.
            td.p-4(style="border:0px;background-color:#F8F8F8;border:0;") Contrato.

    .row.mt-5
      .col-md-6(style="place-self:center;")
        .cajon-b.color-primario.pt-4.pb-4.ps-3
          p.mb-0(data-aos="fade-up") Estos documentos forman parte de la #[strong historia laboral] del trabajador, que es administrada por el área de talento humano de la empresa. 
        p(data-aos="fade-up") ¡Aquí finaliza este material sobre contratación y vinculación laboral! Para fortalecer los conocimientos adquiridos, se invita a  revisar el material de apoyo compartido.

      .col-md-6
        figure
          img(src="@/assets/curso/tema3/46.svg" data-aos="fade-left")





      
</template>

<script>
export default {
  name: 'Tema3',
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
.cont_bloque2
  background: url(../assets/curso/tema3/1.svg)
  background-repeat: no-repeat
  background-size: contain
.cont_bloque2:before
  left: 40% !important
.linea-tiempo-c__header__btn i, .linea-tiempo-c__header__btn--left i, .linea-tiempo-c__header__btn--right i, .pasos-b__header__btn--left i, .pasos-b__header__btn--right i
  color: #FFA400
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--before .linea-tiempo-c__header__item__line-container:before, .linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--before .linea-tiempo-c__header__item__line-container:after
  background-color: #FFA400
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--before .linea-tiempo-c__header__item__dot
  border-color: #FFA400
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--active .linea-tiempo-c__header__item__line-container:before
  background-color: #FFA400
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--active .linea-tiempo-c__header__item__dot:after
  background-color: #FFA400
.linea-tiempo-c.color-acento-contenido .linea-tiempo-c__header__item--active .linea-tiempo-c__header__item__dot
  border-color: #FFA400
.linea-tiempo-c__header__item__line-container:after, .linea-tiempo-c__header__item__line-container:before
  background-color: #fff
.linea-tiempo-c__header__item__dot
  border: 3px solid #fff
.cont_verde:before
  content: ''
  position: absolute
  width: calc(100% + 6rem)
  height: 80%
  background-color: #D0EAE2
  z-index: 0
  left: -3rem
  top: 10%
</style>
