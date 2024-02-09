import React, { useState } from "react";
import { topCemArtistas, topCemMusicas } from "../common/index.js";
import { Menu } from "../components/Menu.js";
import LogoWithText from "../components/toplogo.js";
import musicaLogo from "../assets/musica.png"


export function TopPage({ onChangePage }) {
  const [periodo, setPeriodo] = useState("sempre");
  const [exibirArtistas, setExibirArtistas] = useState(false);
  const onChangePeriodo = (novoPeriodo) => { setPeriodo(novoPeriodo); };
  const handleArtistClick = (nomeArtista) => {
    if (nomeArtista !== "") {
      onChangePage("artista", nomeArtista);
    }
  };

  function displayPeriodo(periodo) {
    switch (periodo) {
      case "sempre":
        return "desde sempre"
      case "4semanas":
        return "Últimas 4 semanas"
      case "6meses":
        return "Últimos 6 meses "
      case "ultimoAno":
        return "Último ano"
      default:
        return " "
    }
  }


  return (
    <div className="bg-lightgrey">
      <LogoWithText />
      <div style={{ paddingTop: "50px" }} ></div>

      <div className="fixed w-full z-10 text-center bg-lightgrey">
        <p className="font-PressStart2p text-lg">Top #100</p>
        <p className="pb-2 text-green font-PressStart2p text-xxs">{displayPeriodo(periodo)}</p>
        <button onClick={() => { setExibirArtistas(false); }}
          className={`font-PressStart2p text-xs px-4 py-3 border-2 border-black bg-lightgrey ${!exibirArtistas ? "border-b-0 border-x-0" : ""}`} style={{ width: "50%" }}>
          Músicas
        </button>
        <button onClick={() => { setExibirArtistas(true); }}
          className={`font-PressStart2p text-xs px-4 py-3 border-2 border-black bg-lightgrey ${exibirArtistas ? "border-b-0 border-x-0" : ""}`} style={{ width: "50%" }}>
          Artistas
        </button>
      </div>

      <p className="px-6" style={{ paddingTop: "115px", paddingBottom: "60px" }}>
        {exibirArtistas ?
          topCemArtistas(periodo).map((nomeArtista, index) => (
            <button key={index} onClick={() => handleArtistClick(nomeArtista)} className="w-full">
              <div className="flex flex-nowrap border-2 border-black p-1 shadow-lg mb-2 items-center">
                <p className="text-blue font-PressStart2p align-text-middle p-4 w-14">#{index + 1}</p>
                <div className="mx-5 h-12 w-12 bg-cover shrink-0" style={{ backgroundImage: `url(${musicaLogo})` }} />
                <p className="col-span-9 font-JetbrainsMono font-extrabold text-left text-blue whitespace-nowrap overflow-hidden">{nomeArtista}</p>
              </div>
            </button>
          )) :
          topCemMusicas(periodo).map((musica, index) => (
            <div key={index} className="flex-nowrap flex border-2 border-black p-1 shadow-lg mb-2 items-center">
              <p className="text-blue font-PressStart2p align-text-middle p-4 w-14">#{index + 1}</p>
              <div className="mx-5 h-12 w-12 bg-cover shrink-0" style={{ backgroundImage: `url(${musicaLogo})` }} />
              <p className="col-span-9 font-JetbrainsMono font-extrabold align-text-middle text-blue whitespace-nowrap overflow-scroll">{musica[0]}<br /> <span className="text-xxs font-medium align-text-middle text-black">{musica[1][1]}</span></p>
            </div>
          ))
        }
      </p>

      <div style={{ paddingTop: "1rem" }}>
        <div className="grid grid-cols-4 gap-1 fixed bottom-0 left-0 w-full mb-16" style={{ paddingBottom: "15px" }}>
          <button onClick={() => onChangePeriodo("4semanas")} className={`font-JetbrainsMono font-bold text-xs px-1 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${periodo === "4semanas" ? "bg-lighterblue" : "bg-lightgrey"}`}>4 semanas</button>
          <button onClick={() => onChangePeriodo("6meses")} className={`font-JetbrainsMono font-bold text-xs px-1 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${periodo === "6meses" ? "bg-lighterblue" : "bg-lightgrey"}`}>6 meses</button>
          <button onClick={() => onChangePeriodo("ultimoAno")} className={`font-JetbrainsMono font-bold text-xs px-1 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${periodo === "ultimoAno" ? "bg-lighterblue" : "bg-lightgrey"}`}>Último ano</button>
          <button onClick={() => { onChangePeriodo("sempre"); }} className={`font-JetbrainsMono font-bold text-xs px-1 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${periodo === "sempre" ? "bg-lighterblue" : "bg-lightgrey"}`}>Sempre</button>
        </div>
      </div>

      <Menu onChangePage={onChangePage} />
      <div style={{ paddingBottom: "80px" }}></div>
    </div>
  );
}
