import React from 'react'
import { Outlet } from 'react-router'
import SideBar from '../components/SideBar'

export default function DashboardScreen() {
    return (
        <div className='w-screen h-screen overflow-hidden  ' >
            <div className='w-screen flex ' > 
                <div style={{boxShadow: '0px 4px 4px 0px #00000040'}} className=' mb-10' > 
                    <SideBar />
                </div>
                <div className=' w-auto flex flex-1 flex-col h-screen' >
                    <div style={{height: '15vh'}} className='w-full px-14 bg-[#F8F9FA] flex items-center justify-end' >
                        <div className='w-14 h-14 bg-yellow-200 rounded-full' >

                        </div>
                        <div className='ml-3' >
                            <p className='font-Inter-SemiBold text-lg ' >Kimora Kim</p>
                            <p className='font-Inter-Regular text-xs '>Customer Service</p>
                        </div>
                    </div>
                    <div style={{height: '85vh'}} className='h-auto overflow-y-hidden' >
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
} 