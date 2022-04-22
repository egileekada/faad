import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/table'
import React from 'react'

export default function EntryPermit() {
 
    const dataall = [
        { 
            vendor: 'NNPC',
            agent: 'AGO', 
            truck: 'ABJ 123 DC',  
            reprint: 'Reprint last entry permit',   
        }, 
        { 
            vendor: 'NNPC',
            agent: 'AGO', 
            truck: 'ABJ 123 DC',  
            reprint: 'Reprint last entry permit',   
        }, 
        { 
            vendor: 'NNPC',
            agent: 'AGO', 
            truck: 'ABJ 123 DC',  
            reprint: 'Reprint last entry permit',   
        }, 
        { 
            vendor: 'NNPC',
            agent: 'AGO', 
            truck: 'ABJ 123 DC',  
            reprint: 'Reprint last entry permit',   
        }, 
        { 
            vendor: 'NNPC',
            agent: 'AGO', 
            truck: 'ABJ 123 DC',  
            reprint: 'Reprint last entry permit',   
        }, 
    ]

    return (
        <div className='w-full h-full bg-white rounded-2xl' >
            <div className='pb-14 border-b px-8 py-8  border-[#e0e0e0]' > 
                <p className='font-Inter-SemiBold text-xl ' >Print entry permit</p>
                <div className='flex w-full mt-6' >
                    <div className='w-full pr-8' >
                        <div className='flex mb-6 items-center w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4' >Date</p>
                            <Input size='lg' border='1px solid #ACB5BD' backgroundColor='white' type='date' />
                        </div>
                        <div className='flex mb-6 items-center w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4' >Vendor </p>
                            <Select size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='Enter Name' />
                        </div>
                        <div className='flex mb-6 items-center w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4' >Agent name</p>
                            <Input size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='Enter Name' />
                        </div>
                    </div>
                    <div className='w-full pl-8' >
                        <div className='flex items-center mb-6 w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4 ' >Fuel</p>
                            <Select size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='AGO' />
                        </div>
                        <div className='flex mb-6 items-center w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4' >Truck Number</p>
                            <Input size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='Enter truck number' />
                        </div>
                        <div className='flex mb-6 items-center w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4' >Driver name</p>
                            <Input size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='Enter Name' />
                        </div>
                    </div>
                </div>
                <button className='font-Inter-SemiBold mt-10 text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] '>
                    <svg className='mr-2' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4H8.5V6H16.5V4ZM6.5 6H2.5V18H6.5V22H18.5V18H22.5V6H18.5V2H6.5V6ZM4.5 16H6.5V14H18.5V16H20.5V8H4.5V16ZM16.5 16H8.5V20H16.5V16ZM16.5 10H18.5V12H16.5V10Z" fill="white"/>
                    </svg> 
                    Print entry permit
                </button>
            </div>

            <div className=' w-full px-10 py-12 ' >
                <p className='font-Inter-SemiBold text-2xl mb-5' >Print History</p>
                <Table variant='unstyled' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className=' font-Inter-SemiBold text-xl' >
                            <Th>No</Th>  
                            <Th>Vendor</Th>  
                            <Th>Agent</Th> 
                            <Th>Truck number</Th>  
                            <Th>Reprint</Th>   
                        </Tr>
                    </Thead>
                    <Tbody >
                        {dataall.map((item, index)=> {
                            return(
                                <Tr className=' cursor-pointer font-Inter-Regular text-xs ' key={index} paddingBottom='30px' >
                                    <Td>{index+1}</Td>  
                                    <Td> 
                                            {item.vendor} 
                                    </Td> 
                                    <Td> 
                                            {item.agent} 
                                    </Td>   
                                    <Td> 
                                            {item.truck}
                                    </Td> 
                                    <Td className='text-[#ACB5BD]' >{item.reprint}</Td>  
                                </Tr> 
                            )
                        })}
                    </Tbody> 
                </Table> 
            </div>
        </div>
    )
} 