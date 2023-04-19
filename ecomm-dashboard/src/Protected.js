import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';


function Protected(props) {
    let Cmp = props.Cmp;
    const history =useNavigate();
    // localStorage.getItem('User-Info') ?

    useEffect(()=>{
        console.log(localStorage.getItem('User-Info'));
        if(!localStorage.getItem('User-Info'))
        {
            history("/register");
        }
    },[])
    return (
        <>     
        <div>
            <Cmp/>
        </div>
        </>

    )
}
export default Protected;