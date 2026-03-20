import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

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
      <Outlet />
    </div>
  )
}

export default UserOutlet
