import React from "react";
import { topCemArtistas } from "../common/index.js";

export default function TopArtistPage({onChangePage}) {
    return (
      <div className="page" >
        <p>top 100 artistas: {topCemArtistas("sempre")}</p>
        <button onClick={() => onChangePage("top-musica")}>Top Page Músicas</button>
      </div>
    )
}
