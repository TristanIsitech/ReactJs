import './Game.css';
import Card from './Card/Card.js'
import Savage from './Savage/Savage.js'
import { useState, useContext, useEffect } from 'react'
import { myAppContext } from './../Store/appContext.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Game() {
    const context = useContext(myAppContext)
    const navigate = useNavigate()

    const [isAddCard, setIsAddCard] = useState(false)
    const [centerCard, setCenterCard] = useState(null)
    const [isRandomCard, setIsRandomCard] = useState(false)

    useEffect(() => {
        // Test si les données sont chargées ! Ne marche pas !
        if (!context.userInfo) {
            console.log('Donnée non chargée !!')
            navigate('/')
        }

        // Test si l'affichage du bouton d'ajout est true
        if (!isRandomCard) {
            setIsAddCard(false)
        } else {
            const filtered = context.userInfo.pokemons.filter((element) => {
                return element !== null
            })
            if (filtered.length === 6) {
                setIsAddCard(false)
            } else {
                setIsAddCard(true)
            }
        }
    }, [context.userInfo, isRandomCard, navigate])

    const updateTabPokemon = async (tab) => {
        if (!tab) {
            const newTabPokemon = []
            context.userInfo.pokemons.forEach((element, id) => {
                if (element) {
                    newTabPokemon[id] = element.id
                } else {
                    newTabPokemon[id] = null
                }
            });
            const jsonBody = {
                "id": context.userInfo.id,
                "tab": newTabPokemon
            }
            console.log(jsonBody)
            await axios.put("http://localhost:5400/api/addPokemons", jsonBody)
                .catch((err) => {
                    console.log("error : ", err)
                })
        }
        else {
            const newTabPokemon = []
            context.userInfo.pokemons.forEach((element, id) => {
                if (element) {
                    newTabPokemon[id] = element.id
                } else {
                    newTabPokemon[id] = null
                }
            });
            newTabPokemon.splice(newTabPokemon.indexOf(null), 1)
            const jsonBody = {
                "id": context.userInfo.id,
                "tab": [...newTabPokemon, tab.id]
            }
            console.log(jsonBody)
            await axios.put("http://localhost:5400/api/addPokemons", jsonBody)
                .catch((err) => {
                    console.log("error : ", err)
                })
        }
    }

    const positioning = (index) => {
        // retourne le tableau des pokemons sans les null
        const filtered = context.userInfo.pokemons.filter((element) => {
            return element !== null
        })
        // retourne l'element concerner de l'ancien tableau 
        index = filtered.filter((element) => {
            return element.id === context.userInfo.pokemons[index].id
        })
        // trouve la position de l'element concerner dans le tableau filtré
        index = filtered.indexOf(index[0])
        // Détermine la position de la carte dans la main, pour mettre en forme le css 
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
        // Si une carte est au centre et si on est pas deja en train d'en tirer une, on la replace dans la main
        if (!isRandomCard && centerCard) {
            moveCard(7)
        }
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
            setCenterCard(context.userInfo.pokemons[index])
            context.dispatchUserInfo({ type: 'UPDATE_POKEMONS', index: index, card: oldCenterCard })
        } else {
            // = Si on est en train de chosir une carte au hazar
            if (isRandomCard) {
                // On enlève la carte du centre et on met en bdd la main
                setCenterCard(null)
                updateTabPokemon()
                setIsRandomCard(false)
            }
            // = Si on n'est pas en train de choisir une carte 
            else {
                // On replace la carte du centre dans la main
                context.dispatchUserInfo({ type: 'UPDATE_POKEMONS_ADD_CARD', card: centerCard })
                setCenterCard(null)
            }
        }
    }

    const addCard = () => {
        updateTabPokemon(centerCard)
        context.dispatchUserInfo({ type: 'UPDATE_POKEMONS_ADD_CARD', card: centerCard })
        setCenterCard(null)
        setIsRandomCard(false)
    }

    return (
        <div className='game'>
            <Savage getARandomCard={getARandomCard} />
            <div className='hand'>
                {context.userInfo.pokemons.map((pokemon, index) => (
                    pokemon && <Card pokemon={pokemon} key={index} index={index} position={positioning(index)} moveCard={moveCard} />
                ))
                }
                {centerCard && <Card pokemon={centerCard} index={7} position={7} moveCard={moveCard} />}
                {isAddCard && <button className='addCard' onClick={addCard}>+</button>}
            </div>
        </div>
    )
}

export default Game;
