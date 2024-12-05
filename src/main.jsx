import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Candidatos from './pages/Candidatos/Candidatos.jsx'
import Contato from './pages/Contato/Contato.jsx'
import Educacional from './pages/Educacional/Educacional.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>
},
{
  path: "/Home",
  element:<Home/>
},
{
  path: "/Candidatos",
  element: <Candidatos/>
},
{
  path:"/Contato",
  element: <Contato/>
},
{
  path: "/Educacional",
  element: <Educacional/>
}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
