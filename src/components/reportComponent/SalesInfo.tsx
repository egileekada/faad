import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../DateFormat'
import Requisition from './component/Requisition'

export default function SalesInfo(props: any) {

    // const data = [
    //     {
    //         client: 'Banji and Sons',
    //         id: 'FD123456',
    //         product: 'AGO',
    //         value: '400,000,000',
    //         requisitions: '10,000,000',
    //         cummilative: '380,000,000',
    //         date: '12-11-2019', 
    //     },
    //     {
    //         client: 'Banji and Sons',
    //         id: 'FD123456',
    //         product: 'AGO',
    //         value: '400,000,000',
    //         requisitions: '10,000,000',
    //         cummilative: '380,000,000',
    //         date: '12-11-2019', 
    //     },
    //     {
    //         client: 'Banji and Sons',
    //         id: 'FD123456',
    //         product: 'AGO',
    //         value: '400,000,000',
    //         requisitions: '10,000,000',
    //         cummilative: '380,000,000',
    //         date: '12-11-2019', 
    //     },
    //     {
    //         client: 'Banji and Sons',
    //         id: 'FD123456',
    //         product: 'AGO',
    //         value: '400,000,000',
    //         requisitions: '10,000,000',
    //         cummilative: '380,000,000',
    //         date: '12-11-2019', 
    //     },
    //     {
    //         client: 'Banji and Sons',
    //         id: 'FD123456',
    //         product: 'AGO',
    //         value: '400,000,000',
    //         requisitions: '10,000,000',
    //         cummilative: '380,000,000',
    //         date: '12-11-2019', 
    //     },
    //     {
    //         client: 'Banji and Sons',
    //         id: 'FD123456',
    //         product: 'AGO',
    //         value: '400,000,000',
    //         requisitions: '10,000,000',
    //         cummilative: '380,000,000',
    //         date: '12-11-2019', 
    //     },
    //     {
    //         client: 'Banji and Sons',
    //         id: 'FD123456',
    //         product: 'AGO',
    //         value: '400,000,000',
    //         requisitions: '10,000,000',
    //         cummilative: '380,000,000',
    //         date: '12-11-2019', 
    //     },
    //     {
    //         client: 'Banji and Sons',
    //         id: 'FD123456',
    //         product: 'AGO',
    //         value: '400,000,000',
    //         requisitions: '10,000,000',
    //         cummilative: '380,000,000',
    //         date: '12-11-2019', 
    //     },
    // ]

    const { isLoading, data } = useQuery('AllDelivery', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/delivery', {
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
            <svg onClick={()=> props.tab(0)} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            <div style={{border: '1px solid #DDE2E5'}} className=' w-auto overflow-x-auto rounded-2xl p-4 bg-white ' >  
                <Table variant='simple' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className=' font-Inter-SemiBold text-xl' >
                            <Th>No</Th>  
                            <Th>Client</Th>  
                            <Th>Deal ID</Th> 
                            <Th>Product</Th>  
                            <Th>Value</Th>  
                            <Th>Requisitions</Th>  
                            {/* <Th>Cummilative</Th>     */}
                            <Th>Date</Th>    
                        </Tr>
                    </Thead>
                    <Tbody >
                        {!isLoading && (
                            <> 
                                {props.month === 'prev' && (
                                    <>
                                        {[...data.data.delivery].reverse().filter((item: any)=> new Date(item.updatedAt).getMonth() !== new Date().getMonth() && new Date(item.updatedAt).getFullYear() === new Date().getFullYear()).map((item: any, index: any)=> { 
                                            return(
                                                <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                                    <Td>{index+1}</Td> 
                                                    <Td>{item.deal.companyName}</Td> 
                                                    <Td>{(item.deal._id).toUpperCase().substring(0, 7)}</Td> 
                                                    <Td>{item.deal.fuelType}</Td> 
                                                    <Td>{(item.deal.costBeforDispatched*item.deal.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Td> 
                                                    <Td><Requisition id={item.deal._id} /></Td> 
                                                    {/* <Td>{item.cummilative}</Td>   */}
                                                    <Td>{DateFormat(item.updatedAt)}</Td> 
                                                </Tr> 
                                            ) 
                                        })}

                                        {/* {data.data.delivery.length === 0 && (
                                            <Tr className=' font-Inter-Regular text-sm text-center '>No Record Found</Tr>
                                        )} */}
                                    </>
                                )}

                                {props.month === 'this' && (
                                    <>
                                        {[...data.data.delivery].reverse().filter((item: any)=> new Date(item.updatedAt).getMonth() === new Date().getMonth() && new Date(item.updatedAt).getFullYear() === new Date().getFullYear()).map((item: any, index: any)=> { 
                                            return(
                                                <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                                    <Td>{index+1}</Td> 
                                                    <Td>{item.deal.companyName}</Td> 
                                                    <Td>{(item.deal._id).toUpperCase().substring(0, 7)}</Td> 
                                                    <Td>{item.deal.fuelType}</Td> 
                                                    <Td>{(item.deal.costBeforDispatched*item.deal.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Td> 
                                                    <Td><Requisition id={item.deal._id} /></Td> 
                                                    {/* <Td>{item.cummilative}</Td>   */}
                                                    <Td>{DateFormat(item.updatedAt)}</Td> 
                                                </Tr> 
                                            ) 
                                        })}
                                    </>
                                )}

                                {props.month === 'all' && (
                                    <>
                                        {[...data.data.delivery].reverse().filter((item: any)=>  new Date(item.updatedAt).getFullYear() === new Date().getFullYear()).map((item: any, index: any)=> { 
                                            return(
                                                <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                                    <Td>{index+1}</Td> 
                                                    <Td>{item.deal.companyName}</Td> 
                                                    <Td>{(item.deal._id).toUpperCase().substring(0, 7)}</Td> 
                                                    <Td>{item.deal.fuelType}</Td> 
                                                    <Td>{(item.deal.costBeforDispatched*item.deal.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Td> 
                                                    <Td><Requisition id={item.deal._id} /></Td> 
                                                    {/* <Td>{item.cummilative}</Td>   */}
                                                    <Td>{DateFormat(item.updatedAt)}</Td> 
                                                </Tr> 
                                            ) 
                                        })}
                                    </>
                                )}
                            </>
                        )}
                    </Tbody> 
                </Table> 
            </div> 
        </div>
    )
} 