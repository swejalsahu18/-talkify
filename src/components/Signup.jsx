import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {

  const [sign, setSign] = useState({
    uname: "",
    uemail: "",
    umobile: "",
    pass: "",
    cpass: ""
  })

  let handleChange = (e) => {
    setSign({ ...sign, [e.target.name]: e.target.value })
  }

  let handleSignup = async() => {

     let signupData = {
            email : sign.uemail,
            name : sign.uname,
            password : sign.pass,
            phone : sign.umobile
        }
    
        
        
        let URL = "https://api.skillsvarz.com/api/users"  
        let resp = await fetch(URL,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(signupData)
        })

        let res = await resp.json()
         console.log(res)
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

  <div className="w-80 p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">

    <h2 className="text-2xl font-semibold text-white text-center mb-6">
      Create Account 🚀
    </h2>

    <label className="block text-sm text-gray-300 mb-1">
      Name
    </label>
    <input
      type="text"
      name="uname"
      onChange={handleChange}
      placeholder="Enter your name"
      className="w-full px-3 py-2 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <label className="block text-sm text-gray-300 mb-1">
      Email
    </label>
    <input
      type="email"
      name="uemail"
      onChange={handleChange}
      placeholder="Enter your email"
      className="w-full px-3 py-2 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <label className="block text-sm text-gray-300 mb-1">
      Phone No.
    </label>
    <input
      type="number"
      name="umobile"
      onChange={handleChange}
      placeholder="Enter your phone number"
      className="w-full px-3 py-2 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <label className="block text-sm text-gray-300 mb-1">
      Password
    </label>
    <input
      type="password"
      name="pass"
      onChange={handleChange}
      placeholder="Enter your password"
      className="w-full px-3 py-2 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <label className="block text-sm text-gray-300 mb-1">
      Confirm Password
    </label>
    <input
      type="password"
      name="cpass"
      onChange={handleChange}
      placeholder="Confirm your password"
      className="w-full px-3 py-2 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <button
      onClick={handleSignup}
      className="w-full py-2 rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium hover:scale-105 hover:shadow-lg transition duration-200"
    >
      Signup
    </button>

    <p className="text-sm text-gray-400 text-center mt-4">
      Already have an account?{" "}
      <Link to="/login" className="text-blue-400 hover:underline">
        Login
      </Link>
    </p>

  </div>
</div>
  )
}

export default Signup
