export async function closingHouse() {
    try {
        const response = await fetch(`http://localhost:8080/house/closing/2cdf13e7-3dc0-49e8-963a-949ae012df9a`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error during check-in update:', error);
        return {}; // Retorna um objeto vazio em caso de erro
    }
}