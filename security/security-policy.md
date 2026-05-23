# Política de Seguridad en el Desarrollo: Quimera Site

Este documento detalla las directrices obligatorias de seguridad en el código, configuraciones y procesos de desarrollo de Quimera.

---

## 1. Gestión de Secretos y Variables de Entorno

- **Ignorar el archivo `.env`:** El archivo `.env` que contiene claves API, credenciales de base de datos o contraseñas reales **NUNCA** debe ser añadido a Git. Esto está reforzado por las reglas de exclusión en `.gitignore`.
- **Plantilla de Entorno (`.env.example`):** Cuando agregues una nueva variable de entorno al código, agrégala de forma inmediata a `security/.env.example` con un valor ficticio o descriptivo para que otros desarrolladores sepan que es requerida.
- **Secretos en GitHub Actions:** Las claves de despliegue SSH, contraseñas SFTP, o API tokens necesarios en los flujos automáticos de GitHub Actions deben guardarse únicamente como **Repository Secrets** en GitHub (`Settings > Secrets and variables > Actions`).

---

## 2. Seguridad en el Código Frontend (React)

- **Sanitización de Entradas (Inputs):** Todos los inputs del formulario de contacto deben estar validados tanto en el cliente como en el servicio receptor. 
  - Evitar el uso de `dangerouslySetInnerHTML` a menos que sea estrictamente necesario y el contenido provenga de una fuente de absoluta confianza debidamente sanitizada.
- **CORS y Orígenes Permitidos:** Si el frontend interactúa con APIs de backend (como Supabase o servicios de email), asegúrate de que el backend configure sus políticas de intercambio de recursos (CORS) permitiendo únicamente solicitudes del dominio de desarrollo (`localhost`) y del dominio oficial de producción (`https://quimerasite.cl`).
- **Protección contra Spam en Formularios (reCAPTCHA/Honeypot):** El formulario de contacto debe incorporar una técnica de "honeypot" (campo oculto invisible para humanos que si es llenado por bots invalida el envío) o reCAPTCHA para evitar ataques automatizados de denegación de servicio (DoS) o spam.

---

## 3. Seguridad a Nivel Servidor (SiteGround)

- **Configuración HTTPS Forzada:** El servidor debe forzar todo el tráfico de HTTP (`port 80`) a HTTPS (`port 443`) con certificados SSL Let's Encrypt activos en SiteGround.
- **Cabeceras de Seguridad HTTP:** Proveeremos un archivo `.htaccess` optimizado para SiteGround (servidor web Apache) que inyecte cabeceras de seguridad estrictas en las respuestas del servidor para prevenir ataques de Clickjacking, XSS, y sniffing de archivos.
