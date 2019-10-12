import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { getPokemonList, getPokemonCharacteristicsList } from './data/Fetch';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokedex: [],
      pokeData: [],
      pokemonName: ''
    }
    this.searchPokemon = this.searchPokemon.bind(this);
  }
  
  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    getPokemonList()
      .then(pokemons => {
        pokemons = pokemons.slice(0, 50)
        this.setState({
          pokeData: pokemons
        })
        const pokedata= this.state.pokeData;
        for (let i = 0; i < pokemons.length; i++) {
          getPokemonCharacteristicsList(pokedata[i].url)
          .then(response2 =>{
              const pokemonData = {
                name: response2.name,
                image: response2.sprites.front_shiny,
                types: response2.types,
                id: response2.id
              }
              let pokemonCharacteristics = this.state.pokedex;
              pokemonCharacteristics.push(pokemonData);
              this.setState({
                pokedex: pokemonCharacteristics
              });
            });
        };
      })
  }

  searchPokemon(event) {
    const pokemonName = event.currentTarget.value.toLowerCase();
    this.setState({
      pokemonName: pokemonName
    })

  }
  render() {
    return (
      <div className="App">
      
        <div className="ear ear--left"></div>
        <div className="ear ear--right"></div>
        <div className="cheek cheek--left"></div>
        <div className="cheek cheek--right"></div>
        <Home pokedex={this.state.pokedex} searchPokemon={this.searchPokemon}
          pokemonName={this.state.pokemonName} />
      </div>
    );
  }
}

export default App;
