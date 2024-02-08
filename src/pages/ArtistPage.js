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
    <div className="flex flex-col h-screen bg-lightgrey p-5">
      <LogoWithText />

      {artistNamesArr().indexOf(artista) === -1 ? (
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
      ): null}

      {artistNamesArr().indexOf(artista) !== -1 ? (
        <div className="flex-grow" style={{ paddingTop: "100px"}}>
          <ArtistPhoto artistName={artista} />

          <div className="grid grid-cols-3 items-center">
            <p className="col-span-2 font-PressStart2p text-black">{artista}</p>
            <button onClick={handleTop20Click} className={`px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue`}>Top #20</button>
          </div>

          <p className="mt-5 mb-2 text-lg">Número de plays do artista: {numPlaysArtista(artista)}</p>
          <p className="mb-2 text-lg">Número de músicas diferentes do artista: {musicasDiferentesArtista(artista)}</p>
          <p className="mb-2 text-lg">Minutos ouvidos do artista: {minutosOuvidosArtista(artista)}</p>
          <p className="mb-2 text-lg">Percentagem de plays que são do artista: {`${playsDoArtista(artista)}%`}</p>
          <p className="mb-2 text-lg">Posição do artista no top 100: {posicaoTopCemArtista(artista) !== 0 ? posicaoTopCemArtista(artista) : `${artista} não está no teu top 100!`}</p>
          <p className="mb-2 text-lg">Estação do ano em que o artista é mais ouvido: {artistaEstacaoMaisOuvida(artista)}</p>
        </div>
      ): null}

      <Menu onChangePage={onChangePage} />
    </div>
  );
}
