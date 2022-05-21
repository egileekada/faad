import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat'
import PageLoader from '../../PageLoader'

export default function DealHistory(props: any) {

    const { isLoading, data } = useQuery('AllDeals', () =>
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

    console.log(data);
    

    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    )

    return (
        <div className=' flex flex-1 p-4 mt-2 bg-white ' >  
            <Table variant='unstyled' >
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                    <Tr className=' font-Inter-SemiBold text-xl' >
                        {/* <Th>No</Th>   */}
                        <Th>Product</Th>  
                        <Th>Quantity</Th> 
                        <Th>Bid</Th>  
                        <Th>Contact</Th>  
                        <Th>Deal ID</Th>  
                        <Th>Date</Th> 
                    </Tr>
                </Thead>
                <Tbody >
                    {data.data.deals.map((item: any, index: any)=> {
                        if(item.companyName === props.name) {
                            return(
                                <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                    {/* <Td>{index+1}</Td>  */}
                                    <Td>{item.fuelType}</Td> 
                                    <Td>{item.quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Td> 
                                    <Td>{item.askingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Td>  
                                    <Td>
                                        <div className='flex items-center' >
                                            {item.email.slice(0,8)+'...'}
                                            <svg className='ml-3' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.99255 6.9841C1.44027 6.9841 0.992554 7.43181 0.992554 7.9841C0.992554 8.34149 1.18004 8.65509 1.46202 8.83192L4.14964 11.5195C4.54016 11.9101 5.17333 11.9101 5.56385 11.5195C5.95438 11.129 5.95438 10.4958 5.56385 10.1053L4.44263 8.9841H11.9926C12.5448 8.9841 12.9926 8.53638 12.9926 7.9841C12.9926 7.43181 12.5448 6.9841 11.9926 6.9841L2.042 6.9841C2.03288 6.98397 2.02376 6.98397 2.01464 6.9841H1.99255Z" fill="black"/>
                                                <path d="M16.0074 5.01589C16.5597 5.01589 17.0074 4.56818 17.0074 4.0159C17.0074 3.6585 16.82 3.3449 16.538 3.16807L13.8504 0.480454C13.4598 0.08993 12.8267 0.08993 12.4361 0.480454C12.0456 0.870978 12.0456 1.50414 12.4361 1.89467L13.5574 3.01589L6.00745 3.01589C5.45516 3.01589 5.00745 3.46361 5.00745 4.01589C5.00745 4.56818 5.45516 5.01589 6.00745 5.01589L15.958 5.01589C15.9671 5.01602 15.9762 5.01602 15.9854 5.01589H16.0074Z" fill="black"/>
                                            </svg>
                                        </div>
                                    </Td> 
                                    <Td>{item._id.slice(0,6)+'...'}</Td>  
                                    <Td>{DateFormat(item.updatedAt)}</Td>  
                                </Tr> 
                            ) 
                        }
                    })}
                </Tbody> 
            </Table> 
        </div> 
    )
} 