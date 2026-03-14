// ================================================================
//  ✏️  PARA EDITAR TÍTULOS O AÑADIR EPISODIOS: solo toca este array
// ================================================================
const EPISODIOS = [
    {
        titulo: "Shema",
        descripcion: "Temporada 1, Episodio 1",
        url: "https://watch.thechosen.tv/video/184683594334?language=en&position=0"
    },
    {
        titulo: "Shabbat",
        descripcion: "Temporada 1, Episodio 2",
        url: "https://watch.thechosen.tv/video/184683594335?language=en&position=0"
    },
    {
        titulo: "Jesus Loves Me",
        descripcion: "Temporada 1, Episodio 3",
        url: "https://watch.thechosen.tv/video/184683594336?language=en&position=0"
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

        // Abrir directamente en el navegador — sin iframe, sin cookies, sin menús
        const abrir = () => { window.location.href = ep.url; };

        card.addEventListener('click', abrir);
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); }
        });

        lista.appendChild(card);
    });
});