import './Connection.css'
import React, { useContext } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { myAppContext } from './../Store/appContext.js';
import Login from './Login/Login'
import Create from './Create/Create'

function Connection() {

  const navigate = useNavigate()
  const context = useContext(myAppContext)

  const setParam = (payload) => {
    console.log(payload)
    context.dispatchUserParam({ type: 'SET', payload: payload })
    navigate('/loading')
  }

  return (
    <div className='connection'>
      <div className='buttoncontainer'>
        <Link to="/"><button>Login</button></Link>
        <Link to="/createAccount"><button>Create a account</button></Link>
      </div>
      <Routes>
        <Route path="*" element={<Login setParam={setParam} />} />
        <Route path="/createAccount" element={<Create setParam={setParam} />} />
      </Routes>
    </div>
  )
}

export default Connection