import React, { useState } from "react";
import { topCemArtistas } from "../common/index.js";
import { Menu } from "./Menu";

export function TopArtistPage({onChangePage, currentPage }) {
    const [periodo, setPeriodo] = useState("sempre");
    const onChangePeriodo = (novoPeriodo) => { setPeriodo(novoPeriodo); };

    return (
      <div className="page">
        <div className="flex">
            <button onClick={() => onChangePage("top-musica")} className={`flex-1 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${ currentPage === "top-musica" ? "bg-blue-600" : "" }`} > Top Page Músicas </button>
            <button onClick={() => onChangePage("top-artista")} className={`flex-1 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${ currentPage === "top-artista" ? "bg-blue-600" : "" }`}> Top Page Artistas </button>
        </div>

        <p className="mb-2 text-lg">Escolha o período:</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <button onClick={() => onChangePeriodo("sempre")} className={`w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "sempre" ? "bg-blue-600" : ""}`}>Sempre</button>
          <button onClick={() => onChangePeriodo("4semanas")} className={`w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "4semanas" ? "bg-blue-600" : ""}`}>Últimas 4 semanas</button>
          <button onClick={() => onChangePeriodo("6meses")} className={`w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "6meses" ? "bg-blue-600" : ""}`}>Últimos 6 meses</button>
          <button onClick={() => onChangePeriodo("últimoAno")} className={`w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "últimoAno" ? "bg-blue-600" : ""}`}>Último ano</button>
        </div>
        
        <p className="mb-2 text-lg">Top 100 artistas:</p>
        <p>{topCemArtistas(periodo)}</p>
  
        <Menu onChangePage={onChangePage} />
        <div className="mb-16"></div>
      </div>
    )
}
