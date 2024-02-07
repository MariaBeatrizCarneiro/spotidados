import history from "../assets/data/history.json"

export const numeroDePlays = () => {
    return history.filter((e) => e.master_metadata_track_name != null).length;
}

export function musicasDiferentes() {
    const trackNames = history.map(e => e.master_metadata_track_name);
    const uniqueSongs = new Set(trackNames);
    return uniqueSongs.size;
}

export function minutosTotaisOuvidos() {
    const total = history.reduce((acc, current) => (
        current.master_metadata_track_name != null ?
            acc += current.ms_played / (1000 * 60) :
            acc
    ), 0);
    return Math.round(total);
}

export function mediaTempoDiario() {
    const primeiroDia = new Date(history[0].ts);
    const ultimoDia = new Date(history[history.length - 1].ts);
    const diasOuvidos = (ultimoDia.getTime() - primeiroDia.getTime()) / (1000 * 3600 * 24);
    return Math.floor(minutosTotaisOuvidos() / diasOuvidos);
}


export function horaMaisOuvida() {
    const horas = history.map(e => {

        if (e.master_metadata_track_name != null) {
            const tempo = new Date(e.ts)
            return tempo.getUTCHours();
        }
    });

    const contagemHoras = {};
    horas.forEach(hora => {
        contagemHoras[hora] = (contagemHoras[hora] || 0) + 1;
    });

    let modaHora;
    let contagemModa = 0;
    for (const hora in contagemHoras) {
        if (contagemHoras[hora] > contagemModa) {
            modaHora = hora;
            contagemModa = contagemHoras[hora];
        }
    }

    modaHora = Number(modaHora);
    let segundaHora = modaHora + 1
    if (modaHora == 23) segundaHora = 0
    return "Entre as " + String(modaHora) + "h e as " + String(segundaHora) + "h"
}


export function estacaoDoAno(date) {
    const mes = date.getMonth() + 1;
    const dia = date.getDate();

    if ((mes === 3 && dia >= 20) || (mes === 4) || (mes === 5) || (mes === 6 && dia < 21)) {
        return 0; // Primavera
    } else if ((mes === 6 && dia >= 21) || (mes === 7) || (mes === 8) || (mes === 9 && dia < 23)) {
        return 1;   // Verão
    } else if ((mes === 9 && dia >= 23) || (mes === 10) || (mes === 11) || (mes === 12 && dia < 21)) {
        return 2;   // Outono
    } else {
        return 3;   // Inverno
    }
}

export function estacaoMaisOuvida() {
    const stringEstacoes = ["Primavera", "Verão", "Outono", "Inverno"];

    const tempoEstacoes = history.reduce((tempoEstacoes, current) => {
        if (current.master_metadata_track_name != null) {
            const data = new Date(current.ts);
            const estacao = estacaoDoAno(data);
            tempoEstacoes[estacao] += current.ms_played;
            return tempoEstacoes;
        }
        return tempoEstacoes
    }, [0, 0, 0, 0]);

    return stringEstacoes[tempoEstacoes.indexOf(Math.max(...tempoEstacoes))]
}

export function topCemArtistas(intervalo) {
    const artistas = filtraPorIntervaloDeTempo(intervalo).reduce((acc, e) => {

        return acc.has(e.master_metadata_album_artist_name) ?
            acc.set(e.master_metadata_album_artist_name, acc.get(e.master_metadata_album_artist_name) + 1) :
            acc.set(e.master_metadata_album_artist_name, 1)
    }, new Map());

    const sortedArtistas = [...artistas].sort((a, b) => b[1] - a[1]);

    return sortedArtistas.slice(0, 100).map(item => item[0]);
}

export function filtraPorIntervaloDeTempo(intervalo) {
    let tempo = 0;
    if (intervalo == "sempre") return history;
    if (intervalo == "4semanas") tempo = 4 * 7 * 24 * 3600 * 1000;
    if (intervalo == "6meses") tempo = 6 * 30.44 * 24 * 3600 * 1000;
    if (intervalo == "últimoAno") tempo = 365.25 * 24 * 3600 * 1000;

    const dataAtual = new Date();

    const historyFilter = history.filter((e) => {
        const data = new Date(e.ts)
        return data.getTime() > (dataAtual.getTime() - tempo)
    })

    return historyFilter;

}

