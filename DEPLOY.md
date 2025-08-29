# Guía de Despliegue para GGE-BOT

Esta guía te ayudará a desplegar tu bot en diferentes plataformas gratuitas para que pueda funcionar 24/7 sin necesidad de tener tu ordenador encendido.

## Preparación del Proyecto

1. Asegúrate de tener configurado el archivo `ggeConfig.json` con tus credenciales y configuraciones.
2. Alternativamente, puedes usar variables de entorno siguiendo el formato en `.env.example`.

## Opciones de Hosting Gratuito

### Opción 1: Railway (Recomendado)

Railway ofrece un plan gratuito que es ideal para bots de Discord.

1. Crea una cuenta en [Railway](https://railway.app/)
2. Conecta tu cuenta de GitHub
3. Importa tu repositorio de GGE-BOT
4. Railway detectará automáticamente que es un proyecto Node.js
5. Configura las variables de entorno en la sección "Variables" basándote en tu archivo `ggeConfig.json`
6. ¡Listo! Tu bot estará en línea 24/7

**Nota**: El plan gratuito de Railway tiene un límite de $5 de crédito por mes, lo que debería ser suficiente para un bot pequeño.

### Opción 2: Render

Render también ofrece un plan gratuito adecuado para bots.

1. Crea una cuenta en [Render](https://render.com/)
2. Conecta tu cuenta de GitHub
3. Crea un nuevo "Web Service"
4. Selecciona tu repositorio de GGE-BOT
5. Configura el servicio:
   - Nombre: GGE-BOT
   - Entorno: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Configura las variables de entorno basándote en tu archivo `ggeConfig.json`
7. Selecciona el plan gratuito
8. Haz clic en "Create Web Service"

**Nota**: En el plan gratuito de Render, tu bot se dormirá después de 15 minutos de inactividad y puede tardar unos segundos en despertar cuando reciba una nueva solicitud.

### Opción 3: Bot-Hosting.net

Bot-Hosting.net es una plataforma especializada en hosting gratuito para bots de Discord.

1. Crea una cuenta en [Bot-Hosting.net](https://bot-hosting.net/)
2. Crea un nuevo servidor
3. Selecciona Node.js como entorno
4. Sube tu código mediante el administrador de archivos o conecta tu repositorio de GitHub
5. Configura las variables de entorno basándote en tu archivo `ggeConfig.json`
6. Inicia tu bot

**Nota**: Bot-Hosting.net ofrece hosting gratuito 24/7 para bots de Discord, pero puede tener limitaciones en recursos.

## Consideraciones Importantes

1. **Seguridad**: Nunca subas tu archivo `ggeConfig.json` con credenciales reales a GitHub. Usa variables de entorno en su lugar.
2. **Recursos**: Los planes gratuitos tienen limitaciones de recursos. Si tu bot crece, considera actualizar a un plan de pago.
3. **Persistencia de datos**: Si tu bot utiliza SQLite, asegúrate de que la plataforma de hosting permita almacenamiento persistente.

## Solución de Problemas

Si encuentras problemas durante el despliegue:

1. Verifica los logs de la plataforma para identificar errores
2. Asegúrate de que todas las variables de entorno estén correctamente configuradas
3. Verifica que el archivo `package.json` tenga el script `start` configurado correctamente
4. Comprueba que todas las dependencias estén correctamente listadas en `package.json`

¡Buena suerte con tu despliegue!