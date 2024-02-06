//Linha que importa o histórico
import { useState } from "react";
import history from "./assets/data/history.json"
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida, topCemArtistas, topCemMusicas, numPlaysArtista, musicasDiferentesArtista, minutosOuvidosArtista, playsDoArtista, topVinteMusicasPorArtista } from "./common/index.js";

function App() {
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
      <p>top 100 artistas: {topCemArtistas("sempre")}</p>
      <p>top 100 musicas: {topCemMusicas("4semanas")}</p>
      <p>numero de plays do artista: {numPlaysArtista("TOOL")}</p>
      <p>numero de musicas diferentes por artista: {musicasDiferentesArtista("TOOL")}</p>
      <p>minutos ouvidos por artista: {minutosOuvidosArtista("TOOL")}</p>
      <p>percentagem de plays que são do artista: {playsDoArtista("TOOL")}%</p>
      <p>top 20 musicas por artista em ms: {topVinteMusicasPorArtista("4semanas", "TOOL")}</p>
    </div>
  );
}

export default App;
