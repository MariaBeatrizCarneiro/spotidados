import React, { useState, useEffect } from "react";
import { topVinteMusicasPorArtista } from "../common/index.js";
import { Menu } from "../components/Menu.js";
import LogoWithText from "../components/toplogo.js";
import musicaLogo from "../assets/musica.png"


export function TopArtistMusicPage({ onChangePage, selectedArtist }) {
    const [topVinte, setTopVinte] = useState({
        data: [],
        period: "sempre"
    })

    const fetchAlbumArt = async (album) => {
        try {
            const response = await fetch(`https://musicbrainz.org/ws/2/release/?query=release:${encodeURIComponent(album)}&fmt=json`);

            if (response.status !== 200) throw "NOT FOUD"
            const data = await response.json();
            if (data.releases && data.releases.length > 0) {
                const releaseId = data.releases[0].id;
                const coverResponse = await fetch(`https://coverartarchive.org/release/${releaseId}`);
                const coverData = await coverResponse.json();
                if (coverData.images && coverData.images.length > 0) {
                    return coverData.images[0].image;
                }
            }
        } catch (error) {
            // console.error('Error fetching album art:', error);
        }
    };

    async function handleAlbumArt(periodo) {
        const data = topVinteMusicasPorArtista(periodo, selectedArtist)
        const dataWithImages = data.map(async e => [...e, await fetchAlbumArt(e[1])])
        let cenas
        await Promise.all(dataWithImages).then((res) => cenas = { data: res, period: periodo })
        console.log(cenas)
        setTopVinte(cenas)
    }

    useEffect(() => {
        handleAlbumArt("sempre")
    }, [])

    return (
        <div className="bg-lightgrey h-dvh w-dvw">
            <LogoWithText />
            <div style={{ paddingTop: "50px" }} ></div>

            <div className="fixed w-full bg-white z-10 text-center bg-lightgrey">

                <p className="text-lg font-PressStart2p">Top #20</p>
                <p className="text-xxs font-PressStart2p pb-2 text-green">{topVinte.period}</p>
            </div>

            <ol className="bg-lightgrey" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                {topVinte.data.map((ele, index) => <li className="border-2 flex items-center flex-nowrap m-4 shadow-lg">
                    <p className="text-blue font-PressStart2p align-text-middle p-4 w-14">#{index + 1}</p>
                    <div className="mx-5 h-12 w-12 bg-cover shrink-0" style={{ backgroundImage: `url(${ele[2] ? ele[2] : musicaLogo})` }} />
                    <p className="font-JetbrainsMono font-extrabold align-text-middle text-blue whitespace-nowrap overflow-hidden">{ele[0]}<br /> <span className="text-xxs font-medium align-text-middle text-black">{ele[1]}</span></p>
                </li>)}
            </ol>

            <div className="bg-lightgrey" style={{ paddingTop: "1rem" }}>
                <div className="bg-lightgrey grid grid-cols-4 gap-1 fixed bottom-0 left-0 right-0 w-full mb-16" style={{ paddingBottom: "15px" }}>
                    <button onClick={() => handleAlbumArt("4semanas")} className={`font-JetbrainsMono font-bold text-xs px-1 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${topVinte.period === "4semanas" ? "bg-lighterblue" : "bg-lightgrey"}`}>4 semanas</button>
                    <button onClick={() => handleAlbumArt("6meses")} className={`font-JetbrainsMono font-bold text-xs px-1 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${topVinte.period === "6meses" ? "bg-lighterblue" : "bg-lightgrey"}`}>6 meses</button>
                    <button onClick={() => handleAlbumArt("últimoAno")} className={`font-JetbrainsMono font-bold text-xs px-1 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${topVinte.period === "últimoAno" ? "bg-lighterblue" : "bg-lightgrey"}`}>Último ano</button>
                    <button onClick={() => handleAlbumArt("sempre")} className={`font-JetbrainsMono font-bold text-xs px-1 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${topVinte.period === "sempre" ? "bg-lighterblue" : "bg-lightgrey"}`}>Sempre</button>
                </div>
            </div>

            <Menu onChangePage={onChangePage} />
            <div style={{ paddingBottom: "80px" }}></div>
        </div >
    )
}
