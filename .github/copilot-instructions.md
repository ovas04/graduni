# GradUNI - Copilot Instructions

## Project

GradUNI is a student guide for the graduation, bachelor's degree, and professional title process at Universidad Nacional de Ingeniería (UNI) in Peru.

## Tech Stack

- **Framework**: Docusaurus 3.7.0
- **React**: 18.3.1
- **Language**: JavaScript/JSX
- **Styles**: CSS Modules
- **Documentation**: MDX

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Burgundy | `#7c2d36` | Primary color, buttons, accents |
| Dark Burgundy | `#5c1f28` | Gradients, hover states |
| Cream | `#f5f0e6` | Light backgrounds, dark mode text |
| Slate | `#1e293b` | Dark mode backgrounds |

## Project Structure

```
graduni/
├── docs/                    # MDX Documentation
│   ├── fiis/               # FIIS specific guides
│   ├── ruta-rapida.mdx     # Visual process summary
│   ├── plantillas.mdx      # Downloadable templates
│   ├── faq.mdx             # Frequently asked questions
│   └── aportar.mdx         # How to contribute
├── src/
│   ├── pages/              # React pages
│   │   ├── index.js        # Homepage
│   │   └── index.module.css
│   └── css/
│       └── custom.css      # Global styles
├── static/                 # Static assets
│   └── img/               # Images and logos
└── docusaurus.config.js   # Main configuration
```

## Code Conventions

### Language
- **All code comments must be in English**
- Variable and function names in English
- User-facing content in Spanish (target audience)

### Icons
- **DO NOT use emojis** in content
- Use inline SVG icons (Lucide/Feather style)
- Example:
```jsx
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
  <polyline points="22 4 12 14.01 9 11.01"/>
</svg>
```

### Badges
- Use shields.io for status and labels
- Example: `![Status](https://img.shields.io/badge/Status-Coming_Soon-yellow?style=flat-square)`

### CSS Modules
- Each page has its own `.module.css`
- Use descriptive camelCase class names
- Support dark mode with `[data-theme='dark']`

### React Components
- Use functional components with hooks
- Import styles as `styles` from CSS modules
- Use `clsx` for conditional classes

## CSS Styles

### Main Variables
```css
--ifm-color-primary: #7c2d36;
--ifm-color-primary-dark: #5c1f28;
--card-bg: white | #1e293b (dark);
--card-border: #e2e8f0 | #334155 (dark);
```

### Dark Mode
Always include dark mode styles:
```css
.myClass {
  background: white;
  color: #1e293b;
}

[data-theme='dark'] .myClass {
  background: #1e293b;
  color: #f8fafc;
}
```

## MDX Documentation

### Standard Frontmatter
```yaml
---
sidebar_position: 1
title: Page Title
description: SEO description
---
```

### Admonitions
```mdx
:::info Title
Informational content
:::

:::warning Warning
Warning content
:::

:::tip Tip
Helpful content
:::

:::caution Caution
Important content
:::
```

## Useful Commands

```bash
# Development
npm start

# Build
npm run build

# Serve build locally
npm run serve

# Clear cache
npm run clear
```

## Guidelines

1. **Generic content**: Avoid specific references to a single faculty
2. **Accessibility**: Include `aria-label` on icon links
3. **Responsive**: Test on mobile, all sections must adapt
4. **Performance**: Avoid heavy images, prefer SVG
5. **SEO**: Include description in frontmatter for each page
6. **Comments**: All code comments in English

## Important Links

- Repo: https://github.com/ovas04/graduni
- UNI: https://www.uni.edu.pe
- SUNEDU: https://enlinea.sunedu.gob.pe/
