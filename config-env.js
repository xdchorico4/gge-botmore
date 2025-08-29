// Este script permite usar variables de entorno en lugar de ggeConfig.json
// Útil para plataformas de hosting como Railway, Render, etc.

const fs = require('fs');

// Configuración por defecto
const defaultConfig = {
  gameURL: process.env.GAME_URL || "wss://ep-live-mz-int1-sk1-gb1-game.goodgamestudios.com/",
  gameServer: process.env.GAME_SERVER || "EmpireEx_19",
  
  fontPath: process.env.FONT_PATH || "",
  privateKey: process.env.PRIVATE_KEY || "",
  cert: process.env.CERT || "",
  firefoxProfile: process.env.FIREFOX_PROFILE || "",
  signupToken: process.env.SIGNUP_TOKEN || "",
  
  noInternalWorker: process.env.NO_INTERNAL_WORKER === "true" || true,
  discordToken: process.env.DISCORD_TOKEN || "",
  discordClientId: process.env.DISCORD_CLIENT_ID || "",
  internalWorkerName: process.env.INTERNAL_WORKER_NAME || "",
  internalWorkerPass: process.env.INTERNAL_WORKER_PASS || "",
  defaultAllianceName: process.env.DEFAULT_ALLIANCE_NAME || ""
};

// Verificar si existe ggeConfig.json
try {
  fs.accessSync('./ggeConfig.json');
  console.log('Usando configuración existente de ggeConfig.json');
} catch (e) {
  // Si no existe, crear uno nuevo con las variables de entorno
  console.log('Creando ggeConfig.json a partir de variables de entorno');
  fs.writeFileSync('./ggeConfig.json', JSON.stringify(defaultConfig, null, 2));
}

// Exportar la configuración para que pueda ser usada por otros módulos
module.exports = defaultConfig;