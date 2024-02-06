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
  
}
