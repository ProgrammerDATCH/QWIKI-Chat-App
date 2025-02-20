"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const RoomMiddlePage = () => {
    const router = useRouter()
    useEffect(()=>{
        router.push(`/room/default-room/username/anonymous-user-${Math.floor(Math.random() * 4000) + 1}`)
    }, [router])
  return (
    <div>
      Getting username...
    </div>
  )
}

export default RoomMiddlePage
