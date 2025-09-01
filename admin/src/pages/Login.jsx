import React, { useContext, useState } from 'react'
import logo from "../assets/vcart logo.png"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthDataContext} from '../context/AuthContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AdminDataContext } from '../context/AdminContext';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';


const Login = () => {
 let[showPassword , setShowPassword]= useState(false)
 const [email , setEmail] = useState("")
 const [password , setPassword]= useState("")
 let {serverUrl} = useContext(AuthDataContext)
 let navigate = useNavigate()
 let{adminData , getAdmin} = useContext(AdminDataContext)
 const [loading , setLoading] = useState(false)


 const AdminLogin = async(e)=>{
    setLoading(true)
    e.preventDefault()
    try {
        const result = await axios.post(serverUrl + "/api/auth/adminlogin" ,{email,password},{withCredentials:true})
        console.log(result.data)
        toast.success("Admin Login Successfully")
        setLoading(false)
        getAdmin()
        navigate("/")
    } catch (error) {
        console.log(error.message)
        setLoading(false)
        toast.error("Admin Login Failed")
    }
 }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to [#0c2025] text-white flex flex-col items-center justify-start'>
        <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer ' onClick={()=>navigate("/")}>
            <img className='w-[40px] h-[40px]' src={logo} alt="" />
            <h1 className='text-[20px] font-bold'>OneCart</h1>
        </div>

        <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
            <span className='text-[30px] font-bold'>Registration Page</span>
            <span className='text-[14px] font-medium'>Welcome to OneCart , Apply to Admin Login</span>
        </div>
        <div className='max-w-[450px] w-[90%] h-[480px] shadow-lg bg-transparent border-[1px] border-white rounded-lg flex items-center justify-center flex-col'>
        <form onSubmit={AdminLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]' action="">
            
            
    <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
    

        <input
          type="email"
          className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
          placeholder="Email"
          required
          onChange={(e)=> setEmail(e.target.value)} value={email}
        />
        
        <input
          type={showPassword ? "text" :"password"}
          className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
          placeholder="Password"
          required
           onChange={(e)=> setPassword(e.target.value)} value={password}
        />
        {!showPassword && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute bottom-[56%]  right-[5%]' onClick={()=> setShowPassword(prev => !prev)}/>
}
        {showPassword && <IoEyeOffOutline className='w-[20px] h-[20px] cursor-pointer absolute bottom-[56%] right-[5%]' onClick={()=> setShowPassword(prev => !prev)}/>
}
        <button  className='w-[100%] h-[50px] rounded-lg bg-blue-500 flex items-center justify-center mt-[20px] text-[20px] '>{loading ? <Loading/> : "Login"}</button>
     <p className='flex gap-[10px]'>You have no account?<span className='text-violet-800 text-[17px] font-semibold cursor-pointer '>Sign up</span></p>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login