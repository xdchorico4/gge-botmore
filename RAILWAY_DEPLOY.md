# Instrucciones para desplegar GGE-BOT en Railway

Este documento contiene instrucciones específicas para desplegar tu bot en Railway después de las modificaciones realizadas para solucionar los errores.

## Preparación

1. Asegúrate de que tu código esté actualizado con las siguientes modificaciones:
   - Script `postinstall` en `package.json` para instalar Firefox para Playwright
   - Soporte para fuentes en sistemas Linux
   - Configuración para usar variables de entorno

2. Sube tu código a GitHub si aún no lo has hecho:
   ```
   git add .
   git commit -m "Preparar para despliegue en Railway"
   git push origin main
   ```

## Despliegue en Railway

1. Crea una cuenta en [Railway](https://railway.app/)

2. Conecta tu cuenta de GitHub a Railway

3. Crea un nuevo proyecto en Railway:
   - Selecciona "Deploy from GitHub repo"
   - Busca y selecciona tu repositorio GGE-BOT
   - Railway detectará automáticamente que es un proyecto Node.js

4. Configura las variables de entorno en la sección "Variables":

   ```
   GAME_URL=wss://ep-live-mz-int1-sk1-gb1-game.goodgamestudios.com/
   GAME_SERVER=EmpireEx_19
   DISCORD_TOKEN=tu_token_de_discord
   DISCORD_CLIENT_ID=tu_client_id_de_discord
   NO_INTERNAL_WORKER=true
   DEFAULT_ALLIANCE_NAME=tu_alianza_por_defecto
   ```

   > **Importante**: 
   > - Reemplaza los valores de `DISCORD_TOKEN`, `DISCORD_CLIENT_ID` y `DEFAULT_ALLIANCE_NAME` con tus propios valores.
   > - Railway asignará automáticamente la variable `PORT` para tu aplicación. No necesitas configurarla manualmente.
   > - Si necesitas configurar un puerto específico para el servidor WebSocket, puedes añadir la variable `WS_PORT`. Por defecto, usará `PORT + 1`.

5. Railway iniciará automáticamente el despliegue. Puedes seguir el progreso en la pestaña "Deployments".

## Verificación

1. Una vez completado el despliegue, verifica los logs en la pestaña "Logs" para asegurarte de que no hay errores.

2. Deberías ver mensajes como:
   - "Fuente encontrada en: /usr/share/fonts/..." (o similar)
   - "Usando configuración basada en variables de entorno"

3. Si tu bot de Discord está configurado correctamente, debería aparecer como en línea en Discord.

## Solución de problemas

Si encuentras errores, verifica lo siguiente:

1. **Error de Playwright**: Asegúrate de que el script `postinstall` se está ejecutando correctamente. Puedes verificar los logs de construcción.

2. **Error de token de Discord**: Verifica que has configurado correctamente el token y el client ID de Discord.

3. **Error de fuente**: Si sigues teniendo problemas con las fuentes, puedes intentar instalar fuentes adicionales en el contenedor usando un script personalizado.

4. **Error "Connection refused"**: Si ves errores como "connection refused" en los logs HTTP y la aplicación aparece como "Crashed":
   - Verifica que la aplicación esté utilizando la variable de entorno `PORT` que Railway proporciona automáticamente
   - La aplicación ahora está configurada para usar `process.env.PORT` para el servidor HTTP/HTTPS principal
   - El servidor WebSocket usará `process.env.PORT + 1` si está disponible
   - Si sigues viendo este error, verifica los logs para asegurarte de que los servidores están iniciando correctamente
   - Revisa los logs de construcción y despliegue para identificar errores durante la instalación
   - Verifica que todas las dependencias se estén instalando correctamente

5. **Reinicio del despliegue**: Si necesitas reiniciar el despliegue, puedes hacerlo desde la pestaña "Deployments" haciendo clic en "Redeploy".

6. **Verificar logs completos**: Para diagnosticar problemas de conexión, revisa los logs completos en las pestañas "Build Logs", "Deploy Logs" y "HTTP Logs".

## Recursos adicionales

- [Documentación de Railway](https://docs.railway.app/)
- [Guía de solución de problemas de Discord.js](https://discordjs.guide/popular-topics/errors.html)
- [Documentación de Playwright](https://playwright.dev/docs/intro)

Recuerda que Railway ofrece un plan gratuito con $5 de crédito por mes, lo que debería ser suficiente para mantener tu bot en funcionamiento si no tiene un uso intensivo.