// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerPage from "./Pages/CustomerPage";
import AdminPage from './Pages/AdminPage';
import LoginPage from './Pages/LoginPage';

function App() {

  const router=createBrowserRouter([
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/customer",
      element:<CustomerPage/>
    },
    {
      path:"/admin",
      element:<AdminPage/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
