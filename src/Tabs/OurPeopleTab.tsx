import React from 'react' 
import { Outlet } from 'react-router';
import { IUser, UserContext } from '../components/context/UserContext';

export default function OurPeopleTab() {

    const userContext: IUser = React.useContext(UserContext);  
    React.useEffect(() => {  
        userContext.setTab('Our people')
    },[]); 

    return ( 
        <div className='w-full relative h-full overflow-y-hidden bg-[#F8F9FA] border-t border-l border-[#DDE2E5]' >
            <Outlet />
        </div> 
    )
} 