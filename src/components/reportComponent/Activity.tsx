import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import DateFormat from '../DateFormat';
import { BASEURL } from '../../assets/BasicUrl/Url';

export default function Activity() { 

    const { isLoading, data, refetch } = useQuery('AllDeals', () =>
        fetch(BASEURL.URL+'deals', {
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
            <div style={{border: '1px solid #DDE2E5'}} className=' w-auto overflow-x-auto rounded-2xl p-4 mt-8 bg-white ' >  
                <Table variant='simple' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className=' font-Inter-SemiBold text-xl' >
                            <Th>No</Th>  
                            <Th>User</Th>  
                            <Th>Permission</Th> 
                            <Th>Date</Th>  
                            {/* <Th>Action</Th>     */}
                        </Tr>
                    </Thead>
                    <Tbody >
                        {!isLoading && (
                            <> 
                                {[...data.data.deals].filter((item: any)=> item.createdBy !== undefined).reverse().slice(from-1, to).map((item: any, index: any)=> { 
                                    return(
                                        <Tr className=' cursor-pointer font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                            <Td>{[...data.data.deals].filter((item: any)=> item.createdBy !== undefined).reverse().map((object: any) => object._id).indexOf(item._id)+1}</Td> 
                                            <Td>{item.createdBy.name}</Td> 
                                            <Td>{item.status === 'accepted' ? 'Edited deal '+(item._id).slice(0, 7) : item.status === 'completed' ? 'Completed deal '+(item._id).slice(0, 7) : 'Created deal '+(item._id).slice(0, 7)}</Td> 
                                            <Td>{DateFormat(item.updatedAt)}</Td> 
                                            {/* <Td>
                                                <div className='flex' >
                                                    <p className=' font-Inter-SemiBold text-[#00BE00] ' >Approve</p>
                                                    <p className=' font-Inter-SemiBold ml-6 text-[#FF1F1F] ' >Deny</p>
                                                </div>    
                                            </Td>   */}
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
                    {limit < data.data.deals.filter((item: any)=> item.createdBy !== undefined).length && (

                        <div className='flex items-center mt-6' >
                            <button onClick={()=> PrevPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' > 
                                <IoIosArrowBack color='#878787' />
                            </button>
                                <div style={{borderColor: '#C2C2C2'}} className='w-auto h-10 font-Graphik-Bold rounded-lg flex border mx-2'> 
                                    {[...data.data.deals].filter((item: any)=> item.createdBy !== undefined).reverse().filter((item: any, index: any)=> index % limit === 0).map((item: any, index: any)=> {
                                        if(index <= 10){
                                            return( 
                                                <div onClick={()=> OnTabPage(index+1)} style={tabIndex=== index+1 ? {backgroundColor: '#3E3F41'}:{color: '#202020'}} className='w-10 cursor-pointer h-10 rounded-lg flex text-white justify-center items-center' >
                                                    {index+1}
                                                </div>
                                            )
                                        }  
                                    })} 
                                </div>
                            <button disabled={to >= data.data.deals.filter((item: any)=> item.createdBy !== undefined).length ? true: false} onClick={()=> NextPage()} style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' >
                                <IoIosArrowForward color='#878787' />
                            </button>
                        </div>
                    )}
                </>
            )} 
        </div>
    )
} 
