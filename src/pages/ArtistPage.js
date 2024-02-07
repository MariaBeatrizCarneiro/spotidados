import React, { useState } from "react";
import { numPlaysArtista, musicasDiferentesArtista, minutosOuvidosArtista, playsDoArtista, posicaoTopCemArtista, artistaEstacaoMaisOuvida, artistNamesArr } from "../common/index";
import {Menu} from "./Menu";

export function ArtistPage({onChangePage}) {
  const [artista, setArtista] = useState("");
  const handleInputChange = (event) => { setArtista(event.target.value); };

  return (
    <div className="page">
      <p className="mb-2 text-lg">Insira o nome do artista:</p>
      <input list="artistas" type="text" value={artista} onChange={handleInputChange} className="mb-4 p-2 border border-gray-300 rounded-md" />
      <datalist id="artistas">
        {artistNamesArr().map((artista) => (
          <option key={artista} value={artista} />
        ))}
      </datalist>

      <p className="mb-2 text-lg">Número de plays do artista: {numPlaysArtista(artista)}</p>
      <p className="mb-2 text-lg">Número de músicas diferentes do artista: {musicasDiferentesArtista(artista)}</p>
      <p className="mb-2 text-lg">Minutos ouvidos do artista: {minutosOuvidosArtista(artista)}</p>
      <p className="mb-2 text-lg">Percentagem de plays que são do artista: {playsDoArtista(artista)}%</p>
      <p className="mb-2 text-lg">Posição do artista no top 100: {posicaoTopCemArtista(artista)}</p>
      <p className="mb-2 text-lg">Estação do ano em que o artista é mais ouvido: {artistaEstacaoMaisOuvida(artista)}</p>

      <Menu onChangePage={onChangePage} />
      <div className="mb-16"></div>
    </div>
  )
}

