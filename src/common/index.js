import history from "../assets/data/history.json"

//Neste diretório devias colocar as funções que vão calcular e descobrir dados do ficheiro json

export const teste = () => {
    return history.map(e => {
      return e.master_metadata_track_name;
    });
  };


export const numeroDePlays = () =>{
  return history.length;
}