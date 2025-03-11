import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
const reactElements  = React.createElement( // type ,key , ref,props built in properties that belong to the elemnts 
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
  
)
createRoot(document.getElementById('root')).render(
  reactElements
)
