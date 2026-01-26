# GradUNI - Guía de Egreso UNI

<p align="center">
  <img src="static/img/logo.svg" alt="GradUNI Logo" width="150">
</p>

<p align="center">
  <strong>Guía de Egreso UNI — clara, actualizada, y por facultad</strong>
</p>

<p align="center">
  <a href="https://graduni.github.io">Ver sitio</a> •
  <a href="#contribuir">Contribuir</a> •
  <a href="#licencia">Licencia</a>
</p>

---

## 📖 Sobre GradUNI

GradUNI es una guía estudiantil mantenida por alumnos de la Universidad Nacional de Ingeniería (UNI). Proporciona información clara y organizada sobre el proceso de egreso, bachillerato y titulación.

### 🎯 Objetivos

- **Clarificar** los procesos de graduación que muchas veces son confusos
- **Organizar** la información por facultad
- **Actualizar** constantemente con aportes de la comunidad
- **Facilitar** la vida de los estudiantes próximos a graduarse

### 🏛️ Facultades

Actualmente tenemos información detallada para:
- ✅ **FIIS** - Facultad de Ingeniería Industrial y de Sistemas

Próximamente:
- 🚧 FIC, FIQT, FIA, FIEE, FIEECS, FIGMM, FIM, FIPP, FC, FAUA

## 🚀 Desarrollo Local

Este sitio está construido con [Docusaurus 3](https://docusaurus.io/) y **TypeScript**.

### Requisitos

- Node.js >= 18.0
- npm o yarn
- TypeScript (instalado automáticamente)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ovas04/graduni.git
cd graduni

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

El sitio estará disponible en `http://localhost:3000`.

### Comandos disponibles

```bash
npm start        # Inicia servidor de desarrollo
npm run build    # Genera el sitio estático
npm run serve    # Sirve el build de producción
npm run clear    # Limpia la caché
```

### 🔧 Stack Técnico

- **Framework**: Docusaurus 3.7.0
- **Lenguaje**: TypeScript
- **React**: 18.3.1
- **Estilos**: CSS Modules
- **Documentación**: MDX
- **Arquitectura**: Configuración modular en `config/`

## 🤝 Contribuir

¡Tu contribución es bienvenida! Hay muchas formas de ayudar:

### Para todos

- 📝 Reportar errores o información desactualizada
- 💡 Sugerir mejoras
- 📚 Agregar información de tu facultad

### Para desarrolladores

1. Fork el repositorio
2. Crea una rama (`git checkout -b mejora/mi-mejora`)
3. Haz commit de tus cambios (`git commit -am 'Agrego información de X'`)
4. Push a la rama (`git push origin mejora/mi-mejora`)
5. Abre un Pull Request

### Estructura del proyecto

```
graduni/
├── config/                    # Configuración modular (TypeScript)
├── docs/                      # Documentación MDX por facultad
│   ├── fiis/                 # Guías de FIIS
│   └── ...                   # Otras facultades
├── src/
│   ├── pages/                # Páginas (TypeScript)
│   └── css/                  # Estilos globales
├── static/                    # Assets estáticos
├── docusaurus.config.ts      # Configuración principal (TypeScript)
├── sidebars.js               # Estructura de navegación
└── tsconfig.json             # Configuración TypeScript
```

## 📋 Roadmap

- [x] Estructura base del sitio
- [x] Guía completa para FIIS
- [ ] Agregar plantillas descargables
- [ ] Información de otras facultades
- [ ] Modo multiidioma
- [ ] Buscador mejorado

## ⚠️ Disclaimer

> **Información referencial**: Los datos presentados en este sitio son referenciales y están basados en información pública y experiencias de estudiantes. Siempre verifica con tu facultad las normativas y procedimientos vigentes.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- A todos los estudiantes que comparten su experiencia
- A la comunidad de Docusaurus
- A todos los contribuidores

---

<p align="center">
  Hecho con ❤️ por estudiantes de la UNI
</p>
