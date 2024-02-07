import React, { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { TopArtistPage } from "./pages/TopArtistPage";
import { TopMusicPage } from "./pages/TopMusicPage";
import { ArtistPage } from "./pages/ArtistPage";
import { TopArtistMusicPage } from "./pages/TopArtistMusicPage";




function App() {
  const [paginaAtual, setPaginaAtual] = useState("index");
  const onChangePage = (page) => { setPaginaAtual(page); };

  const paginas = {
    "index": <HomePage onChangePage={onChangePage} />,
    "top-artista": <TopArtistPage onChangePage={onChangePage} />,
    "top-musica": <TopMusicPage onChangePage={onChangePage} />,
    "artista": <ArtistPage onChangePage={onChangePage} />,
    "top-20": <TopArtistMusicPage onChangePage={onChangePage} />,
  };

  return (
    <div className="App">
      {paginas[paginaAtual] || <div>ERROR: PAGE NOT FOUND</div>}
    </div>
  );
}

export default App;

