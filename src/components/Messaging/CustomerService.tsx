import React from 'react'
import { useQuery } from 'react-query';
import { io } from 'socket.io-client'; 
import { IUser, UserContext } from '../context/UserContext';
import ChatComponent from './component/ChatComponent';
import GetUserOnGroup from './component/GetUserOnGroup';
import { BASEURL } from '../../assets/BasicUrl/Url';

export default function CustomerService() {

    const socket : any= io(BASEURL.SNG);
    const userContext: IUser = React.useContext(UserContext);  
    const [loading, setLoading] = React.useState('');

    const { isLoading, data, refetch, } = useQuery('ChatGroup', () =>
        fetch(BASEURL.URL+'group', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )      
    const current = window.location.pathname 
    localStorage.setItem("current", current)
     
    React.useEffect(() => { 
        socket.on("connect", () => {
            console.log('A Connection has been made')    
            socket.emit("join-group", {
                groupId: "63075cd307a961a1a2c160d6",
                userId:  userContext.userData._id,
            }); 
        });  
    },[loading]); 
       
    React.useEffect(() => {  
        userContext.setTab('Customer Service')
    },[]);  
     
    return (
        <div className='w-full relative h-full flex px-8 py-8 overflow-y-auto bg-[#F9FAFC] border-t border-l border-[#DDE2E5]' >  
            <ChatComponent socket={socket} name='Customer Service' id="63075cd307a961a1a2c160d6" reload={setLoading} /> 
            <div style={{width: '30%'}} className=' p-8 ' >
                <p className='font-Inter-SemiBold text-xl' >Members</p>
                <div className='mt-3 overflow-y-auto h-47vh' > 
                    <GetUserOnGroup department='Customer Service' second='Customer Service Admin' id="63075cd307a961a1a2c160d6" /> 
                </div>
            </div>
        </div>
    )
}
