import React, { useState } from 'react'
import RecentChats from './RecentChats'
import { LogOut, Settings, User2Icon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({user}) => {

  let redirect = useNavigate()

  const[enable , setEnable] = useState(true)
  return (

    <>
   {enable ? <div className="h-screen w-64 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col border-r border-gray-700">

      {/* Header */}

        <div className="p-3 border-b border-gray-700">
                    <input
                        type="search"
                        placeholder="Search chats..."
                        className="w-full px-3 py-2 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

      
      {/* Recent Chats */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
         <h2 className="text-md font-semibold">Recent Chats</h2>
        
        <RecentChats/>
        <RecentChats/>

      </div>

      {/* Bottom Profile */}
      <div className="p-4 border-t relative border-gray-700">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer">
          
          {/* Avatar */}
          <div >
            <img className='h-10 rounded-xl '
                        src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff`}
                        alt=""
                    />
          </div>

          {/* Name */}
          <div > 
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-400">Online</p>
          </div>

          <button className='absolute right-10 cursor-pointer' onClick={()=>{
            setEnable(false)
          }}
          
          ><Settings/> </button>

        </div>
      </div>

    </div> : <div className="h-screen w-64 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col border-r border-gray-700">

      {/* Header */}
      <div className="p-4 border-b h-17 border-gray-700">
        <h2 className="text-xl font-semibold"> 💬 Recent Chats</h2>
      </div>

      {/* Recent Chats */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        <div className="p-3 flex gap-2 border-gray-700 cursor-pointer" onClick={() => { redirect("/user/chngepass") }}>
          <Settings/> <span>Settings</span>
        </div>

        <div className="p-4 border-t flex gap-2 border-gray-700 cursor-pointer" onClick={()=>{
          redirect("/user/profile")
        }} >
           <User2Icon/> <span>Profile</span>
        </div>

        <div className="p-4 border-t flex gap-2  border-gray-700 cursor-pointer" onClick={()=>{
          redirect("/")
        }} >
          <LogOut/> <span>Logout</span>
        </div>

        
        

      </div>

      {/* Bottom Profile */}
      <div className="p-4 border-t relative border-gray-700">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer">
          
          {/* Avatar */}
          <div >
            <img className='h-10 rounded-xl '
                        src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff`}
                        alt=""
                    />
          </div>

          {/* Name */}
          <div > 
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-400">Online</p>
          </div>

          <button className='absolute right-10  cursor-pointer' 
           
          ><Settings/> </button>

        </div>
      </div>

    </div> }
  
</>

    
  )
}

export default Sidebar
