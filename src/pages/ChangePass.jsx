import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { toast } from 'react-toastify'

const ChangePass = () => {

  const {user}=useOutletContext()

  let redirect = useNavigate()

   const [resetPassword, setResetPassword] = useState({
        password: "",
        cpassword: ""
    })

    let handleI = (event) => {
        setResetPassword({ ...resetPassword, [event.target.name]: event.target.value })
    }

   let ChangePassword = async()=>{

    if (resetPassword.password === resetPassword.cpassword) {
            let response = await fetch( "https://api.skillsvarz.com/api/user/" + user._id, {
                method: "PATCH",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({ password: resetPassword.password })
            })

            if (response.status === 200 || response.status === 201) {
                toast.success("Password Changed successfully")
                setTimeout(() => {
                    redirect('/login')
                }, 1000)
            }
            else toast.error("Something went wrong...")
       
   }
  }

   let DeleteAccount=async()=>{
  let response = await fetch ("https://api.skillsvarz.com/api/user/" + user._id,{
        method:"DELETE"
       })

       let result  = await response.json()

       if(response.status===200||response.status===201){
        toast.success(result?.message?result.message:"Account Deleted")
        setTimeout(() => {
                    redirect('/login')
                }, 1000)
       }
         else toast.error(result?.error?result.error:"Try Again")
   }

  return (
   <div className="min-h-screen w-[89%] flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      <div className="w-96 p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6">
        Change Password 🔒
        </h2>

        {/* New Password */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">New Password</label>
          <input
          onChange={handleI}
          name='password'
          type="password"
          placeholder="Enter new password"
          className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-300">Confirm Password</label>
          <input
          onChange={handleI}
          name='cpassword'
          type="password"
          placeholder="Confirm new password"
          className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Change Password Button */}
        <button className="w-full py-2 rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 hover:scale-105 transition duration-200 mb-3"
       onClick={ChangePassword}>
        Change Password
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
        <div className="flex-1 h-px bg-gray-700"></div>
        <span className="px-3 text-gray-400 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Delete Account */}
        <button className="w-full py-2 rounded-lg bg-red-600 hover:bg-red-700 hover:scale-105 transition duration-200" 
        onClick={DeleteAccount}>
        Delete Account
        </button>

      </div>
    </div>
  )
}

export default ChangePass
