import React from 'react'
import Home from './pages/Home'
import { Add } from './pages/Add'
import Lists from './pages/Lists'
import Orders from './pages/Orders'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import{ toast, ToastContainer} from "react-toastify"
import { useContext } from 'react'
import { AdminDataContext } from './context/AdminContext'


const App = () => {

  const {adminData} = useContext(AdminDataContext)

  return (
   <>
   <ToastContainer />
   {!adminData ? <Login/> :  <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/lists" element={<Lists/>}/>
    <Route path="/orders" element={<Orders/>}/>
    <Route path="/login" element={<Login/>}/>
   
   </Routes>
   </>
}
   </>
  )
}

export default App