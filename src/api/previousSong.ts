export async function previousSong(checkId: string,) {
    try {
        const response = await fetch(`http://localhost:8080/music/addToPreviousSong/2cdf13e7-3dc0-49e8-963a-949ae012df9a/${checkId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data; // Retorna a resposta completa da API após a atualização
    } catch (error) {
        console.error('Error during check-in update:', error);
        return {}; // Retorna um objeto vazio em caso de erro
    }
}