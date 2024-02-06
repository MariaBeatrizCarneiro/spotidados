import React from "react";
import { topCemArtistas } from "../common/index.js";
import Menu from "./Menu";

export default function TopArtistPage({onChangePage}) {
    return (
      <div className="page" >
        <p>top 100 artistas: {topCemArtistas("sempre")}</p>
        <Menu onChangePage={onChangePage} />
      </div>
    )
}
