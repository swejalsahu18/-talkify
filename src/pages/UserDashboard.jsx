import React from 'react'
import { useOutletContext } from 'react-router-dom'

const UserDashboard = () => {
  const {user} =  useOutletContext()
  return (
    <div>
      {user.name} <br />
      {user.email}
    </div>
  )
}

export default UserDashboard
