import React from "react";
import { topCemMusicas } from "../common/index.js";
import Menu from "./Menu";

export default function TopMusicPage({onChangePage}) {
    return (
      <div className="page" >
        <p>top 100 musicas: {topCemMusicas("sempre")}</p>
        <Menu onChangePage={onChangePage} />
      </div>
    )
}
