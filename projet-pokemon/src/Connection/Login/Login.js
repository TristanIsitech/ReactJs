import React, { useContext } from 'react'
import { myAppContext } from './../../Store/appContext.js';

function Login(props) {

    const context = useContext(myAppContext)

    const setParam = (event) => {
        event.preventDefault()
        props.setParam(
            {
                id: event.target["id"].value,
                psw: event.target["psw"].value,
                create: false
            }
        )
    }

    return (
        <form name="login" onSubmit={setParam}>
            <h2 className='label'>Identifiant</h2>
            <input type="text" placeholder="Identifiant" name="id" required />

            <h2 className='label'>Password</h2>
            <input type="password" placeholder="Enter Password" name="psw" required />

            {context.userParam.isFalse && <h2 className='error'>Identifiant ou mot de passe incorrect !!</h2>}

            <button type='submit'>Login</button>
        </form>
    )
}

export default Login