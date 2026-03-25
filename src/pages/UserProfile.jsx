import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { toast } from 'react-toastify'

const UserProfile = () => {

  const { user } = useOutletContext()

  const [isEdit, setIsEdit] = useState(true)

  const [uData, setUData] = useState({})

  useEffect(() => {
    setUData(user)
  }, [user])
  

  console.log(user)


  let handleChange = (event) => {
    setUData({ ...uData, [event.target.name]: event.target.value })
  }

  let handleEdit = async () => {
    if (isEdit) {
      setIsEdit(false)
    }
    else {
      let resp = await fetch("https://api.skillsvarz.com/api/user/" + user._id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(uData)
      })

      let result = await resp.json()

      if(resp.status===200||resp.status===201){
        toast.success('User Upadated...')
        setIsEdit(true)
      }
      else toast.error('Try Again..')
    }

  }

  let HandleCancel = ()=>{
    setIsEdit(true)
    setUData(user)
  }
  return (
    <div className="min-h-screen w-[89%] flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

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
            <label className="text-sm text-gray-400">Name</label>
            <input className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700"
              type='text'
              name='name'
              placeholder='Enter your Name....'
              value={uData.name}
              disabled={isEdit}
              onChange={handleChange}
            />

          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700"
              type='email'
              name='email'
              value={uData.email}
              disabled={isEdit}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-400">Phone Number</label>
            <input className="w-full px-3 py-2 mt-1 rounded-lg bg-gray-800 border border-gray-700"
              placeholder='Enter your Number....'
              type='number'
              name='phone'
              disabled={isEdit}
              value={uData.phone}
              onChange={handleChange}
            />
          </div>

        </div>

     

          {/* Button */}
           <div className="flex  gap-3 pt-3">

                    <button
                        onClick={handleEdit}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition w-full"
                    >
                        {isEdit ? 'Edit Profile' : 'Save Changes'}
                    </button>

                    {!isEdit && (
                        <button
                            onClick={HandleCancel}
                            className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg transition"
                        >
                            Cancel
                        </button>
                    )}
                </div>

           
      </div>
    </div>
  )
}

export default UserProfile
