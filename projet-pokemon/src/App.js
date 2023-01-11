import './App.css'
import Game from './Game/Game.js'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:5400/api/connectUser?id=tristanL&psw=test")
      .then((res) => {
        setUserInfo(res.data)
      })
      .catch((err) => {
        console.log("error : ", err)
      })
  }, [])

  return (
    <div className='app'>
      {userInfo && <Game userInfo={userInfo}></Game>}
    </ div>
  )
}

export default App;
