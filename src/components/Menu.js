import React from "react";
import { ReactComponent as HomeIcon } from "../assets/home_logos/profile_pic.svg";
import { ReactComponent as TopIcon } from "../assets/home_logos/trending.svg";
import { ReactComponent as SearchIcon } from "../assets/home_logos/search2.svg";


export function Menu({ onChangePage }) {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-greybar p-4">
      <ul className="flex justify-between items-center">
        <li className="mx-4">
          <button className="text-white hover:underline" onClick={() => onChangePage("index")}>
            <HomeIcon width="40" height="40" />
          </button>
        </li>
        <li className="mx-4">
          <button className="text-white hover:underline" onClick={() => onChangePage("top-100")}>
            <TopIcon width="24" height="24" />
          </button>
        </li>
        <li className="mx-4">
          <button className="text-white hover:underline" onClick={() => onChangePage("search")}>
            <SearchIcon width="24" height="24" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
