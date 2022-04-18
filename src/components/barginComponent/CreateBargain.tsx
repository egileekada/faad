import { Input } from '@chakra-ui/input'
import { Select, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateBargain() {

    const navigate = useNavigate()

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <svg onClick={()=> navigate('/dashboard/bargains')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            <div style={{border: '1px solid #DDE2E5'}} className=' w-full rounded-2xl p-10 my-8 bg-white flex flex-col ' > 
                <p className='font-Inter-SemiBold text-2xl ml-3 ' >Create bargain</p>
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
                            <p className='text-sm font-Inter-Regular mb-2' >Fuel</p>
                            <Select fontSize='sm' placeholder='AGO' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Quantity in Litres</p>
                            <Select fontSize='sm' placeholder='1000' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                    </div>
                    <div className='w-full px-3' >
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Asking price</p>
                            <Input fontSize='sm' placeholder='N135.0' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Bidding price</p>
                            <Input fontSize='sm' placeholder='N0000' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Address</p>
                            <Textarea height='160px' fontSize='sm' placeholder='Enter address'  className='border border-[#DDE2E5] rounded-lg ' />
                        </div>
                    </div> 
                </div>
                <button className='font-Inter-SemiBold mt-8 ml-3 text-xs h-10 text-white rounded-lg w-44 bg-[#F88C3A] ' >Create bargain</button>
            </div>
        </div>
    )
} 