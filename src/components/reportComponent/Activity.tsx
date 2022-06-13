import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import DateFormat from '../DateFormat'

export default function Activity() {

    const data = [
        {
            user: 'Beauty Bagins',
            activity: 'Changed password',
            contact: 'beauty@faadoil.com',
            date: '12-11-2019'
        },
        {
            user: 'Beauty Bagins',
            activity: 'Changed password',
            contact: 'beauty@faadoil.com',
            date: '12-11-2019'
        },
        {
            user: 'Beauty Bagins',
            activity: 'Changed password',
            contact: 'beauty@faadoil.com',
            date: '12-11-2019'
        },
        {
            user: 'Beauty Bagins',
            activity: 'Changed password',
            contact: 'beauty@faadoil.com',
            date: '12-11-2019'
        },
        {
            user: 'Beauty Bagins',
            activity: 'Changed password',
            contact: 'beauty@faadoil.com',
            date: '12-11-2019'
        }
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
                            <Th>Activity</Th> 
                            <Th>Contact</Th>  
                            <Th>Date</Th>    
                        </Tr>
                    </Thead>
                    <Tbody >
                        {[...data].reverse().map((item: any, index: any)=> { 
                            return(
                                <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                    <Td>{index+1}</Td> 
                                    <Td>{item.user}</Td> 
                                    <Td>{item.activity}</Td> 
                                    <Td>{item.contact}</Td> 
                                    <Td>{item.date}</Td> 
                                </Tr> 
                            ) 
                        })}
                    </Tbody> 
                </Table> 
            </div> 
        </div>
    )
} 