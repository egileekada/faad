import React from 'react'
import { useQuery } from 'react-query'

export default function GetUserOnGroup(props: any) {
 
    const { isLoading, data } = useQuery('ChatGroupMembers', () =>
        fetch(`https://faadoli.herokuapp.com/api/v1/group/${props.id}/members`, {
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
                <>
                    {data.data.map((item: any)=> {
                        return( 
                            <div key={item._id} className='flex items-center my-2' > 
                                <div className='bg-yellow-400 w-10 h-10 rounded-full mr-3' />
                                <p className='font-Inter-Medium' >{item.name}</p>
                            </div>
                        )
                    })}
                </>
            )}
        </>
    )
} 