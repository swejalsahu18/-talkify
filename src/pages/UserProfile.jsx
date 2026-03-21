import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const UserProfile = () => {

    const{user}=useOutletContext()

    const [isEdit, setIsEdit] = useState(true)

    let handleEdit = () =>{
      setIsEdit(false)
    }

  return (
   <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      <div className="w-96 p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img className='h-10 rounded-xl '
                        src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff`}
                        alt=""
                    />
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl font-semibold mt-4">
          Your Profile
        </h2>

        {/* User Info */}
        <div className="mt-6 space-y-4">

          {/* Name */}
          <div>
            <label   className="text-sm text-gray-400">Name</label>
            <input className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700"
              type='text' placeholder='Enter your Name....' value={user.name} disabled={isEdit}
            />
            
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700"
               type='email' name='email' value={user.email} disabled={isEdit}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-400">Phone Number</label>
            <input className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700"
              placeholder='Enter your Number....' type='number' disabled={isEdit} value={user.phone}
            />
          </div>

        </div>

        {/* Button */}
        <button
        onClick={handleEdit}  className="w-full mt-6 py-2 rounded-lg bg-linear-to-r from-blue-500 to-indigo-600 font-medium hover:scale-105 hover:shadow-lg transition duration-200">
          Edit Profile
          {isEdit? 'Edit Profile': 'Edit Changes'}
        </button>

      </div>
    </div>
  )
}

export default UserProfile
