import React from 'react'
import { Outlet } from 'react-router-dom'
import { IUser, UserContext } from '../components/context/UserContext';

export default function BarginTab() {

    const userContext: IUser = React.useContext(UserContext);  
    React.useEffect(() => {  
        userContext.setTab('Bargains')
    },[]); 

    return (
        <div className='w-full relative h-full overflow-y-hidden bg-[#F8F9FA] border-t border-l border-[#DDE2E5]' >
            <Outlet />
        </div> 
    )
} 