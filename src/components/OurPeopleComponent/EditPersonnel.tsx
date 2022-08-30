import { Input } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'
import { RadioGroup, Radio } from '@chakra-ui/radio'
import { Select } from '@chakra-ui/select'
import React from 'react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import * as axios from 'axios'   
import { useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../context/UserContext'
import ButtonLoader from '../ButtonLoader'
import ChangePassword from './Modal/ChangePassword'

export default function EditPersonnel() {

    const current = window.location.pathname 
    localStorage.setItem("current", current)
    const userContext: IUser = React.useContext(UserContext);  
    const [edit, setEdit] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false) 
    const [loading, setLoading] = React.useState(false);


    const [image, SetImage] = React.useState('');   
    const [selectedImage, setSelectedImage] = React.useState('');  
    const [passwordModal, setPasswordModal] = React.useState(false); 
    const [deleteModal, setDeleteModal] = React.useState(false) 

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

        // eventContext.setBannerFile(selected)
    } 

    const DeleteHandler =async(index: any)=> {
        await fetch(`https://faadoli.herokuapp.com/api/v1/auth/profile/${index}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}` 
            }, 
        }); 
        setDeleteModal(false)
        navigate('/dashboard/ourpeople')
        // {DeleteTank(index)}
    }

    React.useEffect(() => { 
        formik.setFieldValue('companyEmail', userContext.profileData.companyEmail)
        formik.setFieldValue('personalEmail', userContext.profileData.personalEmail)
        formik.setFieldValue('name', userContext.profileData.name)
        formik.setFieldValue('department', userContext.profileData.department)
        formik.setFieldValue('personalPhone', userContext.profileData.personalPhone)
        formik.setFieldValue('companyPhone', userContext.profileData.companyPhone)
        formik.setFieldValue('address', userContext.profileData.address)
        formik.setFieldValue('chatGroup', userContext.profileData.chatGroup)
        // formik.setFieldValue('companyEmail', userContext.profileData.companyEmail)
        // formik.setFieldValue('companyEmail', userContext.profileData.companyEmail)
        formik.setFieldValue('chatGroup', userContext.profileData.department)
    },[]); 

    const ClickHandler =()=> {
        setShowModal(true)
        const t1 = setTimeout(() => { 
            setShowModal(false)
            clearTimeout(t1);
        }, 2000); 
    }
    const navigate = useNavigate()   

    // formik
    const formik = useFormik({
        initialValues: {name: '', personalEmail: '', companyEmail: '', department: '',  address: '',personalPhone: '', companyPhone: '', chatGroup: ''},
        // validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    const onChangeChatGroup =(item: any)=> { 
        formik.setFieldValue('chatGroup', item)
    }  

    const submit = async () => {

        setLoading(true) 
        const request = await fetch(`https://faadoli.herokuapp.com/api/v1/auth/profile/${userContext.profileData._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify(formik.values),
        }); 

        if(image !== ''){
            try {  

                let formData = new FormData()     
                formData.append('avatar', image)  

                // make request to server 
                await axios.default.put(`https://faadoli.herokuapp.com/api/v1/auth/profile/${userContext.profileData._id}/picture`, formData, {
                    headers: { 'content-type': 'application/json', 
                        Authorization : `Bearer ${localStorage.getItem('token')}` 
                    }
                })      
            } catch (error) {
                console.log(error)
            } 
        }

        if (request.status === 200) {    
            // console.log(json)  
            setShowModal(true)
            const t1 = setTimeout(() => {
                alert('Profile Updated')
                setShowModal(false)
                navigate('/dashboard/ourpeople'); 
                clearTimeout(t1);
            }, 1000); 
        }  
        setShowModal(false)
    } 

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <svg onClick={()=> navigate('/dashboard/ourpeople')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            <div className='w-full rounded-2xl p-10 bg-white flex ' >
                <div className='w-8/12 pr-12 border-r-0 border-[#DDE2E5] ' >
                    <div className='w-full flex' > 
                        <label className='w-44 h-44 cursor-pointer rounded-xl relative'>
                            <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                            {userContext.profileData.avatar === 'avatar.png' && ( 
                                <div className='w-44 rounded-xl h-44 flex flex-col bg-[#DDE2E5]' >
                                    <div className=' w-full h-full flex justify-center items-center' >
                                        <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3337 11.0833C29.3337 16.7903 24.7073 21.4167 19.0003 21.4167C13.2934 21.4167 8.66699 16.7903 8.66699 11.0833C8.66699 5.37639 13.2934 0.75 19.0003 0.75C24.7073 0.75 29.3337 5.37639 29.3337 11.0833ZM24.167 11.0833C24.167 13.9368 21.8538 16.25 19.0003 16.25C16.1469 16.25 13.8337 13.9368 13.8337 11.0833C13.8337 8.22986 16.1469 5.91667 19.0003 5.91667C21.8538 5.91667 24.167 8.22986 24.167 11.0833Z" fill="#ACB5BD"/>
                                            <path d="M31.917 31.75C31.917 30.3233 30.7604 29.1667 29.3337 29.1667H8.66699C7.24026 29.1667 6.08366 30.3233 6.08366 31.75V47.25H0.916992V31.75C0.916992 27.4698 4.38679 24 8.66699 24H29.3337C33.6139 24 37.0837 27.4698 37.0837 31.75V47.25H31.917V31.75Z" fill="#ACB5BD"/>
                                        </svg>
                                    </div>
                                    <div className='mt-auto flex items-center justify-center rounded-b-xl h-16 cursor-pointer w-full bg-[#000000A6] font-Inter-Regular text-white' >
                                        <svg className='mr-2'  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0C7.44772 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H9V1C9 0.447715 8.55229 0 8 0Z" fill="white"/>
                                        </svg>Choose image
                                    </div>
                                </div>
                            )}

                            {userContext.profileData.avatar !== 'avatar.png' && ( 
                                <img src={`https://faadoli.herokuapp.com/uploads/images/${userContext.profileData.avatar}`} alt='avatar' className='w-full h-full object-cover rounded-xl' />
                            )}
                            {image && (
                                <img src={selectedImage} className='w-44 h-44 object-cover absolute inset-0 z-40 rounded-xl' />
                            )}
                        </label>
                        <p className='font-Inter-Bold text-xs ml-auto' >Joined <span className='font-Inter-Regular' >20-03-2020</span></p>
                    </div>
                    {edit ? 
                        <div className='w-full grid grid-cols-2 gap-6 mt-8' >
                            <div className='w-full font-Inter-Regular' >
                                <p className=' text-sm font-Inter-Regular mb-2' >Personnel name </p>
                                <Input 
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    onFocus={() =>
                                        formik.setFieldTouched("name", true, true)
                                    }  
                                    disabled={userContext.userData.role.toLowerCase() === 'CSA'.toLowerCase() ? false: true}
                                    fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder={userContext.profileData.name} />
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
                                    value={formik.values.personalEmail}
                                    onFocus={() =>
                                        formik.setFieldTouched("personalEmail", true, true)
                                    }  
                                    disabled={userContext.userData.role.toLowerCase() === 'CSA'.toLowerCase() ? false: true}
                                    fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder={userContext.profileData.personalEmail} />
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
                                    value={formik.values.department}
                                    onFocus={() =>
                                        formik.setFieldTouched("department", true, true)
                                    }  
                                    disabled={userContext.userData.role.toLowerCase() === 'CSA'.toLowerCase() ? false: true}
                                    fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder={userContext.profileData.department} >
                                        <option value='General'>General</option>
                                        <option value='Operations'>Operations</option>
                                        <option value='Customer service'>Customer service</option>
                                        <option value='Accounts'>Accounts</option>
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
                                    value={formik.values.companyEmail}
                                    onFocus={() =>
                                        formik.setFieldTouched("companyEmail", true, true)
                                    }  
                                    disabled={userContext.userData.role.toLowerCase() === 'CSA'.toLowerCase() ? false: true}
                                    fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder={userContext.profileData.companyEmail} />
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
                                    value={formik.values.personalPhone}
                                    onFocus={() =>
                                        formik.setFieldTouched("personalPhone", true, true)
                                    }  
                                    disabled={userContext.userData.role.toLowerCase() === 'CSA'.toLowerCase() ? false: true}
                                    fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder={userContext.profileData.personalPhone} />
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
                                    value={formik.values.address}
                                    onFocus={() =>
                                        formik.setFieldTouched("address", true, true)
                                    }  
                                    disabled={userContext.userData.role.toLowerCase() === 'CSA'.toLowerCase() ? false: true}
                                    fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder={userContext.profileData.address} />
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
                                    value={formik.values.companyPhone}
                                    onFocus={() =>
                                        formik.setFieldTouched("companyPhone", true, true)
                                    }  
                                    disabled={userContext.userData.role.toLowerCase() === 'CSA'.toLowerCase() ? false: true}
                                    fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder={userContext.profileData.companyPhone} />
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
                            <div className='w-full font-Inter-Regular flex justify-center h-full items-center' >
                                <p onClick={()=> setPasswordModal(true)} className=' text-sm font-Inter-Bold mb-2 cursor-pointer' >Change Password</p>
                            </div> 
                        </div> 
                    :
                        <>
                            <div className='w-auto' >
                                <p className='font-Inter-SemiBold text-xl mt-4 ' >{userContext.profileData.name}</p>
                                <p className='font-Inter-Regular text-[#ACB5BD] text-sm' >{userContext.profileData.department}</p>
                            </div>
                            <div className='mt-6' >
                                <div className='flex items-center my-2' >
                                    <svg className='mr-3'  width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00976562 1.83789C0.00976562 1.28561 0.457481 0.837891 1.00977 0.837891H17C17.5523 0.837891 18 1.28561 18 1.83789V13.1621C18 14.2667 17.1046 15.1621 16 15.1621H2C0.89543 15.1621 0 14.2667 0 13.1621V2.16211C0 2.11449 0.00332856 2.06765 0.00976562 2.0218V1.83789ZM2 4.06165V13.1621H16V4.06199L11.1215 8.9405C9.94992 10.1121 8.05042 10.1121 6.87885 8.9405L2 4.06165ZM3.57232 2.80554H14.428L9.70728 7.52628C9.31675 7.91681 8.68359 7.91681 8.29306 7.52628L3.57232 2.80554Z" fill="#ACB5BD"/>
                                    </svg>
                                    <p className=' font-Inter-Regular text-sm' >{userContext.profileData.personalEmail}</p>
                                </div>
                                <div className='flex items-center my-2' >
                                    <svg className='mr-3'  width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00976562 1.83789C0.00976562 1.28561 0.457481 0.837891 1.00977 0.837891H17C17.5523 0.837891 18 1.28561 18 1.83789V13.1621C18 14.2667 17.1046 15.1621 16 15.1621H2C0.89543 15.1621 0 14.2667 0 13.1621V2.16211C0 2.11449 0.00332856 2.06765 0.00976562 2.0218V1.83789ZM2 4.06165V13.1621H16V4.06199L11.1215 8.9405C9.94992 10.1121 8.05042 10.1121 6.87885 8.9405L2 4.06165ZM3.57232 2.80554H14.428L9.70728 7.52628C9.31675 7.91681 8.68359 7.91681 8.29306 7.52628L3.57232 2.80554Z" fill="#ACB5BD"/>
                                    </svg>
                                    <p className=' font-Inter-Regular text-sm' >{userContext.profileData.companyEmail}</p>
                                </div> 
                                <div className='flex items-center my-2' >
                                    <svg className='mr-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 10C20 8.68677 19.7413 7.38647 19.2388 6.1731C18.7362 4.95996 17.9997 3.85742 17.0711 2.92896C16.1425 2.00024 15.0401 1.26367 13.8268 0.76123C12.6136 0.258545 11.3132 0 10 0V2C11.0506 2 12.0909 2.20703 13.0615 2.60889C14.0321 3.01099 14.914 3.60034 15.6569 4.34326C16.3997 5.08594 16.989 5.96802 17.391 6.93848C17.7931 7.90918 18 8.94946 18 10H20Z" fill="#ACB5BD"/>
                                        <path d="M0 8V3C0 2.44775 0.447723 2 1 2H6C6.55228 2 7 2.44775 7 3V7C7 7.55225 6.55228 8 6 8H4C4 12.4182 7.58173 16 12 16V14C12 13.4478 12.4477 13 13 13H17C17.5523 13 18 13.4478 18 14V19C18 19.5522 17.5523 20 17 20H12C5.37259 20 0 14.6274 0 8Z" fill="#ACB5BD"/>
                                        <path d="M15.5433 7.70386C15.8448 8.43188 16 9.21216 16 10H14.2C14.2 9.44849 14.0914 8.90234 13.8803 8.39282C13.6692 7.88306 13.3599 7.42017 12.9698 7.03027C12.5798 6.64014 12.1169 6.33081 11.6073 6.11963C11.0977 5.90869 10.5515 5.80005 10 5.80005V4C10.7879 4 11.5681 4.15527 12.2961 4.45679C13.024 4.7583 13.6855 5.2002 14.2426 5.75732C14.7998 6.31445 15.2418 6.97583 15.5433 7.70386Z" fill="#ACB5BD"/>
                                    </svg>
                                    <p className=' font-Inter-Regular text-sm' >{userContext.profileData.personalPhone}</p>
                                </div> 
                                <div className='flex items-center my-2' >
                                    <svg className='mr-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 10C20 8.68677 19.7413 7.38647 19.2388 6.1731C18.7362 4.95996 17.9997 3.85742 17.0711 2.92896C16.1425 2.00024 15.0401 1.26367 13.8268 0.76123C12.6136 0.258545 11.3132 0 10 0V2C11.0506 2 12.0909 2.20703 13.0615 2.60889C14.0321 3.01099 14.914 3.60034 15.6569 4.34326C16.3997 5.08594 16.989 5.96802 17.391 6.93848C17.7931 7.90918 18 8.94946 18 10H20Z" fill="#ACB5BD"/>
                                        <path d="M0 8V3C0 2.44775 0.447723 2 1 2H6C6.55228 2 7 2.44775 7 3V7C7 7.55225 6.55228 8 6 8H4C4 12.4182 7.58173 16 12 16V14C12 13.4478 12.4477 13 13 13H17C17.5523 13 18 13.4478 18 14V19C18 19.5522 17.5523 20 17 20H12C5.37259 20 0 14.6274 0 8Z" fill="#ACB5BD"/>
                                        <path d="M15.5433 7.70386C15.8448 8.43188 16 9.21216 16 10H14.2C14.2 9.44849 14.0914 8.90234 13.8803 8.39282C13.6692 7.88306 13.3599 7.42017 12.9698 7.03027C12.5798 6.64014 12.1169 6.33081 11.6073 6.11963C11.0977 5.90869 10.5515 5.80005 10 5.80005V4C10.7879 4 11.5681 4.15527 12.2961 4.45679C13.024 4.7583 13.6855 5.2002 14.2426 5.75732C14.7998 6.31445 15.2418 6.97583 15.5433 7.70386Z" fill="#ACB5BD"/>
                                    </svg>
                                    <p className=' font-Inter-Regular text-sm' >{userContext.profileData.companyPhone}</p>
                                </div> 
                                <div className='flex items-center my-2' >
                                    <svg className='mr-3' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2721 9.27212C13.2721 11.4813 11.4813 13.2721 9.27214 13.2721C7.06301 13.2721 5.27214 11.4813 5.27214 9.27212C5.27214 7.06298 7.06301 5.27212 9.27214 5.27212C11.4813 5.27212 13.2721 7.06298 13.2721 9.27212ZM11.2721 9.27212C11.2721 10.3767 10.3767 11.2721 9.27214 11.2721C8.16758 11.2721 7.27214 10.3767 7.27214 9.27212C7.27214 8.16755 8.16758 7.27212 9.27214 7.27212C10.3767 7.27212 11.2721 8.16755 11.2721 9.27212Z" fill="#ACB5BD"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.79417 15.5183C-0.805757 12.0909 -0.945617 6.39409 2.48178 2.79417C5.90918 -0.805757 11.6059 -0.945617 15.2059 2.48178C18.8058 5.90918 18.9457 11.6059 15.5183 15.2059L9.3124 21.7241L2.79417 15.5183ZM14.0698 13.8268L9.24298 18.8965L4.17324 14.0698C1.3733 11.404 1.26452 6.97318 3.93028 4.17324C6.59603 1.3733 11.0268 1.26452 13.8268 3.93028C16.6267 6.59603 16.7355 11.0268 14.0698 13.8268Z" fill="#ACB5BD"/>
                                    </svg>
                                    <p className=' font-Inter-Regular text-sm' >{userContext.profileData.address}</p>
                                </div> 
                            </div>
                        </>
                    }
                    <div className='mt-14 flex ' >
                        {edit ? 
                            <button onClick={()=> submit()} disabled={loading ? true : false} className='font-Inter-SemiBold text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] ' >
                                {loading && (
                                    <> 
                                        <ButtonLoader size='30' />
                                        <span className='ml-3'>Loading</span>
                                    </>
                                )}
                                {!loading && (
                                    <span className='mx-4'>Save changes</span>
                                )} 
                            </button>
                        :
                            <button onClick={()=> setEdit(true)} className='font-Inter-SemiBold text-xs h-10 text-white rounded-lg px-4 bg-[#F88C3A] ' >Edit profile</button>
                        }
                        <button onClick={()=> setDeleteModal(true)} className='font-Inter-SemiBold text-xs h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#FF1F1F] ml-4 ' > 
                            <svg className='mr-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 4C10.5523 4 11 4.44772 11 5V11C11 11.5523 10.5523 12 10 12C9.44771 12 9 11.5523 9 11V5C9 4.44772 9.44771 4 10 4Z" fill="white"/>
                                <path d="M10 14C9.44771 14 9 14.4477 9 15C9 15.5523 9.44771 16 10 16C10.5523 16 11 15.5523 11 15C11 14.4477 10.5523 14 10 14Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10Z" fill="white"/>
                            </svg> Delete profile
                        </button>
                    </div>
                </div>
                <div className='flex flex-1' >
                    <div className='w-full font-Inter-Regular flex flex-col items-center ' >
                        {/* <div className='' >
                            <p className='font-Inter-SemiBold mb-4' >Groups</p>
                            <RadioGroup value={formik.values.department} colorScheme='yellow'>
                                <Stack> 
                                    <Radio value='General'>General</Radio>
                                    <Radio value='Operations'>Operations</Radio>
                                    <Radio value='Customer Service'>Customer Service</Radio>
                                    <Radio value='Accounts'>Accounts</Radio>
                                </Stack>
                            </RadioGroup> 
                        </div> */}
                    </div>
                </div>

                {passwordModal ? 
                    (
                        <>
                            <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                <ChangePassword close={setPasswordModal} id={userContext.profileData._id} />
                            </div> 
                            <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                        </>
                    ) : null}  
                {showModal ?  
                    <div className='fixed w-full h-full flex justify-center top-0 left-0 items-center' >
                        <div className='w-64 bg-[#000000A6] py-8 flex justify-center items-center flex-col rounded-xl ' >
                            <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59.2968 97.9997L32.25 70.9529L41.2656 61.9373L59.2968 79.9685L95.3593 43.9061L104.375 52.9217L59.2968 97.9997Z" fill="#F88C3A"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.375 70.5C0.375 31.771 31.771 0.375 70.5 0.375C109.229 0.375 140.625 31.771 140.625 70.5C140.625 109.229 109.229 140.625 70.5 140.625C31.771 140.625 0.375 109.229 0.375 70.5ZM70.5 127.875C38.8127 127.875 13.125 102.187 13.125 70.5C13.125 38.8127 38.8127 13.125 70.5 13.125C102.187 13.125 127.875 38.8127 127.875 70.5C127.875 102.187 102.187 127.875 70.5 127.875Z" fill="#F88C3A"/>
                            </svg>
                            <p className='font-Inter-Bold text-white mt-6 text-lg ' >Changes saved</p>
                        </div>
                    </div>
                :null}

            {deleteModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <div className='w-80 rounded-lg flex flex-col justify-center items-center bg-white p-8' >
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="#ff0000"/>
                                    <path d="M9 9H11V17H9V9Z" fill="#ff0000"/>
                                    <path d="M13 9H15V17H13V9Z" fill="#ff0000"/>
                                </svg>
                                <p className=' font-Inter-Medium text-sm mt-3 text-black text-center' >Do You Want To Delete This Account?</p> 
                                <div className='flex mt-8' >
                                    <button onClick={()=> setDeleteModal(false) } className=' bg-gray-400 text-white py-2 rounded mr-1 px-6 font-Inter-Bold text-sm' >Cancel</button>
                                    <button  onClick={()=> DeleteHandler(userContext.profileData._id)} className=' bg-[#ff0000] text-white py-2 rounded ml-1 px-6 font-Inter-Bold text-sm' >Delete</button>
                                </div> 
                                {/* <button onClick={()=> DeleteHandler(item._id)} ></button> */}
                            </div>
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}  
            </div>
        </div>
    )
} 