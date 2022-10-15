import { Textarea } from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react'
import * as yup from 'yup' 
import ButtonLoader from '../../ButtonLoader';
import { IUser, UserContext } from '../../context/UserContext';
import DateFormat from '../../DateFormat';
import ScrollToBottom from 'react-scroll-to-bottom';
import PageLoader from '../../PageLoader'; 
import Avatar from '../../../assets/images/avatar.png' 

export default function ChatComponent(props: any) {

    const userContext: IUser = React.useContext(UserContext);  
    const [messages, setMessages] = React.useState([] as any);
    const [loading, setLoading] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => { 
        props.socket.emit("get-all-message", { groupId: props.id });  
       props.socket.on("group-message", (data: any) => {  
             // console.log(data) 
         });
         props.socket.on("all-message", (data:any) => {   
             setMessages([...data.messages]) 
        });  
        props.socket.emit("make-read", { messageId: props.id });
     },[props.socket]) 
    
    React.useEffect(() => { 
        const t1 = setTimeout(() => { 
            setIsLoading(false)
            clearTimeout(t1);
        }, 3000); 
    },[])      

    const loginSchema = yup.object({   
        text: yup.string().required('Required'), 
    })    
 
    // formik
    const formik = useFormik({
        initialValues: {
            text: '',  
        },
        validationSchema: loginSchema,
        onSubmit: () => {},
    });
       
    const Submit =async()=> {  
        setLoading(true)
        props.socket.emit("send-group-message", {
            groupId: props.id,
            message: formik.values.text,
            userId: userContext.userData._id,
            name: userContext.userData.name,
            avatar: userContext.userData.avatar
        });
        if(formik.values.text.toLocaleLowerCase().includes(('#CustomerService').toLocaleLowerCase())){ 
            props.socket.emit("send-group-message", {
                groupId: "62ade8f1d73164d487087158",
                message: formik.values.text,
                userId: userContext.userData._id,
                name: userContext.userData.name,
                avatar: userContext.userData.avatar
            });
        } else if(formik.values.text.toLocaleLowerCase().includes(('#Account').toLocaleLowerCase())){ 
            props.socket.emit("send-group-message", {
                groupId: "62ade89ad73164d4870870ec",
                message: formik.values.text,
                userId: userContext.userData._id,
                name: userContext.userData.name,
                avatar: userContext.userData.avatar
            });
        } else if(formik.values.text.toLocaleLowerCase().includes(('#Operation').toLocaleLowerCase())){ 
            props.socket.emit("send-group-message", {
                groupId: "62ade91ed73164d487087180",
                message: formik.values.text,
                userId: userContext.userData._id,
                name: userContext.userData.name,
                avatar: userContext.userData.avatar
            });
        }

        props.reload(formik.values.text)
        // props.socket.on("group-message", (data: any) => {
        // console.log(data);
        //     setMessages([...messages, data])
        // });  

        formik.setFieldValue('text', '')  
        const t1 = setTimeout(() => {
            setLoading(false)   
            clearTimeout(t1);
        }, 2000); 
    }       

    console.log(messages);
    

    return (
        <div style={{width: '70%'}}  className=' p-8 flex-1 bg-white  rounded-2xl' >
            <p className='font-Inter-SemiBold text-xl' >#{props.name}</p> 
            {/* <div className=' w-full pr-6  flex-1 pt-4' >  */}
            <ScrollToBottom className=' h-47vh'>
                <div className=' px-6' > 
                    {!isLoading && (
                        <>
                            {messages?.map((item: any, index: any)=> {  
                                if( item.name !== userContext.userData.name) {
                                    return(
                                        <div key={index} className='flex my-2' >
                                            {/* Sender */}
                                            <div className='w-10 h-10 rounded-full mr-3 bg-white' > 
                                                {item.avatar === 'avatar.png' && (
                                                    <img src={Avatar} alt='avatar' className='rounded-full bg-white object-cover' />
                                                )} 
                                                {item.avatar !== 'avatar.png' && (
                                                    <img src={`https://faadoli.herokuapp.com/uploads/images/${item.avatar}`} alt='' className='w-full h-full object-cover rounded-full' /> 
                                                )} 
                                            </div>
                                            {/* <div className='bg-yellow-400 w-10 h-10 rounded-full' /> */}
                                            <div style={{width: '55%'}} className='pl-3 ' >
                                                <div style={{borderRadius: '0px 12px 12px 12px', backgroundColor: '#DDE2E5'}} className=' p-3 ml-3 ' >
                                                    <div className='flex items-center' > 
                                                        <p className='font-Inter-Bold text-sm' >{item.name}</p>
                                                        <p className='font-Inter-Regular text-xs ml-auto' >{DateFormat(item.updatedAt)}</p>
                                                    </div>
                                                    <p className='font-Inter-Regular mt-3 text-sm' >{item.message}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return( 
                                        <div key={index} className='flex my-2 w-full justify-end' >
                                            {/* Reciever */}
                                            <div style={{width: '55%'}} className='pl-3 ' >
                                                <div style={{borderRadius: '12px 0px 12px 12px', backgroundColor: '#F8F9FA'}} className=' p-3 ' >
                                                    <div className='flex items-center' > 
                                                        <p className='font-Inter-Regular text-xs' >{DateFormat(item.updatedAt)}</p>
                                                        <p className='font-Inter-Bold text-sm  ml-auto' >{item.name}</p>
                                                    </div>
                                                    <p className='font-Inter-Regular mt-3 text-sm' >{item.message}</p>
                                                </div>
                                            </div>

                                            <div className='w-10 h-10 rounded-full ml-3 bg-white' > 
                                                {item.avatar === 'avatar.png' && (
                                                    <img src={Avatar} alt='avatar' className='rounded-full bg-white object-cover' />
                                                )} 
                                                {item.avatar !== 'avatar.png' && (
                                                    <img src={`https://faadoli.herokuapp.com/uploads/images/${item.avatar}`} alt='' className='w-full h-full object-cover rounded-full' /> 
                                                )} 
                                            </div>
                                            {/* <div className='bg-yellow-400 w-10 h-10 rounded-full ml-3' /> */}
                                        </div>
                                    )
                                }
                                // <div className='' ref={divRef} /> 
                            })}   
                        </>
                    )}
                    {isLoading && (
                        <div className='w-full h-auto flex mt-12 justify-center  ' > 
                            <PageLoader />
                        </div>
                    )}
                </div>
            </ScrollToBottom>
            {/* </div> */}
            <div className=' w-full flex px-8 py-4 items-end' >
                <Textarea 
                    name="text"
                    onChange={formik.handleChange} 
                    onFocus={() =>
                        formik.setFieldTouched("text", true, true)
                    } 
                    value={formik.values.text}
                    background='#F4f4f4' className='' />
                
                <button disabled={formik.values.text === '' ? true : false} onClick={()=> Submit()} className='font-Inter-SemiBold ml-3 flex justify-center items-center text-xs h-10 text-white rounded-lg w-44 bg-[#F88C3A] ' >
                    {loading && (
                        <> 
                            <ButtonLoader size='30' />
                            <span className='ml-3'>Sending</span>
                        </>
                    )}
                    {!loading && (
                        <span className='mx-4'>Send</span>
                    )}
                </button> 
            </div>
        </div> 
    )
} 
