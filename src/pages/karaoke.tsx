import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import NextSong from "../components/NextSong";
import useNextSongs from "../api/useNextSongs";
import BelowKaraoke from "../components/BelowKaraoke";
import { previousSong } from "../api/previousSong";

interface Song {
    musicId: string;
    title: string;
    musicGenre: string;
    musicTag: string;
    artist: string;
    album: string;
    link: string;
    runningTime: string;
    customerName: string;
    checkId: string;
}

export default function Karaoke() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [nextSongs, setNextSongs] = useState<Song[]>([]);

    useEffect(() => {
        async function fetchNextSongs() {
            const songs = await useNextSongs();
            setNextSongs(songs || []);;
        }

        fetchNextSongs();
    }, []);

    const opts = {
        height: '900px',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const previousVideo = () => {
        const previousIndex = (currentVideoIndex - 1 + nextSongs.length) % nextSongs.length;
        setCurrentVideoIndex(previousIndex);
    };

    const handlePreviousSong = async () => {
        if (nextSongs.length > 0) {
            const { checkId } = nextSongs[0];
            await previousSong(checkId);
        }
        previousVideo();
    };

    const onEnd = () => {
        handlePreviousSong();
        // Recarrega a página após o término da música
        setTimeout(() => {
            window.location.reload();
        }, 2000); // Espera 2 segundos antes de recarregar a página
    };

    const currentVideoId = nextSongs[currentVideoIndex]?.link || "";

    return (
        <div className="bg-[#111118] min-h-screen text-white">
            <div className="flex flex-col justify-center">
                <YouTube videoId={currentVideoId} opts={opts} onEnd={onEnd} />
            </div>
            <div className="flex gap-5 p-2">
                {nextSongs.length > 0 ? (
                    <>
                        <div className="w-1/4">
                            <NextSong
                                music={nextSongs[0]?.title}
                                artist={nextSongs[0]?.artist}
                                usuario={`${nextSongs[0]?.customerName} está cantando`}
                            />
                        </div>
                        {nextSongs.slice(1).map((song, index) => (
                            <div className="w-1/4">
                                <BelowKaraoke
                                    key={index}
                                    music={song?.title}
                                    artist={song?.artist}
                                    usuario={song?.customerName}
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    <div className='text-white font-medium'>Nenhuma música ainda na lista!</div>
                )}
            </div>
        </div>
    )
}