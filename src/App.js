//Linha que importa o histórico
import history from "./assets/data/history.json"
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida } from "./common/index.js";

function App() {

  //Como podes ver na consola, é um array de objetos
  console.log(history)

  return (
    <div className="App">
      <p>numero de plays no total: {numeroDePlays()} </p>
      <p>numero de musicas diferentes ja ouvidas: {musicasDiferentes()} </p>
      <p>numero de minutos ouvidos: {minutosTotaisOuvidos()} min </p>
      <p>media de tempo diario: {mediaTempoDiario()} min por dia</p>
      <p>hora mais ouvida: entre as {horaMaisOuvida()}h e {horaMaisOuvida()+1}h</p>
    </div>
  );
}

export default App;
