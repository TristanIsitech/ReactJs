import './App.css'
import Game from './Game/Game.js'
import Connexion from './Connection/Connection'
import Help from './Help/Help'
import Loading from './Loading/Loading'
import { Routes, Route, Link } from 'react-router-dom';
import { useContext } from 'react'
import { myAppContext } from './Store/appContext.js';

function App() {
  const context = useContext(myAppContext)

  return (
    <div className='app'>
      <Link to="/help" ><button className='help_button'>?</button></Link>
      <Routes>
        <Route path="/" element={<Connexion />} />
        {context.userInfo ? <Route path="/game" element={<Game />} /> : <Route path="/game" element={<Loading />} />}
        <Route path="/help" element={<Help />} />
      </Routes>
    </ div>
  )
}

export default App;
