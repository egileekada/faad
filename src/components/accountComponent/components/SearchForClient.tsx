import { Select } from '@chakra-ui/react';
import React from 'react'
import { useQuery } from 'react-query';
import { BASEURL } from '../../../assets/BasicUrl/Url';

export default function SearchForClient(props: any) {
 
    const { isLoading, data } = useQuery('SearchAllProfile', () =>
        fetch(BASEURL.URL+'auth/profile/all', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   

    const OnChangeHandle =async(item: any)=> {
        // console.log(item) 
        props.index(item)
    }   

    return (
        <div className='w-full  ' > 
            {!isLoading && ( 
                <> 
                    <div className='flex font-Inter-Regular mt-4 items-center' >  
                        {/* <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 font-Inter-Regular ' >{props.name}</p>  */}
                        <div className='w-full flex items-center relative' >
                            <div className='w-full' >
                                <Select onChange={(e)=> OnChangeHandle(e.target.value)} placeholder='Search' fontSize='sm' >
                                    {data.data.users.map((item: any, index: any ) => {
                                        if(item.department === props.role){
                                            return(
                                                <option className='' key={index} value={item._id} >{item.name}</option>
                                            )
                                        }
                                    })}
                                </Select>
                            </div>  
                        </div>
                    </div> 
                </>
            )}
        </div>
    )
} 
