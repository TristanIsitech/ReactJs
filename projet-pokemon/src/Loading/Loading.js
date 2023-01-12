import './Loading.css'
import React, { useContext, useEffect } from 'react'
import { myAppContext } from './../Store/appContext.js';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function App() {
    const context = useContext(myAppContext)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5400/api/connectUser?id=tristanL&psw=test")
            .then((res) => {
                context.dispatchUserInfo({ type: 'INITIALISE', payload: res.data })
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }, [])

    useEffect(() => {
        if(context.userInfo){
            navigate('/game')
        }
    })

    return (
        <div className='loading'>
            <p>IN LOADING</p>
        </div>
    )
}

export default App;
