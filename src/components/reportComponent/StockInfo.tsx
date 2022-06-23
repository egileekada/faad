import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../DateFormat'

export default function StockInfo(props: any) {

    const dataAll = [
        {
            month: 'January', 
            product: 'AGO',
            stockin: '2,000,000ℓ',
            stoctout: '1,800,000ℓ',
            closestock: '200,000ℓ', 
        },
        {
            month: 'January', 
            product: 'AGO',
            stockin: '2,000,000ℓ',
            stoctout: '1,800,000ℓ',
            closestock: '200,000ℓ', 
        },
        {
            month: 'January', 
            product: 'AGO',
            stockin: '2,000,000ℓ',
            stoctout: '1,800,000ℓ',
            closestock: '200,000ℓ', 
        },
        {
            month: 'January', 
            product: 'AGO',
            stockin: '2,000,000ℓ',
            stoctout: '1,800,000ℓ',
            closestock: '200,000ℓ', 
        },
        {
            month: 'January', 
            product: 'AGO',
            stockin: '2,000,000ℓ',
            stoctout: '1,800,000ℓ',
            closestock: '200,000ℓ', 
        },
        {
            month: 'January', 
            product: 'AGO',
            stockin: '2,000,000ℓ',
            stoctout: '1,800,000ℓ',
            closestock: '200,000ℓ', 
        },
        {
            month: 'January', 
            product: 'AGO',
            stockin: '2,000,000ℓ',
            stoctout: '1,800,000ℓ',
            closestock: '200,000ℓ', 
        },
    ]

     
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
                            <Th>Month</Th>   
                            <Th>Product</Th>  
                            <Th>Stock in</Th>  
                            <Th>Stock out</Th>  
                            <Th>Closing stock</Th>  
                        </Tr>
                    </Thead>
                    <Tbody >
                        {!isLoading && (
                            <> 
                                {[...data.data.stocks].filter((item: any)=> new Date(item.date).getMonth() === new Date().getMonth() && new Date(item.date).getFullYear() === new Date().getFullYear() && item.isAdding === true && item.product !== null && item.product.productCode === props.type).reverse().map((item: any, index: any)=> { 
                                    return(
                                        <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                            <Td>{index+1}</Td> 
                                            <Td>{DateFormat(item.date)}</Td>  
                                            <Td>{item.product.productCode}</Td> 
                                            <Td>{item.level}</Td> 
                                            <Td>{item.level}</Td> 
                                            <Td>{item.level}</Td>   
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