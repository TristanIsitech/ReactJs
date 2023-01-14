import './Connection.css'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { myAppContext } from './../Store/appContext.js';

function Connection() {
  
  const navigate = useNavigate()
  const context = useContext(myAppContext)

  const setParam = (event) => {
    event.preventDefault()
    context.dispatchUserParam({type:'SET', payload: {id: event.target["id"].value, psw: event.target["psw"].value}})
    navigate('/loading')
  }

  return (
    <form className='connection' onSubmit={setParam}>
      <h2 className='label'>Username</h2>
      <input type="text" placeholder="Enter Username" name="id" required />

      <h2 className='label'>Password</h2>
      <input type="password" placeholder="Enter Password" name="psw" required />

      {context.userParam.isFalse && <h2 className='error'>Identifiant ou mot de passe incorrect !!</h2>}

      <button type='submit'>Login</button>
    </form>
  )
}

export default Connection