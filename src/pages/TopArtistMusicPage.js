import React, { useState } from "react";
import { topVinteMusicasPorArtista, artistNamesArr } from "../common/index.js";
import Menu from "./Menu";

export default function TopArtistMusicPage({onChangePage}) {
    const [periodo, setPeriodo] = useState("sempre");
    const onChangePeriodo = (novoPeriodo) => { setPeriodo(novoPeriodo); };
    const [artista, setArtista] = useState("");
    const handleInputChange = (event) => { setArtista(event.target.value); };

    return (
      <div className="page">
        <p className="mb-2 text-lg">Escolha o período:</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <button onClick={() => onChangePeriodo("sempre")} className={`w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "sempre" ? "bg-blue-600" : ""}`}>Sempre</button>
            <button onClick={() => onChangePeriodo("4semanas")} className={`w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "4semanas" ? "bg-blue-600" : ""}`}>Últimas 4 semanas</button>
            <button onClick={() => onChangePeriodo("6meses")} className={`w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "6meses" ? "bg-blue-600" : ""}`}>Últimos 6 meses</button>
            <button onClick={() => onChangePeriodo("últimoAno")} className={`w-full px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "últimoAno" ? "bg-blue-600" : ""}`}>Último ano</button>
        </div>

        <p className="mb-2 text-lg">Insira o nome do artista:</p>
        <input list="artistas" type="text" value={artista} onChange={handleInputChange} className="mb-4 p-2 border border-gray-300 rounded-md" />
        <datalist id="artistas">
            {artistNamesArr().map((artista) => (
            <option key={artista} value={artista} />
            ))}
        </datalist>
        
        <p className="mb-2 text-lg">Top 20 músicas por artista em ms:</p>
        <p>{topVinteMusicasPorArtista(periodo, artista)}</p>

        <Menu onChangePage={onChangePage} />
        <div className="mb-16"></div>
      </div>
    )
}
