import React from "react";
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida } from "../common/index.js";
import Menu from "./Menu";

export default function HomePage({onChangePage}) {
    return (
      <div className="page" >
        <p>numero de plays no total: {numeroDePlays()} </p>
        <p>numero de musicas diferentes ja ouvidas: {musicasDiferentes()} </p>
        <p>numero de minutos ouvidos: {minutosTotaisOuvidos()} min </p>
        <p>media de tempo diario: {mediaTempoDiario()} min por dia</p>
        <p>hora mais ouvida: {horaMaisOuvida()}</p>
        <p>estação mais ouvida: {estacaoMaisOuvida()}</p>
        <Menu onChangePage={onChangePage} />
      </div>
    )
}

