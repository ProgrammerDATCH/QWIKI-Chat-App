import Link from 'next/link'
import React from 'react'

const AdminPage = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-10 h-[40vh]'>
            <h1>ADMIN DASHBOARD</h1>

            <Link href={'/admin/rooms'} >
            <div className='bg-gray-600 p-4 rounded-lg w-64 my-2'>VIEW ROOMS</div></Link>
        </div>
    )
}

export default AdminPage
