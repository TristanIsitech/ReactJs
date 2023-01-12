import './App.css'
import Game from './Game/Game.js'
import React, { useEffect, useReducer, useContext } from 'react'
import { myAppContext } from './Store/appContext';
import axios from 'axios'

function App() {

  const context = useContext(myAppContext)

  useEffect(() => {
    axios.get("http://localhost:5400/api/connectUser?id=tristanL&psw=test")
      .then((res) => {
        context.dispatchUserInfo({ type: 'INITIALISE', payload: res.data })
      })
      .catch((err) => {
        console.log("error : ", err)
      })
  }, [])

  // const updateTabPokemon = async (tabPokemon) => {
  //   const jsonBody = {
  //     "id": userInfo.id,
  //     "tab": tabPokemon
  //   }
  //   console.log(jsonBody)
  //   await axios.put("http://localhost:5400/api/addPokemons", jsonBody)
  //     .catch((err) => {
  //       console.log("error : ", err)
  //     })
  // }

  return (
    <div className='app'>
      {context.userInfo && <Game userInfo={context.userInfo} dispatchUserInfo={context.dispatchUserInfo}></Game>}
    </ div>
  )
}

export default App;
