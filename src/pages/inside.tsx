import { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import NextSong from '../components/NextSong';
import OtherSong from '../components/OtherSongs';
import Button from '../components/Button';
import Music from '../components/Music';
import showNextSongs from '../api/useNextSongs';
import { useShowMusic, addToNextSong, logoutUser } from '../api/useShowMusic';
import { fetchCheckinInfo } from '../api/checkinUser';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface Song {
    title: string;
    artist: string;
    customerName: string;
}

export default function Inside() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [nextSongs, setNextSongs] = useState<Song[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [customerName, setCustomerName] = useState('');
    const musicData = useShowMusic();
    const checkinId = localStorage.getItem('checkinId');
    const navigate = useNavigate();

    // Função para buscar as próximas músicas
    const fetchData = async () => {
        const songs = await showNextSongs();
        setNextSongs(songs);
    };

    // Atualiza as músicas quando o componente é montado
    useEffect(() => {
        fetchData();
    }, []);

    // Procurar próximas músicas
    useEffect(() => {
        async function fetchData() {
            const songs = await showNextSongs();
            setNextSongs(songs);
        }

        if (isDropdownOpen) {
            fetchData();
        }
    }, [isDropdownOpen]);

    useEffect(() => {
        async function fetchCheckinData() {
            try {
                const checkinId = localStorage.getItem('checkinId');
                if (checkinId) {
                    const checkinInfo = await fetchCheckinInfo(checkinId);
                    setCustomerName(checkinInfo.customerName);
                }
            } catch (error) {
                console.error('Error fetching check-in data:', error);
                // Lidar com erros, se necessário
            }
        }

        fetchCheckinData();
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const transition = useTransition(isDropdownOpen, {
        from: { x: 0, y: 100, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 0, y: 100, opacity: 0 },
    });

    // Filtrar músicas conforme o usuário digita
    const filteredMusic = musicData.filter(
        (music) =>
            music.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            music.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAdicionarMusica = async (musicId: string) => {
        if (checkinId) {
            const added = await addToNextSong(checkinId, musicId);
            if (added) {
                toast.success('Música adicionada com sucesso!');
                fetchData();
                // Fechar o dropdown
                setIsDropdownOpen(false);
                // Faça qualquer ação adicional, se necessário
            } else {
                toast.error('Falha ao adicionar música.');
            }
        } else {
            console.error('Não foi possível obter o checkId.');
        }
    };

    const handleLogout = async () => {
        const checkinId = localStorage.getItem('checkinId');

        if (checkinId) {
            const loggedOut = await logoutUser(checkinId);

            if (loggedOut) {
                // Limpar o checkinId salvo no localStorage após o logout
                localStorage.removeItem('checkinId');

                // Redirecionar para a página de checkin após o logout
                navigate("/checkin/8ef92bb0-a65b-46a1-bf7d-2bf4cd3c8419");
            } else {
                console.error('Failed to log out.');
            }
        } else {
            console.error('CheckinId not found.');
        }
    };

    return (
        <>
            <div className='p-4 flex flex-col min-h-screen bg-[#111118]'>
                <div className='flex justify-between w-full py-4 text-white font-medium'>
                    <h1>Olá, {customerName}👋</h1>
                    <div onClick={handleLogout}>
                        <h1>Sair</h1>
                    </div>
                </div>
                {nextSongs.length > 0 ? (
                    <>
                        <NextSong
                            music={nextSongs[0]?.title}
                            artist={nextSongs[0]?.artist}
                            usuario={`${nextSongs[0]?.customerName} está cantando`}
                        />
                        {nextSongs.slice(1).map((song, index) => (
                            <OtherSong
                                key={index}
                                music={song?.title}
                                artist={song?.artist}
                                usuario={song?.customerName}
                            />
                        ))}
                    </>
                ) : (
                    <div className='text-white font-medium'>Nenhuma música ainda na lista!</div>
                )}

                <div className='flex fixed bottom-0 left-0 p-4 w-full'>
                    <Button
                        outline
                        color='roxo'
                        label='Adicionar Música'
                        onClick={toggleDropdown}
                    />
                </div>
                {/* ... */}
                {isDropdownOpen &&
                    transition((style, item) =>
                        item && (
                            <animated.div
                                style={style}
                                className="fixed top-0 left-0 w-full h-full flex flex-col bg-[#111118] rounded shadow-lg z-10"
                            >
                                <div className='flex items-end justify-end w-full px-8 py-2'>
                                    <div className='' onClick={toggleDropdown}>
                                        <h1 className='text-white font-medium'>x</h1>
                                    </div>
                                </div>
                                <div className="px-8 pt-4">
                                    <div className="flex gap-4 flex-col justify-center items-center text-white">
                                        <div className="flex flex-row justify-around w-full font-bold">
                                            <h1>BUSCAR MÚSICA</h1>
                                            <h1 className="text-[#424262]">PLAYLISTS</h1>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Digite o nome da música, artista.."
                                            className="w-full h-[34px] p-3 text-white bg-[#424262] rounded-md"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                    <div className="pt-4">
                                        {filteredMusic.length > 0 ? (
                                            filteredMusic.map((music) => (
                                                <Music
                                                    key={music.musicId}
                                                    title={music.title}
                                                    artist={music.artist}
                                                    onclick={() => handleAdicionarMusica(music.musicId)}
                                                />
                                            ))
                                        ) : (
                                            <div className='text-white font-medium'>
                                                Nenhuma música encontrada!
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </animated.div>
                        )
                    )
                }
            </div>
        </>
    )
}
