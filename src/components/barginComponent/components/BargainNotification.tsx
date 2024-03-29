import React from 'react'
import { useQuery } from 'react-query'
import { BASEURL } from '../../../assets/BasicUrl/Url'

export default function BargainNotification() {

    const { isLoading, data, refetch } = useQuery('AllBargains', () =>
        fetch(BASEURL.URL+'bargain', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   
    
    return (
        <>
            {!isLoading && ( 
                <p className=' bg-[#F66E09] w-6 h-6 flex justify-center items-center font-Inter-Bold text-sm rounded-full ml-1 text-white ' >{data.data.baragins.filter((item: any) => item.status !== "completed" && item.status !== "rejected").length}</p> 
            )}
        </>
    )
} 
