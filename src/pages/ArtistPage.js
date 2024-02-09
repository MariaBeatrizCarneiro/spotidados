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

            <div className="flex-grow bg-lightgrey " style={{ paddingTop: "60px" }}>
                <div>
                    <div className="flex justify-center item-center overflow-hidden w-85 h-60 mx-6 border-black border-2">
                            <img
                            src="https://c4.wallpaperflare.com/wallpaper/903/1022/443/digital-art-thefatrat-pixel-art-cover-art-hd-wallpaper-preview.jpg"
                            className="flex-shrink-0" />
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
                    <p className="font-JetbrainsMono text-sm font-semibold">vez{numPlaysArtista(selectedArtist) === 1 ? ' que ouviste este artista' : 'es que ouviste este artista'}</p>
                    </div>

                    <div className="border-2 border-black p-5 shadow-lg">
                    <p className="font-PressStart2p text-xxs text-blue mb-2 ">{posicaoTopCemArtista(selectedArtist) !== 0 ? '#' + posicaoTopCemArtista(selectedArtist) : `:(`}</p>
                    <p className="font-JetbrainsMono text-sm font-semibold">{posicaoTopCemArtista(selectedArtist) !== 0 ? 'posição deste artista no teu top #100' : 'este artista ainda não está no teu top #100'}</p>
                    </div>

                    <div className="border-2 border-black p-5 shadow-lg">
                    <p className="font-PressStart2p text-xxs text-blue mb-2 ">{minutosOuvidosArtista(selectedArtist)}</p>
                    <p className="font-JetbrainsMono text-sm font-semibold">minuto{minutosOuvidosArtista(selectedArtist) === 1 ? 'que passaste a ouvir este artista' : 's que passaste a ouvir este artista'}</p>
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
            </div>

            <Menu onChangePage={onChangePage} />
        </div>
    );
}
