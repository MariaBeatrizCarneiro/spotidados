import React from "react";
import { numeroDePlays, musicasDiferentes, minutosTotaisOuvidos, mediaTempoDiario, horaMaisOuvida, estacaoMaisOuvida } from "../common/index.js";
import {Menu} from "./Menu";

export function HomePage({onChangePage}) {
    return (
      <div className="page" >
        <p className="mb-2 text-lg">Número de plays no total: { numeroDePlays() }.</p>
        <p className="mb-2 text-lg">Número de músicas diferentes já ouvidas: { musicasDiferentes() }.</p>
        <p className="mb-2 text-lg">Número de minutos ouvidos: { minutosTotaisOuvidos() } min. </p>
        <p className="mb-2 text-lg">Média de tempo diário: { mediaTempoDiario() } min por dia.</p>
        <p className="mb-2 text-lg">Hora mais ouvida: { horaMaisOuvida() }.</p>
        <p className="mb-2 text-lg">Estação do ano que mais ouve música: { estacaoMaisOuvida() }.</p>
        
        <Menu onChangePage={onChangePage} />
        <div className="mb-16"></div>
      </div>
    )
}

