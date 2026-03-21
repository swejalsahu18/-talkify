import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

  let redirect = useNavigate()

  const [login, setLogin] = useState({
    username: "",
    password: ""

  })

  let handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  let handleLogin = async () => {

    let loginData = {
      email: login.username,
      password: login.password
    }


    let URL = "https://api.skillsvarz.com/api/login"
    let resp = await fetch(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })

    let result = await resp.json()
    console.log(result)

    if (resp.status === 200 || resp.status === 201) {
      localStorage.setItem("user_id", JSON.stringify(result.user._id))
      toast.success(result.message)
      setTimeout(() => {
                redirect("/user")
            }, 1000)
    } else {
      toast.error(result.error)
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
  
  <div className="w-80 p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">

    <h2 className="text-2xl font-semibold text-white text-center mb-6">
      Welcome Back 👋
    </h2>

    <label className="block text-sm text-gray-300 mb-1">
      Username
    </label>
    <input
      type="text"
      name="username"
      onChange={handleChange}
      placeholder="Enter your username"
      className="w-full px-3 py-2 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <label className="block text-sm text-gray-300 mb-1">
      Password
    </label>
    <input
      type="password"
      name="password"
      onChange={handleChange}
      placeholder="Enter your password"
      className="w-full px-3 py-2 mb-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />

    <button
      onClick={handleLogin}
      className="w-full py-2 rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 text-white font-medium hover:scale-105 hover:shadow-lg transition duration-200"
    >
      Login
    </button>

    <p className="text-sm text-gray-400 text-center mt-4">
      Don't have an account?{" "}
      <Link to="/signup" className="text-blue-400 hover:underline">
        Signup
      </Link>
    </p>

  </div>
</div>
  )
}

export default Login
