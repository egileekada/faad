import React from 'react'
import { useQuery } from 'react-query';
import { io } from 'socket.io-client';
import { IUser, UserContext } from '../context/UserContext';
import ChatComponent from './component/ChatComponent';
import GetUserOnGroup from './component/GetUserOnGroup';

export default function AccountMessage() {

    const socket : any= io("https://faadoli.herokuapp.com");
    const userContext: IUser = React.useContext(UserContext);  
    const [loading, setLoading] = React.useState('');

    const current = window.location.pathname 
    localStorage.setItem("current", current)
    const { isLoading, data, refetch, } = useQuery('ChatGroup', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/group', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )     
    console.log(data);
     
    React.useEffect(() => { 
        socket.on("connect", () => {
            console.log('A Connection has been made')    
            socket.emit("join-group", {
                groupId: "63075ce539365c20af019804",
                userId:  userContext.userData._id,
            }); 
        });  
    },[loading]); 
       
    React.useEffect(() => {  
        userContext.setTab('Account')
    },[]);  
     
    return (
        <div className='w-full relative h-full flex px-8 py-8 overflow-y-auto bg-[#F9FAFC] border-t border-l border-[#DDE2E5]' >  
            <ChatComponent socket={socket} name='Accounts' id="63075ce539365c20af019804" reload={setLoading} /> 
            <div style={{width: '30%'}} className=' p-8 ' >
                <p className='font-Inter-SemiBold text-xl' >Members</p>
                <div className='mt-3 overflow-y-auto h-47vh' > 
                    <GetUserOnGroup department='Accounts' second='Accounts' id="63075ce539365c20af019804" /> 
                </div>
            </div>
        </div>
    )
}
