import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/Theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeButton'

function App() {
  const[themeMode,SetThemeMode]=useState("light")
  const lightTheme = ()=>{
    SetThemeMode("light")
  }
  const darkTheme = ()=>{
    SetThemeMode("dark")
  }
  // actual change in the theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return(
    
    <ThemeProvider value={{themeMode, darkTheme,lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                   
                       <Card/>
                    </div>
                </div>
            </div>
       </ThemeProvider>
  )
}

export default App
