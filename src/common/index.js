import history from "../assets/data/history.json"

//Neste diretório devias colocar as funções que vão calcular e descobrir dados do ficheiro json

export const todasAsMusicas = () => {
    return history.map(e => {
      return e.master_metadata_track_name;
    });
  };


export const numeroDePlays = () =>{
  return history.length;
}

export function musicasDiferentes() {
  const trackNames = todasAsMusicas(); // Obtém os nomes das faixas usando a função teste
  const uniqueSongs = new Set(trackNames); // Cria um conjunto para armazenar apenas os nomes únicos das faixas
  return uniqueSongs.size; // Retorna o tamanho do conjunto, que é a quantidade de músicas únicas
}

