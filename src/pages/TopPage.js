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
      <div style={{ paddingTop: "65px" }} ></div>

      <div className="fixed w-full z-10 text-center bg-lightgrey">
        <p className="text-lg">Top #100:</p>
        <p className="pb-2 text-lighterblue">{periodo}</p>
        <button onClick={() => { setExibirArtistas(false); }} className={`px-4 py-2 border border-black bg-lightgrey ${ !exibirArtistas ? "border-b-0 border-x-0" : "" }`} style={{ width: "50%" }}>Músicas</button>
        <button onClick={() => { setExibirArtistas(true); }} className={`px-4 py-2 border border-black bg-lightgrey ${ exibirArtistas ? "border-b-0 border-x-0" : "" }`} style={{ width: "50%" }}>Artistas</button>
      </div>

      <p style={{ paddingTop: "115px", paddingBottom: "60px" }}>
        {exibirArtistas ? topCemArtistas(periodo) : topCemMusicas(periodo)}
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
