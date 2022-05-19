import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router'
import { IUser, UserContext } from '../context/UserContext'
import DateFormat from '../DateFormat'
import PageLoader from '../PageLoader'

export default function DealsTable(props:any) {

    const navigate = useNavigate()
    const userContext: IUser = React.useContext(UserContext);  

    React.useEffect(() => {  
        userContext.setTab('Deals')
    },[]);  

    const { isLoading, error, data } = useQuery('AllDelivery', () =>
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

    const ClickHandler =(item: any)=> {
        navigate('info')
        localStorage.setItem('dealID', item) 
    }

    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    )     
    
    return (
        <div className='w-full relative' > 
            {!isLoading && (
                <div style={{border: '1px solid #DDE2E5'}} className=' w-auto overflow-x-auto rounded-2xl p-4 mt-8 bg-white ' >  
                    <Table variant='simple' >
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                            <Tr className=' font-Inter-SemiBold text-xl' >
                                <Th>No</Th>  
                                <Th>Client</Th>  
                                <Th>Product</Th> 
                                <Th>Quantity</Th>  
                                <Th>Bid</Th>  
                                <Th>Contact</Th>  
                                <Th>Deal ID </Th> 
                                <Th>Date</Th>  
                            </Tr>
                        </Thead>
                        <Tbody >
                            {[...data.data.delivery].reverse().map((item: any, index: any)=> {
                                if(item.deal.companyName.toLocaleLowerCase().includes(props.name.toLocaleLowerCase())){
                                    return(
                                        <Tr onClick={()=> ClickHandler(item.deal._id)} className=' cursor-pointer font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                            <Td>{index+1}</Td> 
                                            <Td>
                                                <div className='flex items-center' > 
                                                    <div className='w-20'>
                                                        {item.deal.companyName}
                                                    </div>
                                                    {!item.confirmedDelivery.receivedDeliveryNote && (
                                                        <svg className='ml-3' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9452 20.9559C9.58848 22.5927 5.42483 22.0167 2.63604 19.2279C-0.87868 15.7132 -0.87868 10.0147 2.63604 6.5L9 0.13604L15.364 6.5C16.2521 7.38819 16.9159 8.41583 17.3552 9.51245C18.6544 12.7554 17.9907 16.6013 15.3641 19.2279C14.6381 19.9538 13.819 20.5298 12.9452 20.9559ZM4.05025 7.91421L9 2.96447L13.9497 7.91421C15.2741 9.23856 15.9568 10.9615 15.998 12.6969H2.00198C2.04315 10.9615 2.72591 9.23856 4.05025 7.91421Z" fill="#F88C3A"/>
                                                        </svg>
                                                    )}
                                                </div>
                                            </Td> 
                                            <Td>
                                                {/* <div className='w-8' > */}
                                                    {item.deal.fuelType}
                                                {/* </div> */}
                                            </Td> 
                                            <Td>
                                                {/* <div className='w-32' > */}
                                                    {item.deal.quantity}
                                                {/* </div>  */}
                                            </Td>  
                                            <Td>{item.deal.askingPrice}</Td> 
                                            <Td> 
                                                <div className='flex items-center' > 
                                                    <div className=''>
                                                        {item.deal.email.substr(0, 6) + "..."}
                                                    </div>
                                                    <svg className='ml-auto' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.99255 6.9841C1.44027 6.9841 0.992554 7.43181 0.992554 7.9841C0.992554 8.34149 1.18004 8.65509 1.46202 8.83192L4.14964 11.5195C4.54016 11.9101 5.17333 11.9101 5.56385 11.5195C5.95438 11.129 5.95438 10.4958 5.56385 10.1053L4.44263 8.9841H11.9926C12.5448 8.9841 12.9926 8.53638 12.9926 7.9841C12.9926 7.43181 12.5448 6.9841 11.9926 6.9841L2.042 6.9841C2.03288 6.98397 2.02376 6.98397 2.01464 6.9841H1.99255Z" fill="black"/>
                                                        <path d="M16.0074 5.01589C16.5597 5.01589 17.0074 4.56818 17.0074 4.0159C17.0074 3.6585 16.82 3.3449 16.538 3.16807L13.8504 0.480454C13.4598 0.08993 12.8267 0.08993 12.4361 0.480454C12.0456 0.870978 12.0456 1.50414 12.4361 1.89467L13.5574 3.01589L6.00745 3.01589C5.45516 3.01589 5.00745 3.46361 5.00745 4.01589C5.00745 4.56818 5.45516 5.01589 6.00745 5.01589L15.958 5.01589C15.9671 5.01602 15.9762 5.01602 15.9854 5.01589H16.0074Z" fill="black"/>
                                                    </svg>
                                                </div>
                                            </Td> 
                                            <Td>
                                                <div className=''>
                                                    {item.deal._id.substr(0, 6) + "..." }
                                                </div>
                                            </Td> 
                                            <Td>{DateFormat(item.deal.createdAt)}</Td> 
                                        </Tr> 
                                    )
                                }
                            })}
                        </Tbody> 
                    </Table> 
                </div>
            )} 
        </div>
    )
} 
