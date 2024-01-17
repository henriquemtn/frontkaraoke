import { useState, useEffect } from 'react';

interface Music {
    musicId: string;
    title: string;
    artist: string;
    // ... outras propriedades
}

export function useShowMusic() {
    const [musicData, setMusicData] = useState<Music[]>([]);

    useEffect(() => {
        async function fetchMusicData() {
            try {
                const response = await fetch('http://localhost:8080/music/showAllSongs');
                const data = await response.json();
                setMusicData(data);
            } catch (error) {
                console.error('Error fetching music data:', error);
                setMusicData([]);
            }
        }

        fetchMusicData();
    }, []);

    return musicData;
}

export async function addToNextSong(checkinId: string, musicId: string): Promise<boolean> {
    try {
        const response = await fetch(`http://localhost:8080/music/addToNextSong/2cdf13e7-3dc0-49e8-963a-949ae012df9a/${checkinId}/${musicId}`, {
            method: 'PUT',
        });

        if (response.ok) {
            return true;
        } else {
            console.error('Failed to add music to next song.');
            return false;
        }
    } catch (error) {
        console.error('Error adding music to next song:', error);
        return false;
    }
}

export async function logoutUser(checkinId: string): Promise<boolean> {
    try {
        const response = await fetch(`http://localhost:8080/check/checkOut/${checkinId}`, {
            method: 'PUT',
        });

        if (response.ok) {
            // Limpar o checkinId salvo no localStorage
            localStorage.removeItem('checkinId');
            
            console.log('Music added to previous song successfully.');
            return true;
        } else {
            console.error('Failed to add music to previous song.');
            return false;
        }
    } catch (error) {
        console.error('Error adding music to previous song:', error);
        return false;
    }
}
