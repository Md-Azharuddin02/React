import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx'
import Feature from './Components/Feature.jsx';
import Pricing from './Components/Pricing.jsx';
import ContactUs from './Components/ContactUs.jsx';

const router = createBrowserRouter([
  {path:'/', element: <App/>,children:[
    {path:'', element : <Home/>},
    {path:'/feature', element : <Feature/>},
    {path:'/pricing', element : <Pricing/>},
    {path:'/contact-us', element : <ContactUs/>},
    {path:'/login', element : <Login/>},
  ]}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
