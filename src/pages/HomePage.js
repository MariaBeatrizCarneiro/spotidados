import React from "react";
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida } from "../common/index.js";
import { Menu } from "./Menu";
import ArtistPhoto from "../components/artist_photo.js";
import MusicAlbumArt from "../components/album.js";
import LogoWithText from "../components/toplogo.js";

<<<<<<< HEAD
export function HomePage({onChangePage}) {
    return (
      
      <div className="page" >
        <LogoWithText />
        <p className="mb-2 text-lg">Número de plays no total: { numeroDePlays() }.</p>
        <p className="mb-2 text-lg">Número de músicas diferentes já ouvidas: { musicasDiferentes() }.</p>
        <p className="mb-2 text-lg">Número de minutos ouvidos: { minutosTotaisOuvidos() } min. </p>
        <p className="mb-2 text-lg">Média de tempo diário: { mediaTempoDiario() } min por dia.</p>
        <p className="mb-2 text-lg">Hora mais ouvida: { horaMaisOuvida() }.</p>
        <p className="mb-2 text-lg">Estação do ano que mais ouve música: { estacaoMaisOuvida() }.</p>
        <ArtistPhoto artistName="Kanye West" />
=======
export function HomePage({ onChangePage }) {
  return (
    <div className="page" >
      <p className="mb-2 text-lg font-JetbrainsMono">Número de plays no total: {numeroDePlays()}.</p>
      <p className="mb-2 text-lg font-PressStart2p">Número de músicas diferentes já ouvidas: {musicasDiferentes()}.</p>
      <p className="mb-2 text-lg">Número de minutos ouvidos: {minutosTotaisOuvidos()} min. </p>
      <p className="mb-2 text-lg">Média de tempo diário: {mediaTempoDiario()} min por dia.</p>
      <p className="mb-2 text-lg">Hora mais ouvida: {horaMaisOuvida()}.</p>
      <p className="mb-2 text-lg">Estação do ano que mais ouve música: {estacaoMaisOuvida()}.</p>
>>>>>>> 0a5856faa3b1385a6cd3612e6df882607a6fe9db

      <MusicAlbumArt albumName="Jesus is King" />
      <ArtistPhoto artistName="TOOL" />

      <Menu onChangePage={onChangePage} />
      <div className="mb-16"></div>
    </div>
  )
}

