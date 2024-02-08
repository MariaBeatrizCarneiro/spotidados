import React, { useState } from "react";
import { topCemArtistas, topCemMusicas } from "../common/index.js";
import { Menu } from "../components/Menu.js";
import LogoWithText from "../components/toplogo.js";

export function TopPage({ onChangePage, currentPage, selectedType }) {
  const [periodo, setPeriodo] = useState("sempre");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [exibirArtistas, setExibirArtistas] = useState(selectedType === "artista"); // Definir o estado inicial com base no tipo selecionado
  const onChangePeriodo = (novoPeriodo) => { setPeriodo(novoPeriodo); };

  return (
    <div className="page">
      <LogoWithText />
      <div className="fixed w-full bg-white z-10 text-center">
        <p className="text-lg ">Top #100:</p>
        <p>{periodo}</p>
        <button onClick={() => { setExibirArtistas(false); setIsButtonClicked(true); }} className={`px-4 py-2 border border-lighterblue bg-lightgrey hover:border-b-0 ${!exibirArtistas ? "border-b-0 border-x-0" : ""}`} style={{ width: "50%" }}>Músicas</button>
        <button onClick={() => { setExibirArtistas(true); setIsButtonClicked(true); }} className={`px-4 py-2 border border-lighterblue bg-lightgrey hover:border-b-0 ${exibirArtistas ? "border-b-0 border-x-0" : ""}`} style={{ width: "50%" }}>Artistas</button>
      </div>

      <p className="mb-16" style={{ paddingTop: "110px" }}>
        {exibirArtistas ? topCemArtistas(periodo) : topCemMusicas(periodo)}
      </p>

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
  );
}
