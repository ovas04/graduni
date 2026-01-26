/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Sidebar principal
  mainSidebar: [
    {
      type: 'doc',
      id: 'guias/ruta-rapida',
      label: 'Ruta Rápida',
    },
    {
      type: 'category',
      label: 'Documentación',
      collapsed: false,
      link: { type: 'doc', id: 'documentacion/index' },
      items: [
        {
          type: 'doc',
          id: 'documentacion/changelog',
          label: 'Changelog del sitio',
        },
        {
          type: 'doc',
          id: 'documentacion/egreso-oficial',
          label: 'Documentos oficiales: Egreso',
        },
        {
          type: 'doc',
          id: 'documentacion/bachiller-oficial',
          label: 'Documentos oficiales: Bachiller',
        },
        {
          type: 'doc',
          id: 'documentacion/titulacion-oficial',
          label: 'Documentos oficiales: Titulación',
        },
      ],
    },
    {
      type: 'category',
      label: 'FIIS - Ing. Industrial y Sistemas',
      collapsed: false,
      link: { type: 'doc', id: 'guias/fiis/index' },
      items: [
        { type: 'doc', id: 'guias/fiis/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/fiis/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/fiis/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIC - Ing. Civil',
      collapsed: true,
      link: { type: 'doc', id: 'guias/fic/index' },
      items: [
        { type: 'doc', id: 'guias/fic/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/fic/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/fic/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIQT - Ing. Química y Textil',
      collapsed: true,
      link: { type: 'doc', id: 'guias/fiqt/index' },
      items: [
        { type: 'doc', id: 'guias/fiqt/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/fiqt/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/fiqt/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIA - Ing. Ambiental',
      collapsed: true,
      link: { type: 'doc', id: 'guias/fia/index' },
      items: [
        { type: 'doc', id: 'guias/fia/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/fia/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/fia/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIEE - Ing. Eléctrica y Electrónica',
      collapsed: true,
      link: { type: 'doc', id: 'guias/fiee/index' },
      items: [
        { type: 'doc', id: 'guias/fiee/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/fiee/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/fiee/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIEECS - Ing. Económica y Estadística',
      collapsed: true,
      link: { type: 'doc', id: 'guias/fieecs/index' },
      items: [
        { type: 'doc', id: 'guias/fieecs/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/fieecs/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/fieecs/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIGMM - Ing. Geológica, Minera y Metalúrgica',
      collapsed: true,
      link: { type: 'doc', id: 'guias/figmm/index' },
      items: [
        { type: 'doc', id: 'guias/figmm/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/figmm/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/figmm/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIM - Ing. Mecánica',
      collapsed: true,
      link: { type: 'doc', id: 'guias/fim/index' },
      items: [
        { type: 'doc', id: 'guias/fim/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/fim/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/fim/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIPP - Ing. Petróleo y Petroquímica',
      collapsed: true,
      link: { type: 'doc', id: 'guias/fipp/index' },
      items: [
        { type: 'doc', id: 'guias/fipp/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/fipp/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/fipp/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FC - Ciencias',
      collapsed: true,
      link: { type: 'doc', id: 'guias/fc/index' },
      items: [
        { type: 'doc', id: 'guias/fc/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/fc/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/fc/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FAUA - Arquitectura y Artes',
      collapsed: true,
      link: { type: 'doc', id: 'guias/faua/index' },
      items: [
        { type: 'doc', id: 'guias/faua/egreso', label: 'Egreso' },
        { type: 'doc', id: 'guias/faua/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'guias/faua/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'doc',
      id: 'guias/plantillas',
      label: 'Plantillas',
    },
    {
      type: 'doc',
      id: 'guias/faq',
      label: 'FAQ',
    },
    {
      type: 'doc',
      id: 'guias/aportar',
      label: 'Aportar',
    },
  ],
};

export default sidebars;
