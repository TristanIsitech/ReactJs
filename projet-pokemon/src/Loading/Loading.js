import './Loading.css'
import React, { useContext, useEffect } from 'react'
import { myAppContext } from './../Store/appContext.js';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function App() {
    const context = useContext(myAppContext)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5400/api/connectUser?id=" + context.userParam.id + "&psw=" + context.userParam.psw)
            .then((res) => {
                if (res.data) {
                    context.dispatchUserInfo({ type: 'INITIALISE', payload: res.data })
                    navigate('/game')
                }else{
                    context.dispatchUserParam({type: 'UNSET', payload: true})
                    navigate('/')
                }
            })
            .catch((err) => {
                console.log("error : ", err)
            })
    }, [context, navigate])

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
