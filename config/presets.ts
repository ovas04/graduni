import type { Config } from '@docusaurus/types';
import type { Options as ClassicPresetOptions } from '@docusaurus/preset-classic';

/**
 * Docusaurus presets configuration
 */
export const presets: Config['presets'] = [
  [
    'classic',
    {
      docs: {
        sidebarPath: './sidebars.js',
        editUrl: 'https://github.com/graduni/graduni/tree/main/',
      },
      blog: false,
      theme: {
        customCss: './src/css/custom.css',
      },
    } satisfies ClassicPresetOptions,
  ],
];
