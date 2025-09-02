// Función para obtener la configuración correcta del WebSocket
async function getWebSocketConfig() {
  try {
    const response = await fetch('/api/ws-config');
    const config = await response.json();
    // En Replit, usar siempre ws:// ya que el servidor está en HTTP
    const protocol = 'ws:';
    const host = window.location.hostname;
    const port = config.wsPort || '5000';
    return `${protocol}//${host}:${port}/`;
  } catch (error) {
    console.error('Error obteniendo configuración WebSocket:', error);
    // Fallback a configuración por defecto - usar ws:// para HTTP
    const protocol = 'ws:';
    const host = window.location.hostname;
    return `${protocol}//${host}:5000/`;
  }
}

// Exportar para uso en otros scripts
window.getWebSocketConfig = getWebSocketConfig;
