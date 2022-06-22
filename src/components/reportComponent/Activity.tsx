import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query' 
import DateFormat from '../DateFormat'

export default function Activity() {  

    const { isLoading, data } = useQuery('AllActivty', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/activity', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   

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
                        {!isLoading && (
                            <> 
                                {[...data.data].filter((item: any)=> item.user !== undefined).reverse().map((item: any, index: any)=> { 
                                    return(
                                        <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                            <Td>{index+1}</Td> 
                                            <Td>{item.user.name}</Td> 
                                            <Td>Changed password</Td> 
                                            <Td>{item.user.companyEmail}</Td> 
                                            <Td>{DateFormat(item.updatedAt)}</Td> 
                                        </Tr> 
                                    ) 
                                })}
                            </>
                        )}
                    </Tbody> 
                </Table> 
            </div> 
        </div>
    )
} 
