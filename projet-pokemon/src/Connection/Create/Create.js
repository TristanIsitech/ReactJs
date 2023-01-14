import React, { useContext } from 'react'
import { myAppContext } from './../../Store/appContext.js';

function Create(props) {

    const context = useContext(myAppContext)

    const setParam = (event) => {
        event.preventDefault()
        props.setParam(
            {
                pseudo: event.target["pseudo"].value,
                id: event.target["id"].value,
                psw: event.target["psw"].value,
                psw_conf: event.target["psw_conf"].value,
                create: true
            }
        )
    }

    return (
        <form name="create" onSubmit={setParam}>
            <h2 className='label'>pseudo</h2>
            <input type="text" placeholder="Pseudo" name="pseudo" required />

            <h2 className='label'>Identifiant</h2>
            <input type="text" placeholder="Identifiant" name="id" required />

            <h2 className='label'>Password</h2>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <h2 className='label'>Password confirmation</h2>
            <input type="password" placeholder="Password confirmation" name="psw_conf" required />

            {context.userParam.isFalse && <h2 className='error'>Le mot de passe doit être le même que la confirmation !!</h2>}

            <button type='submit'>Login</button>
        </form>
    )
}

export default Create