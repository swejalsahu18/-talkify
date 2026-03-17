import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const[login , setLogin]=useState({
        username:"",
        password:""

    })

    let handleChange =(e)=>{
       setLogin({...Login, [e.target.name] : e.target.value})
    }

  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-2xl shadow-lg w-80">

    <label htmlFor="username" className="block text-sm font-medium mb-1">
      UserName
    </label>
    <input
      type="text"
      name="username"
      id="username"
      onChange={handleChange}
      placeholder="Enter your username"
      className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <label htmlFor="password" className="block text-sm font-medium mb-1">
      Password
    </label>
    <input
      type="password"
      name="password"
      id="password"
      onChange={handleChange}
      placeholder="Enter your password"
      className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
      Login
    </button>

    <p className="text-sm text-center mt-4">
      don't have an account ?{" "}
      <Link to="/signup" className="text-blue-500 hover:underline">
        Signup
      </Link>
    </p>

  </div>
</div>
  )
}

export default Login
