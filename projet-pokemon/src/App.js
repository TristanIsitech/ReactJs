import './App.css'
import Game from './Game/Game.js'
import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

function App() {
  const userInfoReducer = (state, action) => {
    switch (action.type) {
      case 'INITIALISE':
        console.log('INITIALISE')
        return action.payload
      case 'UPDATE_POKEMONS':
        console.log('UPDATE_POKEMONS')
        state.pokemons.map(item => console.log(item))
        state.pokemons.splice(action.index, 1)
        return { ...state, pokemons: [...state.pokemons, action.card]}
      case 'UPDATE_POKEMONS_ADD_CARD':
        console.log('UPDATE_POKEMONS_ADD_CARD')
        state.pokemons.map(item => console.log(item))
        state.pokemons.splice(state.pokemons.indexOf(null), 1)
        return {...state, pokemons: [...state.pokemons, action.card]}
      case 'UPDATE_BDD':
        console.log('UPDATE_BDD')
        updateTabPokemon(action.payload)
        return state
      default:
        console.log('Aucune action effectuée || action : ' + action.type)
        return state
    }
  }

  const [userInfo, dispatchUserInfo] = useReducer(userInfoReducer, null)

  useEffect(() => {
    axios.get("http://localhost:5400/api/connectUser?id=tristanL&psw=test")
      .then((res) => {
        dispatchUserInfo({ type: 'INITIALISE', payload: res.data })
      })
      .catch((err) => {
        console.log("error : ", err)
      })
  }, [])

  const updateTabPokemon = async (tabPokemon) => {
    const jsonBody = {
      "id": userInfo.id,
      "tab": tabPokemon
    }
    console.log(jsonBody)
    await axios.put("http://localhost:5400/api/addPokemons", jsonBody)
      .catch((err) => {
        console.log("error : ", err)
      })
  }

  return (
    <div className='app'>
      {userInfo && <Game userInfo={userInfo} dispatchUserInfo={dispatchUserInfo}></Game>}
    </ div>
  )
}

export default App;
