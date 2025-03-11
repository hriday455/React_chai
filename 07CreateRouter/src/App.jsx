import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/headers/Header'
import Footer from './components/footers/Footer'
import Home from './components/Home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Footer/>
   <Home/>
   </>
  )
}

export default App
