// Función para obtener la configuración correcta del WebSocket
async function getWebSocketConfig() {
  try {
    const response = await fetch('/api/ws-config');
    const config = await response.json();
    const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.hostname;
    const port = config.wsPort || '5001';
    return `${protocol}//${host}:${port}/`;
  } catch (error) {
    console.error('Error obteniendo configuración WebSocket:', error);
    // Fallback a configuración por defecto
    const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
    const host = window.location.hostname;
    return `${protocol}//${host}:5001/`;
  }
}

// Exportar para uso en otros scripts
window.getWebSocketConfig = getWebSocketConfig;
