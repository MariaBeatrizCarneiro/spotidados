import React, { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { TopPage } from "./pages/TopPage";
import { ArtistPage } from "./pages/ArtistPage";
import { TopArtistMusicPage } from "./pages/TopArtistMusicPage";

function App() {
  const [paginaAtual, setPaginaAtual] = useState("index");
  const [selectedArtist, setSelectedArtist] = useState("");
  const onChangePage = (page, artist) => { 
    setPaginaAtual(page); 
    setSelectedArtist(artist);
  };

  const paginas = {
    "index": <HomePage onChangePage={onChangePage} />,
    "top-100": <TopPage onChangePage={onChangePage} />,
    "artista": <ArtistPage onChangePage={onChangePage} />,
    "top-20": <TopArtistMusicPage onChangePage={onChangePage} selectedArtist={selectedArtist} />, // passando selectedArtist aqui
  };

  return (
    <div className="App">
      {paginas[paginaAtual] || <div>ERROR: PAGE NOT FOUND</div>}
    </div>
  );
}

export default App;
