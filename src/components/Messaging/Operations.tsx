import React from 'react'
import { useQuery } from 'react-query';
import { io } from 'socket.io-client';
import { IUser, UserContext } from '../context/UserContext';
import ChatComponent from './component/ChatComponent';
import GetUserOnGroup from './component/GetUserOnGroup';

export default function Opterations() {

    const socket : any= io("https://faadoli.herokuapp.com");
    const userContext: IUser = React.useContext(UserContext);  
    const [loading, setLoading] = React.useState('');

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
                groupId: '62ade91ed73164d487087180',
                userId:  userContext.userData._id,
            }); 
        });  
    },[loading]); 
       
    React.useEffect(() => {  
        userContext.setTab('Operations')
    },[]);  
     
    return (
        <div className='w-full relative h-full flex px-8 py-8 overflow-y-auto bg-[#F9FAFC] border-t border-l border-[#DDE2E5]' >  
            <ChatComponent socket={socket} name='Operations' id='62ade91ed73164d487087180' reload={setLoading} /> 
            <div style={{width: '30%'}} className=' p-8 ' >
                <p className='font-Inter-SemiBold text-xl' >Members</p>
                <div className='mt-3 overflow-y-auto h-47vh' > 
                    <GetUserOnGroup department='Operations' second='Operations' id='62ade91ed73164d487087180' /> 
                </div>
            </div>
        </div>
    )
} 