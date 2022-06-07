import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import AddRequisition from '../Modal/AddRequisition'
import DateFormat from '../../DateFormat' 
import PageLoader from '../../PageLoader'
import { IUser, UserContext } from '../../context/UserContext'

export default function Requisition(props: any) {
    
    const dataLocal = [
        { 
            title: 'Truck repair', 
            amount: '20,000',  
            paid: 'Falz D Bad guy',  
            date: '19-02-2022 - 5:30', 
            cummulative: '20,000',
        }, 
        { 
            title: 'Truck repair', 
            amount: '20,000',  
            paid: 'Falz D Bad guy',  
            date: '19-02-2022 - 5:30', 
            cummulative: '20,000',
        }, 
        { 
            title: 'Truck repair', 
            amount: '20,000',  
            paid: 'Falz D Bad guy',  
            date: '19-02-2022 - 5:30', 
            cummulative: '20,000',
        }, 
    ]
    const [showModal, setShowModal] = React.useState(false)
    const [show, setShow] = React.useState(false)
    const [number, setNumber] = React.useState([] as any)
    const [total, setTotal] = React.useState(0)
    const userContext: IUser = React.useContext(UserContext); 

    console.log(props.id);
    
    const { isLoading, data } = useQuery('AllRequisition', () =>
        fetch(`https://faadoli.herokuapp.com/api/v1/requisition`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    )    

    console.log(data); 
    //  React.use

    return (
        <div> 
            {!show && (
                <> 
                    <p className='font-Inter-SemiBold mt-8 bg-[#F88C3A] text-white px-10 py-2' >Requisitions</p>
                    
                    <div className=' flex flex-1 flex-col p-4 mt-2 bg-white ' >  
                        {!isLoading && (
                            <> 
                                <Table variant='unstyled' >
                                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                                    <Thead>
                                        <Tr className=' font-Inter-SemiBold text-xl' >
                                            <Th>No</Th>  
                                            <Th>Title</Th>  
                                            <Th>Amount(N)</Th> 
                                            <Th>Paid to</Th>  
                                            <Th>Date</Th>  
                                            <Th>Cummulative</Th>   
                                        </Tr>
                                    </Thead>
                                    <Tbody > 
                                        {data.data.filter((item: any) => item.deal !== null && item.deal._id === props.id).map((item: any, index: any)=> {  
                                            number.splice(index, 1, item.amount);
                                            
                                            return(
                                                <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                                    <Td>{index+1}</Td> 
                                                    <Td>{item.title}</Td> 
                                                    <Td>{item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </Td> 
                                                    <Td>{item.paidTo}</Td>  
                                                    <Td>{DateFormat(item.date)}</Td>  
                                                    <Td>{number.filter((item: any, id: any) => id  <= index).reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Td>  
                                                </Tr> 
                                            )  
                                        })}
                                    </Tbody> 
                                </Table> 

                                {/* {data.data.filter((item: any) => item.deal !== props.id).map((item: any, index: any)=> {
                                    
                                    if(item.deal !== undefined)
                                        if(index === 0){
                                            console.log(item);
                                            return(
                                                <p className='font-Inter-Medium text-center my-4 text-sm' >No Record Found</p>
                                            )
                                        }
                                })}  */}
                            </>
                        )} 
                    </div> 
                </>
            )}

            {userContext.userData.department.toLowerCase() !== 'Operations'.toLowerCase() && (
                <div onClick={()=> setShowModal(true)} className='flex mt-4 items-center ml-10 cursor-pointer' >
                    <svg className='mr-3' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 4.5C10.5523 4.5 11 4.94772 11 5.5V9.5H15C15.5523 9.5 16 9.94771 16 10.5C16 11.0523 15.5523 11.5 15 11.5H11V15.5C11 16.0523 10.5523 16.5 10 16.5C9.44771 16.5 9 16.0523 9 15.5V11.5H5C4.44772 11.5 4 11.0523 4 10.5C4 9.94771 4.44772 9.5 5 9.5H9V5.5C9 4.94772 9.44771 4.5 10 4.5Z" fill="#ACB5BD"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 20.5C1.34315 20.5 0 19.1569 0 17.5V3.5C0 1.84315 1.34315 0.5 3 0.5H17C18.6569 0.5 20 1.84315 20 3.5V17.5C20 19.1569 18.6569 20.5 17 20.5H3ZM2 17.5C2 18.0523 2.44772 18.5 3 18.5H17C17.5523 18.5 18 18.0523 18 17.5V3.5C18 2.94772 17.5523 2.5 17 2.5H3C2.44772 2.5 2 2.94772 2 3.5V17.5Z" fill="#ACB5BD"/>
                    </svg>
                    <p className='font-Inter-Regular text-[#F88C3A] underline text-sm ' >Add requisition</p> 
                </div> 
            )}
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <AddRequisition id={props.id} close={setShowModal} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
} 