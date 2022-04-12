import React from 'react'
import { Outlet } from 'react-router'
import SideBar from '../components/SideBar'

export default function DashboardScreen() {
    return (
        <div className='w-screen h-screen overflow-hidden  ' >
            <div className='flex flex-1' > 
                <div style={{width: '300px', boxShadow: '0px 4px 4px 0px #00000040'}} className=' mb-10' > 
                    <SideBar />
                </div>
                <div className='flex flex-col flex-1 h-screen' >
                    <div className='w-full  h-24 px-14 bg-[#F8F9FA] flex items-center justify-end' >
                        <div className='w-14 h-14 bg-yellow-200 rounded-full' >

                        </div>
                        <div className='ml-3' >
                            <p className='font-Inter-SemiBold text-lg ' >Kimora Kim</p>
                            <p className='font-Inter-Regular text-xs '>Customer Service</p>
                        </div>
                    </div>
                    <div className='w-full h-full overflow-y-auto' >
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
} 