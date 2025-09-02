// Función para obtener la configuración correcta del WebSocket
async function getWebSocketConfig() {
  try {
    // En Replit, usar el mismo host y puerto que la página actual
    const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.host; // Incluye puerto automáticamente
    return `${protocol}//${host}/`;
  } catch (error) {
    console.error('Error obteniendo configuración WebSocket:', error);
    // Fallback usando el host actual
    const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.host;
    return `${protocol}//${host}/`;
  }
}

// Exportar para uso en otros scripts
window.getWebSocketConfig = getWebSocketConfig;
