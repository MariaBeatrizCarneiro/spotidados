import React from "react";
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida } from "../common/index.js";

export default function HomePage({onChangePage}) {
    return (
      <div className="page" >
        <p>numero de plays no total: {numeroDePlays()} </p>
        <p>numero de musicas diferentes ja ouvidas: {musicasDiferentes()} </p>
        <p>numero de minutos ouvidos: {minutosTotaisOuvidos()} min </p>
        <p>media de tempo diario: {mediaTempoDiario()} min por dia</p>
        <p>hora mais ouvida: {horaMaisOuvida()}</p>
        <p>estação mais ouvida: {estacaoMaisOuvida()}</p>
        <button onClick={() => onChangePage("top-artista")}>Top Page Artistas</button>
      </div>
    )
}

