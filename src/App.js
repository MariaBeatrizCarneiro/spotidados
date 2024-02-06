//Linha que importa o histórico
import history from "./assets/data/history.json"
import { teste, numeroDePlays } from "./common/index.js";

function App() {

  //Como podes ver na consola, é um array de objetos
  console.log(history)

  return (
    <div className="App">
      {numeroDePlays()}
    </div>
  );
}

export default App;
