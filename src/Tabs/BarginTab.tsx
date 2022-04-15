import React from 'react'
import { Outlet } from 'react-router-dom'

export default function BarginTab() {
    return (
        <div className='w-full relative h-full overflow-y-hidden bg-[#F8F9FA] border-t border-l border-[#DDE2E5' >
            <Outlet />
        </div> 
    )
} 