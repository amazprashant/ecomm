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
    const [password, setPassowrd] = useState("");
    const [email, setEmail] = useState();
    async function login() {
        let item = { password, email };
        
        console.warn(item);
        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-type": "application/json",
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("User-Info",JSON.stringify(result));
         history("/addproduct");
    }
    return (
        <>
        <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1>Login Page</h1>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email" />
                <br />
                <input type="password" value={password} onChange={(e) => setPassowrd(e.target.value)} className="form-control" placeholder="Enter Password" />
                < br />                
                <button onClick={login} className="btn btn-primary">Sign UP</button>
            </div>
        </>
    )
}
export default Login;