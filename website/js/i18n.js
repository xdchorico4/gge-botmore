// Sistema de internacionalización (i18n)
const translations = {
    es: {
        // Header
        'dashboard.title': 'Panel de Control - GGE Bot',
        'status.connected': 'WebSocket: Conectado',
        'status.disconnected': 'WebSocket: Desconectado',
        
        // Navigation
        'nav.dashboard': 'Dashboard',
        'nav.bots': 'Gestión de Bots',
        'nav.plugins': 'Plugins Disponibles',
        'nav.logs': 'Logs',
        
        // Bot Management
        'bots.title': 'Gestión de Bots',
        'bots.name': 'Nombre del Bot',
        'bots.password': 'Contraseña',
        'bots.add': 'Agregar Bot',
        'bots.select': 'Seleccionar Bot',
        'bots.none_configured': 'No hay bots configurados',
        'bots.table.name': 'Nombre',
        'bots.table.plugins': 'Plugins',
        'bots.table.connection': 'Conexión',
        'bots.table.status': 'Estado',
        'bots.table.actions': 'Acciones',
        'bots.status.ingame': 'En juego 🎮',
        'bots.status.disconnected': 'Desconectado ⭕',
        'bots.status.functional': 'Funcional',
        'bots.status.inactive': 'Inactivo',
        'bots.action.start': 'Iniciar',
        'bots.action.stop': 'Detener',
        'bots.action.delete': 'Eliminar',
        'bots.confirm_delete': '¿Estás seguro de que quieres eliminar este bot?',
        
        // Plugins
        'plugins.title': 'Plugins Disponibles',
        'plugins.loading': 'Cargando plugins...',
        'plugins.none_available': 'No hay plugins disponibles',
        'plugins.status.available': 'Disponible',
        'plugins.status.active': 'Activo',
        'plugins.options': 'Opciones:',
        'plugins.no_description': 'Sin descripción disponible',
        
        // Logs
        'logs.title': 'Logs',
        'logs.adding_bot': '🤖 Agregando bot: {name}',
        'logs.configuring_plugins': '⚙️ Configurando plugins por defecto...',
        'logs.starting_bot': '🚀 Iniciando bot: {name}',
        'logs.connecting_game': '🔗 Conectando al servidor de juego...',
        'logs.entering_game': '🎮 Entrando al juego Good Game Empire...',
        'logs.stopping_bot': '⏹️ Deteniendo bot: {name}',
        'logs.disconnecting': '🚪 Desconectando del juego...',
        'logs.deleting_bot': '🗑️ Eliminando bot: {name}',
        'logs.closing_connections': '🚪 Cerrando conexiones...',
        
        // Validation
        'validation.name_password_required': 'Por favor ingresa nombre y contraseña',
        'validation.select_bot': 'Por favor selecciona un bot primero'
    },
    en: {
        // Header
        'dashboard.title': 'Control Panel - GGE Bot',
        'status.connected': 'WebSocket: Connected',
        'status.disconnected': 'WebSocket: Disconnected',
        
        // Navigation
        'nav.dashboard': 'Dashboard',
        'nav.bots': 'Bot Management',
        'nav.plugins': 'Available Plugins',
        'nav.logs': 'Logs',
        
        // Bot Management
        'bots.title': 'Bot Management',
        'bots.name': 'Bot Name',
        'bots.password': 'Password',
        'bots.add': 'Add Bot',
        'bots.select': 'Select Bot',
        'bots.none_configured': 'No bots configured',
        'bots.table.name': 'Name',
        'bots.table.plugins': 'Plugins',
        'bots.table.connection': 'Connection',
        'bots.table.status': 'Status',
        'bots.table.actions': 'Actions',
        'bots.status.ingame': 'In Game 🎮',
        'bots.status.disconnected': 'Disconnected ⭕',
        'bots.status.functional': 'Functional',
        'bots.status.inactive': 'Inactive',
        'bots.action.start': 'Start',
        'bots.action.stop': 'Stop',
        'bots.action.delete': 'Delete',
        'bots.confirm_delete': 'Are you sure you want to delete this bot?',
        
        // Plugins
        'plugins.title': 'Available Plugins',
        'plugins.loading': 'Loading plugins...',
        'plugins.none_available': 'No plugins available',
        'plugins.status.available': 'Available',
        'plugins.status.active': 'Active',
        'plugins.options': 'Options:',
        'plugins.no_description': 'No description available',
        
        // Logs
        'logs.title': 'Logs',
        'logs.adding_bot': '🤖 Adding bot: {name}',
        'logs.configuring_plugins': '⚙️ Configuring default plugins...',
        'logs.starting_bot': '🚀 Starting bot: {name}',
        'logs.connecting_game': '🔗 Connecting to game server...',
        'logs.entering_game': '🎮 Entering Good Game Empire...',
        'logs.stopping_bot': '⏹️ Stopping bot: {name}',
        'logs.disconnecting': '🚪 Disconnecting from game...',
        'logs.deleting_bot': '🗑️ Deleting bot: {name}',
        'logs.closing_connections': '🚪 Closing connections...',
        
        // Validation
        'validation.name_password_required': 'Please enter name and password',
        'validation.select_bot': 'Please select a bot first'
    },
    fr: {
        // Header
        'dashboard.title': 'Panneau de Contrôle - GGE Bot',
        'status.connected': 'WebSocket: Connecté',
        'status.disconnected': 'WebSocket: Déconnecté',
        
        // Navigation
        'nav.dashboard': 'Tableau de bord',
        'nav.bots': 'Gestion des Bots',
        'nav.plugins': 'Plugins Disponibles',
        'nav.logs': 'Journaux',
        
        // Bot Management
        'bots.title': 'Gestion des Bots',
        'bots.name': 'Nom du Bot',
        'bots.password': 'Mot de passe',
        'bots.add': 'Ajouter Bot',
        'bots.select': 'Sélectionner Bot',
        'bots.none_configured': 'Aucun bot configuré',
        'bots.table.name': 'Nom',
        'bots.table.plugins': 'Plugins',
        'bots.table.connection': 'Connexion',
        'bots.table.status': 'Statut',
        'bots.table.actions': 'Actions',
        'bots.status.ingame': 'En Jeu 🎮',
        'bots.status.disconnected': 'Déconnecté ⭕',
        'bots.status.functional': 'Fonctionnel',
        'bots.status.inactive': 'Inactif',
        'bots.action.start': 'Démarrer',
        'bots.action.stop': 'Arrêter',
        'bots.action.delete': 'Supprimer',
        'bots.confirm_delete': 'Êtes-vous sûr de vouloir supprimer ce bot?',
        
        // Plugins
        'plugins.title': 'Plugins Disponibles',
        'plugins.loading': 'Chargement des plugins...',
        'plugins.none_available': 'Aucun plugin disponible',
        'plugins.status.available': 'Disponible',
        'plugins.status.active': 'Actif',
        'plugins.options': 'Options:',
        'plugins.no_description': 'Aucune description disponible',
        
        // Logs
        'logs.title': 'Journaux',
        'logs.adding_bot': '🤖 Ajout du bot: {name}',
        'logs.configuring_plugins': '⚙️ Configuration des plugins par défaut...',
        'logs.starting_bot': '🚀 Démarrage du bot: {name}',
        'logs.connecting_game': '🔗 Connexion au serveur de jeu...',
        'logs.entering_game': '🎮 Entrée dans Good Game Empire...',
        'logs.stopping_bot': '⏹️ Arrêt du bot: {name}',
        'logs.disconnecting': '🚪 Déconnexion du jeu...',
        'logs.deleting_bot': '🗑️ Suppression du bot: {name}',
        'logs.closing_connections': '🚪 Fermeture des connexions...',
        
        // Validation
        'validation.name_password_required': 'Veuillez saisir le nom et le mot de passe',
        'validation.select_bot': 'Veuillez d\'abord sélectionner un bot'
    }
};

// Idioma actual
let currentLanguage = localStorage.getItem('ggeBotLanguage') || 'es';

// Función para obtener texto traducido
function t(key, params = {}) {
    let text = translations[currentLanguage]?.[key] || translations['es'][key] || key;
    
    // Reemplazar parámetros {name}, {value}, etc.
    Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
    });
    
    return text;
}

// Función para cambiar idioma
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('ggeBotLanguage', lang);
        updatePageTexts();
    }
}

// Función para actualizar todos los textos de la página
function updatePageTexts() {
    // Actualizar textos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = t(key);
    });
    
    // Actualizar placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
    
    // Actualizar título de la página
    document.title = t('dashboard.title');
    
    // Actualizar elementos específicos que se generan dinámicamente
    if (typeof renderBots === 'function') renderBots();
    if (typeof renderPlugins === 'function') renderPlugins();
}

// Inicializar idioma cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    updatePageTexts();
});

// Exportar funciones globalmente
window.t = t;
window.changeLanguage = changeLanguage;
window.updatePageTexts = updatePageTexts;