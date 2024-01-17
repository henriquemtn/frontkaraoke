import { useState } from "react";
import Modal from "../Modal";
import { useOpenKaraokeModal } from "../../hooks/useOpenKaraoke";
import Lista from "../Lista";
import { useNavigate } from 'react-router-dom'
import useHouseData from "../../api/useHouseData";

const OpenKaraokeModal = () => {
    const houseData: any = useHouseData();
    const karaokeModal = useOpenKaraokeModal();
    const navigate = useNavigate();
    const senha = 4193;
    const nextSongsCount = houseData?.nextSongs.length || 0;

    const [isLoading] = useState(false);

    const fetchNavigate = () => {
        navigate("/karaoke/8ef92bb0-a65b-46a1-bf7d-2bf4cd3c8419");
    }

    const bodyContent = (
        <div className="flex flex-row gap-4">
            <div className="w-2/3 p-4 rounded-md bg-[#373737] text-white">
                <div>
                    <h1>
                        Na fila: {nextSongsCount}
                    </h1>
                </div>
                {houseData &&
                    houseData.nextSongs.map((song: any, index: any) => (
                        <Lista
                            key={song.musicId}
                            id={`#${index + 1}`}
                            label={song.title}
                            music={song.album}
                            artist={song.artist}
                        />
                    ))}

            </div>
            <div className="w-1/3 p-4 rounded-md bg-gray-200 h-[300px] overflow-y-auto">
                <h1>
                    Dentro do bar
                </h1>
                <Lista
                    id="#01"
                    label="Henrique Silveira"
                />
            </div>
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={karaokeModal.isOpen}
            title={`Senha: ${senha}`}
            actionLabel="Ir para o Karaoke"
            onClose={karaokeModal.onClose}
            onSubmit={fetchNavigate}
            body={bodyContent}
            footer={footerContent}
        />
    );
}

export default OpenKaraokeModal;