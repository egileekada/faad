import { Textarea } from '@chakra-ui/react'
import React from 'react' 
import io from "socket.io-client";
import { useQuery } from 'react-query';
import * as yup from 'yup' 
import { useFormik } from 'formik'
import { IUser, UserContext } from '../context/UserContext';
import GetUserOnGroup from './component/GetUserOnGroup';
import DateFormat from '../DateFormat';
import ChatComponent from './component/ChatComponent';

export default function General() { 

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

    React.useEffect(() => { 
        socket.on("connect", () => {
            console.log('A Connection has been made')    
            socket.emit("join-group", {
                groupId: "62a49b6fc592977ebe01a5ce",
                userId:  userContext.userData._id,
            }); 
        });  
      },[loading]); 
       
    React.useEffect(() => {  
        userContext.setTab('General')
    },[]); 
     
    return (
        <div className='w-full h-full flex px-8 py-8 overflow-y-auto relative bg-[#F9FAFC] border-t border-l border-[#DDE2E5]' > 
            <ChatComponent socket={socket} reload={setLoading} />
            <div style={{width: '30%'}} className=' p-8 ' >
                <p className='font-Inter-SemiBold text-xl' >Members</p>
                <div className='mt-3' >
                    <GetUserOnGroup /> 
                </div>
            </div>
        </div>
    )
} 