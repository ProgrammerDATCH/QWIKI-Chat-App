"use client"
import { IMessage } from '@/lib/utils'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AdminViewMessagesPage = () => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const [loading, setLoading] = useState(true)
  const { room } = useParams()

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`/api/message?room=${room}`)
        setMessages(res.data.data)
      } catch (error: any) {
        console.log("=====> ERROR")
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchMessages()
  }, [room])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ALL Messages in room ({room})</h1>
      {loading ? (
        <div className="text-center">
          <p>Loading messages...</p>
        </div>
      ) : messages.length === 0 ? (
        <div className="text-center">
          <p>No messages found in this room.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map(message => (
            <div key={message.id} className="bg-gray-600 p-4 rounded-lg">
              <p className="font-semibold">ID: {message.id}</p>
              <p className="text-lg">{message.message}</p>
              <p>Room: {message.room}</p>
              <p>Sender: {message.sender}</p>
              <p>Date & Time: {new Date(Number(message.time)).toLocaleString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true})}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminViewMessagesPage