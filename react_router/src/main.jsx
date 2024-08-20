import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx'
import Feature from './Components/Feature.jsx';
import Pricing from './Components/Pricing.jsx';
import ContactUs from './Components/ContactUs.jsx';
import Users, { fetchUserList } from './Components/Users.jsx';

//  This is the first method of create rout for the component
// const router = createBrowserRouter([
//   {path:'/', element: <App/>,children:[
//     {path:'', element : <Home/>},
//     {path:'/feature', element : <Feature/>},
//     {path:'/pricing', element : <Pricing/>},
//     {path:'/contact-us', element : <ContactUs/>},
//     {path:'/login', element : <Login/>},
//     {path:'/users', element : <Users/>, loader: fetchUserList},
//   ]}
// ])


// This is the second way of set the routes for the elements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='feature' element={<Feature/>}/>
      <Route path='pricing' element={<Pricing/>}/>
      <Route path='contact-us' element={<ContactUs/>}/>
      <Route path='user/:userId' element={<Users/>} loader = {fetchUserList}/>
      <Route path='login' element={<Login/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
