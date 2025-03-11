import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import ReactDOM from 'react-dom/client';
import Contact from './components/Contanct/Contact.jsx'
import User from './components/USer/User.jsx'
import Instagram, { githubInfoLoader } from './components/Instagram/Instagram.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children :[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])
// one more way to do  Parent element is Layout
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='instagram' 
      element={< Instagram/>}
       />
    </Route>
    
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
//  <Route path='instagram' element={<Instagram/>}/>