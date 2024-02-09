import React from "react";
import { numPlaysArtista, musicasDiferentesArtista, minutosOuvidosArtista, playsDoArtista, posicaoTopCemArtista, artistaEstacaoMaisOuvida } from "../common/index";
import { Menu } from "../components/Menu.js";
import LogoWithText from "../components/toplogo.js";
import Pacman2 from "../assets/pacman/PacmanAnimated.js";

export function ArtistPage({ onChangePage, selectedArtist }) {
    const handleTop20Click = () => {
        if (selectedArtist !== "") {
        onChangePage("top-20", selectedArtist);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-lightgrey">
        <div>
            <LogoWithText />
        </div>

      {/* /////////////////SEARCH PAGE//////////////////////// */}

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
      ) : null}

      {/* ///////////////////////ARTIST PAGE//////////////////////// */}
      {artistNamesArr().indexOf(artista) !== -1 ? (
        <div className="flex-grow bg-lightgrey " style={{ paddingTop: "60px" }}>
            <div className="w-85 h-60 mx-6 border-black border-2">
            </div>

            <div className="grid grid-cols-2 items-center px-6 mt-6">
            <p className="col-span-1 font-PressStart2p text-black">
                {selectedArtist}
            </p>
            <div className="flex justify-center">
                <button onClick={handleTop20Click}
                className={`font-PressStart2p text-xxs px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue hover:scale-125`}>
                Top #20
                </button>
            </div>
            </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 gap-3 p-6" style={{ paddingBottom: "100px" }}>
            <div className="border-2 border-black p-5 shadow-lg">
            <p className="font-PressStart2p text-xxs text-blue mb-2 ">{numPlaysArtista(selectedArtist)}</p>
            <p className="font-JetbrainsMono text-sm font-semibold">vezes que ouviste este artista</p>
            </div>

            <div className="border-2 border-black p-5 shadow-lg">
            <p className="font-PressStart2p text-xxs text-blue mb-2 ">#{posicaoTopCemArtista(selectedArtist) !== 0 ? posicaoTopCemArtista(selectedArtist) : `0`}</p>
            <p className="font-JetbrainsMono text-sm font-semibold">posição deste artista no teu top #100</p>
            </div>

            <div className="border-2 border-black p-5 shadow-lg">
            <p className="font-PressStart2p text-xxs text-blue mb-2 ">{minutosOuvidosArtista(selectedArtist)}</p>
            <p className="font-JetbrainsMono text-sm font-semibold">minutos que passaste a ouvir este artista</p>
            </div>

            <div className="border-2 border-black p-5 shadow-lg">
            <p className="font-PressStart2p text-xxs text-blue mb-2 ">{artistaEstacaoMaisOuvida(selectedArtist)}</p>
            <p className="font-JetbrainsMono text-sm font-semibold">estação do ano que mais ouves música este artista</p>
            </div>

            <div className="border-2 border-black p-5 shadow-lg">
            <p className="font-PressStart2p text-xxs text-blue mb-2 ">{musicasDiferentesArtista(selectedArtist)}</p>
            <p className="font-JetbrainsMono text-sm font-semibold">número de músicas diferentes que já ouviste deste artista</p>
            </div>

            <div className="border-2 border-black p-5 shadow-lg">
            <p className="font-PressStart2p text-xxs text-blue mb-2 ">{`${playsDoArtista(selectedArtist)}%`}</p>
            <p className="font-JetbrainsMono text-sm font-semibold">percentagem deste artista nas tuas plays</p>
            </div>
        </div>

        <Menu onChangePage={onChangePage} />
        </div>
    );
}
