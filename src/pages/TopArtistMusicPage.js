import React, { useState, useEffect } from "react";
import { topVinteMusicasPorArtista } from "../common/index.js";
import { Menu } from "../components/Menu.js";
import LogoWithText from "../components/toplogo.js";
import musicaLogo from "../assets/musica.png"


export function TopArtistMusicPage({ onChangePage, selectedArtist }) {
    const [periodo, setPeriodo] = useState("sempre");
    const [artista, setArtista] = useState(selectedArtist);
    const [topVinte, setTopVinte] = useState([])
    const [abort, setAbort] = useState(false)

    function handleOnClick(periodo, artista) {
        setAbort(true)
        onChangePeriodo(periodo)
        setTopVinte(topVinteMusicasPorArtista(periodo, artista))
        fetchAlbumArt()
    }

    const onChangePeriodo = (novoPeriodo) => { setPeriodo(novoPeriodo); };

    function fetchAlbumArt() {

        setAbort(false)
        setArtista(selectedArtist);

        const musicas = topVinteMusicasPorArtista(periodo, artista)

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

        async function fetchAndSaveAlbumArts() {
            const result = musicas.map(async e => [...e, await fetchAlbumArt(e[1])])

                Promise.all(result).then((res) => {
                    setTopVinte(res)
                })
            
        }

        fetchAndSaveAlbumArts()

    }

    useEffect(() => {

        fetchAlbumArt()
        // setArtista(selectedArtist);

        // const musicas = topVinteMusicasPorArtista(periodo, artista)

        // const fetchAlbumArt = async (album) => {
        //     try {
        //         const response = await fetch(`https://musicbrainz.org/ws/2/release/?query=release:${encodeURIComponent(album)}&fmt=json`);

        //         if (response.status !== 200) throw "NOT FOUD"
        //         const data = await response.json();
        //         if (data.releases && data.releases.length > 0) {
        //             const releaseId = data.releases[0].id;
        //             const coverResponse = await fetch(`https://coverartarchive.org/release/${releaseId}`);
        //             const coverData = await coverResponse.json();
        //             if (coverData.images && coverData.images.length > 0) {
        //                 return coverData.images[0].image;
        //             }
        //         }
        //     } catch (error) {
        //         // console.error('Error fetching album art:', error);
        //     }
        // };

        // async function fetchAndSaveAlbumArts() {
        //     const result = musicas.map(async e => [...e, await fetchAlbumArt(e[1])])
        //     Promise.all(result).then((res) => {
        //         setTopVinte(res)
        //     })
        // }

        // fetchAndSaveAlbumArts()

    },
        // [selectedArtist]
    );



    return (
        <div className="bg-lightgrey h-dvh w-dvw">
            <LogoWithText />
            <div style={{ paddingTop: "65px" }} ></div>

            <div className="fixed w-full bg-white z-10 text-center bg-lightgrey">
                <p className="text-lg">Top #20:</p>
                <p className="pb-2 text-lighterblue">{periodo}</p>
            </div>

            <ol className="bg-lightgrey" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
                {topVinte.map((ele, index) => <li className="border-2 flex items-center flex-nowrap m-4 shadow-lg">
                    <p className="text-blue font-PressStart2p align-text-middle p-4 w-14">#{index + 1}</p>
                    <div className="mx-5 h-12 w-12 bg-contain" style={{ backgroundImage: `url(${ele[2] ? ele[2] : musicaLogo})` }} />
                    <p className="font-JetbrainsMono font-extrabold align-text-middle text-blue whitespace-nowrap overflow-hidden">{ele[0]}<br /> <span className="text-xxs font-medium align-text-middle text-black">{ele[1]}</span></p>
                </li>)}
            </ol>

            <div className="bg-lightgrey" style={{ paddingTop: "1rem" }}>
                <div className="grid grid-cols-4 gap-2 fixed bottom-0 left-0 w-full mb-16" style={{ paddingBottom: "15px" }}>
                <button onClick={() => onChangePeriodo("4semanas")} className={`px-4 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${ periodo === "4semanas" ? "bg-lighterblue" : "bg-lightgrey" }`}>4 semanas</button>
                <button onClick={() => onChangePeriodo("6meses")} className={`px-4 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${ periodo === "6meses" ? "bg-lighterblue" : "bg-lightgrey" }`}>6 meses</button>
                <button onClick={() => onChangePeriodo("últimoAno")} className={`px-4 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${ periodo === "últimoAno" ? "bg-lighterblue" : "bg-lightgrey" }`}>Último ano</button>
                <button onClick={() => {onChangePeriodo("sempre"); }} className={`px-4 py-2 rounded-none bg-opacity-90 border-2 border-lighterblue ${ periodo === "sempre" ? "bg-lighterblue" : "bg-lightgrey" }`}>Sempre</button>
                </div>
            </div>

            <Menu onChangePage={onChangePage} />
            <div style={{ paddingBottom: "80px" }}></div>
        </div >
    )
}