export function topCemMusicas(intervalo) {
    const musicas = filtraPorIntervaloDeTempo(intervalo).reduce((acc, e) => {
        return acc.has(e.master_metadata_track_name) ?
            acc.set(e.master_metadata_track_name, [acc.get(e.master_metadata_track_name) + e.ms_played, e.master_metadata_album_artist_name]) :
            acc.set(e.master_metadata_track_name, [e.ms_played, e.master_metadata_album_artist_name])
    }, new Map());

    const sortedMusicas = [...musicas].sort((a, b) => b[1][0] - a[1][0]);

    return sortedMusicas.slice(0, 100).map(item => item[0] + " - " + item[1][1]);
}


export function numPlaysArtista(artista) {
    return history.filter((e) => e.master_metadata_album_artist_name == artista).length;
}

export function musicasDiferentesArtista(artista) {
    const arrArtista = history.filter((e) => e.master_metadata_album_artist_name == artista);
    const trackNames = arrArtista.map(e => {
        return e.master_metadata_track_name;
    });
    const uniqueSongs = new Set(trackNames);
    return uniqueSongs.size;
}

export function minutosOuvidosArtista(artista) {
    const arrArtista = history.filter((e) => e.master_metadata_album_artist_name == artista);
    const total = arrArtista.reduce((acc, current) => {
        return acc += current.ms_played / (1000 * 60);
    }, 0);
    return Math.round(total);
}

export function playsDoArtista(artista) {
    return (numPlaysArtista(artista) / numeroDePlays() * 100).toFixed(1);
}


export function topVinteMusicasPorArtista(intervalo, artista) {
    const musicas = filtraPorIntervaloDeTempoPorArtista(intervalo, artista).reduce((acc, e) => {
        return acc.has(e.master_metadata_track_name) ?
            acc.set(e.master_metadata_track_name, [acc.get(e.master_metadata_track_name) + e.ms_played, e.master_metadata_album_album_name]) :
            acc.set(e.master_metadata_track_name, [e.ms_played, e.master_metadata_album_album_name])
    }, new Map());

    const sortedMusicas = [...musicas].sort((a, b) => b[1][0] - a[1][0]);

    return sortedMusicas.slice(0, 20).map(item => item[0] + " - " + item[1][1]);
}

export function filtraPorIntervaloDeTempoPorArtista(intervalo, artista) {
    const arrArtista = history.filter((e) => e.master_metadata_album_artist_name == artista);
    let tempo = 0;
    if (intervalo == "sempre") return arrArtista;
    if (intervalo == "4semanas") tempo = 4 * 7 * 24 * 3600 * 1000;
    if (intervalo == "6meses") tempo = 6 * 30.44 * 24 * 3600 * 1000;
    if (intervalo == "últimoAno") tempo = 365.25 * 24 * 3600 * 1000;

    const dataAtual = new Date();

    const historyFilter = arrArtista.filter((e) => {
        const data = new Date(e.ts)
        return data.getTime() > (dataAtual.getTime() - tempo)
    })

    return historyFilter;
}

export function posicaoTopCemArtista(artista) {
    const topArtistas = topCemArtistas("sempre");
    return topArtistas.indexOf(artista) + 1;
}

export function artistaEstacaoMaisOuvida(artista) {
    const stringEstacoes = ["Primavera", "Verão", "Outono", "Inverno"];

    const tempoEstacoes = history.filter((e) => e.master_metadata_album_artist_name == artista).reduce((tempoEstacoes, current) => {
        const data = new Date(current.ts);
        const estacao = estacaoDoAno(data);
        tempoEstacoes[estacao] += current.ms_played;
        return tempoEstacoes;
    }, [0, 0, 0, 0]);

    return stringEstacoes[tempoEstacoes.indexOf(Math.max(...tempoEstacoes))]
}


export function artistNamesArr() {
    let uniqueArtistNames = new Set();

    history.forEach(function (item) {
        uniqueArtistNames.add(item.master_metadata_album_artist_name);
    });
    return Array.from(uniqueArtistNames).sort((a, b) => a > b ? 1 : -1);
}


