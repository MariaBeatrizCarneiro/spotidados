import React, { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { TopPage } from "./pages/TopPage";
import { SearchPage } from "./pages/SearchPage";
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
    "search": <SearchPage onChangePage={onChangePage} />,
    "artista": <ArtistPage onChangePage={onChangePage} selectedArtist={selectedArtist} />,
    "top-20": <TopArtistMusicPage onChangePage={onChangePage} selectedArtist={selectedArtist} />,
  };

  return (
    <div className="App">
      {paginas[paginaAtual] || <div>ERROR: PAGE NOT FOUND</div>}
    </div>
  );
}

export default App;
