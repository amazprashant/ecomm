import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Register()
{
    const [name,SetName]=useState("")
    const [password,SetPassword]=useState("")
    const [email,SetEmail]=useState("")
    const navigate = useNavigate();

    function handleNameChange(event) {
        SetName(event.target.value);
      }
      
      function handlePasswordChange(event) {
        SetPassword(event.target.value);
      }
      
      function handleEmailChange(event) {
        SetEmail(event.target.value);
      }
    async function signup()
    {
        const item = {name,password,email}
        console.warn(item)
        
        let result= await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result =await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        navigate("/add")
    }

    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={name} onChange={handleNameChange} className="form-control" placeholder="name" />
            <br />
            <input type="password" value={password} onChange={handlePasswordChange} className="form-control" placeholder="passwrd" />
            <br />
            <input type="text" value={email} onChange={handleEmailChange} className="form-control" placeholder="email" />
            <br />
            <button onClick={signup} className="btn btn-primary">Sign Up</button>
        </div>
    )
}
export default Register
