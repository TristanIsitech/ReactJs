import './App.css'
import Game from './Game/Game.js'
import Connexion from './Connection/Connection'
import Help from './Help/Help'
import Loading from './Loading/Loading'
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useContext } from 'react'
import { myAppContext } from './Store/appContext.js';

function App() {
  const context = useContext(myAppContext)
  const location = useLocation()

  // Permet d'utiliser le bouton 'Help' pour revenir a la page de jeu (ou connction si non connecter)
  const buttonHelpBack = () => {
    if (location.pathname === '/help') {
      return '/game'
    } else {
      return '/help'
    }
  }

  return (
    <div className='app'>
      <Link to={buttonHelpBack()}><button className='help_button'>?</button></Link>
      <Routes>
        <Route path="/*" element={<Connexion />} />
        <Route path="/loading" element={<Loading />} />
        {context.userInfo ? <Route path="/game/*" element={<Game />} /> : <Route path="/game/*" element={<Connexion />} />}
        <Route path="/help" element={<Help />} />
      </Routes>
    </ div>
  )
}

export default App;
