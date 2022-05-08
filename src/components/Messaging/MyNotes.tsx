import { Textarea } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useQuery } from 'react-query'
import { useFormik } from 'formik'
import ButtonLoader from '../ButtonLoader'
import { IUser, UserContext } from '../context/UserContext'
import DateFormat from '../DateFormat'

export default function MyNotes() {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false);  
    // const userContext: IUser = React.useContext(UserContext);  

    const loginSchema = yup.object({   
        text: yup.string().required('Required'), 
    })    

    const userContext: IUser = React.useContext(UserContext); 
    // formik
    const formik = useFormik({
        initialValues: {
            text: '',  
        },
        validationSchema: loginSchema,
        onSubmit: () => {},
    });

    const submit = async () => {

        setLoading(true);
        if (!formik.dirty) {
          alert('You have to fill in the form to continue');
          setLoading(false);
          return;
        }
        else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          setLoading(false);
          return;
        }
        else {
            const request = await fetch(`https://faadoli.herokuapp.com/api/v1/note`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json(); 
    
            if (request.status === 200) {    
                // setShow(true)  
                alert('Note Added');
                const t1 = setTimeout(() => { 
                    setLoading(false)
                    sessionStorage.setItem('tabIndex', 'Dashboard')
                    navigate('/dashboard');  
                    navigate(0);  
                    clearTimeout(t1);
                }, 1000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            }
        }
    }    
    // console.log(userContext.userData.notes) 

    // console.log(data)

    return (
        <div className='w-full h-full flex px-8 py-8 overflow-y-auto bg-[#F9FAFC] border-t border-l border-[#DDE2E5]' > 
            <div style={{width: '70%'}}  className=' relative flex-1 bg-white rounded-2xl' >
                <p className='font-Inter-SemiBold text-xl pt-8 px-8 mb-4' >#Operations</p> 
                <div style={{height: '45vh', backgroundColor: '#f4f4f4'}} className=' w-auto pl-4 mx-8 rounded-2xl overflow-y-auto pr-6  flex-1 pt-4' >
                    {userContext.userData.notes !== undefined ?
                        <>
                            {userContext.userData.notes.length !== 0 && (
                                <>
                                    {userContext.userData.notes.map((item: any)=> {
                                        return(
                                            <div className='flex my-2' >
                                                {/* Sender */}
                                                <div className='bg-yellow-400 w-10 h-10 rounded-full' />
                                                <div style={{width: '60%'}} className='px-3 ' >
                                                    <div style={{borderRadius: '0px 12px 12px 12px', backgroundColor: '#DDE2E5'}} className=' p-3 ml-3 ' >
                                                        <div className='flex items-center' > 
                                                            <p className='font-Inter-Bold text-sm' >{userContext.userData.name}</p>
                                                            <p className='font-Inter-Regular text-xs ml-auto' >{DateFormat(item.updatedAt)}</p>
                                                        </div>
                                                        <p className='font-Inter-Regular mt-3 text-sm' >{item.text}</p>
                                                    </div>
                                                </div>
                                                <svg className='mt-1' width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="#ACB5BD"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12 8.973 9.83771 11.441 7 11.917V17C7 17.5523 6.55229 18 6 18C5.44771 18 5 17.5523 5 17V11.917C2.16229 11.441 0 8.973 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" fill="#ACB5BD"/>
                                                </svg> 
                                            </div>  
                                        )
                                    })}
                                </>
                            )}
                            {userContext.userData.notes.length === 0 && (
                                
                                <p className='font-Inter-Bold text-center text-sm' >NO Note Have Been Added</p>
                            )}
                        </>:
                        <>
                            {navigate('/dashboard')}
                        </>
                    }
                </div>
                <div className=' absolute w-full flex px-8 items-end bottom-6' >
                    <Textarea 
                        name="text"
                        onChange={formik.handleChange} 
                        onFocus={() =>
                            formik.setFieldTouched("text", true, true)
                        } 
                        background='#F4f4f4' className='' />
                    
                    <button onClick={()=> submit()} disabled={loading ? true : false} className='font-Inter-SemiBold ml-3 flex justify-center items-center text-xs h-10 text-white rounded-lg w-44 bg-[#F88C3A] ' >
                        {loading && (
                            <> 
                                <ButtonLoader size='30' />
                                <span className='ml-3'>Loading</span>
                            </>
                        )}
                        {!loading && (
                            <span className='mx-4'>Add Note</span>
                        )} 
                    </button>
                    {/* <button className='font-Inter-SemiBold text-xs h-10 text-white rounded-lg w-44 bg-[#F88C3A] ml-6 ' >Add Note</button> */}
                </div>
            </div>
            <div style={{width: '30%'}} className=' p-8 ' >
                <p className='font-Inter-SemiBold text-xl' >Members</p>
                <div className='mt-3' >
                    <div className='flex items-center my-2' > 
                        <div className='bg-yellow-400 w-10 h-10 rounded-full mr-3' />
                        <p className='font-Inter-Medium' >{userContext.userData.name}</p>
                    </div> 
                </div>
            </div>
        </div>
    )
} 