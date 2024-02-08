import React from "react";
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida } from "../common/index.js";
import { Menu } from "../components/Menu.js";
import ArtistPhoto from "../components/artist_photo.js";
import MusicAlbumArt from "../components/album.js";
import LogoWithText from "../components/toplogo.js";

export function HomePage({ onChangePage }) {
  return (

    <div className="page bg-lightgrey flex flex-col items-center" >

      <div className="w-full">
        <LogoWithText />
      </div>

      <div className="mt-20 mx-7">
        <h1 className="font-PressStart2p text-xl w-44">Wilson Felizardo</h1>
        <p className="font-JetbrainsMono text-xs text-green">Estoy usando o spotiDados. Dale!</p>
        <div className="flex flex">
          <button className="border-black border-2 px-5 py-4 font-PressStart2p text-xxs">Editar Perfil</button>
          <button className="border-black border-2 px-5 py-4 font-PressStart2p text-xxs">Share Profile</button>
        </div>
      </div>

      <p className="mb-2 text-lg">Número de plays no total: {numeroDePlays()}.</p>
      <p className="mb-2 text-lg">Número de músicas diferentes já ouvidas: {musicasDiferentes()}.</p>
      <p className="mb-2 text-lg">Número de minutos ouvidos: {minutosTotaisOuvidos()} min. </p>
      <p className="mb-2 text-lg">Média de tempo diário: {mediaTempoDiario()} min por dia.</p>
      <p className="mb-2 text-lg">Hora mais ouvida: {horaMaisOuvida()}.</p>
      <p className="mb-2 text-lg">Estação do ano que mais ouve música: {estacaoMaisOuvida()}.</p>



      <Menu onChangePage={onChangePage} />
      <div className="mb-16"></div>
    </div >
  )
}

