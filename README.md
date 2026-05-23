# Quimera Site — Constitución de Empresas y Compliance en Chile

Sitio web oficial de **Quimera Consulting Group**, desarrollado en React con Vite y Tailwind CSS, diseñado para ofrecer servicios profesionales de constitución de empresas (Company Formation) y cumplimiento corporativo (Compliance) para empresas extranjeras y locales en Chile.

---

## 🚀 Inicio Rápido (Desarrollo Local)

### Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) y `npm`.

### Instalación
1. Clona el repositorio:
   ```bash
   git clone <URL-DEL-REPOSITORIO>
   cd Quimera-site
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Copia la plantilla de variables de entorno y renómbrala a `.env` en la raíz del proyecto:
   ```bash
   cp security/.env.example .env
   ```
   Rellena los valores en el nuevo archivo `.env` con tus credenciales reales (este archivo está configurado en `.gitignore` para no ser subido al repositorio).

4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

---

## 🛠️ Comandos Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo con Hot Module Replacement (HMR).
*   `npm run build`: Compila y optimiza la aplicación para producción en la carpeta `dist`.
*   `npm run preview`: Previsualiza localmente la compilación de producción.
*   `npm run lint`: Ejecuta ESLint para analizar estáticamente el código en busca de errores.

---

## 📁 Estructura del Proyecto

```text
Quimera-site/
├── .github/workflows/   # Flujos de integración y despliegue continuo (GitHub Actions)
│   └── deploy.yml       # Despliegue automático a SiteGround mediante SFTP
├── dist/                # Carpeta generada con la compilación para producción (ignorado en Git)
├── docs/                # Documentación del proyecto (copias de textos, legal, etc.)
├── graphics/            # Recursos gráficos y assets de marca en alta resolución
├── node_modules/        # Dependencias de npm (ignorado en Git)
├── public/              # Archivos estáticos servidos directamente
│   ├── .htaccess        # Configuración de seguridad Apache y soporte SPA para SiteGround
│   └── images/          # Imágenes optimizadas para la web
├── security/            # Políticas de seguridad y plantillas de configuración
│   ├── .env.example     # Plantilla de variables de entorno para desarrollo
│   ├── security-policy.md # Directrices obligatorias de seguridad en el código y servidores
│   └── siteground-htaccess # Respaldo del archivo .htaccess optimizado para SiteGround
├── src/                 # Código fuente de la aplicación React
│   ├── assets/          # Assets importados en el código (fuentes, etc.)
│   ├── components/      # Componentes UI reutilizables
│   ├── hooks/           # Custom React Hooks (ej: useIntersectionObserver)
│   ├── lib/             # Clases y utilidades externas (ej: utils.ts para tailwind-merge)
│   ├── pages/           # Vistas/Páginas completas de la aplicación
│   ├── services/        # Archivos de interacción con APIs o servicios externos
│   ├── styles/          # Estilos CSS globales y variables de diseño
│   ├── utils/           # Utilidades y funciones puras de JS
│   ├── App.jsx          # Enrutador principal y estructura de páginas
│   └── main.jsx         # Punto de entrada de React
├── .gitignore           # Archivos y carpetas excluidos del control de versiones
├── eslint.config.js     # Configuración del linter ESLint
├── index.html           # Plantilla HTML base y configuración SEO (Meta tags)
├── package.json         # Dependencias y scripts de Node
└── vite.config.js       # Configuración del empaquetador Vite
```

---

## 🔒 Seguridad y Buenas Prácticas

El proyecto ha sido estructurado siguiendo estándares estrictos de seguridad para producción:

1.  **Protección de Secretos (`.env`):**
    *   Cualquier variable sensible de entorno (API keys, claves de base de datos, contraseñas) debe configurarse únicamente en el archivo `.env` local.
    *   Este archivo está estrictamente configurado en `.gitignore` para evitar filtraciones accidentales de credenciales en GitHub.

2.  **Configuración de Servidor Segura (`.htaccess`):**
    *   El archivo `.htaccess` ubicado en `public/` se copia automáticamente a la raíz de la compilación (`dist/`) durante el build.
    *   Al desplegarse en SiteGround, este archivo fuerza las conexiones seguras via **HTTPS**, deshabilita firmas de servidor, bloquea la navegación de directorios, y añade cabeceras HTTP de seguridad robustas (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Strict-Transport-Security`, `Referrer-Policy`).
    *   Adicionalmente, da soporte para **Single Page Application (SPA)**, evitando errores 404 al recargar sub-rutas en el navegador.

3.  **Despliegue Automatizado Seguro:**
    *   Los despliegues en SiteGround se gestionan a través de **GitHub Actions** (`.github/workflows/deploy.yml`).
    *   Las credenciales de SFTP se consumen únicamente desde los **GitHub Repository Secrets** de forma segura, sin exponer accesos en texto plano dentro del código.
