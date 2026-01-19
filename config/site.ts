import type { Config } from '@docusaurus/types';

/**
 * Site metadata and core configuration
 */
export const siteConfig: Partial<Config> = {
  title: 'GradUNI',
  tagline: 'Guía de Egreso UNI — clara, actualizada, y por facultad',
  favicon: 'img/favicon.ico',

  // GitHub Pages deployment config
  url: 'https://graduni.github.io',
  baseUrl: '/graduni/',

  organizationName: 'graduni',
  projectName: 'graduni',

  // Behavior config
  onBrokenLinks: 'throw',

  // Markdown configuration
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  // Internationalization
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
};
