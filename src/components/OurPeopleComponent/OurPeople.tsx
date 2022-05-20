import { Select } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../context/UserContext'
import PageLoader from '../PageLoader'
import Avatar from '../../assets/images/avatar.png'

export default function OurPeople() {
 
    const navigate = useNavigate()
    const userContext: IUser = React.useContext(UserContext); 
    const [staff, setStaff] = React.useState('')

    function DateFormat(item: any) {
        var date = new Date(item);
        let string = date+''   // -> "2/1/2013"
        // let time = date.toLocaleTimeString()+''
        date.getHours() 
        return( 
            <p className=' font-Inter-Regular ml-1' >{string.substr(4, 4)+' '+string.substr(10, 5)}</p>
        )
    }  

    const { isLoading, error, data } = useQuery('userDataAll', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/auth/profile/all', {
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
        <div className='w-full h-auto flex mt-12 justify-center items-center' > 
            <PageLoader />
        </div>
    )  

    const ClickHandler =(item: any)=> { 
        userContext.setProfileData(item)
        navigate('profile')
    } 

    console.log(staff)


    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto relative' > 
            <div className='w-full' >
                <div className='w-full flex items-center font-Inter-Regular' > 
                    <div className='w-64' >
                        <Select onChange={(e)=> setStaff(e.target.value)} border='1px solid #DDE2E5' backgroundColor='white' placeholder='All Staff' fontSize='sm' >
                            {/* <option value='' >All Staff</option> */}
                            <option>Customer service Admin</option>
                            <option>Customer service</option>
                            <option>Accounts</option>
                            <option>Operations</option>
                            <option>Managing Director</option>
                            <option>Clientele</option>
                            <option>Drivers</option>
                            <option>Agents</option>
                        </Select> 
                    </div>
                    <button onClick={()=> navigate('newprofile')} className=' rounded w-44 flex justify-center items-center h-10 font-Inter-SemiBold ml-auto text-sm text-white bg-[#F88C3A]' >
                        <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="white"/>
                        </svg>
                        New Personnel
                    </button>
                </div> 
                {!isLoading && ( 
                    <div className='w-full grid grid-cols-4 gap-6 mt-10' >
                        {data.data.users.map((item: any)=> {
                            if(item.name !== 'string'){
                                if(staff.toLowerCase() === item.department.toLowerCase()){
                                    
                                    // console.log(item.department)
                                    return(
                                        <div onClick={()=> ClickHandler(item)} style={{boxShadow: '0px 16px 24px 0px #60617029'}} className=' bg-white rounded-2xl cursor-pointer' >
                                            <div style={{boxShadow: '0px 2px 8px 0px #60617029'}} className='w-full h-64 justify-center rounded-2xl flex flex-col items-center' >
                                                <div className='w-16 h-16 rounded-full bg-white' >
                                                    {item.avatar !== 'avatar.png' && ( 
                                                        <img src={!item.avatar ? `https://faadoli.herokuapp.com/uploads/images/${item.avatar}` : Avatar} alt='avatar' className='w-full h-full object-cover rounded-full' />
                                                    )}
                                                </div>
                                                <p className='font-Inter-SemiBold text-xl mt-4' >{item.name}</p>
                                                <p className='font-Inter-Regular text-sm' >{item.department}</p>
                                                <p className='font-Inter-Regular text-xs'>{item.companyEmail}</p>
                                                <svg className='mt-6 mb-3' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.99255 6.9841C1.44027 6.9841 0.992554 7.43181 0.992554 7.9841C0.992554 8.34149 1.18004 8.65509 1.46202 8.83192L4.14964 11.5195C4.54016 11.9101 5.17333 11.9101 5.56385 11.5195C5.95438 11.129 5.95438 10.4958 5.56385 10.1053L4.44263 8.9841H11.9926C12.5448 8.9841 12.9926 8.53638 12.9926 7.9841C12.9926 7.43181 12.5448 6.9841 11.9926 6.9841L2.042 6.9841C2.03288 6.98397 2.02376 6.98397 2.01464 6.9841H1.99255Z" fill="black"/>
                                                    <path d="M16.0074 5.01589C16.5597 5.01589 17.0074 4.56818 17.0074 4.0159C17.0074 3.6585 16.82 3.3449 16.538 3.16807L13.8504 0.480454C13.4598 0.08993 12.8267 0.08993 12.4361 0.480454C12.0456 0.870978 12.0456 1.50414 12.4361 1.89467L13.5574 3.01589L6.00745 3.01589C5.45516 3.01589 5.00745 3.46361 5.00745 4.01589C5.00745 4.56818 5.45516 5.01589 6.00745 5.01589L15.958 5.01589C15.9671 5.01602 15.9762 5.01602 15.9854 5.01589H16.0074Z" fill="black"/>
                                                </svg>
                                                <p className='font-Inter-Regular flex text-xs'>Joined{DateFormat(item.createdAt)}</p>
                                            </div>
                                        </div> 
                                    )
                                } else if(staff === ''){
                                    return(
                                        <div onClick={()=> ClickHandler(item)} style={{boxShadow: '0px 16px 24px 0px #60617029'}} className=' bg-white rounded-2xl cursor-pointer' >
                                            <div style={{boxShadow: '0px 2px 8px 0px #60617029'}} className='w-full h-64 justify-center rounded-2xl flex flex-col items-center' >
                                                <div className='w-16 h-16 rounded-full bg-white' >
                                                    {item.avatar !== 'avatar.png' && ( 
                                                        <img src={item.avatar ? `https://faadoli.herokuapp.com/uploads/images/${item.avatar}` : Avatar} alt='avatar' className='w-full h-full object-cover rounded-full' />
                                                    )}
                                                </div>
                                                <p className='font-Inter-SemiBold text-xl mt-4' >{item.name}</p>
                                                <p className='font-Inter-Regular text-sm' >{item.department}</p>
                                                <p className='font-Inter-Regular text-xs'>{item.companyEmail}</p>
                                                <svg className='mt-6 mb-3' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.99255 6.9841C1.44027 6.9841 0.992554 7.43181 0.992554 7.9841C0.992554 8.34149 1.18004 8.65509 1.46202 8.83192L4.14964 11.5195C4.54016 11.9101 5.17333 11.9101 5.56385 11.5195C5.95438 11.129 5.95438 10.4958 5.56385 10.1053L4.44263 8.9841H11.9926C12.5448 8.9841 12.9926 8.53638 12.9926 7.9841C12.9926 7.43181 12.5448 6.9841 11.9926 6.9841L2.042 6.9841C2.03288 6.98397 2.02376 6.98397 2.01464 6.9841H1.99255Z" fill="black"/>
                                                    <path d="M16.0074 5.01589C16.5597 5.01589 17.0074 4.56818 17.0074 4.0159C17.0074 3.6585 16.82 3.3449 16.538 3.16807L13.8504 0.480454C13.4598 0.08993 12.8267 0.08993 12.4361 0.480454C12.0456 0.870978 12.0456 1.50414 12.4361 1.89467L13.5574 3.01589L6.00745 3.01589C5.45516 3.01589 5.00745 3.46361 5.00745 4.01589C5.00745 4.56818 5.45516 5.01589 6.00745 5.01589L15.958 5.01589C15.9671 5.01602 15.9762 5.01602 15.9854 5.01589H16.0074Z" fill="black"/>
                                                </svg>
                                                <p className='font-Inter-Regular flex text-xs'>Joined{DateFormat(item.createdAt)}</p>
                                            </div>
                                        </div> 
                                    )
                                }
                            }
                        })}
                    </div>
                )}
            </div>
        </div>
    )
} 