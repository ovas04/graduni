// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GradUNI',
  tagline: 'Guía de Egreso UNI — clara, actualizada, y por facultad',
  favicon: 'img/favicon.ico',

  url: 'https://graduni.github.io',
  baseUrl: '/graduni/',

  organizationName: 'graduni',
  projectName: 'graduni',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/ovas04/graduni/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/graduni-social-card.png',
      navbar: {
        title: 'GradUNI',
        logo: {
          alt: 'GradUNI Logo',
          src: 'img/logo.png',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            label: 'Guías',
            position: 'left',
          },
          {
            to: '/docs/guias/aportar',
            label: 'Aportar',
            position: 'right',
            className: 'navbar-cta-button',
          },
          {
            to: '/comunidad',
            label: 'Comunidad',
            position: 'right',
          },
          {
            href: 'https://github.com/ovas04/graduni',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guías',
            items: [
              { label: 'Ruta Rápida', to: '/docs/guias/ruta-rapida' },
              { label: 'Egreso', to: '/docs/guias/fiis/egreso' },
              { label: 'Bachillerato', to: '/docs/guias/fiis/bachiller' },
              { label: 'Titulación', to: '/docs/guias/fiis/titulo' },
            ],
          },
          {
            title: 'Recursos',
            items: [
              { label: 'Plantillas', to: '/docs/guias/plantillas' },
              { label: 'FAQ', to: '/docs/guias/faq' },
              { label: 'Aportar', to: '/docs/guias/aportar' },
            ],
          },
          {
            title: 'Enlaces',
            items: [
              { label: 'UNI - Página Oficial', href: 'https://www.uni.edu.pe' },
              { label: 'FIIS', href: 'https://fiis.uni.edu.pe' },
              { label: 'GitHub', href: 'https://github.com/ovas04/graduni' },
            ],
          },
        ],
        copyright: `
          <div class="footer-disclaimer">
            ⚠️ <strong>Información referencial</strong>: Verifique siempre con su facultad las últimas actualizaciones.
          </div>
          <div>Copyright © ${new Date().getFullYear()} GradUNI. Hecho con ❤️ por estudiantes de la UNI.</div>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
