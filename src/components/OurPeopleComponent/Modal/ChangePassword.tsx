import { Input } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import React from 'react'
import ButtonLoader from '../../ButtonLoader';
import * as yup from 'yup'

export default function ChangePassword(props: any) { 

    const [loading, setLoading] = React.useState(false); 

    const loginSchema = yup.object({ 
        // oldPassword: yup.string().required('Required'),
        newPassword: yup.string().required('Required'),   
    })    
 
    // formik
    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '', 
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
            const request = await fetch(`http://faad-env.eba-kfucwakm.eu-central-1.elasticbeanstalk.com/api/v1/auth/change-password/${props.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json(); 
    
            if (request.status === 200) {     
                alert('Password Updated Successfully');
                const t1 = setTimeout(() => { 
                    props.close(false) 

                    fetch(`http://faad-env.eba-kfucwakm.eu-central-1.elasticbeanstalk.com/api/v1/activity`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization : `Bearer ${localStorage.getItem('token')}` 
                        },
                        body: JSON.stringify({
                            user: props.id
                        }),
                    });  
                    props.reload()  
                    clearTimeout(t1);
                }, 1000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            }
        }
    }   

    return (
        <div style={{ boxShadow: '0px 3px 34px 0px #5F67771C', width: '432px'}} className='  font-Ubuntu-Regular h-auto px-8 rounded-lg py-8 border border-[#E0E0E0] z-50 bg-white right-auto mx-auto left-auto  ' > 
            <div className='flex items-center' >
                <p className=' font-Inter-Bold text-lg ' >Change User Password</p>
                <svg onClick={()=> props.close(false)} className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <g id="Iconly_Light_Close_Square" data-name="Iconly/Light/Close Square" transform="translate(0.75 0.75)">
                        <g id="Close_Square" data-name="Close Square">
                        <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(6.853 6.845)" fill="none" stroke="#F88C3A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        <path id="Stroke_2" data-name="Stroke 2" d="M4.8,4.8,0,0" transform="translate(6.85 6.843)" fill="none" stroke="#F88C3A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#F88C3A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </g>
                    </g>
                </svg>
            </div> 
            <div className=' w-full mr-2 mt-8' >
                <p className='text-sm mb-2 font-Inter-Medium' >Old Password</p>
                <Input  
                    name="oldPassword"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("oldPassword", true, true)
                    }  
                    fontSize='sm'  placeholder='Old Password'/>
                <div className="w-full h-auto pt-2">
                    {formik.touched.oldPassword && formik.errors.oldPassword && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                        >
                            {formik.errors.oldPassword}
                        </motion.p>
                    )}
                </div> 
            </div> 
            <div className=' w-full mr-2 mt-2' >
                <p className='text-sm mb-2 font-Inter-Medium' >New PassWord</p>
                <Input  
                    name="newPassword"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("newPassword", true, true)
                    }  
                    fontSize='sm'  placeholder='New Password'/>
                <div className="w-full h-auto pt-2">
                    {formik.touched.newPassword && formik.errors.newPassword && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                        >
                            {formik.errors.newPassword}
                        </motion.p>
                    )}
                </div> 
            </div> 
            <button onClick={()=> submit()} disabled={loading ? true : false} className='font-Inter-SemiBold mt-8 flex justify-center items-center text-xs h-10 text-white rounded-lg w-full bg-[#F88C3A] ' >
                {loading && (
                    <> 
                        <ButtonLoader size='30' />
                        <span className='ml-3'>Loading</span>
                    </>
                )}
                {!loading && (
                    <span className='mx-4'>Update Password</span>
                )} 
            </button>
            {/* <button onClick={()=> submit()} className=' relative rounded w-full flex justify-center items-center h-10 font-Inter-SemiBold mt-8 text-sm text-white bg-[#F88C3A]' >
                
            </button> */}
        </div>
    )
}
