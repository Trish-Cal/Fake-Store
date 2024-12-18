import React, { useState } from 'react'
import axiox from 'axios'
import "./Login.css"
import axios from 'axios';

export default function Login({ token, setToken }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("https://fakestoreapi.com/auth/login", { username, password })
        .then((res) => { 
            console.log(res); 
            localStorage.setItem("token", res.data.token);
            setToken(res.data.token);
        })
        .catch((err) => console.log(err));
    };

  return (
    <div className='login-container'>

      <form onSubmit={handleSubmit} className='login-form'>
        <input 
        type="text" 
        placeholder="Username" 
        onChange={(e) => {setUserName(e.target.value);
        }} 
        />
        <input 
        type='password' 
        placeholder='Password' 
        onChange={(e) => {setPassword(e.target.value);  
        }} 
        />

        <button>Submit</button>

    
      </form>
        
    </div>
  )
}
