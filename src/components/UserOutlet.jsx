import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import { ToastContainer } from 'react-toastify'

const UserOutlet = () => {

    let user_id = JSON.parse(localStorage.getItem("user_id"))

    const [user, setUser] = useState({})

    useEffect(()=>{
      let fetchUrl = async ()=>{
      let response = await fetch("https://api.skillsvarz.com/api/user/"+ user_id)
      let result = await response.json()
      setUser(result)
    }
    fetchUrl()
    },[user_id])
    

  return (
    <div className='flex'>
      <Sidebar user={user}/>
      <Outlet context={{user}}/>

       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default UserOutlet
