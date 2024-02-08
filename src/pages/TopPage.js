import React, { useState } from "react";
import { topCemArtistas, topCemMusicas } from "../common/index.js";
import { Menu } from "../components/Menu.js";
import LogoWithText from "../components/toplogo.js";

export function TopPage({ onChangePage }) {
  const [periodo, setPeriodo] = useState("sempre");
  const [exibirArtistas, setExibirArtistas] = useState(false);
  const onChangePeriodo = (novoPeriodo) => { setPeriodo(novoPeriodo); };

  return (
    <div className="bg-lightgrey">
      <LogoWithText />
      <div style={{ paddingTop: "50px" }} ></div>

      <div className="fixed w-full z-10 text-center bg-lightgrey">
        <p className="text-lg">Top #100:</p>
        <p className="pb-2 text-lighterblue">{periodo}</p>
        <button onClick={() => { setExibirArtistas(false); }} className={`px-4 py-2 border border-black bg-lightgrey ${ !exibirArtistas ? "border-b-0 border-x-0" : "" }`} style={{ width: "50%" }}>Músicas</button>
        <button onClick={() => { setExibirArtistas(true); }} className={`px-4 py-2 border border-black bg-lightgrey ${ exibirArtistas ? "border-b-0 border-x-0" : "" }`} style={{ width: "50%" }}>Artistas</button>
      </div>

      <p className="px-6" style={{ paddingTop: "115px", paddingBottom: "60px" }}>
        {exibirArtistas ? 
          topCemArtistas(periodo).map((artista, index) => (
              <div key={index} className="grid grid-cols-12 border-2 border-black p-1 py-4 shadow-lg mb-2 items-center">
                  <p className="col-span-3 text-blue font-PressStart2p align-text-middle ps-2">#{index+1}</p>
                  <p className="col-span-9 font-JetbrainsMono font-extrabold align-text-middle text-blue whitespace-nowrap overflow-hidden">{artista}</p>
              </div>
          )) :
          topCemMusicas(periodo).map((musica, index) => (
              <div key={index} className="grid grid-cols-12 border-2 border-black p-1 shadow-lg mb-2 items-center">
                  <p className="col-span-3 text-blue font-PressStart2p align-text-middle ps-2">#{index+1}</p>
                  <p className="col-span-9 font-JetbrainsMono font-extrabold align-text-middle text-blue whitespace-nowrap overflow-scroll">{musica[0]}<br /> <span className="text-xxs font-medium align-text-middle text-black">{musica[1][1]}</span></p>
              </div>
          ))
        }
      </p>

      <div style={{ paddingTop: "1rem" }}>
        <div className="grid grid-cols-4 gap-2 fixed bottom-0 left-0 w-full mb-16" style={{ paddingBottom: "15px" }}>
          <button onClick={() => onChangePeriodo("4semanas")} className={`px-4 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${ periodo === "4semanas" ? "bg-lighterblue" : "bg-lightgrey" }`}>4 semanas</button>
          <button onClick={() => onChangePeriodo("6meses")} className={`px-4 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${ periodo === "6meses" ? "bg-lighterblue" : "bg-lightgrey" }`}>6 meses</button>
          <button onClick={() => onChangePeriodo("últimoAno")} className={`px-4 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${ periodo === "últimoAno" ? "bg-lighterblue" : "bg-lightgrey" }`}>Último ano</button>
          <button onClick={() => {onChangePeriodo("sempre"); }} className={`px-4 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${ periodo === "sempre" ? "bg-lighterblue" : "bg-lightgrey" }`}>Sempre</button>
        </div>
      </div>

      <Menu onChangePage={onChangePage} />
      <div style={{ paddingBottom: "80px" }}></div>
    </div>
  );
}
