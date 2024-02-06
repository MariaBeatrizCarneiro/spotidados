// Menu.js
import React from "react";

export default function Menu({ onChangePage }) {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between items-center">
        <li><button className="text-white hover:underline" onClick={() => onChangePage("index")}>Home</button></li>
        <li><button className="text-white hover:underline" onClick={() => onChangePage("top-artista")}>Top Artistas</button></li>
        <li><button className="text-white hover:underline" onClick={() => onChangePage("top-musica")}>Top Músicas</button></li>
        <li><button className="text-white hover:underline" onClick={() => onChangePage("artista")}>Artista</button></li>
        <li><button className="text-white hover:underline" onClick={() => onChangePage("top-20")}>Top 20</button></li>
      </ul>
    </nav>
  );
}
