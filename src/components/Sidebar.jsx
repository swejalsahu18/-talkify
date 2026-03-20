import React from 'react'
import RecentChats from './RecentChats'

const Sidebar = ({user}) => {
  return (
    <div className="h-screen w-64 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col border-r border-gray-700">

      {/* Header */}
      <div className="p-4 border-b h-17 border-gray-700">
        <h2 className="text-xl font-semibold"> 💬 Recent Chats</h2>
      </div>

      {/* Recent Chats */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        
        <RecentChats/>
        <RecentChats/>

      </div>

      {/* Bottom Profile */}
      <div className="p-4 border-t border-gray-700">
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

        </div>
      </div>

    </div>
  )
}

export default Sidebar
