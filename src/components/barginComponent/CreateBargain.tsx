import { Input } from '@chakra-ui/input'
import { Select, Textarea } from '@chakra-ui/react'
import React from 'react'

export default function CreateBargain() {
    return (
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
    )
} 