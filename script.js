// ================================================================
//  ✏️  PARA EDITAR TÍTULOS O AÑADIR EPISODIOS: solo toca este array
// ================================================================
const EPISODIOS = [
    {
        titulo: "Shema",
        descripcion: "Temporada 1, Episodio 1",
        // 🔴 SOLO ESTE ENLACE HA SIDO CAMBIADO al formato .m3u8
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75azyppfle2alhulmzt4lm5dsucxda2f7hzw3lbwumg3a5tb5i2lckyj2ra/master.m3u8"
    },
    {
        titulo: "Shabbat",
        descripcion: "Temporada 1, Episodio 2",
        url: "https://box-1102-t.vmeas.cloud/hls/,xqx2pf4unzokjiqbtgssjiyd5gvkx4rftjckquapfued363nsjwxs36p2iya,.urlset/master.m3u8"
    },
    {
        titulo: "Jesus Loves Me",
        descripcion: "Temporada 1, Episodio 3",
        url: "https://stream-4491-212-99.pkcdn.org/keohpguqgyikkfn2mcw7qlsigwyak2hlgbdppsebo2k7tgluthnhf4nlgi/v.mp4"
    },
    {
        titulo: "The Rock on Which It Is Built",
        descripcion: "Temporada 1, Episodio 4",
        url: "https://watch.thechosen.tv/video/184683594337?language=en&position=0"
    },
    {
        titulo: "The Wedding Gift",
        descripcion: "Temporada 1, Episodio 5",
        url: "https://watch.thechosen.tv/video/184683594338?language=en&position=0"
    },
    {
        titulo: "Indescribable Virtue",
        descripcion: "Temporada 1, Episodio 6",
        url: "https://watch.thechosen.tv/video/184683594339?language=en&position=0"
    },
    {
        titulo: "Invitations",
        descripcion: "Temporada 1, Episodio 7",
        url: "https://watch.thechosen.tv/video/184683594340?language=en&position=0"
    },
    {
        titulo: "I Am He",
        descripcion: "Temporada 1, Episodio 8",
        url: "https://watch.thechosen.tv/video/184683594341?language=en&position=0"
    },
    {
        titulo: "Episodio 9",
        descripcion: "Temporada 2, Episodio 1",
        url: "https://watch.thechosen.tv/video/184683594353?language=en&position=0"
    },
    {
        titulo: "Episodio 10",
        descripcion: "Temporada 2, Episodio 2",
        url: "https://watch.thechosen.tv/video/184683594354?language=en&position=0"
    },
    {
        titulo: "Episodio 11",
        descripcion: "Temporada 2, Episodio 3",
        url: "https://watch.thechosen.tv/video/184683594355?language=en&position=0"
    },
    {
        titulo: "Episodio 12",
        descripcion: "Temporada 2, Episodio 4",
        url: "https://watch.thechosen.tv/video/184683594356?language=en&position=0"
    },
    {
        titulo: "Episodio 13",
        descripcion: "Temporada 2, Episodio 5",
        url: "https://watch.thechosen.tv/video/184683594357?language=en&position=0"
    },
    {
        titulo: "Episodio 14",
        descripcion: "Temporada 2, Episodio 6",
        url: "https://watch.thechosen.tv/video/184683594358?language=en&position=0"
    },
    {
        titulo: "Episodio 15",
        descripcion: "Temporada 2, Episodio 7",
        url: "https://watch.thechosen.tv/video/184683594359?language=en&position=0"
    },
    {
        titulo: "Episodio 16",
        descripcion: "Temporada 2, Episodio 8",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    }
];

// ================================================================
//  NO tocar nada de aquí abajo
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('lista');
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.close');

    // Función para reproducir video HLS
    function playHLS(url) {
        modal.style.display = 'flex';
        
        // Detener cualquier reproducción anterior
        modalVideo.pause();
        modalVideo.src = '';
        
        // Verificar si es un enlace .m3u8
        if (url.includes('.m3u8')) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(modalVideo);
                hls.on(Hls.Events.MANIFEST_PARSED, function() {
                    modalVideo.play().catch(e => console.log('Autoplay bloqueado:', e));
                });
            } else if (modalVideo.canPlayType('application/vnd.apple.mpegurl')) {
                // Para Safari
                modalVideo.src = url;
                modalVideo.addEventListener('loadedmetadata', function() {
                    modalVideo.play().catch(e => console.log('Autoplay bloqueado:', e));
                });
            } else {
                alert('Tu navegador no soporta reproducción HLS');
                modal.style.display = 'none';
            }
        } else {
            // Si es un enlace normal (watch.thechosen.tv), abrir en nueva pestaña
            window.open(url, '_blank');
            modal.style.display = 'none';
        }
    }

    // Cerrar modal
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.src = '';
    };

    // Cerrar modal al hacer click fuera del video
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modalVideo.pause();
            modalVideo.src = '';
        }
    };

    // Crear las cards
    EPISODIOS.forEach((ep, i) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Ver ${ep.titulo}`);

        card.innerHTML = `
            <div class="num">${i + 1}</div>
            <div class="info">
                <span class="ep-titulo">${ep.titulo}</span>
                <span class="ep-sub">${ep.descripcion}</span>
            </div>
            <div class="btn-play" aria-hidden="true">▶</div>
        `;

        // Función para manejar el click
        const abrir = () => { 
            // Si es el episodio 1 (índice 0), usar el reproductor HLS
            if (i === 0) {  // 👈 SOLO EL PRIMER EPISODIO USA HLS
                playHLS(ep.url);
            } else {
                // El resto de episodios se abren normalmente
                window.location.href = ep.url;
            }
        };

        card.addEventListener('click', abrir);
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { 
                e.preventDefault(); 
                abrir(); 
            }
        });

        lista.appendChild(card);
    });
});