//Linha que importa o histórico
import { useState } from "react";
import history from "./assets/data/history.json"
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida, topCemArtistas } from "./common/index.js";

function App() {
  const [state, setState] = useState(new Date())
  //Como podes ver na consola, é um array de objetos
  console.log(history)

  return (
    <div className="App">
      <p>numero de plays no total: {numeroDePlays()} </p>
      <p>numero de musicas diferentes ja ouvidas: {musicasDiferentes()} </p>
      <p>numero de minutos ouvidos: {minutosTotaisOuvidos()} min </p>
      <p>media de tempo diario: {mediaTempoDiario()} min por dia</p>
      <p>hora mais ouvida: {horaMaisOuvida()}</p>
      <p>estação mais ouvida: {estacaoMaisOuvida()}</p>
      <button>sempre</button>
      <button>6me</button>
      <button>4se</button>
      <p>top 100 artistas: {topCemArtistas("sempre")}</p>
    </div>
  );
}

export default App;
