//Linha que importa o histórico
import history from "./assets/data/history.json"
import { teste, numeroDePlays, musicasDiferentes } from "./common/index.js";

function App() {

  //Como podes ver na consola, é um array de objetos
  console.log(history)

  return (
    <div className="App">
      <p>numero de plays no total: {numeroDePlays()} </p>
      <p>numero de musicas diferentes ja ouvidas: {musicasDiferentes()} </p>
    </div>
  );
}

export default App;
