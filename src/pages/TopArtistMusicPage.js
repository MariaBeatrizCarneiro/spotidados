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
        <div className="page bg-lightgrey h-dvh w-dvw">
            <LogoWithText />
            <div className="fixed w-full bg-white z-10 text-center">
                <p className="text-lg">Top #20:</p>
                <p>{periodo}</p>
            </div>

            <ol className="pt-16 bg-lightgrey">
                {topVinte.map((ele, index) => <li className="border-2 flex items-center flex-nowrap m-4 shadow-lg">
                    <p className="text-blue font-PressStart2p align-text-middle p-4 w-14">#{index + 1}</p>
                    <div className="mx-5 h-12 w-12 bg-contain" style={{ backgroundImage: `url(${ele[2] ? ele[2] : musicaLogo})` }} />
                    <p className="font-JetbrainsMono font-extrabold align-text-middle text-blue whitespace-nowrap overflow-hidden">{ele[0]}<br /> <span className="text-xxs font-medium align-text-middle text-black">{ele[1]}</span></p>
                </li>)}
            </ol>


            <div style={{ paddingTop: "1rem" }}>
                <div className="grid grid-cols-4 gap-2 fixed bottom-0 left-0 w-full mb-16">
                    <button onClick={() => handleOnClick("4semanas", artista)} className={`px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue ${periodo === "4semanas" ? "bg-blue-600" : ""}`}>4 semanas</button>
                    <button onClick={() => handleOnClick("6meses")} className={`px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue ${periodo === "6meses" ? "bg-blue-600" : ""}`}>6 meses</button>
                    <button onClick={() => handleOnClick("últimoAno")} className={`px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue ${periodo === "últimoAno" ? "bg-blue-600" : ""}`}>Último ano</button>
                    <button onClick={() => handleOnClick("sempre")} className={`px-4 py-2 rounded-none bg-lightgrey bg-opacity-80 border-2 border-lighterblue hover:bg-lighterblue ${periodo === "sempre" ? "bg-blue-600" : ""}`}>Sempre</button>
                </div>
            </div>

            <Menu onChangePage={onChangePage} />
            <div className="mb-16"></div>
        </div >
    )
}
