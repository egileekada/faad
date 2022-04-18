import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ClienteleInfo() {

    const navigate = useNavigate()
    const data = [
        { 
            product: 'AGO', 
            qty: '20,000 ℓ',  
            bid: '185.67',  
            contact: 'jesica@schlumbeger.com', 
            deal: 'FA2343-B3',
            date: '19-02-2022 - 5:30', 
        }, 
        { 
            product: 'AGO', 
            qty: '20,000 ℓ',  
            bid: '185.67',  
            contact: 'jesica@schlumbeger.com', 
            deal: 'FA2343-B3',
            date: '19-02-2022 - 5:30', 
        }, 
        { 
            product: 'AGO', 
            qty: '20,000 ℓ',  
            bid: '185.67',  
            contact: 'jesica@schlumbeger.com', 
            deal: 'FA2343-B3',
            date: '19-02-2022 - 5:30', 
        }, 
        { 
            product: 'AGO', 
            qty: '20,000 ℓ',  
            bid: '185.67',  
            contact: 'jesica@schlumbeger.com', 
            deal: 'FA2343-B3',
            date: '19-02-2022 - 5:30', 
        }, 
    ]
    
    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <svg onClick={()=> navigate('/dashboard/clientele')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            <div style={{border: '1px solid #DDE2E5'}} className=' w-full h-auto overflow-y-auto rounded-2xl py-10  my-8 bg-white flex flex-col ' >    
                <div className='w-full flex px-10' > 
                    <div className='' >
                        <p className='font-Inter-SemiBold text-2xl ' >PricewaterhouseCoopers (PwC)</p>
                        <p className='font-Inter-Regular text-sm ' >Professional services</p> 
                    </div>
                    <div className='ml-auto' >
                        <p className='font-Inter-Regular text-sm ' >Onboarded •12-01-2020</p>  
                    </div> 
                </div>
                <div className='w-full flex items-end px-10' >
                    <div className='w-auto flex flex-1 flex-col' > 
                        <p className='font-Inter-Regular mt-4 text-sm  ' >16, Alaska street, East west road, Before the bridge, Port Harcourt. Rivers State</p>
                        <p className='font-Inter-Regular mt-2 text-sm  ' >jesica@schlumbeger.com</p>
                        <p className='font-Inter-Regular mt-2 text-sm my-2  ' >+2348133223322</p>
                    </div>

                    <button onClick={()=> navigate('/dashboard/clientele/clientprofile')} className='font-Inter-SemiBold text-xs mb-3 h-10 text-white rounded-lg px-4 bg-[#F88C3A] ' >Edit client profile</button>
                </div>

                <p className='font-Inter-SemiBold mb-2 mt-3 bg-[#F8F9FA] px-10 py-2' >Contact Person(s)</p> 
                <div className='w-full grid-cols-3 grid gap-4 my-2  px-10' >
                    <p className='font-Inter-Bold text-sm flex '  >Dele Sanchos 
                        <span className=' ml-3 font-Inter-Regular mr-3 flex flex-col' >
                            <span>dele.canchos@pwc.com</span>
                            <span className='mt-2' >+23487878787</span>
                        </span>
                    </p>
                    <p className='font-Inter-Bold text-sm flex '  >Sisco Ramon 
                        <span className=' ml-3 font-Inter-Regular mr-3 flex flex-col' >
                            <span>sisco.ramon@pwc.com</span>
                            <span className='mt-2' >+23487878787</span>
                        </span>
                    </p>
                    <p className='font-Inter-Bold text-sm flex '  >Zlatan Ibile
                        <span className=' ml-3 font-Inter-Regular mr-3 flex flex-col' >
                            <span>dele.canchos@pwc.com</span>
                            <span className='mt-2' >+23487878787</span>
                        </span>
                    </p> 
                </div>
                <p className='font-Inter-SemiBold mb-2 mt-3 bg-[#F8F9FA] px-10 py-2' >Deal History</p>

                <div className=' flex flex-1 p-4 mt-2 bg-white ' >  
                    <Table variant='unstyled' >
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                            <Tr className=' font-Inter-SemiBold text-xl' >
                                <Th>No</Th>  
                                <Th>Product</Th>  
                                <Th>Quantity</Th> 
                                <Th>Bid</Th>  
                                <Th>Contact</Th>  
                                <Th>Deal ID</Th>  
                                <Th>Date</Th> 
                            </Tr>
                        </Thead>
                        <Tbody >
                            {data.map((item, index)=> {
                                return(
                                    <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                        <Td>{index+1}</Td> 
                                        <Td>{item.product}</Td> 
                                        <Td>{item.qty} </Td> 
                                        <Td>{item.bid}</Td>  
                                        <Td>
                                            <div className='flex items-center' >
                                                {item.contact}
                                                <svg className='ml-3' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.99255 6.9841C1.44027 6.9841 0.992554 7.43181 0.992554 7.9841C0.992554 8.34149 1.18004 8.65509 1.46202 8.83192L4.14964 11.5195C4.54016 11.9101 5.17333 11.9101 5.56385 11.5195C5.95438 11.129 5.95438 10.4958 5.56385 10.1053L4.44263 8.9841H11.9926C12.5448 8.9841 12.9926 8.53638 12.9926 7.9841C12.9926 7.43181 12.5448 6.9841 11.9926 6.9841L2.042 6.9841C2.03288 6.98397 2.02376 6.98397 2.01464 6.9841H1.99255Z" fill="black"/>
                                                    <path d="M16.0074 5.01589C16.5597 5.01589 17.0074 4.56818 17.0074 4.0159C17.0074 3.6585 16.82 3.3449 16.538 3.16807L13.8504 0.480454C13.4598 0.08993 12.8267 0.08993 12.4361 0.480454C12.0456 0.870978 12.0456 1.50414 12.4361 1.89467L13.5574 3.01589L6.00745 3.01589C5.45516 3.01589 5.00745 3.46361 5.00745 4.01589C5.00745 4.56818 5.45516 5.01589 6.00745 5.01589L15.958 5.01589C15.9671 5.01602 15.9762 5.01602 15.9854 5.01589H16.0074Z" fill="black"/>
                                                </svg>
                                            </div>
                                        </Td> 
                                        <Td>{item.deal}</Td>  
                                        <Td>{item.date}</Td>  
                                    </Tr> 
                                )
                            })}
                        </Tbody> 
                    </Table> 
                </div> 
            </div>  
        </div>
    )
}  
