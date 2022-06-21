import { Input } from '@chakra-ui/input'
import { Select, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import ButtonLoader from '../ButtonLoader'
import { useQuery } from 'react-query'
import PageLoader from '../PageLoader'
import SearchProduct from './components/SearchProduct'

export default function CreateBargain() {

    const navigate = useNavigate()
    const [name, setName] = React.useState('');  
    const [loading, setLoading] = React.useState(false);  
    const [productName, setProductName] = React.useState(''); 
    const check = [] as any 
    const [price, setPrice] = React.useState(''); 
    // const userContext: IUser = React.useContext(UserContext);  

    const loginSchema = yup.object({  
        companyName: yup.string().required('Required'),
        askingPrice: yup.string().required('Required'),
        email: yup.string().email('This email is not valid').required('Your email is required'),
        biddingPrice: yup.string().required('Required'),
        phoneNumber: yup.string().required('Required'), 
        fuel: yup.string().required('Required'),
        quantity: yup.string().required('Required'),  
        address: yup.string().required('Required'), 
        clientId: yup.string().required('Required'),
        // client: yup.string().required('Required'), 
    })    



    // formik
    const formik = useFormik({
        initialValues: {
            companyName: '', 
            askingPrice: '', 
            email: '', 
            biddingPrice: '',  
            phoneNumber: '',
            fuel: '', 
            quantity: '', 
            address: '', 
            clientId: '',
            status: ''
        },
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 

    React.useEffect(() => { 
        formik.setFieldValue('fuel', productName)
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
            const request = await fetch(`https://faadoli.herokuapp.com/api/v1/bargain`, {
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
                alert('Account Created Successfully');
                const t1 = setTimeout(() => { 
                    navigate('/dashboard/bargains');  
                    clearTimeout(t1);
                }, 1000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            }
        }
    }    
 
    const { isLoading, error, data } = useQuery('AllClients', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/client', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    ) 
    
    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    )  

    const ClickHandler =(item: any)=> {
        // setEmail(item.email)
        setName('')
        // setPhone(item.phoneNumber)
        formik.setFieldValue('status', 'pending')
        formik.setFieldValue('email', item.email)
        formik.setFieldValue('companyName', item.companyName)
        formik.setFieldValue('clientId', item._id)
        formik.setFieldValue('phoneNumber', item.phoneNumber)
    }

    const OnChangeHandler =(event: any)=> { 
        setName(event)
        formik.setFieldValue('companyName', event)
    }

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <svg onClick={()=> navigate('/dashboard/bargains')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            <div style={{border: '1px solid #DDE2E5'}} className=' w-full rounded-2xl p-10 my-8 bg-white flex flex-col ' > 
                <p className='font-Inter-SemiBold text-2xl ml-3 ' >Create bargain</p>
                <div style={{width: '790px'}} className=' flex mt-6 font-Inter-Regular' >
                    <div className='w-full px-3 ' >
                        <div className='my-4 relative ' >
                            <p className='text-sm font-Inter-Regular mb-2' >Company name</p>
                            <Input 
                                name="companyName"
                                value={formik.values.companyName} 
                                autoComplete="off"
                                // onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("companyName", true, true)
                                }  
                                onChange={(e)=> OnChangeHandler(e.target.value)}
                                fontSize='sm' placeholder='Enter company name' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            
                            {!isLoading && (
                                <> 
                                    {name !== '' && (
                                        <div style={{boxShadow: '0px 2px 8px 0px #60617029'}} className='absolute top-20 w-full px-4 py-2 rounded-lg z-20 bg-white' >
                                            {[...data.data.clients].reverse().map((item: any, index: any)=> {  
                                                if(item.companyName.toLowerCase().includes(formik.values.companyName.toLowerCase())){ 
                                                    check.splice(index, 1, 'true');
                                                    return(
                                                        <p className=' font-Inter-Medium text-sm cursor-pointer my-2 ' onClick={()=> ClickHandler(item)} >{item.companyName}</p>
                                                    ) 
                                                } else {
                                                    check.splice(index, 1, 'false');
                                                }
                                            })}
                                            {!check.includes('true') && (
                                                    <p className=' font-Inter-Medium text-sm cursor-pointer my-2 ' >No Record found</p> 
                                                )
                                            }
                                        </div>
                                    )}
                                </>
                            )}
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
                                value={formik.values.phoneNumber}
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
                            <p className='text-sm font-Inter-Regular mb-2' >Fuel</p>
                            <SearchProduct name={setProductName} price={setPrice} />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.fuel && formik.errors.fuel && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.fuel}
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
                                }  
                                fontSize='sm' placeholder='Select Quantity' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
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
                        <p className='text-sm font-Inter-Regular mb-2' >Total Price: ₦{(Number(formik.values.quantity)*Number(formik.values.biddingPrice)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
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
                            <p className='text-sm font-Inter-Regular mb-2' >Bidding price</p>
                            <Input 
                                name="biddingPrice"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("biddingPrice", true, true)
                                }  
                                fontSize='sm' placeholder='N0000' size='lg' className='border border-[#DDE2E5] rounded-lg ' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.biddingPrice && formik.errors.biddingPrice && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.biddingPrice}
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
                                height='160px' fontSize='sm' placeholder='Enter address'  className='border border-[#DDE2E5] rounded-lg ' />
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
                </div>
                <button onClick={()=> submit()} disabled={loading ? true : false} className='font-Inter-SemiBold mt-8 ml-3 flex justify-center items-center text-xs h-10 text-white rounded-lg w-44 bg-[#F88C3A] ' >
                    {loading && (
                        <> 
                            <ButtonLoader size='30' />
                            <span className='ml-3'>Loading</span>
                        </>
                    )}
                    {!loading && (
                        <span className='mx-4'>Create bargain</span>
                    )} 
                </button>
                {/* <button className='font-Inter-SemiBold mt-8 ml-3 text-xs h-10 text-white rounded-lg w-44 bg-[#F88C3A] ' >Create bargain</button> */}
            </div>
        </div>
    )
} 