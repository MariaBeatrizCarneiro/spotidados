import React, { useState } from "react";
import { numPlaysArtista, musicasDiferentesArtista, minutosOuvidosArtista, playsDoArtista, posicaoTopCemArtista, artistaEstacaoMaisOuvida, artistNamesArr } from "../common/index";
import { Menu } from "../components/Menu.js";
import ArtistPhoto from "../components/artist_photo.js";
import MusicAlbumArt from "../components/album.js";
import LogoWithText from "../components/toplogo.js";

export function ArtistPage({ onChangePage }) {
  const [artista, setArtista] = useState("");
  const handleInputChange = (event) => { setArtista(event.target.value); };

  const handleTop20Click = () => {
    if (artista !== "") {
      console.log(artista);
      onChangePage("top-20", artista);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <LogoWithText />
      {artistNamesArr().indexOf(artista) === -1 && (
        <div className="flex flex-grow justify-center items-center">
          <div className="border-2 border-black w-80 h-80 flex flex-col justify-center items-center p-4">
            <p className="mb-2 text-l font-PressStart2p">Procura um artista</p>
            <input list="artistas" type="text" value={artista} onChange={handleInputChange} className="mb-4 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <datalist id="artistas" className="border-black border-4 ">
            {artistNamesArr().map((artista) => (
              <option key={artista} value={artista} className="font-PressStart2p text-black" />
            ))}
          </datalist>
        </div>
      )}

      {artistNamesArr().indexOf(artista) !== -1 && (
        <div className="flex-grow">
          <button onClick={handleTop20Click} className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">Top 20 músicas do {artista}</button>
          <ArtistPhoto artistName={artista} />
          <p className="mb-2 text-lg">Número de plays do artista: {numPlaysArtista(artista)}</p>
          <p className="mb-2 text-lg">Número de músicas diferentes do artista: {musicasDiferentesArtista(artista)}</p>
          <p className="mb-2 text-lg">Minutos ouvidos do artista: {minutosOuvidosArtista(artista)}</p>
          <p className="mb-2 text-lg">Percentagem de plays que são do artista: {`${playsDoArtista(artista)}%`}</p>
          <p className="mb-2 text-lg">Posição do artista no top 100: {posicaoTopCemArtista(artista) !== 0 ? posicaoTopCemArtista(artista) : `${artista} não está no teu top 100!`}</p>
          <p className="mb-2 text-lg">Estação do ano em que o artista é mais ouvido: {artistaEstacaoMaisOuvida(artista)}</p>
        </div>
      )}

      <Menu onChangePage={onChangePage} />
    </div>
  );
}
