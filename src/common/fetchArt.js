export const fetchArt = async (tipoDeImagem, qualImagem) => {


    try {
        const response = await fetch(``, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: `${tipoDeImagem}`,
                name: qualImagem,
                auth: "BYTES4FUTURE #7"
            })
        });

        if (response.status === 200) {
            const body = await response.json()
            return body.imagePath
        }
    } catch (error) {
        // console.error('Error fetching album art:', error);
    }
};