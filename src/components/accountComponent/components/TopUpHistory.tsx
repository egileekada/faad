import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat';

export default function TopUpHistory() {
 
    const { isLoading, data, refetch } = useQuery('AllStock', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/stock', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )    

    console.log(data); 

    const dataall = [ 
    ] as any

    return ( 
        <div className=' w-full px-10 py-12 ' >
            <p className='font-Inter-SemiBold text-2xl mb-5' >Top up History</p>
            {!isLoading && (
                <Table variant='unstyled' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className=' font-Inter-SemiBold text-xl' >
                            <Th>No</Th>  
                            <Th>Tank</Th>  
                            <Th>Product</Th> 
                            <Th>Quantity</Th>  
                            {/* <Th>Price received (N)</Th>  
                            <Th>Landing costs</Th>   */}
                            <Th>Vendor</Th> 
                            <Th>Date</Th>  
                        </Tr>
                    </Thead>
                    <Tbody >
                        {data.data.stocks.reverse().filter((item: any)=> item.user !== null).map((item:any , index: any)=> {
                            return(
                                <Tr className=' cursor-pointer font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                    <Td>{index+1}</Td> 
                                    <Td>
                                        {/* <div className='flex items-center' > */}
                                            {item.tank}
                                            {/* <svg className='ml-3' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9452 20.9559C9.58848 22.5927 5.42483 22.0167 2.63604 19.2279C-0.87868 15.7132 -0.87868 10.0147 2.63604 6.5L9 0.13604L15.364 6.5C16.2521 7.38819 16.9159 8.41583 17.3552 9.51245C18.6544 12.7554 17.9907 16.6013 15.3641 19.2279C14.6381 19.9538 13.819 20.5298 12.9452 20.9559ZM4.05025 7.91421L9 2.96447L13.9497 7.91421C15.2741 9.23856 15.9568 10.9615 15.998 12.6969H2.00198C2.04315 10.9615 2.72591 9.23856 4.05025 7.91421Z" fill="#F88C3A"/>
                                            </svg>
                                        </div> */}
                                    </Td> 
                                    <Td>
                                        {/* <div className='w-8' > */}
                                            {item.product.productCode}
                                        {/* </div> */}
                                    </Td> 
                                    <Td>
                                        {/* <div className='w-32' > */}
                                            {item.level}
                                        {/* </div>  */}
                                    </Td>  
                                    {/* <Td> */}
                                    <Td>{item.user.name}</Td> 
                                    <Td>{DateFormat(item.date)}</Td> 
                                </Tr> 
                            )
                        })}
                    </Tbody> 
                </Table> 
            )}
            {!isLoading && (
                <> 
                    {data.data.stocks.length === 0 && (
                        <p className=' text-center my-8 font-Inter-Medium ' >No Records Found</p>
                    )}
                </>
            )}
        </div> 
    )
} 