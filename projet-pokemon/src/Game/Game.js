import './Game.css';
import Card from './Card/Card.js'
import Savage from './Savage/Savage.js'
import { useState } from 'react'
import axios from 'axios'

function Game(props) {
    const [centerCard, setCenterCard] = useState(null)
    const [pokemonTab, setPokemonTab] = useState(props.userInfo.pokemons)
    const [isRandomCard, setIsRandomCard] = useState(false)

    const positioning = (index) => {
        const filtered = pokemonTab.filter((element) => {
            return element !== null
        })
        switch (filtered.length) {
            case 1:
                return 0
            case 2:
                if (index === 0) {
                    return 3
                } else {
                    return 4
                }
            case 3:
                switch (index) {
                    case 0: return 3
                    case 1: return 0
                    default: return 4
                }
            case 4:
                switch (index) {
                    case 0: return 2
                    case 1: return 3
                    case 2: return 4
                    default: return 5
                }
            case 5:
                switch (index) {
                    case 0: return 2
                    case 1: return 3
                    case 2: return 0
                    case 3: return 4
                    default: return 5
                }
            case 6:
                switch (index) {
                    case 0: return 1
                    case 1: return 2
                    case 2: return 3
                    case 3: return 4
                    case 4: return 5
                    default: return 6
                }
            default:
        }
    }

    const getARandomCard = () => {
        axios.get("http://localhost:5400/api/randomPokemon")
            .then((res) => {
                setCenterCard(res.data)
            })
            .catch((err) => {
                console.log("error : ", err)
            })
        setIsRandomCard(true)
    }

    const moveCard = (index) => {
        if (index !== 7) {
            if (isRandomCard) {
                setPokemonTab((oldPokemonTab) => {
                    return [...props.userInfo.pokemons.filter((pokemon) => pokemon.id !== oldPokemonTab[index].id), centerCard]
                })
                setCenterCard(pokemonTab[index])
            } 
            else {
                setCenterCard(pokemonTab[index])
                setPokemonTab((oldPokemonTab) => {
                    return props.userInfo.pokemons.filter((pokemon) => pokemon.id !== oldPokemonTab[index].id)
                })
            }

        } else {
            if (isRandomCard) {
                setCenterCard(null)
            }
            else {
                setPokemonTab((oldPokemonTab) => {
                    return [...oldPokemonTab, centerCard]
                })
                setCenterCard(null)
            }
        }
    }

    return (
        <div className='game'>
            <Savage getARandomCard={getARandomCard} />
            <div className='hand'>
                {pokemonTab.map((pokemon, index) => (
                    pokemon && <Card pokemon={pokemon} key={index} index={index} position={positioning(index)} moveCard={moveCard} />
                ))
                }
                {centerCard && <Card pokemon={centerCard} index={7} position={7} moveCard={moveCard} />}
            </div>
        </div>
    )
}

export default Game;
