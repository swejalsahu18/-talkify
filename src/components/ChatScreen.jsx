import React from 'react'


const ChatScreen = () => {

   
  
  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

      {/* Chat Header */}
      <div className="flex items-center gap-3 p-3 mt-1 border-b border-gray-700 bg-gray-900/60 backdrop-blur">
        
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
          R
        </div>

        <div>
          <p className="font-medium">Rahul</p>
          <p className="text-xs text-gray-400">online</p>
        </div>

      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {/* Incoming */}
        <div className="flex">
          <div className="bg-gray-700 px-4 py-2 rounded-xl max-w-xs">
            Hey bro 👋
          </div>
        </div>

        {/* Outgoing */}
        <div className="flex justify-end">
          <div className="bg-blue-600 px-4 py-2 rounded-xl max-w-xs">
            Haan bhai, kya haal?
          </div>
        </div>

        <div className="flex">
          <div className="bg-gray-700 px-4 py-2 rounded-xl max-w-xs">
            Project kaisa chal raha hai?
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-blue-600 px-4 py-2 rounded-xl max-w-xs">
            Mast! UI bana raha hu 😎
          </div>
        </div>

      </div>

      {/* Input Box */}
      <div className="p-4 h-22.5 border-t border-gray-700 bg-gray-900/60 backdrop-blur flex items-center gap-2">
        
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition">
          Send
        </button>

      </div>

    </div>
  );
}
  


export default ChatScreen
