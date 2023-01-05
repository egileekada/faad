import React from 'react'
import { useQuery } from 'react-query'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'
import { IUser, UserContext } from '../components/context/UserContext';
import Avatar from '../assets/images/avatar.png'
import PageLoader from '../components/PageLoader';

export default function DashboardScreen() {

    const userContext: IUser = React.useContext(UserContext);  
    const navigate = useNavigate() 
    const [general, setGeneral] = React.useState([] as any) 

    const { isLoading, data } = useQuery('userData'+localStorage.getItem('token'), () =>
        fetch('http://faad-env.eba-kfucwakm.eu-central-1.elasticbeanstalk.com/api/v1/auth/profile', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   

    const AddToChatGroup =async(item: any)=> { 
        const request = await fetch(`http://faad-env.eba-kfucwakm.eu-central-1.elasticbeanstalk.com/api/v1/group/${item}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({
                userId: userContext.userData._id
            }),
        });

        const json = await request.json(); 

        if (request.status === 200) {    
            // setShow(true)  
            alert('User Added');
            const t1 = setTimeout(() => {  
                // sessionStorage.setItem('tabIndex', 'Dashboard')
                // navigate('/dashboard');  
                // navigate(0);  
                clearTimeout(t1);
            }, 1000); 
        }else {
            alert(json.message);
            console.log(json) 
        }
    }

    // React.useEffect(() => {

    //     fetch(`http://faad-env.eba-kfucwakm.eu-central-1.elasticbeanstalk.com/api/v1/group/62ade34f15f3fa53457b1c2c/members`, {
    //         method: 'GET', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization : `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {      
    //         if(data.data.length === 0){ 
    //             AddToChatGroup('62ade34f15f3fa53457b1c2c')
    //         }
    //         console.log(data.data.length);
            
    //         for(var index = 0; index < data.data.length; index++) {
    //             console.log(index+1);
                
    //             if (data.data[index]._id == userContext.userData._id) { 
    //                 console.log('close'); 
    //                 break;
    //             }else {
    //                 if(data.data.length === index+1){
    //                     console.log('pass')
    //                     AddToChatGroup('62ade34f15f3fa53457b1c2c')
    //                 }
    //             }
    //         }  
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error); 
    //     },); 
    // })

    React.useEffect(() => {   
        if(!isLoading){ 
            userContext.setUserData(data.data.user)   
        } 
        if(!sessionStorage.getItem('token')){
            navigate('/')
        }     
    },[data]);     

    if (isLoading) return(
        <div className='w-full h-full flex mt-12 justify-center items-center' > 
            <PageLoader />
        </div>
    )       
     
    
    if(data.message !== undefined) { 
        navigate('/')
        navigate(0)
    } 

    return (
        <div className='w-screen h-screen overflow-hidden  ' > 
            {data.data.user !== undefined && ( 
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
                                {userContext.userData.avatar !== 'avatar.png' && ( 
                                    <img src={`https://faadoli.herokuapp.com/uploads/images/${userContext.userData.avatar}`} alt='avatar' className='w-full h-full object-cover rounded-full' />
                                )}
                            </div>
                            <div className='ml-3' >
                                <p className='font-Inter-SemiBold text-lg ' >{userContext.userData.name}</p>
                                <p className='font-Inter-Regular text-xs '>{userContext.userData.department}</p>
                            </div>
                        </div>
                        <div style={{height: '85vh'}} className=' overflow-y-hidden' >
                            <Outlet />
                        </div>
                    </div>
                </div>
            )}
        </div>
    ) 
} 
