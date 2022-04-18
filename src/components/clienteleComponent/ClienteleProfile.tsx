import { Input } from '@chakra-ui/input'
import { Select, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ClienteleProfile() {

    const navigate = useNavigate()
    
    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <svg onClick={()=> navigate('/dashboard/clientele')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            <div style={{border: '1px solid #DDE2E5'}} className=' w-full rounded-2xl p-10 my-8 bg-white flex flex-col ' > 
                <p className='font-Inter-SemiBold text-2xl ml-3 ' >Client profile</p>
                <div style={{width: '790px'}} className=' flex mt-6 font-Inter-Regular' >
                    <div className='w-full px-3 ' >
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Company name</p>
                            <Input fontSize='sm' placeholder='Enter company name' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Email</p>
                            <Input fontSize='sm' placeholder='example@company.com' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Phone number</p>
                            <Input fontSize='sm' placeholder='090...' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Back-up Phone number</p>
                            <Input fontSize='sm' placeholder='090...' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Address</p>
                            <Textarea fontSize='sm' placeholder='Enter Address' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                    </div>
                    <div className='w-full px-3' >
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Industry</p>
                            <Input fontSize='sm' placeholder='Industry' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Contact person Details</p>
                            <Input fontSize='sm' placeholder='Enter Person Detail' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                        <div className='my-4 ' > 
                            <Input fontSize='sm' placeholder='' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                        <div className='my-4 ' > 
                            <Input fontSize='sm' placeholder='' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                    </div> 
                </div>
                <button className='font-Inter-SemiBold mt-8 ml-3 text-xs h-10 text-white rounded-lg w-48 bg-[#F88C3A] ' >Save changes to client profile</button>
            </div>
        </div>
    )
} 