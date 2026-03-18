// ================================================================
//  ✏️  PARA EDITAR TÍTULOS O AÑADIR EPISODIOS: solo toca este array
// ================================================================
const EPISODIOS = [
    {
        titulo: "Te he llamado por tu nombre",
        descripcion: "Temporada 1, Episodio 1",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75azyppfle2alhulmzt4lm5dsucxda2f7hzw3lbwumg3ukuhrrnf52ibbnq/index-v1-a1.m3u8"
    },
    {
        titulo: "Shabbat",
        descripcion: "Temporada 1, Episodio 2",
        url: "https://box-1102-t.vmeas.cloud/hls/,xqx2pf4unzokjiqbtgssjiyd5gvkx4rftjckquapfued363nsjwxs36p2iya,.urlset/master.m3u8"
    },
    {
        titulo: "Jesús ama a los más pequeños",
        descripcion: "Temporada 1, Episodio 3",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75azbfnfle2alhulm7d4ogejlqnqzbt4uh5dyelthlfvechtqaqlpfjob4q/index-v1-a1.m3u8"
    },
    {
        titulo: "Sobre esta roca edificaré",
        descripcion: "Temporada 1, Episodio 4",
        url:"https://cloud-s84178-118-164.spcdn.cc/hls/h75a5z7pfle2alhulmzt47e5cctsyu3rglhmftgmbrfr4kcjviapuciqk4sq/index-v1-a1.m3u8"
    },
    {
        titulo: "El regalo de boda",
        descripcion: "Temporada 1, Episodio 5",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a5zhpfle2alhulmzt4posaslpf3p4heoe4a6hayb2gomw7ohbo6si7z4a/index-v1-a1.m3u8"
    },
    {
        titulo: "Compasión infinita",
        descripcion: "Temporada 1, Episodio 6",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75az2xpfle2alhulmzt4pmud4jvojpvyd5bhsfka5cceujs2e2v4455wtca/index-v1-a1.m3u8"
    },
    {
        titulo: "Invitaciones",
        descripcion: "Temporada 1, Episodio 7",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a3zppfle2alhulmzt4jwmdcc47bilgzy434mderxcjzhphawbqqtxmjxa/master.m3u8"
    },
    {
        titulo: "Yo soy el que soy",
        descripcion: "Temporada 1, Episodio 8",
        url: "https://stream-4891-212-105.pkcdn.org/juohpheqgyikkfn2mcw7qoanm7dn3ybrd3y75ulwbcrjf53kk3r4vfob6a/v.mp4"
    },
    {
        titulo: "Trueno",
        descripcion: "Temporada 2, Episodio 1",
        url: "https://box-1102-t.vmeas.cloud/hls/xqx2pw4unzokjiqbtgssj72bwi4logwz47yvdumorunpuxewzloqttntcgla/index-v1-a1.m3u8"
    },
    {
        titulo: "Te ví",
        descripcion: "Temporada 2, Episodio 2",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75azaxpfle2alhulmzt4merdje35zet2p6wjfekdi3zzblmwkapdpwrlyxa/index-v1-a1.m3u8"
    },
    {
        titulo: "Mateo 4:24",
        descripcion: "Temporada 2, Episodio 3",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a534yfxe2alhulmht47u4biq2njaq6rlkqaqpcldwht3ty2b5mp7cypeq/index-v1-a1.m3u8"
    },
    {
        titulo: "La ocasión perfecta",
        descripcion: "Temporada 2, Episodio 4",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a53uyfxe2alhulmht4l6tckpdrgnf545bypvzlsgfok7h2zcjcctmufkq/index-v1-a1.m3u8"
    },
    {
        titulo: "Espíritu",
        descripcion: "Temporada 2, Episodio 5",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a54uyfxe2alhulmht47gtclgqukky3i5swdvnzg7pu3mhxm6zddoeg6fq/index-v1-a1.m3u8"
    },
    {
        titulo: "Ilícito",
        descripcion: "Temporada 2, Episodio 6",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a744yfxe2alhulmht4loqbwaeyiarhohsjhlds2romi57jmarfm6ziroa/index-v1-a1.m3u8"
    },
    {
        titulo: "Ajuste de cuentas",
        descripcion: "Temporada 2, Episodio 7",
        url: "https://watch.thechosen.tv/video/184683594359?language=en&position=0"
    },
    {
        titulo: "Más allá de las montañas",
        descripcion: "Temporada 2, Episodio 8",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Regreso a casa",
        descripcion: "Temporada 3, Episodio 1",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "De dos en dos",
        descripcion: "Temporada 3, Episodio 2",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Médico, cuídate a tí mismo",
        descripcion: "Temporada 3, Episodio 3",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Limpiar (parte 1)",
        descripcion: "Temporada 3, Episodio 4",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Limpiar (parte 2)",
        descripcion: "Temporada 3, Episodio 5",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Intensidad en Tent city",
        descripcion: "Temporada 3, Episodio 6",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Oídos para oir",
        descripcion: "Temporada 3, Episodio 7",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Sustento",
        descripcion: "Temporada 3, Episodio 8",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Promesas",
        descripcion: "Temporada 4, Episodio 1",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Confesiones",
        descripcion: "Temporada 4, Episodio 2",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Luna en sangre",
        descripcion: "Temporada 4, Episodio 3",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Calma previa",
        descripcion: "Temporada 4, Episodio 4",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Esperar, servir y maquinar",
        descripcion: "Temporada 4, Episodio 5",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Dedicación",
        descripcion: "Temporada 4, Episodio 6",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "La última señal",
        descripcion: "Temporada 4, Episodio 7",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Humilde",
        descripcion: "Temporada 4, Episodio 8",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Entrada",
        descripcion: "Temporada 5, Episodio 1",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Casa de cartas",
        descripcion: "Temporada 5, Episodio 2",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Lamentos",
        descripcion: "Temporada 5, Episodio 3",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "La misma moneda",
        descripcion: "Temporada 5, Episodio 4",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Por mí",
        descripcion: "Temporada 5, Episodio 5",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "Reuniones",
        descripcion: "Temporada 5, Episodio 6",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "La sala superior (parte 1)",
        descripcion: "Temporada 5, Episodio 7",
        url: "https://watch.thechosen.tv/video/184683594360?language=en&position=0"
    },
    {
        titulo: "La sala superior (parte 2)",
        descripcion: "Temporada 5, Episodio 8",
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
