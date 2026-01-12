/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Sidebar principal
  mainSidebar: [
    {
      type: 'doc',
      id: 'ruta-rapida',
      label: 'Ruta Rápida',
    },
    {
      type: 'category',
      label: 'FIIS - Ing. Industrial y Sistemas',
      collapsed: false,
      items: [
        { type: 'doc', id: 'fiis/egreso', label: 'Egreso' },
        { type: 'doc', id: 'fiis/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'fiis/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIC - Ing. Civil',
      collapsed: true,
      items: [
        { type: 'doc', id: 'fic/egreso', label: 'Egreso' },
        { type: 'doc', id: 'fic/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'fic/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIQT - Ing. Química y Textil',
      collapsed: true,
      items: [
        { type: 'doc', id: 'fiqt/egreso', label: 'Egreso' },
        { type: 'doc', id: 'fiqt/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'fiqt/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIA - Ing. Ambiental',
      collapsed: true,
      items: [
        { type: 'doc', id: 'fia/egreso', label: 'Egreso' },
        { type: 'doc', id: 'fia/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'fia/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIEE - Ing. Eléctrica y Electrónica',
      collapsed: true,
      items: [
        { type: 'doc', id: 'fiee/egreso', label: 'Egreso' },
        { type: 'doc', id: 'fiee/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'fiee/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIEECS - Ing. Económica y Estadística',
      collapsed: true,
      items: [
        { type: 'doc', id: 'fieecs/egreso', label: 'Egreso' },
        { type: 'doc', id: 'fieecs/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'fieecs/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIGMM - Ing. Geológica, Minera y Metalúrgica',
      collapsed: true,
      items: [
        { type: 'doc', id: 'figmm/egreso', label: 'Egreso' },
        { type: 'doc', id: 'figmm/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'figmm/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIM - Ing. Mecánica',
      collapsed: true,
      items: [
        { type: 'doc', id: 'fim/egreso', label: 'Egreso' },
        { type: 'doc', id: 'fim/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'fim/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FIPP - Ing. Petróleo y Petroquímica',
      collapsed: true,
      items: [
        { type: 'doc', id: 'fipp/egreso', label: 'Egreso' },
        { type: 'doc', id: 'fipp/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'fipp/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FC - Ciencias',
      collapsed: true,
      items: [
        { type: 'doc', id: 'fc/egreso', label: 'Egreso' },
        { type: 'doc', id: 'fc/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'fc/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'category',
      label: 'FAUA - Arquitectura y Artes',
      collapsed: true,
      items: [
        { type: 'doc', id: 'faua/egreso', label: 'Egreso' },
        { type: 'doc', id: 'faua/bachiller', label: 'Bachillerato' },
        { type: 'doc', id: 'faua/titulo', label: 'Titulación' },
      ],
    },
    {
      type: 'doc',
      id: 'plantillas',
      label: 'Plantillas',
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
    {
      type: 'doc',
      id: 'aportar',
      label: 'Aportar',
    },
  ],
};

export default sidebars;
