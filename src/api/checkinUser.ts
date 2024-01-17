export async function checkinUser(customerName: string) {
    try {
        const response = await fetch(`http://localhost:8080/check/checkInValidation/2cdf13e7-3dc0-49e8-963a-949ae012df9a`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ customerName }),
        });
        const data = await response.json();
        return data; // Retorna a resposta completa da API após a atualização
    } catch (error) {
        console.error('Error during check-in update:', error);
        return {}; // Retorna um objeto vazio em caso de erro
    }
}

export async function fetchCheckinInfo(checkinId: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:8080/check/showCheck/${checkinId}`);
        if (response.ok) {
            const data = await response.json();
            return data; // Retorna os dados do check-in se a resposta for bem-sucedida
        } else {
            throw new Error('Failed to fetch check-in data');
        }
    } catch (error) {
        console.error('Error fetching check-in data:', error);
        throw error;
    }
}