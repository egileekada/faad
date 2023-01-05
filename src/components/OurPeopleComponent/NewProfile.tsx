import { Input } from '@chakra-ui/input'
import { Radio, RadioGroup, Select, Stack } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import * as axios from 'axios'   
import { useNavigate } from 'react-router-dom'
import ButtonLoader from '../ButtonLoader'

export default function NewProfile() {
    const [showModal, setShowModal] = React.useState(false) 
    const navigate = useNavigate()

    const current = window.location.pathname 
    localStorage.setItem("current", current)

    const [image, SetImage] = React.useState('');   
    const [selectedImage, setSelectedImage] = React.useState('');   

    const handleImageChange = (e: any ) => {

        const selected = e.target.files[0]; 
        const TYPES = ["image/png", "image/jpg", "image/jpeg" ];        
        if (selected && TYPES.includes(selected.type)) {
            SetImage(selected)
            const reader: any = new FileReader();
            reader.onloadend= () => {  
                setSelectedImage(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            console.log('Error')
        }   
    }   
    
    const [loading, setLoading] = React.useState(false);  

    const loginSchema = yup.object({ 
        companyEmail: yup.string().email('This email is not valid').required('Your email is required'),
        personalEmail: yup.string().email('This email is not valid').required('Your email is required'),
        name: yup.string().required('Required'),
        department: yup.string().required('Required'),
        personalPhone: yup.string().required('Required'),
        companyPhone: yup.string().required('Required'),
        address: yup.string().required('Required'),  
    })   

    // formik
    const formik = useFormik({
        initialValues: {name: '', personalEmail: '', companyEmail: '', department: '',  address: '',personalPhone: '', companyPhone: '', chatGroup: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    const onChangeChatGroup =(item: any)=> {
        console.log(item)
        formik.setFieldValue('chatGroup', item)
    }

    const submit = async () => {

        setLoading(true);
        if (!formik.dirty) {
            alert('You have to fill in the form correctly to continue');
            setLoading(false);
            return;
        }else if (!formik.isValid) {
            alert('You have to fill in the form correctly to continue');
            setLoading(false);
            return;
        } 
        else {
            try {   
                
                let StaffRole: any
                if(formik.values.department === 'Customer service Admin'){
                    StaffRole = 'CSA'
                } else if(formik.values.department === 'Customer service'){
                    StaffRole = 'CS'
                } else if(formik.values.department === 'Accounts'){
                    StaffRole = 'AC'
                } else if(formik.values.department === 'Operations'){
                    StaffRole = 'OP'
                } else if(formik.values.department === 'Managing Director'){
                    StaffRole = 'MD'
                } else if(formik.values.department === 'Clientele'){
                    StaffRole = 'CL'
                } else if(formik.values.department === 'Drivers'){
                    StaffRole = 'DR'
                } else if(formik.values.department === 'Agents'){
                    StaffRole = 'AG'
                }


                const request = await fetch(`http://faad-env.eba-kfucwakm.eu-central-1.elasticbeanstalk.com/api/v1/auth/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : `Bearer ${localStorage.getItem('token')}` 
                    },
                    body: JSON.stringify({
                        name: formik.values.name, 
                        personalEmail: formik.values.personalEmail, 
                        companyEmail: formik.values.companyEmail, 
                        department: formik.values.department,  
                        address: formik.values.address,
                        personalPhone: Number(formik.values.personalPhone), 
                        companyPhone: Number(formik.values.companyPhone), 
                        chatGroup: formik.values.chatGroup,
                        role: StaffRole,
                    }),
                });    
   
                if (request.status === 200) {  
                    setShowModal(true)
                    const t1 = setTimeout(() => {   
                        setShowModal(false)
                        clearTimeout(t1);
                    }, 1000); 
                }else {   
                    setLoading(false);
                    return
                }
                    
            } catch (error) {
                setLoading(false);
                console.log(error)
                return
            } 
            const t2 = setTimeout(() => { 
                navigate('/dashboard/ourpeople'); 
                clearTimeout(t2);
            }, 2000); 
        }  
    } 


    // const handleChange =async()=> { 
    //     // "62a49b6fc592977ebe01a5ce"
    // }

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <svg onClick={()=> navigate('/dashboard/ourpeople')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            <div className='w-full rounded-2xl p-10 bg-white flex ' >
                <div className='w-8/12 pr-12 border-r-0 border-[#DDE2E5] ' >
                    <div className='w-full flex' > 
                        <div className='w-full flex' > 
                            <label className='w-44 h-44 cursor-not-allowed rounded-xl'>
                                <input disabled style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                                {!image && ( 
                                    <div className='w-44 rounded-xl h-44 flex flex-col bg-[#DDE2E5]' >
                                        <div className=' w-full h-full flex justify-center items-center' >
                                            <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3337 11.0833C29.3337 16.7903 24.7073 21.4167 19.0003 21.4167C13.2934 21.4167 8.66699 16.7903 8.66699 11.0833C8.66699 5.37639 13.2934 0.75 19.0003 0.75C24.7073 0.75 29.3337 5.37639 29.3337 11.0833ZM24.167 11.0833C24.167 13.9368 21.8538 16.25 19.0003 16.25C16.1469 16.25 13.8337 13.9368 13.8337 11.0833C13.8337 8.22986 16.1469 5.91667 19.0003 5.91667C21.8538 5.91667 24.167 8.22986 24.167 11.0833Z" fill="#ACB5BD"/>
                                                <path d="M31.917 31.75C31.917 30.3233 30.7604 29.1667 29.3337 29.1667H8.66699C7.24026 29.1667 6.08366 30.3233 6.08366 31.75V47.25H0.916992V31.75C0.916992 27.4698 4.38679 24 8.66699 24H29.3337C33.6139 24 37.0837 27.4698 37.0837 31.75V47.25H31.917V31.75Z" fill="#ACB5BD"/>
                                            </svg>
                                        </div>
                                        <div className='mt-auto flex items-center justify-center cursor-not-allowed rounded-b-xl h-16 w-full bg-[#000000A6] font-Inter-Regular text-white' >
                                            <svg className='mr-2'  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 0C7.44772 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H9V1C9 0.447715 8.55229 0 8 0Z" fill="white"/>
                                            </svg>Choose image
                                        </div>
                                    </div>
                                )}
                                {image && (
                                    <img src={selectedImage} className='w-44 h-44 object-cover rounded-xl' />
                                )}
                            </label>
                            {/* <p className='font-Inter-Bold text-xs ml-auto' >Joined <span className='font-Inter-Regular' >20-03-2020</span></p> */}
                        </div>
                        {/* <p className='font-Inter-Bold text-xs ml-auto' >Joined <span className='font-Inter-Regular' >20-03-2020</span></p> */}
                    </div> 
                    <div className='w-full grid grid-cols-2 gap-6 mt-8 overflow-y-auto' >
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Personnel name </p>
                            <Input 
                                name="name"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("name", true, true)
                                }  
                                fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Name' />
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
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Personal email </p>
                            <Input 
                                name="personalEmail"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("personalEmail", true, true)
                                }  
                                fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Email' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.personalEmail && formik.errors.personalEmail && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.personalEmail}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Department</p>
                            <Select 
                                name="department"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("department", true, true)
                                }  
                                fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Department' >
                                    {/* <option>General</option> */}
                                    <option>Customer service Admin</option>
                                    <option>Customer service</option>
                                    <option>Accounts</option>
                                    <option>Operations</option>
                                    <option>Managing Director</option>
                                    <option>Clientele</option>
                                    <option>Drivers</option>
                                    <option>Agents</option> 
                                </Select>
                            <div className="w-full h-auto pt-2">
                                {formik.touched.department && formik.errors.department && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.department}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Company email </p>
                            <Input 
                                name="companyEmail"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("companyEmail", true, true)
                                }  
                                fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Company Email' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.companyEmail && formik.errors.companyEmail && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.companyEmail}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Personal Phone number</p>
                            <Input 
                                name="personalPhone"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("personalPhone", true, true)
                                }  
                                fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Phone Number' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.personalPhone && formik.errors.personalPhone && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.personalPhone}
                                    </motion.p>
                                )}
                            </div> 
                        </div>
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Address</p>
                            <Input 
                                name="address"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("address", true, true)
                                }  
                                fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Address' />
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
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Company Phone number </p>
                            <Input 
                                name="companyPhone"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("companyPhone", true, true)
                                }  
                                fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Company Number' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.companyPhone && formik.errors.companyPhone && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.companyPhone}
                                    </motion.p>
                                )}
                            </div> 
                        </div> 
                    </div>  
                    <div className='mt-14 flex ' >  
                        <button onClick={()=> submit()} disabled={loading ? true : false} className='font-Inter-SemiBold text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] ' >
                            {loading && (
                                <> 
                                    <ButtonLoader size='30' />
                                    <span className='ml-3'>Loading</span>
                                </>
                            )}
                            {!loading && (
                                <span className='mx-4'>Create new personnel profile</span>
                            )} 
                        </button>
                    </div>
                </div>
                <div className='flex flex-1' >
                    <div className='w-full font-Inter-Regular flex flex-col items-center ' >
                        {/* <div className='' >
                            <p className='font-Inter-SemiBold mb-4' >Groups</p>
                            <RadioGroup 
                                onChange={(e)=> onChangeChatGroup(e)}
                                colorScheme='yellow'>
                                <Stack> 
                                    <Radio value='General'>General</Radio>
                                    <Radio value='Operations'>Operations</Radio>
                                    <Radio value='Customer service'>Customer service</Radio>
                                    <Radio value='Accounts'>Accounts</Radio>
                                </Stack>
                            </RadioGroup> 
                        </div> */}
                    </div>
                </div>
                {showModal ?  
                    <div className='fixed w-full h-full flex justify-center top-0 left-0 items-center' >
                        <div className='w-64 bg-[#000000A6] py-8 flex justify-center items-center flex-col rounded-xl ' >
                            <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59.2968 97.9997L32.25 70.9529L41.2656 61.9373L59.2968 79.9685L95.3593 43.9061L104.375 52.9217L59.2968 97.9997Z" fill="#F88C3A"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.375 70.5C0.375 31.771 31.771 0.375 70.5 0.375C109.229 0.375 140.625 31.771 140.625 70.5C140.625 109.229 109.229 140.625 70.5 140.625C31.771 140.625 0.375 109.229 0.375 70.5ZM70.5 127.875C38.8127 127.875 13.125 102.187 13.125 70.5C13.125 38.8127 38.8127 13.125 70.5 13.125C102.187 13.125 127.875 38.8127 127.875 70.5C127.875 102.187 102.187 127.875 70.5 127.875Z" fill="#F88C3A"/>
                            </svg>
                            <p className='font-Inter-Bold text-white mt-6 text-lg ' >Created successfully</p>
                        </div>
                    </div>
                :null}
            </div>
        </div>
    )
} 
