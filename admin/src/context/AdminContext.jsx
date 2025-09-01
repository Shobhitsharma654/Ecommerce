import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { AuthDataContext } from './AuthContext'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"


export const AdminDataContext = createContext()
function AdminContext({children}) {
let [adminData , setAdminData] = useState(null)
let {serverUrl} = useContext(AuthDataContext)


const getAdmin = async()=>{
  try {
    
    let result = await axios.get(serverUrl + "/api/user/getadmin",{withCredentials:true} )
    
    setAdminData(result.data)
    console.log(result.data)
  } catch (error) {
    setAdminData(null)
    console.log(error.message
    )
  }
}
  useEffect(()=>{
getAdmin()
  },[])

    let value ={
getAdmin, setAdminData, adminData
    }
  return (
    <div>
        <AdminDataContext.Provider value={value}>
            {children}
        </AdminDataContext.Provider>
    </div>
  )
}

export default AdminContext