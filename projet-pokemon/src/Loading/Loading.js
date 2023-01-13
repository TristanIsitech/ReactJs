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
    }, [context])

    useEffect(() => {
        if (context.userInfo) {
            navigate('/game')
        }
    })

    return (
        <div className='loading'>
            <div className='loader'>IN LOADING
                <p className='jump1'>.</p>
                <p className='jump2'>.</p>
                <p className='jump3'>.</p>
            </div>
            <div className='pulse' />
        </div>
    )
}

export default App;
