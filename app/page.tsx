"use client"
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [roomName, setRoomName] = useState('');
  const [username, setUsername] = useState(`anonymous-user-${Math.floor(Math.random() * 4000) + 1}`);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 bg-gray-900 text-white">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">QWIKI CHAT</h1>
          <p className="text-lg sm:text-xl text-center text-gray-400 mb-8">Video chat with random people quickly.</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm sm:text-base bg-gray-800"
                placeholder="Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm sm:text-base bg-gray-800"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Link 
              href={`/room?room=${roomName}&username=${username}`}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
            >
              START VIDEO CALL
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}