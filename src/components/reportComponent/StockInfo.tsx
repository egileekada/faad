import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useQuery } from 'react-query'
import DateFormat from '../DateFormat'
import { BASEURL } from '../../assets/BasicUrl/Url'

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

    const OnTabPage =(item: any)=> {
        setTabIndex(item)

        setFrom((limit * item) - (limit - 1))
        setTo(limit * item)
    }
    
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
                                {[...data.data.stocks].filter((item: any)=> new Date(item.date).getFullYear() === new Date().getFullYear() && item.product !== null && item.product.productCode === props.type).reverse().slice(from-1, to).map((item: any, index: any)=> { 
                                    return(
                                        <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                            <Td>{[...data.data.stocks].filter((item: any)=> new Date(item.date).getFullYear() === new Date().getFullYear() && item.product !== null && item.product.productCode === props.type).reverse().map((object: any) => object._id).indexOf(item._id)+1}</Td> 
                                            <Td>{DateFormat(item.date)}</Td>  
                                            <Td>{item.product.productCode}</Td> 
                                            <Td>{item.isAdding === true && item?.oldLevel ? (item.level - item?.oldLevel).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0 }</Td> 
                                            <Td>{item.isAdding === false ? (item.level).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0 }</Td> 
                                            <Td>{item.level}</Td>   
                                        </Tr> 
                                    ) 
                                })}
                            </>
                        )}
                    </Tbody> 
                </Table> 
            </div> 
            
            {!isLoading && (
                <>    
                    {limit < data.data.stocks.filter((item: any)=> new Date(item.date).getFullYear() === new Date().getFullYear() && item.product !== null && item.product.productCode === props.type).length && (

                        <div className='flex items-center mt-6' >
                            <button onClick={()=> PrevPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' > 
                                <IoIosArrowBack color='#878787' />
                            </button>
                                <div style={{borderColor: '#C2C2C2'}} className='w-auto h-10 font-Graphik-Bold rounded-lg flex border mx-2'> 
                                    {[...data.data.stocks].filter((item: any)=> new Date(item.date).getFullYear() === new Date().getFullYear() && item.product !== null && item.product.productCode === props.type).reverse().filter((item: any, index: any)=> index % limit === 0).map((item: any, index: any)=> {
                                        if(index <= 10){
                                            return( 
                                                <div onClick={()=> OnTabPage(index+1)} style={tabIndex=== index+1 ? {backgroundColor: '#3E3F41'}:{color: '#202020'}} className='w-10 cursor-pointer h-10 rounded-lg flex text-white justify-center items-center' >
                                                    {index+1}
                                                </div>
                                            )
                                        }  
                                    })} 
                                </div>
                            <button disabled={to >= data.data.stocks.filter((item: any)=> new Date(item.date).getFullYear() === new Date().getFullYear() && item.product !== null && item.product.productCode === props.type).length ? true: false} onClick={()=> NextPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' >
                                <IoIosArrowForward color='#878787' />
                            </button>
                        </div>
                    )}
                </>
            )} 
        </div>
    )
} 
