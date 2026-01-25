import type { Config } from '@docusaurus/types';

// Import modular configurations
import { siteConfig } from './config/site';
import { plugins } from './config/plugins';
import { presets } from './config/presets';
import { themeConfig } from './config/theme';

const config: Config = {
  ...siteConfig,
  plugins,
  presets,
  themeConfig,
} as Config;

export default config;
