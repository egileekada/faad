import { Input } from '@chakra-ui/input'
import { Select, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import ButtonLoader from '../ButtonLoader' 
import { BASEURL } from '../../assets/BasicUrl/Url'

export default function ClienteleProfile() { 

    const current = window.location.pathname 
    localStorage.setItem("current", current)
    const [show, setShow] = React.useState(false) 
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false); 
    // const userContext: IUser = React.useContext(UserContext);  

    const loginSchema = yup.object({  
        companyName: yup.string().required('Required'),
        industry: yup.string().required('Required'),
        email: yup.string().email('This email is not valid').required('Your email is required'),
        name: yup.string().required('Required'),
        personalemail: yup.string().required('Required'),
        phone: yup.string().required('Required'), 
        phoneNumber: yup.string().required('Required'), 
        backupPhoneNumber: yup.string().required('Required'), 
        address: yup.string().required('Required'), 
        // client: yup.string().required('Required'), 
    })    

    // formik
    const formik = useFormik({
        initialValues: {companyName: '', industry: '', email: '', name: '',  phoneNumber: '',personalemail: '', phone: '', address: '', backupPhoneNumber: ''},
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
            const request = await fetch(`${BASEURL.URL}client`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify(
                    {
                            companyName: formik.values.companyName,
                            industry: formik.values.industry,
                            email: formik.values.email,
                            contactPersonDetails: {
                                name: formik.values.name,
                                email: formik.values.personalemail,
                                phone: Number(formik.values.phone),
                            },
                            phoneNumber: formik.values.phoneNumber,
                            // backupPhoneNumber: formik.values.backupPhoneNumber,
                            // address: formik.values.backupPhoneNumber,

                    }
                ),
            });
    
            const json = await request.json(); 
    
            if (request.status === 200) {    
                setShow(true)  
                alert('Account Created Successfully');
                const t1 = setTimeout(() => { 
                    navigate('/dashboard/clientele');  
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
        <div className='w-full h-full px-8 py-8 overflow-y-auto' >  
            <svg onClick={()=> navigate('/dashboard/clientele')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg> 
            <div style={{border: '1px solid #DDE2E5'}} className=' w-full rounded-2xl p-10 my-8 bg-white flex flex-col ' > 
                <p className='font-Inter-SemiBold text-2xl ml-3 ' >Client profile</p>
                <div style={{width: '790px'}} className=' flex mt-6 font-Inter-Regular' >
                    <div className='w-full px-3 ' >
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Company name</p>
                            <Input 
                                name="companyName"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("companyName", true, true)
                                }  
                                fontSize='sm' placeholder='Enter company name' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.companyName && formik.errors.companyName && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.companyName}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Email</p>
                            <Input 
                                name="email"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("email", true, true)
                                }  
                                fontSize='sm' placeholder='example@company.com' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.email && formik.errors.email && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.email}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Phone number</p>
                            <Input 
                                name="phoneNumber"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("phoneNumber", true, true)
                                }  
                                fontSize='sm' placeholder='090...' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.phoneNumber}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Back-up Phone number</p>
                            <Input 
                                name="backupPhoneNumber"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("backupPhoneNumber", true, true)
                                }  
                                fontSize='sm' placeholder='090...' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.backupPhoneNumber && formik.errors.backupPhoneNumber && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.backupPhoneNumber}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Address</p>
                            <Textarea 
                                name="address"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("address", true, true)
                                }  
                                fontSize='sm' placeholder='Enter Address' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.address && formik.errors.address && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.address}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                    </div>
                    <div className='w-full px-3' >
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Industry</p>
                            <Input 
                                name="industry"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("industry", true, true)
                                }  
                                fontSize='sm' placeholder='Industry' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.industry && formik.errors.industry && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.industry}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='my-4 ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Contact person Details</p>
                            <Input 
                                name="name"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("name", true, true)
                                }  
                                fontSize='sm' placeholder='Enter Name' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.name && formik.errors.name && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.name}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='my-4 ' > 
                            <Input 
                                name="personalemail"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("personalemail", true, true)
                                }  
                                fontSize='sm' placeholder='Personal Email' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.personalemail && formik.errors.personalemail && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.personalemail}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='my-4 ' > 
                            <Input 
                                name="phone"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("phone", true, true)
                                }  
                                fontSize='sm' placeholder='Enter Personal Number' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.phone && formik.errors.phone && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.phone}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                    </div> 
                </div>

                <button onClick={()=> submit()} disabled={loading ? true : false} className='font-Inter-SemiBold mt-8 ml-3 flex justify-center items-center text-xs h-10 text-white rounded-lg w-44 bg-[#F88C3A] ' >
                    {loading && (
                        <> 
                            <ButtonLoader size='30' />
                            <span className='ml-3'>Loading</span>
                        </>
                    )}
                    {!loading && (
                        <span className='mx-4'>Create Client Profile</span>
                    )} 
                </button>
                {/* <button className='font-Inter-SemiBold mt-8 ml-3 text-xs h-10 text-white rounded-lg w-48 bg-[#F88C3A] ' >Save changes to client profile</button> */}
            </div>
        </div>
    )
} 
