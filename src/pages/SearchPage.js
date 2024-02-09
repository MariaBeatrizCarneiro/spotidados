import React, { useState } from "react";
import { Menu } from "../components/Menu.js";
import LogoWithText from "../components/toplogo.js";
import { ArtistPage } from "./ArtistPage.js";
import { artistNamesArr } from "../common/index";
import Pacman2 from "../assets/pacman/PacmanAnimated.js";
import Ghost from "../assets/pacman/ghost.js";

export function SearchPage({ onChangePage }) {
  const [artista, setArtista] = useState("");
  const handleInputChange = (event) => { setArtista(event.target.value); };

  return (
    <div>
      {artistNamesArr().indexOf(artista) === -1 ? (
        <div className="flex flex-col h-screen bg-lightgrey">
          <div>
          <LogoWithText />
          </div>

          <div className="flex flex-grow justify-center items-center shadow-sm relative">
            <div className="absolute top-14 mt-12"><Pacman2 /></div>
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
      <div className="absolute top-12"><Ghost /></div> {/* Positioned the Ghost at the bottom */}
          <Menu onChangePage={onChangePage} />
        </div>
      ) : null}

      {artistNamesArr().indexOf(artista) !== -1 ? (
        <ArtistPage onChangePage={onChangePage} selectedArtist={artista} />
      ) : null}
    </div>
  );
}
