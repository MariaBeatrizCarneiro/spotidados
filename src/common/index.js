import history from "../assets/data/history.json"

//Neste diretório devias colocar as funções que vão calcular e descobrir dados do ficheiro json

export const numeroDePlays = () =>{
  return history.length;
}

export function musicasDiferentes() {
  const trackNames = history.map(e => {
    return e.master_metadata_track_name;
  });
  const uniqueSongs = new Set(trackNames); 
  return uniqueSongs.size; 
}

export function minutosTotaisOuvidos(){
  const total = history.reduce((acc, current) => {
   return acc+=current.ms_played / (1000 * 60);
  }, 0);
  return Math.round(total);
}

export function mediaTempoDiario(){
  const primeiroDia = new Date(history[0].ts);
  const ultimoDia = new Date(history[history.length-1].ts);
  const diasOuvidos = (ultimoDia.getTime() - primeiroDia.getTime()) / (1000 * 3600 * 24);
  return Math.round(minutosTotaisOuvidos() / diasOuvidos);
}


export function horaMaisOuvida() {
    const horas = history.map(e => {
        const tempo = new Date(e.ts)
        return tempo.getHours();
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

    const tempoEstacoes = history.reduce((tempoEstacoes, registro) => {
        const data = new Date(registro.ts);
        const estacao = estacaoDoAno(data);
        tempoEstacoes[estacao] += registro.ms_played;
        return tempoEstacoes;
    }, [0, 0, 0, 0]);

    return stringEstacoes[tempoEstacoes.indexOf(Math.max(...tempoEstacoes))]
}

