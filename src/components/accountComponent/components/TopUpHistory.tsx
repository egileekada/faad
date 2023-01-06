import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useQuery } from 'react-query'
import DateFormat from '../../DateFormat';
import { BASEURL } from '../../../assets/BasicUrl/Url';

export default function TopUpHistory(props: any) {
 
    const { isLoading, data, refetch } = useQuery('AllStock', () =>
        fetch(BASEURL.URL+'stock', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )    

    let limit = 10
    const [tabIndex, setTabIndex] = React.useState(1)
    const [from, setFrom] = React.useState(1)
    const [to, setTo] = React.useState(limit)
    console.log(data);
    

    const NextPage =()=> {
        setTabIndex(tabIndex+1)
        setFrom(from+limit)
        setTo(to+limit)
    }

    const PrevPage =()=> {
        if(tabIndex <= 1){
        } else {

            setTabIndex(tabIndex-1)

            setFrom(from-limit)
            setTo(to-limit)
        }
    }
    
    React.useEffect(() => {
      return () => {
        refetch() 
      };
    }, [props.reload])

    const OnTabPage =(item: any)=> {
        setTabIndex(item)

        setFrom((limit * item) - (limit - 1))
        setTo(limit * item)
    }
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
                        {[...data.data.stocks].filter((item: any)=> item.product !== null && item.user !== null && item?.isAdding === true).reverse().slice(from-1, to).map((item:any , index: any)=> {
                            return(
                                <Tr className=' cursor-pointer font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                    <Td>{[...data.data.stocks].reverse().filter((item: any)=>  item.product !== null && item.user !== null && item?.isAdding === true).map((object: any) => object._id).indexOf(item._id)+1}</Td> 
                                    <Td>
                                        {item?.tank[0]?.tankId} 
                                    </Td> 
                                    <Td>
                                        {/* <div className='w-8' > */}
                                            {item.product?.productCode}
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

            {!isLoading && (
                <>    
                    {limit < data.data.stocks.filter((item: any)=>  item.product !== null && item.user !== null && item?.isAdding === true).length && (

                        <div className='flex items-center mt-6' >
                            <button onClick={()=> PrevPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' > 
                                <IoIosArrowBack color='#878787' />
                            </button>
                                <div style={{borderColor: '#C2C2C2'}} className='w-auto h-10 font-Graphik-Bold rounded-lg flex border mx-2'> 
                                    {[...data.data.stocks].filter((item: any)=>  item.product !== null && item.user !== null && item?.isAdding === true).reverse().filter((item: any, index: any)=> index % limit === 0).map((item: any, index: any)=> {
                                        if(index <= 10){
                                            return( 
                                                <div onClick={()=> OnTabPage(index+1)} style={tabIndex=== index+1 ? {backgroundColor: '#3E3F41'}:{color: '#202020'}} className='w-10 cursor-pointer h-10 rounded-lg flex text-white justify-center items-center' >
                                                    {index+1}
                                                </div>
                                            )
                                        }  
                                    })} 
                                </div>
                            <button disabled={to >= data.data.stocks.filter((item: any)=>  item.product !== null && item.user !== null && item?.isAdding === true).length ? true: false} onClick={()=> NextPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' >
                                <IoIosArrowForward color='#878787' />
                            </button>
                        </div>
                    )}
                </>
            )} 
        </div> 
    )
} 
