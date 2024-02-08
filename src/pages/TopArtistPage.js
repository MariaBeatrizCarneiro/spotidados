import React, { useState } from "react";
import { topCemArtistas } from "../common/index.js";
import { Menu } from "./Menu";
import ArtistPhoto from "../components/artist_photo.js";
import MusicAlbumArt from "../components/album.js";
import LogoWithText from "../components/toplogo.js";


export function TopArtistPage({ onChangePage, currentPage }) {
    const [periodo, setPeriodo] = useState("sempre");
    const onChangePeriodo = (novoPeriodo) => { setPeriodo(novoPeriodo); };
  
    return (
      <div className="page">
        <LogoWithText />
        <div className="fixed w-full bg-white z-10 text-center">
            <p className="text-lg ">Top #100:</p>
            <p>{periodo}</p>
            <button onClick={() => onChangePage("top-musica")} className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${ currentPage === "top-musica" ? "bg-blue-600" : "" }`} style={{ width: "50%" }}>Músicas</button>
            <button onClick={() => onChangePage("top-artista")} className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 ${ currentPage === "top-artista" ? "bg-blue-600" : "" }`} style={{ width: "50%" }}>Artistas</button>
        </div>
  
        <p className="mb-16" style={{ paddingTop: "110px" }}>{topCemArtistas(periodo)}</p>
  
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
