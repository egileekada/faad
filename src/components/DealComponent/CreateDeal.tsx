import { Input } from '@chakra-ui/input'
import { Select, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import OnCreateModal from '../Modals/OnCreateModal'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import { IUser, UserContext } from '../context/UserContext'
import ButtonLoader from '../ButtonLoader'
import SearchProduct from '../barginComponent/components/SearchProduct'
import { BASEURL } from '../../assets/BasicUrl/Url'

export default function CreateDeal() {

    const current = window.location.pathname 
    localStorage.setItem("current", current)
    const [show, setShow] = React.useState(false) 
    const userContext: IUser = React.useContext(UserContext);  
    const navigate = useNavigate()
    const [productName, setProductName] = React.useState('');
    const [emailaddress, setEmail] = React.useState(''); 
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');  
    const [price, setPrice] = React.useState(''); 
    const [loading, setLoading] = React.useState(false);   

    const loginSchema = yup.object({  
        companyName: yup.string().required('Required'),
        askingPrice: yup.string().required('Required'),
        email: yup.string().email('This email is not valid').required('Your email is required'),
        costBeforDispatched: yup.string().required('Required'),
        phoneNumber: yup.string().required('Required'),
        address: yup.string().required('Required'), 
        backupPhoneNumber: yup.string().required('Required'), 
        fuelType: yup.string().required('Required'), 
        quantity: yup.string().required('Required'),
        dispatchNote: yup.string().required('Required'), 
        // client: yup.string().required('Required'), 
    })   

    // formik
    const formik = useFormik({
        initialValues: {companyName: '', askingPrice: '', email: '', costBeforDispatched: '',  phoneNumber: '',address: '', backupPhoneNumber: '', fuelType: '', quantity: '', dispatchNote: '', userId: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    console.log(formik.values);
    

    React.useEffect(() => { 
        formik.setFieldValue('fuelType', productName)
        formik.setFieldValue('userId', userContext.userData._id)
        formik.setFieldValue('askingPrice', price)
    }, [productName, price]) 

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
            const request = await fetch(`${BASEURL.URL}deals`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json();     
                setShow(true)   
        }
    } 

    const ClickHandler =(item: any)=> {
        setEmail(item.email)
        setName('')
        setPhone(item.phoneNumber)

        formik.setFieldValue('email', item.email)
        formik.setFieldValue('userId', item.email)
        formik.setFieldValue('companyName', item.companyName) 
        formik.setFieldValue('phoneNumber', item.phoneNumber)
    }

    return (
        <>
            {show && (
                <OnCreateModal failed={false} />  
            )}

            {!show && ( 
                <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
                    <svg onClick={()=> navigate('/dashboard/deals')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
                    </svg>
                    <div style={{border: '1px solid #DDE2E5'}} className=' h-auto w-full relative rounded-2xl p-10 mb-8 bg-white flex flex-col ' > 
                        <p className='font-Inter-SemiBold text-2xl ml-3 ' >Create deal</p>
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
                                    <p className='text-sm font-Inter-Regular mb-2' >Fuel</p>
                                    <SearchProduct name={setProductName} price={setPrice} />
                                    <div className="w-full h-auto pt-2">
                                        {formik.touched.fuelType && formik.errors.fuelType && (
                                            <motion.p
                                                initial={{ y: -100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                            >
                                                {formik.errors.fuelType}
                                            </motion.p>
                                        )}
                                    </div> 
                                </div>
                                <div className='my-4 ' >
                                    <p className='text-sm font-Inter-Regular mb-2' >Quantity in Litres</p>
                                    <Input  
                                        name="quantity"
                                        onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("quantity", true, true)
                                        }  type='number'
                                        fontSize='sm' placeholder='1000' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                                    <div className="w-full h-auto pt-2">
                                        {formik.touched.quantity && formik.errors.quantity && (
                                            <motion.p
                                                initial={{ y: -100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                            >
                                                {formik.errors.quantity}
                                            </motion.p>
                                        )}
                                    </div> 
                                </div>

                            <p className='text-sm font-Inter-Regular mb-2' >Total Price: ₦{(Number(formik.values.quantity)*Number(formik.values.costBeforDispatched)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                            </div>
                            <div className='w-full px-3' >
                                <div className='my-4 ' >
                                    <p className='text-sm font-Inter-Regular mb-2' >Asking price</p>
                                    <Input  
                                        name="askingPrice"
                                        value={price}
                                        // onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("askingPrice", true, true)
                                        }  
                                        fontSize='sm' placeholder='N135.0' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                                    <div className="w-full h-auto pt-2">
                                        {formik.touched.askingPrice && formik.errors.askingPrice && (
                                            <motion.p
                                                initial={{ y: -100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                            >
                                                {formik.errors.askingPrice}
                                            </motion.p>
                                        )}
                                    </div> 
                                </div>
                                <div className='my-4 ' >
                                    <p className='text-sm font-Inter-Regular mb-2' >Cost before dispatch</p>
                                    <Input  
                                        name="costBeforDispatched"
                                        onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("costBeforDispatched", true, true)
                                        }  
                                        fontSize='sm' placeholder='N0000' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                                    <div className="w-full h-auto pt-2">
                                        {formik.touched.costBeforDispatched && formik.errors.costBeforDispatched && (
                                            <motion.p
                                                initial={{ y: -100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                            >
                                                {formik.errors.costBeforDispatched}
                                            </motion.p>
                                        )}
                                    </div> 
                                </div>
                                <div className='my-4 ' >
                                    <p className='text-sm font-Inter-Regular mb-2' >Address (supply location)</p>
                                    <Textarea  
                                        name="address"
                                        onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("address", true, true)
                                        }  
                                        height='96px' fontSize='sm' placeholder='Enter address'  className='border border-[#DDE2E5] rounded-lg ' />
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
                                <div className='my-4 ' >
                                    <p className='text-sm font-Inter-Regular mb-2' >Dispatch note</p>
                                    <Textarea  
                                        name="dispatchNote"
                                        onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("dispatchNote", true, true)
                                        }  
                                        height='151px' fontSize='sm' placeholder='Enter instructions and other important stuff'  className='border border-[#DDE2E5] rounded-lg ' />
                                    <div className="w-full h-auto pt-2">
                                        {formik.touched.dispatchNote && formik.errors.dispatchNote && (
                                            <motion.p
                                                initial={{ y: -100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                            >
                                                {formik.errors.dispatchNote}
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
                                <span className='mx-4'>Create Deal</span>
                            )} 
                        </button>
                    </div>
                </div>
            // <div className='flex flex-1 relative rounded-2xl p-10 my-8 bg-white    ' >
            )}
        </>
            
    )
} 
