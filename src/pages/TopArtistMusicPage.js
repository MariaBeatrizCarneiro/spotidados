import React from "react";
import { topVinteMusicasPorArtista } from "../common/index.js";

export default function TopArtistMusicPage({onChangePage}) {
    return (
      <div className="page" >
        <p>top 20 musicas por artista em ms: {topVinteMusicasPorArtista("4semanas", "TOOL")}</p>
        <button onClick={() => onChangePage("index")}>Voltar á Casa</button>
      </div>
    )
}
