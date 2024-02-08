import React, { useState, useEffect } from "react";
import { topVinteMusicasPorArtista } from "../common/index.js";
import { Menu } from "./Menu";
import ArtistPhoto from "../components/artist_photo.js";
import MusicAlbumArt from "../components/album.js";
import LogoWithText from "../components/toplogo.js";


export function TopArtistMusicPage({ onChangePage, selectedArtist }) {
    const [periodo, setPeriodo] = useState("sempre");
    const [artista, setArtista] = useState(selectedArtist);
    const [topVinte, setTopVinte] = useState([])

    const onChangePeriodo = (novoPeriodo) => { setPeriodo(novoPeriodo); };

    useEffect(() => {
        setArtista(selectedArtist);
        setTopVinte(topVinteMusicasPorArtista(periodo, selectedArtist))
    }, [selectedArtist]);

    return (
        <div className="page">
            <LogoWithText />
            <div className="fixed w-full bg-white z-10 text-center">
                <p className="text-lg">Top #20:</p>
                <p>{periodo}</p>
            </div>

            <p style={{ paddingTop: "5rem" }}>{ }</p>
            <ol>
                {topVinte.map((ele) => <li>Musica: {ele[0]} <br />Album: {ele[1]} </li>)}
            </ol>


            <div style={{ paddingTop: "1rem" }}>
                <div className="grid grid-cols-4 gap-2 fixed bottom-0 left-0 w-full mb-16">
                    <button onClick={() => onChangePeriodo("4semanas")} className={`px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue ${periodo === "4semanas" ? "bg-blue-600" : ""}`}>4 semanas</button>
                    <button onClick={() => onChangePeriodo("6meses")} className={`px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue ${periodo === "6meses" ? "bg-blue-600" : ""}`}>6 meses</button>
                    <button onClick={() => onChangePeriodo("últimoAno")} className={`px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue ${periodo === "últimoAno" ? "bg-blue-600" : ""}`}>Último ano</button>
                    <button onClick={() => onChangePeriodo("sempre")} className={`px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue ${periodo === "sempre" ? "bg-blue-600" : ""}`}>Sempre</button> 
                </div>
            </div>

            <Menu onChangePage={onChangePage} />
            <div className="mb-16"></div>
        </div>
    )
}
