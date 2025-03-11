import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    name:"Hridey Sharma",
    age:21
  }
  return (
    <>
   <h1 className='bg-green-400 text-black'>Test Match</h1>
    <Card username="Chai or code " cricket="Champions Trophy "/>
    <Card username="Chai or react " cricket="World Cup"/>
    


    </>
  )
}

export default App
