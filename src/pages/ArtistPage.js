import React, { useState } from "react";
import { numPlaysArtista, musicasDiferentesArtista, minutosOuvidosArtista, playsDoArtista, posicaoTopCemArtista, artistaEstacaoMaisOuvida, artistNamesArr } from "../common/index";
import { Menu } from "../components/Menu.js";
import LogoWithText from "../components/toplogo.js";

export function ArtistPage({ onChangePage }) {
  const [artista, setArtista] = useState("");
  const handleInputChange = (event) => { setArtista(event.target.value); };

  const handleTop20Click = () => {
    if (artista !== "") {
      onChangePage("top-20", artista);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-lightgrey">
      <LogoWithText />

      {artistNamesArr().indexOf(artista) === -1 ? (
        <div className="flex flex-grow justify-center items-center shadow-sm">
          <div className="text-center border-2 border-black w-80 h-60 flex flex-col justify-center items-center p-4">
            <p className="mb-2 text-sm font-PressStart2p">Procura um artista</p>
            <input list="artistas" type="text" value={artista} className="font-JetbrainsMono font-extrabold text-lg text-black border-black border-2 bg-greybar mb-4 p-2 rounded-none w-full" onChange={handleInputChange} />
          </div>
          <datalist id="artistas" className="border-black border-4">
            {artistNamesArr().map((artista) => (
              <option key={artista} value={artista} className="font-PressStart2p text-black" />
            ))}
          </datalist>
        </div>
      ): null}

      {artistNamesArr().indexOf(artista) !== -1 ? (
        <div className="flex-grow bg-lightgrey" style={{ paddingTop: "100px"}}>

          <div className="grid grid-cols-3 items-center px-6">
            <p className="col-span-2 font-PressStart2p text-black">{artista}</p>
            <button onClick={handleTop20Click} className={`px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue`}>Top #20</button>
          </div>

          <div className="grid grid-cols-2 grid-rows-3 gap-3 p-6" style={{ paddingBottom: "100px"}}>
            <div className="border-2 border-black p-5 shadow-lg">
              <p className="font-PressStart2p text-xxs text-blue mb-2 ">{numPlaysArtista(artista)}</p>
              <p className="font-JetbrainsMono text-sm font-semibold">vezes que ouviste este artista</p>
            </div>

            <div className="border-2 border-black p-5 shadow-lg">
              <p className="font-PressStart2p text-xxs text-blue mb-2 ">#{posicaoTopCemArtista(artista) !== 0 ? posicaoTopCemArtista(artista) : `0`}</p>
              <p className="font-JetbrainsMono text-sm font-semibold">posição deste artista no teu top #100</p>
            </div>

            <div className="border-2 border-black p-5 shadow-lg">
              <p className="font-PressStart2p text-xxs text-blue mb-2 ">{minutosOuvidosArtista(artista)}</p>
              <p className="font-JetbrainsMono text-sm font-semibold">minutos que passaste a ouvir este artista</p>
            </div>

            <div className="border-2 border-black p-5 shadow-lg">
              <p className="font-PressStart2p text-xxs text-blue mb-2 ">{artistaEstacaoMaisOuvida(artista)}</p>
              <p className="font-JetbrainsMono text-sm font-semibold">estação do ano que mais ouves música este artista</p>
            </div>

            <div className="border-2 border-black p-5 shadow-lg">
              <p className="font-PressStart2p text-xxs text-blue mb-2 ">{musicasDiferentesArtista(artista)}</p>
              <p className="font-JetbrainsMono text-sm font-semibold">número de músicas diferentes que já ouviste deste artista</p>
            </div>

            <div className="border-2 border-black p-5 shadow-lg">
              <p className="font-PressStart2p text-xxs text-blue mb-2 ">{`${playsDoArtista(artista)}%`}</p>
              <p className="font-JetbrainsMono text-sm font-semibold">percentagem deste artista nas tuas plays</p>
            </div>
          </div>
        </div>
      ): null}

      <Menu onChangePage={onChangePage} />
    </div>
  );
}
