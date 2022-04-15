import React from 'react'
import { Outlet } from 'react-router-dom'

export default function BarginTab() {
    return (
        <div className='w-full h-auto overflow-y-hidden px-8 py-8 bg-[#F8F9FA] border-t border-l border-[#DDE2E5]' >
            <Outlet />
        </div> 
    )
} 