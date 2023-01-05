import { Select } from '@chakra-ui/react';
import console from 'console';
import React from 'react'
import { useQuery } from 'react-query';

export default function SearchForClient(props: any) {
 
    const { isLoading, data } = useQuery('SearchAllProfile', () =>
        fetch('https://obscure-oasis-95161.herokuapp.com/api/v1/auth/profile/all', {
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

    // console.log(props.default)

    return (
        <div className='w-full  ' > 
            {!isLoading && ( 
                <> 
                    <div className='flex font-Inter-Regular mt-4 items-center' >  
                        <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 font-Inter-Regular ' >{props.name}</p> 
                        <div className='w-96 flex items-center relative' >
                            <div className='w-full' >
                                <Select onChange={(e)=> OnChangeHandle(e.target.value)} fontSize='sm' >
                                    {data.data.users.map((item: any, index: any ) => {
                                        if(item.department === props.role){
                                            return(
                                                <>
                                                    <option key={props.id} >{props.show ? ''+props.default : 'Search'}</option>
                                                    <option className='' key={index} value={item._id} >{item.name}</option>
                                                </>
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
