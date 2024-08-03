"use client"
import React, { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

const RoomMiddlePage = () => {
    const router = useRouter()
    const {roomId} = useParams()
    useEffect(()=>{
        router.push(`/room/${roomId}/username/anonymous-user-${Math.floor(Math.random() * 4000) + 1}`)
    }, [router, roomId])
  return (
    <div>
      Getting username...
    </div>
  )
}

export default RoomMiddlePage
