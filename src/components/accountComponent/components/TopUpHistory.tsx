import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat';

export default function TopUpHistory(props: any) {
 
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

    React.useEffect(() => {
      return () => {
        refetch() 
      };
    }, [props.reload])

    // console.log(data);
    // const t1 = setTimeout(() => { 
    //     clearTimeout(t1);
    // }, 1000); 
     

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
                                        {item?.tank?.tankId} 
                                    </Td> 
                                    <Td>
                                        {/* <div className='w-8' > */}
                                            {item.product.productCode}
                                        {/* </div> */}
                                    </Td> 
                                    <Td>
                                        {/* <div className='w-32' > */}
                                            {item?.oldLevel ? item.level - item?.oldLevel : item.level - 0}
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