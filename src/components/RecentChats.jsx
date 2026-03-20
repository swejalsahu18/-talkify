import React from 'react'
import { useNavigate } from 'react-router-dom'

const RecentChats = ({user}) => {
    let redirect = useNavigate()
    return (
      <div className="p-3  border-gray-700">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer">
          
          {/* Avatar */}
          <div >
            <img className='h-10 rounded-xl '
                        src={`https://ui-avatars.com/api/?name=swejal+sahu&background=2563eb&color=fff`}
                        alt=""
                    />
          </div>

          {/* Name */}
          <div > 
            <p className="text-sm font-medium">swejal</p>
        
          </div>

        </div>
      </div>
    )
}

export default RecentChats
