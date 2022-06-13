import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'

export default function Permission() {

    const data = [
        {
            user: 'Beauty Bagins',
            permission: 'Edit deal FD1234', 
            date: '12-11-2019'
        },
        {
            user: 'Beauty Bagins',
            permission: 'Edit deal FD1234', 
            date: '12-11-2019'
        },
        {
            user: 'Beauty Bagins',
            permission: 'Edit deal FD1234', 
            date: '12-11-2019'
        },
        {
            user: 'Beauty Bagins',
            permission: 'Edit deal FD1234', 
            date: '12-11-2019'
        },
        {
            user: 'Beauty Bagins',
            permission: 'Edit deal FD1234', 
            date: '12-11-2019'
        },
        {
            user: 'Beauty Bagins',
            permission: 'Edit deal FD1234', 
            date: '12-11-2019'
        },
    ]

    return (
        
        <div className='w-full relative' > 
            <div style={{border: '1px solid #DDE2E5'}} className=' w-auto overflow-x-auto rounded-2xl p-4 mt-8 bg-white ' >  
                <Table variant='simple' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className=' font-Inter-SemiBold text-xl' >
                            <Th>No</Th>  
                            <Th>User</Th>  
                            <Th>Permission</Th> 
                            <Th>Date</Th>  
                            <Th>Action</Th>    
                        </Tr>
                    </Thead>
                    <Tbody >
                        {[...data].reverse().map((item: any, index: any)=> { 
                            return(
                                <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                    <Td>{index+1}</Td> 
                                    <Td>{item.user}</Td> 
                                    <Td>{item.permission}</Td> 
                                    <Td>{item.date}</Td> 
                                    <Td>
                                        <div className='flex' >
                                            <p className=' font-Inter-SemiBold text-[#00BE00] ' >Approve</p>
                                            <p className=' font-Inter-SemiBold ml-6 text-[#FF1F1F] ' >Deny</p>
                                        </div>    
                                    </Td>  
                                </Tr> 
                            ) 
                        })}
                    </Tbody> 
                </Table> 
            </div> 
        </div>
    )
} 