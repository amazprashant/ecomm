import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from './Header';


function Register() {
    useEffect(()=>{
        if(localStorage.getItem('User-Info'))
        {
            history("/addproduct");
        }
    },[])
    const [name, setName] = useState("");
    const [password, setPassowrd] = useState("");
    const [email, setEmail] = useState();
    const history =useNavigate();

    async function signup() {
        let item = { name, password, email };
        
        console.warn(item);
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-type": "application/json",
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("User-Info",JSON.stringify(result));
        history("/addproduct");
    }
    return (
        <>     
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter name" />
            <br />
            <input type="password" value={password} onChange={(e) => setPassowrd(e.target.value)} className="form-control" placeholder="Enter Password" />
            < br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email" />
            <br />
            <button onClick={signup} className="btn btn-primary">Sign UP</button>
        </div>
        </>

    )
}
export default Register;