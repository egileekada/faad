import React from 'react'
import { Outlet } from 'react-router-dom'
import { IUser, UserContext } from '../components/context/UserContext';

export default function ClienteleTab() {

    const userContext: IUser = React.useContext(UserContext);  
    React.useEffect(() => {  
        userContext.setTab('Clientele')
    },[]); 
    const current = window.location.pathname 
    localStorage.setItem("current", current)
    return (  
        <div className='w-full relative h-full overflow-y-hidden bg-[#F8F9FA] border-t border-l border-[#DDE2E5]' >
            <Outlet />
        </div> 
    )
}
