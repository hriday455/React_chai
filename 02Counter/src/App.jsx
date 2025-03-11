import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //let counter = 15
 let[counter,setCounter] = useState(15)
  // function Addvalue(){
  //  if(counter<20){
  //  setCounter(counter+1)
  //  }
  // }
  function Removevalue(){
    if(counter>0){
    setCounter(counter-1)
    }
  }
  const Addvalue =()=>{
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
  }
  return (
    <>
    <h1>Welcome To React</h1>
    <h3>counter value:{counter}</h3>
    <button onClick={Addvalue}>Add value{counter}</button>
    <br />
    <button onClick={Removevalue}>Remove Value{counter}</button>

    </>
  )
  }

export default App
