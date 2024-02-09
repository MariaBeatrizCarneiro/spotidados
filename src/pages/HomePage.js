import React, { useState } from "react";
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida, formataData } from "../common/index.js";
import { Menu } from "../components/Menu.js";
import logo from '../assets/logo.svg'
import { ReactComponent as Calendar } from "../assets/icon _calendar.svg";
import { ReactComponent as Wilson } from "../assets/wilsonprofilepic.svg";

export function HomePage({ onChangePage }) {
  const [userName, setUserName] = useState("Wilson Contente"); // Initial user name
  const handleEditProfile = () => {
    // You can implement a modal or an input field to allow the user to input the new name
    const newName = prompt("Enter your new name:");
    if (newName) {
      setUserName(newName);
    }
  };
  return (

    <div className="page bg-lightgrey flex flex-col" >

      <div className="w-full">
        <div className="flex items-center pl-3 pt-3 pb-2 fixed">
          <img src= {logo} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-xs font-PressStart2p font-semibold ">Spotidados</span>
        </div>
      </div>

      <div className="mt-20 mx-6">
        <div className="grid grid-cols-6 mb-6">
          <div className="col-span-4">
            <h1 className="font-PressStart2p text-xl w-44">{userName}</h1>
            <p className="font-JetbrainsMono text-xs text-green">Estoy usando el spotiDados. Dale!</p>
          </div>
          <Wilson width="115" height="115"/>
        </div>
        <div className="flex items-center justify-between">
        <button onClick={handleEditProfile} className="border-black border-2 px-3 py-2 font-PressStart2p text-xxs">Editar Perfil</button>
          <button className="border-black border-2 px-3 py-2 font-PressStart2p text-xxs">Share Profile</button>
        </div>
      </div>

      <div className="m-6 flex flex-wrap gap-2">
        <Calendar />
        <span className="font-JetbrainsMono font-extrabold text-blue text-xs">{formataData(new Date())}</span>
      </div>

      <div className="grid grid-cols-2 grid-rows-3 gap-3 mx-6 mb-2 ">

        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{numeroDePlays()}
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">total de plays</p>
        </div>
        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{mediaTempoDiario()} minutos
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">média diária a ouvir música</p>
        </div>
        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{horaMaisOuvida()}
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">hora que mais ouves música</p>
        </div>
        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{estacaoMaisOuvida()}
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">estação do ano que mais ouves música</p>
        </div>
        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{musicasDiferentes()}
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">número de músicas diferentes que já ouviste</p>
        </div>
        <div className="border-2 border-black p-5 shadow-lg">
          <p className="font-PressStart2p text-xxs text-blue mb-2 ">{minutosTotaisOuvidos()}
          </p>
          <p className="font-JetbrainsMono text-sm font-semibold">minutos que passaste a ouvir música</p>
        </div>
      </div>



      <Menu onChangePage={onChangePage} />
      <div className="mb-16"></div>
    </div >
  )
}

