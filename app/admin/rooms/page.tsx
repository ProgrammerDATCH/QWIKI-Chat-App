"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const AdminViewRoomsPage = () => {
    const [rooms, setRooms] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRooms = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`/api/room`)
                setRooms(res.data.data)
            } catch (error: any) {
                console.log("=====> ERROR")
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchRooms()
    }, [])

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">All rooms</h1>
            {loading ? (
                <div className="text-center">
                    <p>Loading rooms...</p>
                </div>
            ) : rooms.length === 0 ? (
                <div className="text-center">
                    <p>No rooms found</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {rooms.map((room, idx) => (
                        <Link href={`/admin/rooms/${room}`} key={idx}>
                            <div className="bg-gray-600 p-4 rounded-lg w-full my-2">
                                <p className="font-semibold">{room}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default AdminViewRoomsPage