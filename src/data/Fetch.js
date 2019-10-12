export function getPokemonList() {
  const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50';
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.results;
    });
}

export function getPokemonCharacteristicsList(pokedata) {
  for (let i = 0; i < pokedata.length; i++) {
    const url = pokedata;
    return fetch(url)
      .then(response => response.json())
      .then(response2 => {
        return response2;
      });
  }
}