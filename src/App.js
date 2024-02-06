import { useState } from "react";
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida, topCemArtistas, topCemMusicas, numPlaysArtista, musicasDiferentesArtista, minutosOuvidosArtista, playsDoArtista, topVinteMusicasPorArtista, posicaoTopCemArtista, artistaEstacaoMaisOuvida } from "./common/index.js";

function App() {
  const [paginaAtual, setPaginaAtual] = useState("index");
  const onChangePage = (page) => { setPaginaAtual(page); };

  const paginas = {
    "index": <HomePage onChangePage={onChangePage} />,
    "top-artista": <TopArtistPage onChangePage={onChangePage} />,
    "top-musica": <TopMusicPage onChangePage={onChangePage} />,
    "artista": <ArtistPage artist="Kendrick Lamar" onChangePage={onChangePage} />,
    "top-20": <TopArtistMusicPage artist="Kendrick Lamar" onChangePage={onChangePage} />,
  };

  return (
    <div className="App">
      {paginas[paginaAtual] || <div>ERROR: PAGE NOT FOUND</div>}
    </div>
  );
}

function HomePage({onChangePage}) {
  return (
    <div className="page" >
      <p>numero de plays no total: {numeroDePlays()} </p>
      <p>numero de musicas diferentes ja ouvidas: {musicasDiferentes()} </p>
      <p>numero de minutos ouvidos: {minutosTotaisOuvidos()} min </p>
      <p>media de tempo diario: {mediaTempoDiario()} min por dia</p>
      <p>hora mais ouvida: {horaMaisOuvida()}</p>
      <p>estação mais ouvida: {estacaoMaisOuvida()}</p>
      <button onClick={() => onChangePage("top-artista")}>Top Page Artistas</button>
    </div>
  )
}


function TopArtistPage({onChangePage}) {
  return (
    <div className="page" >
      <p>top 100 artistas: {topCemArtistas("sempre")}</p>
      <button onClick={() => onChangePage("top-musica")}>Top Page Músicas</button>
    </div>
  )
}

function TopMusicPage({onChangePage}) {
  return (
    <div className="page" >
      <p>top 100 musicas: {topCemMusicas("sempre")}</p>
      <button onClick={() => onChangePage("artista")}>Artista Page</button>
    </div>
  )
}

function ArtistPage({onChangePage}) {
  return (
    <div className="page" >
      <p>numero de plays do artista: {numPlaysArtista("TOOL")}</p>
      <p>numero de musicas diferentes por artista: {musicasDiferentesArtista("TOOL")}</p>
      <p>minutos ouvidos por artista: {minutosOuvidosArtista("TOOL")}</p>
      <p>percentagem de plays que são do artista: {playsDoArtista("TOOL")}%</p>
      <p>index do artista no top 100: {posicaoTopCemArtista("Kendrick Lamar")}</p>
      <p>em que estação o artista é mais ouvido: {artistaEstacaoMaisOuvida("TOOL")}</p>
      <button onClick={() => onChangePage("top-20")}>Top 20 Artista</button>
    </div>
  )
}

function TopArtistMusicPage({onChangePage}) {
  return (
    <div className="page" >
      <p>top 20 musicas por artista em ms: {topVinteMusicasPorArtista("4semanas", "TOOL")}</p>
      <button onClick={() => onChangePage("index")}>Voltar á Casa</button>
    </div>
  )
}

export default App;
