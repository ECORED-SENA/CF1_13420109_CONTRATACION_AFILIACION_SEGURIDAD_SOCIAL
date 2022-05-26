export default {
  global: {
    componenteFormativo: 'Contratación y vinculación laboral',
    descripcionCurso:
      'Un proceso de vinculación en las empresas es de vital importancia debido a que debe ser conforme al tipo de contrato que se desea manejar y así mismo su proceso de afiliación debe cumplir con la normatividad legal vigente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Alistamiento y convocatoria según las necesidades de personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Preselección laboral',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Valoración de resultados y decisión de contratar',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Contratación y afiliación a seguridad social',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición de contrato laboral',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Elaboración de contratos en las organizaciones',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          ' Afiliaciones al sistema de seguridad social en Colombia según normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Afiliación a seguridad social según el tipo de contratación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Afiliación a administradora de riesgos laborales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Afiliación a entidad promotora de salud',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Afiliación a caja de compensación familiar',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Afiliación a administradora de fondo de pensiones y cesantías',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo:
              'Proceso de afiliación a seguridad social dentro de las organizaciones',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo:
              'Documentación solicitada para la vinculación del trabajador',
            hash: 't_3_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Chiavenato. (2009). Gestión del talento humano. McGraw Hill.',
      link:
        'https://jgestiondeltalentohumano.files.wordpress.com/2013/11/gestion-del-talento-humano-idalberto-chiavenato-3th.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (1951). Código Sustantivo del Trabajo. Avance Jurídico Casa Editorial Ltda.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      referencia:
        'Congreso de Colombia. (1993). Ley 100 de 1993. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248#:~:text=Crea%20el%20sistema%20de%20seguridad%20social%20integral%20conformado%20por%20los,definen%20en%20la%20presente%20ley',
    },
    {
      referencia:
        'Congreso de Colombia. (2002). Ley 789 de 2002. Por la cual se dictan normas para apoyar el empleo y ampliar la protección social y se modifican algunos artículos del Código Sustantivo de Trabajo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6778',
    },
    {
      referencia:
        'Padilla, F. (s. f.). Recursos humanos, glosario de términos.',
      link: 'http://recursoshumanosfergiepadilla.blogspot.com/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2022). Contrato de aprendizaje 2022. ',
      link:
        'https://www.sena.edu.co/es-co/Empresarios/Paginas/contratoAprendizaje.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Convocatoria',
      significado:
        'oferta laboral publicada y vigente que se da a conocer de forma interna o externa por parte de una organización, con el propósito de atraer el personal cualificado para ocupar la vacante.',
    },
    {
      termino: 'Entrevista laboral',
      significado:
        'herramienta que se utiliza en los procesos de selección de personal para conocer al candidato y tener un criterio para su selección, que puede ir acompañada de pruebas o actividades.',
    },
    {
      termino: 'Hoja de vida',
      significado:
        'documento o herramienta a través de la cual se presenta de forma resumida la trayectoria académica, experiencia laboral y profesional de una persona; así como logros obtenidos y competencias desarrolladas frente al cargo al cual aspira.',
    },
    {
      termino: 'Partes interesadas',
      significado:
        'todos los grupos de interés que de alguna forma se puedan ver afectados por la actividad de la empresa o áreas internas de la misma que en su gestión diaria dependen de las tareas de otras.',
    },
    {
      termino: 'Perfil ocupacional',
      significado:
        'descripción de las habilidades, competencias y formación que un trabajador debe tener (o tiene) para ejercer eficientemente un puesto de trabajo.',
    },
    {
      termino: 'Pruebas psicotécnicas',
      significado:
        'test funcionales que miden capacidades y aptitudes intelectuales y profesionales de diversa índole, como memoria verbal y visual, aptitudes numéricas, de lingüística, de conocimiento profesional, al igual que rasgos de personalidad, intereses y/o valores personales.',
    },
    {
      termino: 'Talento humano',
      significado:
        'conjunto de trabajadores o empleados, que posee una organización, un determinado sector, así como una economía en su conjunto. ',
    },
    {
      termino: 'Trabajo',
      significado:
        'oda actividad humana libre, ya sea material o intelectual, permanente o transitoria, que una persona natural ejecuta conscientemente al servicio de otra, y cualquiera que sea su finalidad, siempre que se efectúe en ejecución de un contrato de trabajo',
    },
  ],
  complementario: [
    {
      texto:
        'Congreso de Colombia. (1951). Código Sustantivo del Trabajo. Avance Jurídico Casa Editorial Ltda. ',
      tipo: 'Artículo',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      text:
        'Servicio Nacional de Aprendizaje – SENA. (2022). Contrato de aprendizaje 2022.',
      tipo: 'Artículos y Videos',
      link:
        'https://www.sena.edu.co/es-co/Empresarios/Paginas/contratoAprendizaje.aspx',
    },
    {
      text:
        'Congreso de Colombia. (1993). Ley 100 de 1993. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones.',
      tipo: 'Artículos',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248#:~:text=Crea%20el%20sistema%20de%20seguridad%20social%20integral%20conformado%20por%20los,definen%20en%20la%20presente%20ley',
    },
    {
      text: 'ARL Sura. (2022). Video de afiliación. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=1ygOnSrZ8Ks&t=18s&ab_channel=ARLSURA',
    },
    {
      text:
        'Caja de Compensación Familiar Compensar. (2022). Video de afiliación. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=-zW3ABENkAM&ab_channel=CompensarColombia',
    },
    {
      text:
        'Fondo de Pensiones Colpensiones. (2022). Video de afiliación. [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ZFE7uqZVUHU&ab_channel=Colpensiones',
    },
    {
      text:
        'Fondo Nacional del Ahorro. (2022). Video de afiliación en línea. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4NGmMJvJAjw&ab_channel=fnaAHORRO',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
