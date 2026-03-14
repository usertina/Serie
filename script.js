// ==================== CONFIGURACIÓN ====================
const CONFIG = {
    VIDEO_URL: 'https://watch.thechosen.tv/video/184683594334?language=en&position=0',
    AUTOPLAY: true,
    LOAD_TIMEOUT: 10000, // 10 segundos máximo de carga
    RETRY_ATTEMPTS: 3
};

// ==================== ELEMENTOS DOM ====================
const elements = {
    loadingScreen: document.getElementById('loading-screen'),
    videoContainer: document.getElementById('video-container'),
    videoFrame: document.getElementById('video-frame'),
    playButton: document.getElementById('play-button'),
    helpButton: document.getElementById('help-button'),
    helpModal: document.getElementById('help-modal'),
    closeHelp: document.getElementById('close-help'),
    errorMessage: document.getElementById('error-message'),
    retryButton: document.getElementById('retry-button')
};

// ==================== ESTADO ====================
let state = {
    isLoaded: false,
    isPlaying: false,
    retryCount: 0
};

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    checkConnection();
    setupEventListeners();
});

function initApp() {
    // Construir URL con parámetros
    const url = buildVideoUrl();
    elements.videoFrame.src = url;
    
    // Monitorear carga del iframe
    monitorIframeLoad();
}

function buildVideoUrl() {
    const url = new URL(CONFIG.VIDEO_URL);
    
    // Parámetros para autoplay y configuración
    url.searchParams.set('autoplay', CONFIG.AUTOPLAY ? '1' : '0');
    url.searchParams.set('position', '0');
    
    // Idioma (puedes cambiar 'en' por 'es' si está disponible)
    url.searchParams.set('language', 'en');
    
    return url.toString();
}

function monitorIframeLoad() {
    let loadTimeout = setTimeout(() => {
        if (!state.isLoaded) {
            handleLoadError();
        }
    }, CONFIG.LOAD_TIMEOUT);
    
    // Escuchar mensaje del iframe (si la plataforma lo permite)
    window.addEventListener('message', (event) => {
        if (event.origin.includes('thechosen.tv')) {
            clearTimeout(loadTimeout);
            onVideoLoaded();
        }
    });
    
    // Fallback: asumir carga después de timeout razonable
    setTimeout(() => {
        clearTimeout(loadTimeout);
        onVideoLoaded();
    }, 5000);
}

function onVideoLoaded() {
    state.isLoaded = true;
    
    // Ocultar pantalla de carga
    elements.loadingScreen.classList.add('hidden');
    
    // Mostrar botón de play y ayuda
    elements.playButton.classList.remove('hidden');
    elements.helpButton.classList.remove('hidden');
    
    // Enfocar botón de play para accesibilidad
    elements.playButton.focus();
}

function handleLoadError() {
    state.retryCount++;
    
    if (state.retryCount >= CONFIG.RETRY_ATTEMPTS) {
        elements.loadingScreen.classList.add('hidden');
        elements.errorMessage.classList.remove('hidden');
    } else {
        // Reintentar automáticamente
        elements.videoFrame.src = buildVideoUrl();
        monitorIframeLoad();
    }
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Botón de Play principal
    elements.playButton.addEventListener('click', () => {
        playVideo();
    });
    
    // Botón de ayuda
    elements.helpButton.addEventListener('click', () => {
        showHelp();
    });
    
    // Cerrar modal de ayuda
    elements.closeHelp.addEventListener('click', () => {
        hideHelp();
    });
    
    // Cerrar modal al tocar fuera
    elements.helpModal.addEventListener('click', (e) => {
        if (e.target === elements.helpModal) {
            hideHelp();
        }
    });
    
    // Botón de reintentar
    elements.retryButton.addEventListener('click', () => {
        retryLoad();
    });
    
    // Tecla Escape para cerrar modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideHelp();
        }
    });
    
    // Doble tap para pantalla completa
    let lastTap = 0;
    document.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        
        if (tapLength < 500 && tapLength > 0) {
            toggleFullscreen();
            e.preventDefault();
        }
        lastTap = currentTime;
    });
    
    // Monitorear conexión
    window.addEventListener('online', () => {
        if (state.retryCount > 0) {
            retryLoad();
        }
    });
    
    window.addEventListener('offline', () => {
        showError('Conexión perdida');
    });
}

// ==================== FUNCIONES DE VIDEO ====================
function playVideo() {
    // Ocultar botón de play
    elements.playButton.classList.add('hidden');
    elements.helpButton.classList.add('hidden');
    
    state.isPlaying = true;
    
    // Intentar hacer focus en el iframe para autoplay
    elements.videoFrame.focus();
    
    // Enviar mensaje al iframe si es posible
    try {
        elements.videoFrame.contentWindow.postMessage({
            action: 'play'
        }, '*');
    } catch (e) {
        console.log('No se pudo enviar mensaje al iframe');
    }
}

function pauseVideo() {
    try {
        elements.videoFrame.contentWindow.postMessage({
            action: 'pause'
        }, '*');
    } catch (e) {
        console.log('No se pudo enviar mensaje al iframe');
    }
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((e) => {
            console.log('Error al activar pantalla completa:', e);
        });
    } else {
        document.exitFullscreen().catch((e) => {
            console.log('Error al salir de pantalla completa:', e);
        });
    }
}

// ==================== FUNCIONES DE UI ====================
function showHelp() {
    elements.helpModal.classList.remove('hidden');
    elements.closeHelp.focus();
}

function hideHelp() {
    elements.helpModal.classList.add('hidden');
    elements.playButton.focus();
}

function showError(message) {
    elements.loadingScreen.classList.add('hidden');
    elements.errorMessage.classList.remove('hidden');
    elements.errorMessage.querySelector('p').textContent = message || 'Verifica tu internet e intenta de nuevo';
}

function retryLoad() {
    elements.errorMessage.classList.add('hidden');
    elements.loadingScreen.classList.remove('hidden');
    elements.loadingScreen.querySelector('p').textContent = 'Reintentando...';
    
    state.retryCount = 0;
    elements.videoFrame.src = buildVideoUrl();
    monitorIframeLoad();
}

// ==================== CONEXIÓN ====================
function checkConnection() {
    if (!navigator.onLine) {
        showError('Sin conexión a internet');
    }
}

// ==================== SERVICE WORKER (PWA) ====================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((registration) => {
            console.log('ServiceWorker registrado:', registration.scope);
        }).catch((error) => {
            console.log('ServiceWorker falló:', error);
        });
    });
}

// ==================== PREVENIR ZOOM ACCIDENTAL ====================
document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
});

// ==================== MANTENER PANTALLA ENCENDIDA ====================
function keepScreenOn() {
    try {
        if ('wakeLock' in navigator) {
            navigator.wakeLock.request('screen').then(() => {
                console.log('Pantalla mantenida encendida');
            });
        }
    } catch (e) {
        console.log('Wake Lock no soportado');
    }
}

// Activar cuando el video está reproduciendo
elements.playButton.addEventListener('click', keepScreenOn);
