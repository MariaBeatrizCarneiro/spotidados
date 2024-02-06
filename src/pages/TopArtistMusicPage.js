import React from "react";
import { topVinteMusicasPorArtista } from "../common/index.js";
import Menu from "./Menu";

export default function TopArtistMusicPage({onChangePage}) {
    return (
      <div className="page" >
        <p>top 20 musicas por artista em ms: {topVinteMusicasPorArtista("4semanas", "TOOL")}</p>
        <Menu onChangePage={onChangePage} />
        <div className="mb-16"></div>
      </div>
    )
}
