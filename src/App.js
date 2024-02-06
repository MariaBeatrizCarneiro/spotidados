//Linha que importa o histórico
import { useState } from "react";
import history from "./assets/data/history.json"
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida, topCemArtistas, topCemMusicas, numPlaysArtista, musicasDiferentesArtista, minutosOuvidosArtista, playsDoArtista, topVinteMusicasPorArtista, posicaoTopCemArtista, artistaEstacaoMaisOuvida } from "./common/index.js";

function App() {
  const [paginaAtual, setPaginaAtual] = useState({
    path: "index",
    context: ""
  })


  const paginas = new Map([
    ["index", <Pagina onChangePage={(page) => setPaginaAtual({path: page, context: ""})} />],
    ["cenas", <Pagina2 onChangePage={(page) => setPaginaAtual({path: page, context: ""})} />],
    ["coisas", <div>coisas</div>],
    // ["top-musica", <TopPage context="artista"/>],
    // ["top-artista", <TopPage context="musica"/>],
    // ["artista", <ArtistPage artist="Kendrick Lamar"/>],
    // ["top-20", <ArtistTopPage artist="Kendrick Lamar"/>],

  ])

  //Como podes ver na consola, é um array de objetos

  return (
    <div className="App">
      {
        paginas.has(paginaAtual.path) ? paginas.get(paginaAtual.path) : <div>ERROR </div>
      }
      {/* <p>top 100 artistas: {topCemArtistas("sempre")}</p>
      <p>top 100 musicas: {topCemMusicas("4semanas")}</p>
      <p>numero de plays do artista: {numPlaysArtista("TOOL")}</p>
      <p>numero de musicas diferentes por artista: {musicasDiferentesArtista("TOOL")}</p>
      <p>minutos ouvidos por artista: {minutosOuvidosArtista("TOOL")}</p>
      <p>percentagem de plays que são do artista: {playsDoArtista("TOOL")}%</p>
      <p>top 20 musicas por artista em ms: {topVinteMusicasPorArtista("4semanas", "TOOL")}</p>
      <p>index do artista no top 100: {posicaoTopCemArtista("Kendrick Lamar")}</p>
      <p>em que estação o artista é mais ouvido: {artistaEstacaoMaisOuvida("TOOL")}</p> */}
    </div>
    
  );
}



function Pagina ({onChangePage}) {
  return (
    <div className="page" >
      <p>numero de plays no total: {numeroDePlays()} </p>
      <p>numero de musicas diferentes ja ouvidas: {musicasDiferentes()} </p>
      <p>numero de minutos ouvidos: {minutosTotaisOuvidos()} min </p>
      <p>media de tempo diario: {mediaTempoDiario()} min por dia</p>
      <p>hora mais ouvida: {horaMaisOuvida()}</p>
      <p>estação mais ouvida: {estacaoMaisOuvida()}</p>
      
      <button onClick={() => onChangePage("cenas")}>Página 2</button>
    </div>
  )
}

function Pagina2 ({onChangePage}) {
  return (
    <div className="page" >
    <p>aaaa</p>
      
      <button onClick={() => onChangePage("coisas")}>Página 3</button>
    </div>
  )
}

export default App;
