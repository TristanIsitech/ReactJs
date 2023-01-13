import React from 'react'
import './Connection.css'

function Connection() {
  return (
    <div className='connection'>
      <h2 className='label'>Username</h2>
      <input type="text" placeholder="Enter Username" name="uname" required />

      <h2 className='label'>Password</h2>
      <input type="password" placeholder="Enter Password" name="psw" required />

      <button type="submit">Login</button>
    </div>
  )
}

export default Connection