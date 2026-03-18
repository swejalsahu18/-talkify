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
console.log(res);
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">

        <label htmlFor="uname" className="block text-sm font-medium mb-1">
          Name :
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="uname"
          placeholder="enter your username"
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label htmlFor="uemail" className="block text-sm font-medium mb-1">
          Email :
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="uemail"
          placeholder="enter your email"
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label htmlFor="umobile" className="block text-sm font-medium mb-1">
          Phone No. :
        </label>
        <input
          onChange={handleChange}
          type="number"
          name="umobile"
          placeholder="enter your Phone number"
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label htmlFor="pass" className="block text-sm font-medium mb-1">
          Password :
        </label>
        <input
          onChange={handleChange}
          type="password"
          name="pass"
          placeholder="enter your password"
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label htmlFor="cpass" className="block text-sm font-medium mb-1">
          Confirm password :
        </label>
        <input
          onChange={handleChange}
          type="password"
          name="cpass"
          placeholder="Confirm your password"
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={handleSignup}>
          Signup
        </button>

        <p className="text-sm text-center mt-4">
          Already have an Account?
          <Link to="/login" className="text-blue-500 hover:underline">
            login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Signup
