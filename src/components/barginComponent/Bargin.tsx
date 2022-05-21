import { Input, Select, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../context/UserContext'
import PageLoader from '../PageLoader'

export default function Bargin() {
 
    const navigate = useNavigate()
    const [tab, setTab] = React.useState(false) 
    const [name, setName] = React.useState('')  
    const userContext: IUser = React.useContext(UserContext);  
    
    React.useEffect(() => {  
        userContext.setTab('Bargains')
    },[]); 

    const { isLoading, data } = useQuery('AllBargains', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/bargain', {
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
        localStorage.setItem('barginID', item) 
    }

    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    )   

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <div className='w-auto flex flex-col flex-1 ' > 
                <div className='w-full flex items-center font-Inter-Regular relative' > 
                    <div className='w-64' >
                        <Input onChange={(e)=> setName(e.target.value)} border='1px solid #DDE2E5' className='relative z-30' backgroundColor='white' placeholder='Search by prospect' fontSize='sm' /> 
                    </div>
                    <div className='w-full flex items-center absolute justify-center inset-0' >
                        <div className='p-1 bg-[rgba(224,224,224,0.5)] rounded-xl flex' style={{boxShadow: 'inset 0px 1px 2px rgba(97, 97, 97, 0.2), inset 0px 2px 4px rgba(97, 97, 97, 0.2)'}}  >
                            <div onClick={()=> setTab(false)} className={!tab ? 'w-20 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-20 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'} >
                                Bargains
                            </div>
                            <div onClick={()=> setTab(true)} className={tab ? 'w-20 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-20 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'}  >
                                Orders
                            </div>
                        </div>
                    </div>
                    <button  onClick={()=> navigate('createbargin')} className=' relative rounded w-36 flex justify-center items-center h-10 font-Inter-SemiBold ml-auto text-sm text-white bg-[#F88C3A]' >
                        <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="white"/>
                        </svg>
                        New Bargain
                    </button>
                </div> 
                <div style={{border: '1px solid #DDE2E5'}} className=' flex flex-1 overflow-x-auto rounded-2xl p-4 mt-8 bg-white ' > 
                    {!isLoading && (
                        <Table variant='simple' >
                            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                            <Thead>
                                <Tr className=' font-Inter-SemiBold text-xl' >
                                    <Th>No</Th>  
                                    <Th>Prospect</Th>  
                                    <Th>Product</Th> 
                                    <Th>Address</Th>  
                                    <Th>Quantity</Th>  
                                    <Th>Ask </Th> 
                                    <Th>Bid</Th>  
                                    <Th>Contact</Th>  
                                </Tr>
                            </Thead>
                            <Tbody >
                                {[...data.data.baragins].reverse().map((item: any, index: any)=> {
                                    if(item.companyName.toLocaleLowerCase().includes(name.toLocaleLowerCase())){
                                        return(
                                            <Tr onClick={()=> ClickHandler(item._id)} className=' cursor-pointer font-Inter-Regular text-sm ' key={index} >
                                                <Td>{index+1}</Td> 
                                                <Td>{item.companyName}</Td> 
                                                <Td>
                                                    {/* <div className='w-8' > */}
                                                        {item.fuel}
                                                    {/* </div> */}
                                                </Td> 
                                                <Td>
                                                    {/* <div className='w-32' > */}
                                                        {item.address}
                                                    {/* </div>  */}
                                                </Td>  
                                                <Td>{item.askingPrice}</Td> 
                                                <Td>{item.quantity}</Td> 
                                                <Td>{item.biddingPrice}</Td> 
                                                <Td>
                                                    <div className='flex items-center' >
                                                        {item.email}
                                                        <svg className='ml-3' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.99255 6.9841C1.44027 6.9841 0.992554 7.43181 0.992554 7.9841C0.992554 8.34149 1.18004 8.65509 1.46202 8.83192L4.14964 11.5195C4.54016 11.9101 5.17333 11.9101 5.56385 11.5195C5.95438 11.129 5.95438 10.4958 5.56385 10.1053L4.44263 8.9841H11.9926C12.5448 8.9841 12.9926 8.53638 12.9926 7.9841C12.9926 7.43181 12.5448 6.9841 11.9926 6.9841L2.042 6.9841C2.03288 6.98397 2.02376 6.98397 2.01464 6.9841H1.99255Z" fill="black"/>
                                                            <path d="M16.0074 5.01589C16.5597 5.01589 17.0074 4.56818 17.0074 4.0159C17.0074 3.6585 16.82 3.3449 16.538 3.16807L13.8504 0.480454C13.4598 0.08993 12.8267 0.08993 12.4361 0.480454C12.0456 0.870978 12.0456 1.50414 12.4361 1.89467L13.5574 3.01589L6.00745 3.01589C5.45516 3.01589 5.00745 3.46361 5.00745 4.01589C5.00745 4.56818 5.45516 5.01589 6.00745 5.01589L15.958 5.01589C15.9671 5.01602 15.9762 5.01602 15.9854 5.01589H16.0074Z" fill="black"/>
                                                        </svg>
                                                    </div>
                                                </Td> 
                                            </Tr> 
                                        )
                                    }
                                })}
                            </Tbody> 
                        </Table> 
                    )}
                </div> 
            </div>
        </div>
    )
} 