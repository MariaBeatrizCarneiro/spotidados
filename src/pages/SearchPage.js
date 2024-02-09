import React, { useState } from "react";
import { Menu } from "../components/Menu.js";
import LogoWithText from "../components/toplogo.js";
import { ArtistPage } from "./ArtistPage.js";
import { artistNamesArr } from "../common/index";
import Pacman2 from "../assets/pacman/PacmanAnimated.js";

export function SearchPage({ onChangePage }) {
  const [artista, setArtista] = useState("");
  const handleInputChange = (event) => { setArtista(event.target.value); };
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(ps => ps += 1)
    console.log(counter)
  }

  return (
    <div>
      {counter <8 ?
        artistNamesArr().indexOf(artista) === -1 ? (
          <div className="flex flex-col h-screen bg-lightgrey">
            <div>
              <LogoWithText />
            </div>

            <div onClick={() => handleClick()} className="flex flex-grow justify-center items-center shadow-sm relative">
              <div className="absolute top-12 mt-12" ><Pacman2 /></div>
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

            <Menu onChangePage={onChangePage} />
          </div>
        ) : null : <div><iframe src='//sgame.etsisi.upm.es/games/10.full' className="flex flex-col w-[710px] h-[540px]  border-0 bg-lightgrey"></iframe></div>}
      {artistNamesArr().indexOf(artista) !== -1 ? (
        <ArtistPage onChangePage={onChangePage} selectedArtist={artista} />
      ) : null}
    </div>
  );
}
