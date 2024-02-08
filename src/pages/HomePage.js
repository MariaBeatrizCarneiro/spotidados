import React from "react";
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida } from "../common/index.js";
import { Menu } from "./Menu";
import ArtistPhoto from "../components/artist_photo.js";
import MusicAlbumArt from "../components/album.js";
import LogoWithText from "../components/toplogo.js";

export function HomePage({onChangePage}) {
    return (
      
      <div className="page bg-lightgrey" >
        <LogoWithText />

        <h1 className="font-PressStart2p text-xl w-44">Wilson Felizardo</h1>
        <p className="font-JetbrainsMono text-xs text-green">Estoy usando o spotiDados. Dale!</p>
        <p className="mb-2 text-lg">Número de plays no total: { numeroDePlays() }.</p>
        <p className="mb-2 text-lg">Número de músicas diferentes já ouvidas: { musicasDiferentes() }.</p>
        <p className="mb-2 text-lg">Número de minutos ouvidos: { minutosTotaisOuvidos() } min. </p>
        <p className="mb-2 text-lg">Média de tempo diário: { mediaTempoDiario() } min por dia.</p>
        <p className="mb-2 text-lg">Hora mais ouvida: { horaMaisOuvida() }.</p>
        <p className="mb-2 text-lg">Estação do ano que mais ouve música: { estacaoMaisOuvida() }.</p>


      <MusicAlbumArt albumName="Jesus is King" />
      

      <Menu onChangePage={onChangePage} />
      <div className="mb-16"></div>
    </div>
  )
}

