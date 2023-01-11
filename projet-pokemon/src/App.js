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
          // {
          //   id: res.data[0].id,
          //   pseudo: res.data[0].pseudo,
          //   champion: res.data[0].champion,
          //   pokemon: [
          //     res.data[0].poke_id1,
          //     res.data[0].poke_id2,
          //     res.data[0].poke_id3,
          //     res.data[0].poke_id4,
          //     res.data[0].poke_id5,
          //     res.data[0].poke_id6
          //   ]
          // })
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
