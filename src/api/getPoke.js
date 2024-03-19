const url = 'https://pokeapi.co/api/v2/pokemon/'

async function getPoke(input) {
    let text = input.toLowerCase()
    try {
        const response = await fetch(`${url}${text}`);
        if(!response.ok) {
            throw new Error('Error!')
        }
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Algo no funciona!')
    }
}

export default getPoke;