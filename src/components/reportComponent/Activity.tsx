import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { IUser, UserContext } from '../context/UserContext';
import DateFormat from '../DateFormat'

export default function Activity() {

    const userContext: IUser = React.useContext(UserContext);  

    console.log(userContext.userData._id);
    // const data = [
    //     {
    //         user: 'Beauty Bagins',
    //         activity: 'Changed password',
    //         contact: 'beauty@faadoil.com',
    //         date: '12-11-2019'
    //     },
    //     {
    //         user: 'Beauty Bagins',
    //         activity: 'Changed password',
    //         contact: 'beauty@faadoil.com',
    //         date: '12-11-2019'
    //     },
    //     {
    //         user: 'Beauty Bagins',
    //         activity: 'Changed password',
    //         contact: 'beauty@faadoil.com',
    //         date: '12-11-2019'
    //     },
    //     {
    //         user: 'Beauty Bagins',
    //         activity: 'Changed password',
    //         contact: 'beauty@faadoil.com',
    //         date: '12-11-2019'
    //     },
    //     {
    //         user: 'Beauty Bagins',
    //         activity: 'Changed password',
    //         contact: 'beauty@faadoil.com',
    //         date: '12-11-2019'
    //     }
    // ]


    const { isLoading, data } = useQuery('AllActivty', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/activity', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    ) 

    // React.useEffect(() => {
       
    //     {[...data.data].reverse().map((item: any, index: any)=> { 
    //         fetch(`https://faadoli.herokuapp.com/api/v1/auth/user/${item._id}`, {
    //             method: 'GET', // or 'PUT'
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization : `Bearer ${localStorage.getItem('token')}`
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(data => {        
    //             console.log(data);
                
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error); 
    //         },);  
    //     })}
    // },)

    console.log(data)

    return (
        
        <div className='w-full relative' > 
            <div style={{border: '1px solid #DDE2E5'}} className=' w-auto overflow-x-auto rounded-2xl p-4 mt-8 bg-white ' >  
                <Table variant='simple' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className=' font-Inter-SemiBold text-xl' >
                            <Th>No</Th>  
                            <Th>User</Th>  
                            <Th>Activity</Th> 
                            <Th>Contact</Th>  
                            <Th>Date</Th>    
                        </Tr>
                    </Thead>
                    <Tbody >
                        {/* {[...data].reverse().map((item: any, index: any)=> { 
                            return(
                                <Tr className=' font-Inter-Regular text-sm ' key={index} paddingBottom='30px' >
                                    <Td>{index+1}</Td> 
                                    <Td>{item.user}</Td> 
                                    <Td>{item.activity}</Td> 
                                    <Td>{item.contact}</Td> 
                                    <Td>{item.date}</Td> 
                                </Tr> 
                            ) 
                        })} */}
                    </Tbody> 
                </Table> 
            </div> 
        </div>
    )
} 