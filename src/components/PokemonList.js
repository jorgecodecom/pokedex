
import React from 'react';
import PokemonItem from './PokemonItem';

class PokemonList extends React.Component {
    render() {

        return (
            <ul className="pokemon__list">
                {this.props.pokedex
                    .filter(item => {
                        return item.name.toLowerCase().includes(this.props.pokemonName);
                    })
                    .sort((x, y) => x.id - y.id)
                    .map((item) => {
                        return (
                            <li className="pokemon__item" key={item.id}>
                                <PokemonItem item={item} />
                            </li>
                        );
                    })}
            </ul>
        );

    }
}

export default PokemonList;
