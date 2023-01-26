import React from 'react'
import { useQuery } from 'react-query'
import Avatar from '../../../assets/images/avatar.png' 
import { BASEURL } from '../../../assets/BasicUrl/Url'

export default function GetUserOnGroup(props: any) {
 
    const { isLoading, data } = useQuery('ChatGroupMembers', () =>
        fetch(`${BASEURL.URL}auth/profile/all`, {
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
                    {props.department === '' ? 
                        <>
                            {data.data.users.map((item: any)=> {
                                return( 
                                    <div key={item._id} className='flex items-center my-2' > 
                                        <div className='w-10 h-10 rounded-full mr-3 bg-white' > 
                                            {item.avatar === 'avatar.png' && (
                                                <img src={Avatar} alt='avatar' className='rounded-full bg-white object-cover' />
                                            )} 
                                            {item.avatar !== 'avatar.png' && (
                                                <img src={`${BASEURL.SNG}/uploads/images/${item.avatar}`} alt='' className='w-full h-full object-cover rounded-full' /> 
                                            )} 
                                        </div>
                                        {/* <div className='bg-yellow-400 w-10 h-10 rounded-full mr-3' /> */}
                                        <p className='font-Inter-Medium' >{item.name}</p>
                                    </div>
                                )
                            })}
                        </>
                    :
                        <>
                            {data.data.users.filter((item: any) => item.department.toLowerCase() === 'Managing Director'.toLowerCase() || (item.department.toLowerCase() === props.department.toLowerCase() || item.department.toLowerCase() === props.second.toLowerCase())).map((item: any)=> {
                                return( 
                                    <div key={item._id} className='flex items-center my-2' > 
                                        <div className='w-10 h-10 rounded-full mr-3 bg-white' > 
                                            {item.avatar === 'avatar.png' && (
                                                <img src={Avatar} alt='avatar' className='rounded-full bg-white object-cover' />
                                            )} 
                                            {item.avatar !== 'avatar.png' && (
                                                <img src={`${BASEURL.SNG}/uploads/images/${item.avatar}`} alt='' className='w-full h-full object-cover rounded-full' /> 
                                            )} 
                                        </div>
                                        {/* <div className='bg-yellow-400 w-10 h-10 rounded-full mr-3' /> */}
                                        <p className='font-Inter-Medium' >{item.name}</p>
                                    </div>
                                )
                            })}
                        </>
                    }
                </>
            )}
        </>
    )
} 
