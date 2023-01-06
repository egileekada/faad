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
import ScrollToBottom from 'react-scroll-to-bottom';
import { BASEURL } from '../../assets/BasicUrl/Url';

export default function General() { 

    const socket : any= io(BASEURL.SNG);
    const userContext: IUser = React.useContext(UserContext);  
    const [loading, setLoading] = React.useState('');

    const current = window.location.pathname 
    localStorage.setItem("current", current)
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
    console.log(data);
     
    React.useEffect(() => { 
        socket.on("connect", () => {
            console.log('A Connection has been made')    
            socket.emit("join-group", {
                groupId: "63075b1decb359ecf4f83199",
                userId:  userContext.userData._id,
            }); 
        });  
    },[loading]); 
       
    React.useEffect(() => {  
        userContext.setTab('General')
    },[]);  
     
    return (
        <div className='w-full relative h-full flex px-8 py-8 overflow-y-auto bg-[#F9FAFC] border-t border-l border-[#DDE2E5]' >  
            <ChatComponent socket={socket} name='General' id="63075b1decb359ecf4f83199" reload={setLoading} /> 
            <div style={{width: '30%'}} className=' p-8 ' >
                <p className='font-Inter-SemiBold text-xl' >Members</p>
                <div className='mt-3 overflow-y-auto h-47vh' > 
                    {/* <ScrollToBottom className=' h-47vh'> */}
                        <GetUserOnGroup department='' id="63075b1decb359ecf4f83199" /> 
                    {/* </ScrollToBottom> */}
                </div>
            </div>
        </div>
    )
} 
