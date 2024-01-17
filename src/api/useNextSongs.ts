async function showNextSongs() {
    try {
        const response = await fetch(`http://localhost:8080/music/showNextSongs/2cdf13e7-3dc0-49e8-963a-949ae012df9a`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching next songs:', error);
        return [];
    }
}

export default showNextSongs;
