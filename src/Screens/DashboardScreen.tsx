import React from 'react'
import { useQuery } from 'react-query'
import { Outlet } from 'react-router'
import SideBar from '../components/SideBar'
import { IUser, UserContext } from '../components/context/UserContext';
import Avatar from '../assets/images/avatar.png'
import PageLoader from '../components/PageLoader';

export default function DashboardScreen() {

    const userContext: IUser = React.useContext(UserContext);  
    const { isLoading, data } = useQuery('userData', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/auth/profile', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')+''}`
            }
        }).then(res =>
            res.json()
        )
    )


    React.useEffect(() => {   
        if(!isLoading){
            userContext.setUserData(data)  
        }  
    },[data]);    

    if (isLoading) return(
        <div className='w-full h-full flex mt-12 justify-center items-center' > 
            <PageLoader />
        </div>
    )

    console.log(data)

    return (
        <div className='w-screen h-screen overflow-hidden  ' > 
            <div className='w-screen flex ' > 
                <div style={{boxShadow: '0px 4px 4px 0px #00000040'}} className=' mb-10' > 
                    <SideBar />
                </div>
                <div className=' w-auto flex flex-1 flex-col h-screen ' >
                    <div style={{height: '15vh'}} className='w-full px-14 bg-[#F8F9FA] flex relative z-40 items-center justify-end' >
                        <div className='w-14 h-14 bg-yellow-200 rounded-full' >
                            {userContext.userData.avatar === 'avatar.png' && (
                                <img src={Avatar} alt='avatar' className='rounded-full bg-white object-cover' />
                            )}
                        </div>
                        <div className='ml-3' >
                            <p className='font-Inter-SemiBold text-lg ' >{userContext.userData.name}</p>
                            <p className='font-Inter-Regular text-xs '>{userContext.userData.department}</p>
                        </div>
                    </div>
                    <div style={{height: '85vh'}} className='h-auto overflow-y-hidden' >
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
} 