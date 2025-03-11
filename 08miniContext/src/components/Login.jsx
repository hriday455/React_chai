import React from 'react'
import {useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const[username,Setusername]=useState("")
    const[password,Setpassword]=useState("")
    const {Setuser}=useContext(UserContext)
  const handleSubmit =(e)=>{
    e.preventDefault()
    Setuser({username,password})
  }

   
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=>Setusername(e.target.value)}
      placeholder='username' />
      {" "}
      <input type="text" 
      value={password}
      onChange={(e)=>Setpassword(e.target.value)}
      placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
// Why Use e.preventDefault();?
//If we don’t use it, the form will refresh the page, and we lose all state values.


