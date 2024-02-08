import React from "react";
import { ReactComponent as HomeIcon } from "../assets/share.svg";
import { ReactComponent as TopIcon } from "../assets/settings.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";


export function Menu({ onChangePage }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800 p-4">
      <ul className="flex justify-between items-center">
        <li>
          <button className="text-white hover:underline" onClick={() => onChangePage("index")}>
            <HomeIcon width="24" height="24" />
          </button>
        </li>
        <li>
          <button className="text-white hover:underline" onClick={() => onChangePage("top-musica")}>
            <TopIcon width="24" height="24" />
          </button>
        </li>
        <li>
          <button className="text-white hover:underline" onClick={() => onChangePage("artista")}>
            <SearchIcon width="24" height="24" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

