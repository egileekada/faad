import { Checkbox, Input, Select } from '@chakra-ui/react'
import React from 'react'

export default function StepThree(props: any) {
    return (
        <div style={{border: '1px solid #DDE2E5', height: '55vh'}} className='bg-white rounded-lg p-8 ' >
            <div  className='w-full h-full flex flex-col' >
                <p className='font-Inter-SemiBold text-xl text-[#212429]' >Add agents and print files</p>
                {/* <p className='font-Inter-Regular mt-1 text-[#495057] text-sm ' >20000ℓ • Waterfall </p>  */}
                <div className='flex mt-4 items-center' >  
                    <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 ' >Agent</p> 
                    <div className='w-72' >
                        <Select placeholder='Search' fontSize='sm' />
                    </div> 
                </div>
                <div className='flex mt-4 items-center' >  
                    <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 ' >Driver</p> 
                    <div className='w-72' >
                        <Select placeholder='Search' fontSize='sm' />
                    </div> 
                </div>
                <div className='flex items-center mt-14' >
                    <div className='flex items-center cursor-pointer' >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H8V6H16V4ZM6 6H2V18H6V22H18V18H22V6H18V2H6V6ZM4 16H6V14H18V16H20V8H4V16ZM16 16H8V20H16V16ZM16 10H18V12H16V10Z" fill="#ACB5BD"/>
                        </svg>
                        <p className='font-Inter-Regulartext-[#ACB5BD] ml-3 text-sm w-28 ' >Delivery note</p> 
                    </div>
                    <div className=' ml-3 flex items-center cursor-pointer' >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H8V6H16V4ZM6 6H2V18H6V22H18V18H22V6H18V2H6V6ZM4 16H6V14H18V16H20V8H4V16ZM16 16H8V20H16V16ZM16 10H18V12H16V10Z" fill="#ACB5BD"/>
                        </svg>
                        <p className='font-Inter-Regulartext-[#ACB5BD] ml-3 text-sm w-28 ' >water test form</p> 
                    </div>
                    <div className='ml-3 flex items-center cursor-pointer' >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H8V6H16V4ZM6 6H2V18H6V22H18V18H22V6H18V2H6V6ZM4 16H6V14H18V16H20V8H4V16ZM16 16H8V20H16V16ZM16 10H18V12H16V10Z" fill="#ACB5BD"/>
                        </svg>
                        <p className='font-Inter-Regulartext-[#ACB5BD] ml-3 text-sm w-28 ' >Dispatch note</p> 
                    </div>
                </div>
                {/* <Input className='mt-4' width='240px' fontSize='sm' placeholder='Enter seal number' /> */}
                <button onClick={()=> props.click(3)} className='py-2 text-sm font-Inter-SemiBold text-white rounded-md mt-auto ml-auto bg-[#F88C3A] px-16' >Next</button>
            </div>
        </div>
    )
} 