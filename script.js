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
        url: "https://box-1102-t.vmeas.cloud/hls/xqx2pf4unzokjiqbtgssjiyd5gvkx4rftjckquapf4ed363nsjwvrceyb4ba/index-v1-a1.m3u8"
    },
    {
        titulo: "Jesús ama a los más pequeños",
        descripcion: "Temporada 1, Episodio 3",
        url: "https://stream-4491-212-99.pkcdn.org/keohpguqgyikkfn2mcw7qlsigwyak2hlgbdppsebo2k7tgluthnp5eg5gi/v.mp4"
    },
    {
        titulo: "Sobre esta roca edificaré",
        descripcion: "Temporada 1, Episodio 4",
        url:"https://cloud-s84178-118-164.spcdn.cc/hls/h75a5z7pfle2alhulmzt47e5cctsyu3rglhmftgmbrfr4kcjviaaomayk4sq/master.m3u8"
    },
    {
        titulo: "El regalo de boda",
        descripcion: "Temporada 1, Episodio 5",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a5zhpfle2alhulmzt4posaslpf3p4heoe4a6hayb2gomw7ohc3okb7z4a/master.m3u8"
    },
    {
        titulo: "Compasión infinita",
        descripcion: "Temporada 1, Episodio 6",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75az2xpfle2alhulmzt4pmud4jvojpvyd5bhsfka5cceujs2e2sftvuwtca/master.m3u8"
    },
    {
        titulo: "Invitaciones",
        descripcion: "Temporada 1, Episodio 7",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a3zppfle2alhulmzt4jwmdcc47bilgzy434mderxcjzhphawpqbl7mjxa/master.m3u8"
    },
    {
        titulo: "Yo soy el que soy",
        descripcion: "Temporada 1, Episodio 8",
        url: "https://stream-4891-212-105.pkcdn.org/juohpheqgyikkfn2mcw7qoanm7dn3ybrd3y75ulwbcrjfjmnmxicyckdta/v.mp4"
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
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a33eyfxe2alhulmht47obdzilp6lwak2piw545hkcyhf4l6caxkpy5x4a/index-v1-a1.m3u8"
    },
    {
        titulo: "Más allá de las montañas",
        descripcion: "Temporada 2, Episodio 8",
        url: "https://stream-96255-141-139.pkcdn.org/d4objskfgyikkfn2mdmpqlknmk5bfmls567fg7yiove4kbuvlrn5zxbrgi/v.mp4"
    },
    {
        titulo: "Regreso a casa",
        descripcion: "Temporada 3, Episodio 1",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75azwwffte2alhulmmd4owbcav3hlpjlnzvqst6iskzzfsebfsd3opvo7da/index-v1-a1.m3u8"
    },
    {
        titulo: "De dos en dos",
        descripcion: "Temporada 3, Episodio 2",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75azwgffte2alhulmmd4jwgdc3tuk4ygw5ukubmrxlufzfo5rvk6osg7mra/index-v1-a1.m3u8"
    },
    {
        titulo: "Médico, cuídate a tí mismo",
        descripcion: "Temporada 3, Episodio 3",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a426xele2alhuloud4ogujec4i3oefm7mwhay26w6piygkfwwlbthpywa/index-v1-a1.m3u8"
    },
    {
        titulo: "Limpiar (parte 1)",
        descripcion: "Temporada 3, Episodio 4",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75ayuoxele2alhuloud4km5jydck6hjqmtozrsjykrcy4qve2zdgagqjtha/index-v1-a1.m3u8"
    },
    {
        titulo: "Limpiar (parte 2)",
        descripcion: "Temporada 3, Episodio 5",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75ayvwxele2alhuloud4ioudz5fm5wo5szemtpy5cdkl6mrz2uke6p645ca/index-v1-a1.m3u8"
    },
    {
        titulo: "Intensidad en Tent city",
        descripcion: "Temporada 3, Episodio 6",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a2v6xele2alhuloud4muva5otpj7doqgoxibcrijeydvogbubs247lkzq/index-v1-a1.m3u8"
    },
    {
        titulo: "Oídos para oir",
        descripcion: "Temporada 3, Episodio 7",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a2vgxele2alhuloud4i4scray46ltfg3c3axsamcf77eat44kn6h4fepq/index-v1-a1.m3u8"
    },
    {
        titulo: "Sustento",
        descripcion: "Temporada 3, Episodio 8",
        url: "https://box-1086-u.vmeas.cloud/hls/xqx2otypnnokjiqbthcsjja25fscmqmg46a3c5s3kofsmfah5lsk66fm3fya/index-v1-a1.m3u8"
    },
    {
        titulo: "Promesas",
        descripcion: "Temporada 4, Episodio 1",
        url: "https://box-1093-w.vmeas.cloud/hls/xqx2pgggczokjiqbthpsl6qawtjotwhm767oac7ozrgmdsf7depbsmgqk7aa/index-v1-a1.m3u8"
    },
    {
        titulo: "Confesiones",
        descripcion: "Temporada 4, Episodio 2",
        url: "https://box-1096-q.vmeas.cloud/hls/xqx2p5nkczokjiqbthqslmanx4b3nxlwfgugcijhmp6cseobwsqeysgod7yq/index-v1-a1.m3u8"
    },
    {
        titulo: "Luna en sangre",
        descripcion: "Temporada 4, Episodio 3",
        url: "https://box-1101-t.vmeas.cloud/hls/xqx2o5i7cfokjiqbthvcl4i7xhxart4tc7nwmzyaon6at2covemoq72igwwq/index-v1-a1.m3u8"
    },
    {
        titulo: "Calma previa",
        descripcion: "Temporada 4, Episodio 4",
        url: "https://box-1093-w.vmeas.cloud/hls/xqx2oq34cbokjiqbth3cljcnxcaizrsx2rjpmedzlkvbhbhqc6uk25artg6q/index-v1-a1.m3u8"
    },
    {
        titulo: "Esperar, servir y maquinar",
        descripcion: "Temporada 4, Episodio 5",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75ayc6tete2alhulo3d47uwbad6yfkhryju5xbij45hxzqp2rvldl4adokq/index-v1-a1.m3u8"
    },
    {
        titulo: "Dedicación",
        descripcion: "Temporada 4, Episodio 6",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a6b6tete2alhulo3d4mwbdyvna5kdoi7xevstptg4er2cgurgy3h5y4aq/index-v1-a1.m3u8"
    },
    {
        titulo: "La última señal",
        descripcion: "Temporada 4, Episodio 7",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75ay2wxele2alhuloud4765bc44sur6gnpxndnk7k6spm2c5sqvf7any3va/index-v1-a1.m3u8"
    },
    {
        titulo: "Humilde",
        descripcion: "Temporada 4, Episodio 8",
        url: "https://box-1093-w.vmeas.cloud/hls/xqx2pz7kcjokjiqbtelcflqewq22cap5zhkq5fr3kjavesuyu7vns3jgd3la/index-v1-a1.m3u8"
    },
    {
        titulo: "Entrada",
        descripcion: "Temporada 5, Episodio 1",
        url: "https://box-1489-u10.vmeas.cloud/hls2/04/01915/9s14z9o9m3bj_n/index-v1-a1.m3u8?t=Bv4RLCkY2riPbhvU6JfX0bXnfLD93KxRLF8Pmk-WNLA=&s=1773859517&e=43200&v=&i=0.4&sp=0&asn=12430"
    },
    {
        titulo: "Casa de cartas",
        descripcion: "Temporada 5, Episodio 2",
        url: "https://box-1421-v10.vmeas.cloud/hls2/04/01915/d2c9511tg0hz_n/index-v1-a1.m3u8?t=iFoA-l-XxSrogipEStjgtVO7Qa-dxrkD4XHw9qAaIXE=&s=1773859557&e=43200&v=&i=0.4&sp=0&asn=12430"
    },
    {
        titulo: "Lamentos",
        descripcion: "Temporada 5, Episodio 3",
        url: "https://cloud-s84178-118-164.spcdn.cc/hls/h75a5pkqe3e2alhulokt46wvbdga6d4lbxzikfzjvboedfycv57ups3e3z5a/index-v1-a1.m3u8"
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
