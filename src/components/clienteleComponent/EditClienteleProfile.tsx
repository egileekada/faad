import { Input } from '@chakra-ui/input'
import { Select, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import ButtonLoader from '../ButtonLoader'
import PageLoader from '../PageLoader'
import { useQuery } from 'react-query'
import { BASEURL } from '../../assets/BasicUrl/Url'

export default function ClienteleProfile() { 

    const [show, setShow] = React.useState(false) 
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false); 
    // const userContext: IUser = React.useContext(UserContext);  

    const current = window.location.pathname 
    localStorage.setItem("current", current)
    const loginSchema = yup.object({  
        companyName: yup.string().required('Required'),
        industry: yup.string().required('Required'),
        email: yup.string().email('This email is not valid').required('Your email is required'),
        name: yup.string().required('Required'),
        personalemail: yup.string().required('Required'),
        phone: yup.string().required('Required'), 
        phoneNumber: yup.string().required('Required'), 
        // backupPhoneNumber: yup.string().required('Required'), 
        // address: yup.string().required('Required'), 
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
                            backupPhoneNumber: formik.values.backupPhoneNumber,
                            address: formik.values.backupPhoneNumber,

                    }
                ),
            });
    
            const json = await request.json(); 
    
            if (request.status === 200) {    
                setShow(true)  
                alert('Account Created Successfully');
                const t1 = setTimeout(() => { 
                    navigate('dashboard/clientele');  
                    clearTimeout(t1);
                }, 1000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            }
        }
    } 


    const { isLoading, data } = useQuery('EditClientsByID'+localStorage.getItem('editClientID'), () =>
        fetch(`${BASEURL.URL}client/${localStorage.getItem('editClientID')}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  


    const update = async () => {

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
            const request = await fetch(`${BASEURL.URL}client/${data.data.client._id}`, {
                method: 'PUT',
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
                            backupPhoneNumber: formik.values.backupPhoneNumber,
                            address: formik.values.backupPhoneNumber,

                    }
                ),
            });
    
            const json = await request.json(); 
    
            if (request.status === 200) {    
                setShow(true)  
                alert('Account Updated Successfully');
                const t1 = setTimeout(() => { 
                    navigate('/dashboard/clientele/info');  
                    clearTimeout(t1);
                }, 1000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            }
        }
    } 

    React.useEffect(() => {
        {!isLoading && ( 
            formik.setValues({
                companyName: data.data.client.companyName, 
                industry: data.data.client.industry, 
                email: data.data.client.email, 
                name: data.data.client.contactPersonDetails.name,  
                phone: data.data.client.contactPersonDetails.phone,
                personalemail: data.data.client.contactPersonDetails.email, 
                phoneNumber: data.data.client.phoneNumber, 
                address: data.data.client.address, 
                backupPhoneNumber: data.data.client.backupPhoneNumber
            })
        )}
    }, [data])
    

    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    )   

    const ClickHandler =(item: any)=> {
        localStorage.setItem('editClientID', '')
        navigate('/dashboard/clientele'+item)
    }

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            {localStorage.getItem('editClientID') === '' && (
                <svg onClick={()=> ClickHandler('')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
                </svg>
            )}
            {localStorage.getItem('editClientID') !== '' && (
                <svg onClick={()=> ClickHandler('/info')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
                </svg>
            )}
            <div style={{border: '1px solid #DDE2E5'}} className=' w-full rounded-2xl p-10 my-8 bg-white flex flex-col ' > 
                <p className='font-Inter-SemiBold text-2xl ml-3 ' >Client profile</p>
                {!isLoading && ( 
                    <>
                        <div style={{width: '790px'}} className=' flex mt-6 font-Inter-Regular' >
                            <div className='w-full px-3 ' >
                                <div className='my-4 ' >
                                    <p className='text-sm font-Inter-Regular mb-2' >Company name</p>
                                    <Input 
                                        name="companyName"
                                        onChange={formik.handleChange}
                                        value={formik.values.companyName}
                                        onFocus={() =>
                                            formik.setFieldTouched("companyName", true, true)
                                        }  

                                        fontSize='sm' placeholder={!data.data.client.companyName ? 'Enter company name' :data.data.client.companyName} size='lg' className='border border-[#DDE2E5] rounded-lg ' />
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
                                        value={formik.values.email}
                                        onFocus={() =>
                                            formik.setFieldTouched("email", true, true)
                                        }  
                                        fontSize='sm' placeholder={!data.data.client.email ? 'example@company.com' :data.data.client.email} size='lg' className='border border-[#DDE2E5] rounded-lg ' />
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
                                        value={formik.values.phoneNumber}
                                        onFocus={() =>
                                            formik.setFieldTouched("phoneNumber", true, true)
                                        }  
                                        fontSize='sm' placeholder={!data.data.client.phoneNumber ? '090...' :data.data.client.phoneNumber} size='lg' className='border border-[#DDE2E5] rounded-lg ' />
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
                                        value={formik.values.backupPhoneNumber}
                                        onFocus={() =>
                                            formik.setFieldTouched("backupPhoneNumber", true, true)
                                        }  
                                        fontSize='sm' placeholder={!data.data.client.backupPhoneNumber ? '090...' :data.data.client.backupPhoneNumber} size='lg' className='border border-[#DDE2E5] rounded-lg ' />
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
                                        value={formik.values.address}
                                        onFocus={() =>
                                            formik.setFieldTouched("address", true, true)
                                        }  
                                        fontSize='sm' placeholder={!data.data.client.address ? 'Enter Address' :data.data.client.address} size='lg' className='border border-[#DDE2E5] rounded-lg ' />
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
                                        value={formik.values.industry}
                                        onFocus={() =>
                                            formik.setFieldTouched("industry", true, true)
                                        }  
                                        fontSize='sm' placeholder={!data.data.client.industry ? 'Industry' :data.data.client.industry} size='lg' className='border border-[#DDE2E5] rounded-lg ' />
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
                                        value={formik.values.name}
                                        onFocus={() =>
                                            formik.setFieldTouched("name", true, true)
                                        }  
                                        fontSize='sm' placeholder={!data.data.client.contactPersonDetails.name ? 'Enter Name' :data.data.client.contactPersonDetails.name} size='lg' className='border border-[#DDE2E5] rounded-lg ' />
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
                                        value={formik.values.personalemail}
                                        onFocus={() =>
                                            formik.setFieldTouched("personalemail", true, true)
                                        }  
                                        fontSize='sm' placeholder={!data.data.client.contactPersonDetails.email ? 'Personal Email' :data.data.client.contactPersonDetails.email} size='lg' className='border border-[#DDE2E5] rounded-lg ' />
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
                                        value={formik.values.phone}
                                        onFocus={() =>
                                            formik.setFieldTouched("phone", true, true)
                                        }  
                                        fontSize='sm' placeholder={!data.data.client.contactPersonDetails.phone ? 'Enter Personal Number' :data.data.client.contactPersonDetails.phone} size='lg' className='border border-[#DDE2E5] rounded-lg ' />
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
                        {localStorage.getItem('editClientID') === '' && ( 
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
                        )}
                        {localStorage.getItem('editClientID') !== '' && ( 
                            <button onClick={()=> update()} disabled={loading ? true : false} className='font-Inter-SemiBold mt-8 ml-3 flex justify-center items-center text-xs h-10 text-white rounded-lg w-64 bg-[#F88C3A] ' >
                                {loading && (
                                    <> 
                                        <ButtonLoader size='30' />
                                        <span className='ml-3'>Loading</span>
                                    </>
                                )}
                                {!loading && (
                                    <span className='mx-4'>Save changes to client profile</span>
                                )} 
                            </button>
                        )}

                    </>
                )}
            {/* <button className='font-Inter-SemiBold mt-8 ml-3 text-xs h-10 text-white rounded-lg w-48 bg-[#F88C3A] ' >Save changes to client profile</button> */}
            </div>
        </div>
    )
} 
