import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Qwiki Chat Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
            
          </div>
          <div>
            <Link href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Start New Chat
            </Link>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-800 shadow-gray-800 shadow-md"></div>
      </div>
    </nav>
  )
}

export default Navbar