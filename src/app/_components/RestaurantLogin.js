'use client'

import { useState } from "react";

const restaurantLogin = () => {
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(false)
  const handleLogin = ()=>{
    if(!email || !password){
      setError(true)
    } else {
      setError(false)
    }
  console.log(email,password)
  }
  
  return (
    <>
      <h3> Login Component </h3>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Email Id"
          className="input-field "
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        {
          error && !email && <span className="input-error">Please Enter Email</span>
        }
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Enter Password"
          className="input-field "
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
         {
          error && !password && <span className="input-error">Please Enter Password</span>
        }
      </div>
      <div className="input-container">
        <button className="button" onClick={handleLogin}>Sign In</button>
      </div>
    </>
  );
};

export default restaurantLogin;
