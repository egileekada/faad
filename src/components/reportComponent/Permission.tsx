import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import DateFormat from '../DateFormat';

export default function Permission() {

    // const data = [
    //     {
    //         user: 'Beauty Bagins',
    //         permission: 'Edit deal FD1234', 
    //         date: '12-11-2019'
    //     },
    //     {
    //         user: 'Beauty Bagins',
    //         permission: 'Edit deal FD1234', 
    //         date: '12-11-2019'
    //     },
    //     {
    //         user: 'Beauty Bagins',
    //         permission: 'Edit deal FD1234', 
    //         date: '12-11-2019'
    //     },
    //     {
    //         user: 'Beauty Bagins',
    //         permission: 'Edit deal FD1234', 
    //         date: '12-11-2019'
    //     },
    //     {
    //         user: 'Beauty Bagins',
    //         permission: 'Edit deal FD1234', 
    //         date: '12-11-2019'
    //     },
    //     {
    //         user: 'Beauty Bagins',
    //         permission: 'Edit deal FD1234', 
    //         date: '12-11-2019'
    //     },
    // ]
    // const navigate = useNavigate()

    const { isLoading, data, refetch } = useQuery('AllDeals', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/deals', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  
    
    // const ClickHandler =(item: any)=> {
    //     navigate('/dashboard/deals/info') 
    //     localStorage.setItem('dealID', item) 
    // }

    

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
                            {/* <Th>Action</Th>     */}
                        </Tr>
                    </Thead>
                    <Tbody >
                        {!isLoading && (
                            <> 
                                {[...data.data.deals].filter((item: any)=> item.createdBy !== undefined).reverse().map((item: any, index: any)=> { 
                                    return(
                                        <Tr className=' cursor-pointer font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                            <Td>{index+1}</Td> 
                                            <Td>{item.createdBy.name}</Td> 
                                            <Td>{item.status === 'accepted' ? 'Edited deal '+(item._id).slice(0, 7) : item.status === 'completed' ? 'Completed deal '+(item._id).slice(0, 7) : 'Created deal '+(item._id).slice(0, 7)}</Td> 
                                            <Td>{DateFormat(item.updatedAt)}</Td> 
                                            {/* <Td>
                                                <div className='flex' >
                                                    <p className=' font-Inter-SemiBold text-[#00BE00] ' >Approve</p>
                                                    <p className=' font-Inter-SemiBold ml-6 text-[#FF1F1F] ' >Deny</p>
                                                </div>    
                                            </Td>   */}
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