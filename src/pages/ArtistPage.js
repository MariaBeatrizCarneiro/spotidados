import React from "react";
import { numPlaysArtista, musicasDiferentesArtista, minutosOuvidosArtista, playsDoArtista, posicaoTopCemArtista, artistaEstacaoMaisOuvida } from "../common/index";
import Menu from "./Menu";

export default function ArtistPage({onChangePage}) {
  return (
    <div className="page" >
      <p>numero de plays do artista: {numPlaysArtista("TOOL")}</p>
      <p>numero de musicas diferentes por artista: {musicasDiferentesArtista("TOOL")}</p>
      <p>minutos ouvidos por artista: {minutosOuvidosArtista("TOOL")}</p>
      <p>percentagem de plays que são do artista: {playsDoArtista("TOOL")}%</p>
      <p>index do artista no top 100: {posicaoTopCemArtista("Kendrick Lamar")}</p>
      <p>em que estação o artista é mais ouvido: {artistaEstacaoMaisOuvida("TOOL")}</p>
      <Menu onChangePage={onChangePage} />
      <div className="mb-16"></div>
    </div>
  )
}

