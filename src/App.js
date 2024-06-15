import React from "react"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import io from 'socket.io-client'; 
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import Add from "./components/Add"
import Userdetails from "./components/Userdetails"
import Searchpage from "./components/Searchpage"
import Message from "./components/Message"
import Chat from "./components/Chat"




function App() {
  const router = createBrowserRouter([
  {path:"/",element:<Login/>},
  {path:"/register",element:<Register/>},
  {path:"/addpost",element:<Add />},
  {path:"/dashboard",element:<Dashboard />},
  {path:"/Userdetail",element:<Userdetails/>},
  {path:"/Search",element:<Searchpage/>},
  {path:"/Message",element:<Message/>},
  {path:"/chat",element:<Chat/>}
  ])

  return (
    <>
  <RouterProvider router = {router}></RouterProvider>
    </>
  )
}

export default App;
