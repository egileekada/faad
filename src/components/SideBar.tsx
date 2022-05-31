import React from 'react'
import { useNavigate } from 'react-router-dom' 
import { IUser, UserContext } from './context/UserContext';
import SideBarIcons from './SideBarIcons'

export default function SideBar() {
    
    const navigate = useNavigate()
    const userContext: IUser = React.useContext(UserContext);  
    const managingdirector = ['Dashboard', 'Accounts','Bargains', 'Deals', 'Clientele', 'Our people', 'Activities']
    const CustomerCareAdmin = ['Dashboard', 'Bargains', 'Deals', 'Clientele', 'Our people']
    const CustomerCare = ['Dashboard', 'Bargains', 'Deals', 'Clientele']
    const Account = ['Dashboard', 'Accounts', 'Bargains', 'Deals']
    const Operation = ['Dashboard', 'Bargains', 'Deals']
    const messageArray = ['Customer Service', 'Operations', 'General', 'My Notes', 'Lock', 'Log out']
    // const CustomerCaremessageArray = ['Customer Service', 'General', 'My Notes', 'Lock', 'Log out']
    // const OperationmessageArray = ['Operations', 'General', 'My Notes', 'Lock', 'Log out']
    // const messageArray = ['Customer Service', 'Operations', 'General', 'My Notes', 'Lock', 'Log out']

    const [active, setActive] = React.useState('Dashboard') 

    const ClickHandler =(item: any)=> { 
        const rout = item.toLowerCase().replace(/\s/g,'')
        if(item !== 'Log out'){
            userContext.setTab(item) 
            userContext.setDealTab(0)
            setActive(item) 
            if(item === 'Dashboard') {
                navigate('/dashboard')
            } else if(item === 'Customer Service') {
                navigate('/dashboard/'+rout+'messages')
            } else if(item === 'Operations') {
                navigate('/dashboard/'+rout+'messages')
            } else if(item === 'General') {
                navigate('/dashboard/'+rout+'messages')
            } else {
                navigate('/dashboard/'+rout)
            }
        } else {
            navigate('/')
            localStorage.clear()
        }
    }

    console.log(userContext.userData.department); 

    return (
        <div className='w-72 py-10 pt-16 px-6 overflow-y-auto h-screen flex ' >
            <div className='w-full ' >
                <div style={{height: '40px'}} className='w-full relative ' >
                    <input className='border-0 bg-[#DDE2E5CC] rounded px-4 text-sm h-full w-full ' placeholder='Search '  />
                    <svg style={{top: '10px'}} className=' absolute cursor-pointer right-2 z-40 ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13116 13.4575C2.68743 10.319 2.90816 5.77832 5.79334 2.89313C8.91754 -0.231061 13.9829 -0.231061 17.107 2.89313C20.2312 6.01733 20.2312 11.0826 17.107 14.2068C14.2219 17.092 9.6812 17.3128 6.54272 14.869C6.52918 14.8843 6.51509 14.8993 6.50045 14.9139L2.25781 19.1566C1.86728 19.5471 1.23412 19.5471 0.843594 19.1566C0.45307 18.7661 0.45307 18.1329 0.843594 17.7424L5.08623 13.4997C5.10088 13.4851 5.11586 13.471 5.13116 13.4575ZM7.20755 4.30735C4.86441 6.65049 4.86441 10.4495 7.20755 12.7926C9.5507 15.1358 13.3497 15.1358 15.6928 12.7926C18.036 10.4495 18.036 6.65049 15.6928 4.30735C13.3497 1.9642 9.5507 1.9642 7.20755 4.30735Z" fill="#495057"/>
                    </svg>
                </div> 
                <p className='font-Inter-ExtraBold text-xs text-[#ACB5BD] mt-8' >Menu</p>
                {userContext.userData.department && (

                    <div className='mt-4' >
                        {userContext.userData.department.toLowerCase() === 'Customer Service'.toLowerCase() && (
                            <>
                                {CustomerCare.map((item: any)=> {
                                    return(
                                        <div onClick={()=> ClickHandler(item)} style={item === userContext.tab ? {backgroundColor: '#FEE8D8'} : {}} key={item} className='flex items-center my-2 cursor-pointer py-2 rounded-md pl-5 ' >
                                            <div className='w-7 h-7 flex items-center justify-center' >
                                                <SideBarIcons iconName={item} active={userContext.tab} />
                                            </div>
                                            <p style={item === userContext.tab ? {color: '#F88C3A'}: {color: '#212429'}} className='ml-4 font-Inter-SemiBold text-sm' >{item}</p>
                                        </div>
                                    )
                                })}
                            </>
                        )} 
                        {userContext.userData.department.toLowerCase() === 'Accounts'.toLowerCase() && (
                            <>
                                {Account.map((item: any)=> {
                                    return(
                                        <div onClick={()=> ClickHandler(item)} style={item === userContext.tab ? {backgroundColor: '#FEE8D8'} : {}} key={item} className='flex items-center my-2 cursor-pointer py-2 rounded-md pl-5 ' >
                                            <div className='w-7 h-7 flex items-center justify-center' >
                                                <SideBarIcons iconName={item} active={userContext.tab} />
                                            </div>
                                            <p style={item === userContext.tab ? {color: '#F88C3A'}: {color: '#212429'}} className='ml-4 font-Inter-SemiBold text-sm' >{item}</p>
                                        </div>
                                    )
                                })}
                            </>
                        )}
                        {userContext.userData.department.toLowerCase() === 'Customer Service Admin'.toLowerCase() && (
                            <>
                                {CustomerCareAdmin.map((item: any)=> {
                                    return(
                                        <div onClick={()=> ClickHandler(item)} style={item === userContext.tab ? {backgroundColor: '#FEE8D8'} : {}} key={item} className='flex items-center my-2 cursor-pointer py-2 rounded-md pl-5 ' >
                                            <div className='w-7 h-7 flex items-center justify-center' >
                                                <SideBarIcons iconName={item} active={userContext.tab} />
                                            </div>
                                            <p style={item === userContext.tab ? {color: '#F88C3A'}: {color: '#212429'}} className='ml-4 font-Inter-SemiBold text-sm' >{item}</p>
                                        </div>
                                    )
                                })}
                            </>
                        )}
                        {userContext.userData.department.toLowerCase() === 'Customer Service Admin'.toLowerCase() && (
                            <>
                                {CustomerCareAdmin.map((item: any)=> {
                                    return(
                                        <div onClick={()=> ClickHandler(item)} style={item === userContext.tab ? {backgroundColor: '#FEE8D8'} : {}} key={item} className='flex items-center my-2 cursor-pointer py-2 rounded-md pl-5 ' >
                                            <div className='w-7 h-7 flex items-center justify-center' >
                                                <SideBarIcons iconName={item} active={userContext.tab} />
                                            </div>
                                            <p style={item === userContext.tab ? {color: '#F88C3A'}: {color: '#212429'}} className='ml-4 font-Inter-SemiBold text-sm' >{item}</p>
                                        </div>
                                    )
                                })}
                            </>
                        )}
                        {userContext.userData.department.toLowerCase() === 'Managing Director'.toLowerCase() && (
                            <>
                                {managingdirector.map((item: any)=> {
                                    return(
                                        <div onClick={()=> ClickHandler(item)} style={item === userContext.tab ? {backgroundColor: '#FEE8D8'} : {}} key={item} className='flex items-center my-2 cursor-pointer py-2 rounded-md pl-5 ' >
                                            <div className='w-7 h-7 flex items-center justify-center' >
                                                <SideBarIcons iconName={item} active={userContext.tab} />
                                            </div>
                                            <p style={item === userContext.tab ? {color: '#F88C3A'}: {color: '#212429'}} className='ml-4 font-Inter-SemiBold text-sm' >{item}</p>
                                        </div>
                                    )
                                })}
                            </>
                        )}
                        {userContext.userData.department.toLowerCase() === 'Operations'.toLowerCase() && (
                            <>
                                {Operation.map((item: any)=> {
                                    return(
                                        <div onClick={()=> ClickHandler(item)} style={item === userContext.tab ? {backgroundColor: '#FEE8D8'} : {}} key={item} className='flex items-center my-2 cursor-pointer py-2 rounded-md pl-5 ' >
                                            <div className='w-7 h-7 flex items-center justify-center' >
                                                <SideBarIcons iconName={item} active={userContext.tab} />
                                            </div>
                                            <p style={item === userContext.tab ? {color: '#F88C3A'}: {color: '#212429'}} className='ml-4 font-Inter-SemiBold text-sm' >{item}</p>
                                        </div>
                                    )
                                })}
                            </>
                        )}
                    </div>
                )}
                <p className='font-Inter-ExtraBold text-xs text-[#ACB5BD] mt-5' >Menu</p>
                <div className='mt-4' >
                     {messageArray.map((item: any)=> {
                         return(
                            <div onClick={()=> ClickHandler(item)} style={item === userContext.tab ? {backgroundColor: '#FEE8D8'} : {}} key={item} className='flex items-center my-2 cursor-pointer py-2 rounded-md pl-5 ' >
                                <div className='w-7 h-7 flex items-center justify-center' >
                                    <SideBarIcons iconName={item} active={userContext.tab} />
                                </div>
                                <p style={item === userContext.tab ? {color: '#F88C3A'}: {color: '#212429'}} className='ml-3 font-Inter-SemiBold text-sm' >{item}</p>
                            </div>
                         )
                     })}
                </div>
                <div className='mb-8 h-6' />
            </div>
        </div>
    )
} 