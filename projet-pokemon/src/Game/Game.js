import './Game.css';
import Card from './Card/Card.js'
import Savage from './Savage/Savage.js'
import { useState } from 'react'
import axios from 'axios'

function Game(props) {
    const [centerCard, setCenterCard] = useState(null)
    // const [pokemonTab, setPokemonTab] = useState(props.userInfo.pokemons)
    const [isRandomCard, setIsRandomCard] = useState(false)

    const dispatchUserInfo = (action) => {
        props.dispatchUserInfo(action)
    }

    // const updateTabPokemon = () => {
    //     // !! A faire fonctionner, éviter les requêtes sur l'api quand aucun changement n'a été effectué
    //     if (pokemonTab !== props.userInfo.pokemons) {
    //         props.updateTabPokemon([pokemonTab[0].id, pokemonTab[1].id, pokemonTab[2].id, pokemonTab[3].id, pokemonTab[4].id, pokemonTab[5].id])
    //     }
    // }

    const positioning = (index) => {
        const filtered = props.userInfo.pokemons.filter((element) => {
            return element !== null
        })
        console.log(filtered)
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
        // == Si la carte cliquée n'est pas au centre
        if (index !== 7) {
            // On echange la carte du centre avec celle selectionnée dans la main
            const oldCenterCard = centerCard
            setCenterCard(props.userInfo.pokemons[index])
            dispatchUserInfo({ type: 'UPDATE_POKEMONS', index: index, card: oldCenterCard })
        } else {
            // = Si on est en train de chosir une carte au hazar
            // if (isRandomCard) {
            //     // On enlève la carte du centre et on met en bdd la main
            //     setCenterCard(null)
            //     // updateTabPokemon()
            //     setIsRandomCard(false)
            // }
            // = Si on n'est pas en train de choisir une carte 
            // else {
                // On replace la carte du centre dans la main
                dispatchUserInfo({ type: 'UPDATE_POKEMONS_ADD_CARD', card: centerCard })
                setCenterCard(null)
            // }
        }
    }

    return (
        <div className='game'>
            <Savage getARandomCard={getARandomCard} />
            <div className='hand'>
                {props.userInfo.pokemons.map((pokemon, index) => (
                    pokemon && <Card pokemon={pokemon} key={index} index={index} position={positioning(index)} moveCard={moveCard} />
                ))
                }
                {centerCard && <Card pokemon={centerCard} index={7} position={7} moveCard={moveCard} />}
            </div>
        </div>
    )
}

export default Game;
