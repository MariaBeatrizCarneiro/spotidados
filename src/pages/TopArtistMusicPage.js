import React, { useState, useEffect } from "react";
import { topVinteMusicasPorArtista } from "../common/index.js";
import { Menu } from "./Menu";

export function TopArtistMusicPage({ onChangePage, selectedArtist }) {
    const [periodo, setPeriodo] = useState("sempre");
    const [artista, setArtista] = useState(selectedArtist);

    const onChangePeriodo = (novoPeriodo) => { setPeriodo(novoPeriodo); };

    useEffect(() => {
        setArtista(selectedArtist);
    }, [selectedArtist]);


    return (
        <div className="page">
            <div className="fixed w-full bg-white z-10 text-center">
                <p className="text-lg">Top #20:</p>
                <p>{periodo}</p>
            </div>

            <p>{topVinteMusicasPorArtista(periodo, artista)}</p>

            <div style={{ paddingTop: "1rem" }}>
                <div className="grid grid-cols-4 gap-2 fixed bottom-0 left-0 w-full mb-16">
                    <button onClick={() => onChangePeriodo("4semanas")} className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "4semanas" ? "bg-blue-600" : ""}`}>4 semanas</button>
                    <button onClick={() => onChangePeriodo("6meses")} className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "6meses" ? "bg-blue-600" : ""}`}>6 meses</button>
                    <button onClick={() => onChangePeriodo("últimoAno")} className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "últimoAno" ? "bg-blue-600" : ""}`}>Último ano</button>
                    <button onClick={() => onChangePeriodo("sempre")} className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${periodo === "sempre" ? "bg-blue-600" : ""}`}>Sempre</button>   
                </div>
            </div>

            <Menu onChangePage={onChangePage} />
            <div className="mb-16"></div>
        </div>
    )
}
