import Header from './Header';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


function Login() {
    const history =useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('User-Info'))
        {
            history("/addproduct");
        }
    },[])
    return (
        <>
        <Header/>
            <div>
                <h1>Login Page</h1>
            </div>
        </>
    )
}
export default Login;