import './App.css'
import Game from './Game/Game.js'
import Connexion from './Connexion/Connection'
import Loading from './Loading/Loading'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </ div>
  )
}

export default App;
