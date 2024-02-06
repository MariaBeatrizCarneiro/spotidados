import React from "react";
import { topCemMusicas } from "../common/index.js";

export default function TopMusicPage({onChangePage}) {
    return (
      <div className="page" >
        <p>top 100 musicas: {topCemMusicas("sempre")}</p>
        <button onClick={() => onChangePage("artista")}>Artista Page</button>
      </div>
    )
}
