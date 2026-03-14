// ============================================================
//  ✏️  PARA AÑADIR MÁS VIDEOS: edita solo este array
//      Copia un bloque { ... } y pega uno nuevo debajo,
//      separado por una coma.
// ============================================================
const VIDEOS = [
    {
        titulo: "Episodio 1 — Luz del Mundo",
        descripcion: "El comienzo del viaje de Jesús y sus primeros discípulos.",
        url: "https://watch.thechosen.tv/video/184683594334?language=en&position=0"
    },
    {
        titulo: "Episodio 2 — Shabbat",
        descripcion: "Jesús celebra el Sabbat con sus nuevos amigos.",
        url: "https://watch.thechosen.tv/video/184683594334?language=en&position=0"
        // ← Cambia esta URL por la del episodio real
    },
    {
        titulo: "Episodio 3 — Jesús vino a mi",
        descripcion: "Un encuentro transformador en el pozo de Jacob.",
        url: "https://watch.thechosen.tv/video/184683594334?language=en&position=0"
        // ← Cambia esta URL por la del episodio real
    }
    // ← Para añadir más: copia estas líneas y pégalas aquí (con coma antes)
    // ,{
    //     titulo: "Episodio 4 — Título del episodio",
    //     descripcion: "Descripción breve.",
    //     url: "https://watch.thechosen.tv/video/XXXXXXX?language=en&position=0"
    // }
];

// ============================================================
//  NO hace falta tocar nada de aquí abajo
// ============================================================

// ---------- Elementos DOM ----------
const screenList   = document.getElementById('screen-list');
const screenPlayer = document.getElementById('screen-player');
const videoList    = document.getElementById('video-list');
const videoFrame   = document.getElementById('video-frame');
const playOverlay  = document.getElementById('play-overlay');
const playButton   = document.getElementById('play-button');
const playerTitleBar = document.getElementById('player-title-bar');
const episodeTitle = document.getElementById('episode-title');
const episodeDesc  = document.getElementById('episode-desc');
const btnBack      = document.getElementById('btn-back');
const btnRetry     = document.getElementById('btn-retry');
const errorModal   = document.getElementById('error-modal');

let currentVideo = null;

// ---------- Arrancar ----------
document.addEventListener('DOMContentLoaded', () => {
    checkConnection();
    renderList();
    setupEvents();
});

// ---------- Render lista ----------
function renderList() {
    videoList.innerHTML = '';

    VIDEOS.forEach((video, index) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Ver ${video.titulo}`);

        card.innerHTML = `
            <div class="card-number">${index + 1}</div>
            <div class="card-body">
                <h3 class="card-title">${video.titulo}</h3>
                <p class="card-desc">${video.descripcion}</p>
            </div>
            <div class="card-arrow">▶</div>
        `;

        card.addEventListener('click', () => openPlayer(index));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') openPlayer(index);
        });

        videoList.appendChild(card);
    });
}

// ---------- Abrir reproductor ----------
function openPlayer(index) {
    currentVideo = VIDEOS[index];

    // Rellenar info
    playerTitleBar.textContent = `Ep. ${index + 1}`;
    episodeTitle.textContent   = currentVideo.titulo;
    episodeDesc.textContent    = currentVideo.descripcion;

    // Limpiar iframe (no cargamos hasta que pulse play)
    videoFrame.src = '';
    playOverlay.classList.remove('hidden');

    // Cambiar pantalla
    screenList.classList.add('hidden');
    screenPlayer.classList.remove('hidden');

    // Scroll arriba
    window.scrollTo(0, 0);
}

// ---------- Reproducir ----------
function playVideo() {
    if (!currentVideo) return;

    // Ocultar overlay
    playOverlay.classList.add('hidden');

    // Cargar iframe
    videoFrame.src = currentVideo.url;

    // Si el iframe no puede cargar (X-Frame-Options bloqueado),
    // abrimos directamente en el navegador como fallback
    videoFrame.onerror = () => {
        window.open(currentVideo.url, '_blank');
    };

    // Wake Lock: mantener pantalla encendida
    keepScreenOn();
}

// ---------- Volver a la lista ----------
function goBack() {
    videoFrame.src = ''; // Detener video
    screenPlayer.classList.add('hidden');
    screenList.classList.remove('hidden');
    currentVideo = null;
}

// ---------- Eventos ----------
function setupEvents() {
    playButton.addEventListener('click', playVideo);
    btnBack.addEventListener('click', goBack);
    btnRetry.addEventListener('click', () => {
        errorModal.classList.add('hidden');
        renderList();
    });

    window.addEventListener('offline', () => showError());
    window.addEventListener('online',  () => errorModal.classList.add('hidden'));

    // Doble tap → pantalla completa (solo en reproductor)
    let lastTap = 0;
    screenPlayer.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTap < 400 && now - lastTap > 0) {
            toggleFullscreen();
        }
        lastTap = now;
    });

    // Evitar zoom accidental
    document.addEventListener('gesturestart', (e) => e.preventDefault());
}

// ---------- Utilidades ----------
function checkConnection() {
    if (!navigator.onLine) showError();
}

function showError() {
    errorModal.classList.remove('hidden');
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
    } else {
        document.exitFullscreen().catch(() => {});
    }
}

function keepScreenOn() {
    if ('wakeLock' in navigator) {
        navigator.wakeLock.request('screen').catch(() => {});
    }
}

// ---------- Service Worker (PWA) ----------
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    });
}