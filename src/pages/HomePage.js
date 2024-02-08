import React from "react";
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida, formataData } from "../common/index.js";
import { Menu } from "../components/Menu.js";
import { ReactComponent as HomeIcon } from "../assets/home_logos/profile_pic.svg";
import ArtistPhoto from "../components/artist_photo.js";
import MusicAlbumArt from "../components/album.js";
import LogoWithText from "../components/toplogo.js";
import logo from '../assets/logo.svg'
import { ReactComponent as Calendar } from "../assets/icon _calendar.svg";
import { ReactComponent as Wilson } from "../assets/wilsonprofilepic.svg";

export function HomePage({ onChangePage }) {
  return (

    <div className="page bg-lightgrey flex flex-col" >

      <div className="w-full">
        <div className="flex items-center ml-3 mt-3 mb-2 fixed">
          <img src= {logo} alt="Logo" className="w-12 h-12 mr-2" />
          <span className="text-xs font-PressStart2p font-semibold ">Spotidados</span>
        </div>
      </div>

      <div className="mt-20 mx-6">
        <div className="grid grid-cols-6 mb-6">
          <div className="col-span-4">
            <h1 className="font-PressStart2p text-xl w-44">Wilson Felizardo</h1>
            <p className="font-JetbrainsMono text-xs text-green">Estoy usando el spotiDados. Dale!</p>
          </div>
          <Wilson width="115" height="115"/>
        </div>
        <div className="flex items-center justify-between">
          <button className="border-black border-2 px-3 py-2 font-PressStart2p text-xxs">Editar Perfil</button>
          <button className="border-black border-2 px-3 py-2 font-PressStart2p text-xxs">Share Profile</button>
        </div>
      </div>

      <div className="m-6 flex flex-wrap gap-2">
        <Calendar />
        <span className="font-JetbrainsMono font-extrabold text-blue text-xs">{formataData(new Date())}</span>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-3 mx-6 h-3/4">

        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{numeroDePlays()}
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">é o teu total de plays</p>
        </div>
        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{minutosTotaisOuvidos()}
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">são os minutos que passaste a ouvir música</p>
        </div>
        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{horaMaisOuvida()}
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">é a hora que mais ouves música</p>
        </div>
        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{estacaoMaisOuvida()}
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">é a estação que mais ouves música</p>
        </div>
        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{mediaTempoDiario()} minutos
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">é a tua média diária a ouvir música</p>
        </div>
        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{musicasDiferentes()}
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">é o número de músicas diferentes que já ouviste</p>
        </div>
      </div>



      <Menu onChangePage={onChangePage} />
      <div className="mb-16"></div>
    </div >
  )
}

