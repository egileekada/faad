import React from 'react' 
import { Outlet } from 'react-router';

export default function OurPeopleTab() {
    return ( 
        <div className='w-full h-full px-8 py-8 bg-[#F8F9FA] border-t border-l border-[#DDE2E5]' >
            <Outlet />
        </div> 
    )
} 