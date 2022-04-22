import React, { useState } from 'react'
import LoginImage from '../assets/images/LoginImage.png'
import TopEllipse from '../assets/images/TopEllipse.png'
import SecondEllipse from '../assets/images/LoginEllipse.png'
import FirstEllipse from '../assets/images/LoginEllipse2.png'
import { Input } from '@chakra-ui/input'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';  
import ButtonLoader from '../components/ButtonLoader'
import { IUser, UserContext } from '../components/context/UserContext'

export default function LoginScreen() { 

    const navigate = useNavigate()
 
    const [showpassword, setShowpass] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [tokenvalue, setToken] = React.useState(''); 
    const userContext: IUser = React.useContext(UserContext);  

    const handleShowpassword = () => {
        setShowpass(prev => !prev);
    } 

    const loginSchema = yup.object({ 
        companyEmail: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(4, 'A minimium of 4 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {companyEmail: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    React.useEffect(() => {  
        localStorage.setItem('token', tokenvalue);   
    }); 

    const submit = async () => {

        setLoading(true);
        if (!formik.dirty) {
          alert('You have to fill in th form to continue');
          setLoading(false);
          return;
        }else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue');
          setLoading(false);
          return;
        }else {
            const request = await fetch(`https://faadoli.herokuapp.com/api/v1/auth/login`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formik.values),
            });
    
            const json = await request.json(); 
    
            if (request.status === 200) {    
                setToken(json.data.token)  
                localStorage.setItem('token',json.data.token) 
                sessionStorage.setItem('token',json.data.token) 
                userContext.setToken(json.data.token)
                sessionStorage.setItem('tabIndex', 'Dashboard') 
                console.log(json.data.token)
                const t1 = setTimeout(() => { 
                    navigate('/dashboard');  
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
        <div className='w-full h-screen overflow-hidden pb-10 ' > 
            <div className='w-full flex relative mr-40' > 
                <svg className='ml-28 mt-10' width="386" height="24" viewBox="0 0 386 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6936 0H4.03842L0 3.57155H23.6936V0Z" fill="#212429"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6936 10.3869H0V12.1844V13.9585V20.4013L3.57155 23.8795V13.9585H23.6936V10.3869Z" fill="#212429"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M48.9979 16.4102H41.5047L38.0265 19.9818H51.449L48.9979 16.4102Z" fill="#212429"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.1816 0.233093L59.1056 23.88L54.1335 23.8567L42.1816 6.51249L30.2064 23.8567L25.2343 23.88L42.1816 0.233093Z" fill="#212429"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M82.7759 16.4102H75.2826L71.8044 19.9818H85.2269L82.7759 16.4102Z" fill="#212429"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.9363 0.233093L92.8604 23.88L87.9115 23.8567L75.9363 6.51249L63.9845 23.8567L59.0123 23.88L75.9363 0.233093Z" fill="#212429"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M94.5643 0.372955H113.029L114.079 1.30669V1.0966L117.651 4.41138V7.88955V17.9506V19.748L116.904 20.4483H117.067L113.029 23.9965H94.5643V20.4483H114.079V17.9506V7.88955V3.94451H94.5643V0.372955Z" fill="#212429"/>
                    <path d="M170.752 23.9558L166.884 14.494L162.56 24.0003L156.051 7.43101H159.101L162.924 18.0478L165.655 11.2957L164.107 7.43101H166.702L170.889 17.7368L174.394 7.43101H177.17L170.798 23.9558H170.752ZM188.867 15.338C188.867 13.8721 189.231 12.5395 190.005 11.2957C190.733 10.0519 191.78 9.07461 193.055 8.31944C194.329 7.56427 195.74 7.2089 197.242 7.2089C198.744 7.2089 200.109 7.56427 201.384 8.31944C202.658 9.07461 203.66 10.0519 204.433 11.2957C205.207 12.5395 205.571 13.9166 205.571 15.338C205.571 16.804 205.207 18.181 204.433 19.3804C203.66 20.6242 202.658 21.6015 201.384 22.3122C200.109 23.023 198.699 23.4228 197.242 23.4228C195.74 23.4228 194.329 23.0674 193.055 22.3567C191.78 21.6459 190.779 20.6686 190.005 19.4248C189.277 18.181 188.867 16.804 188.867 15.338ZM191.553 15.338C191.553 16.3597 191.826 17.337 192.326 18.181C192.827 19.025 193.51 19.7358 194.42 20.2244C195.285 20.7131 196.241 20.9796 197.288 20.9796C198.334 20.9796 199.245 20.7131 200.109 20.2244C200.974 19.7358 201.657 19.025 202.158 18.181C202.658 17.2926 202.886 16.3597 202.886 15.338C202.886 14.3164 202.613 13.3391 202.112 12.4951C201.611 11.6066 200.929 10.9403 200.064 10.4073C199.199 9.91862 198.243 9.65209 197.242 9.65209C196.195 9.65209 195.239 9.91862 194.375 10.4073C193.51 10.8959 192.827 11.6066 192.326 12.4951C191.826 13.3835 191.598 14.3164 191.598 15.338H191.553ZM228.92 23.2895L225.234 17.7812H224.961H222.594V23.2895H219.954V7.38658H224.551C226.371 7.38658 227.828 7.8308 228.92 8.71923C230.013 9.60766 230.559 10.8959 230.559 12.4951C230.559 13.4723 230.331 14.3608 229.922 15.2048C229.512 16.0488 228.829 16.6707 227.919 17.1593L231.879 23.2895H228.875H228.92ZM222.639 15.2936H224.961C226.007 15.2936 226.781 15.0271 227.236 14.4496C227.691 13.8721 227.919 13.2502 227.919 12.5395C227.919 12.1397 227.828 11.7399 227.646 11.2957C227.464 10.8959 227.145 10.5405 226.736 10.2296C226.28 9.91862 225.734 9.78535 225.052 9.78535H222.639V15.2492V15.2936ZM248.583 14.2719L248.947 13.7833L255.091 7.38658H258.459L251.723 14.3164L258.687 23.2895H255.364L249.812 15.96L248.674 17.0705V23.3339H246.034V7.43101H248.674V13.5168L248.628 14.3164L248.583 14.2719ZM277.029 7.38658C278.896 7.38658 280.307 7.8308 281.353 8.71923C282.4 9.60766 282.901 10.8959 282.901 12.4951C282.901 13.4279 282.719 14.2719 282.355 15.0715C281.991 15.8711 281.399 16.493 280.534 17.0261C279.715 17.5147 278.622 17.7812 277.348 17.7812H274.981V23.2895H272.341V7.38658H276.938H277.029ZM277.394 15.338C278.122 15.338 278.668 15.2048 279.123 14.8938C279.578 14.5829 279.897 14.2275 280.079 13.7833C280.261 13.3391 280.352 12.9393 280.352 12.5395C280.352 11.8732 280.124 11.2513 279.669 10.6738C279.214 10.0963 278.486 9.82977 277.439 9.82977H275.027V15.2936H277.394V15.338ZM299.696 7.38658V20.8463H307.752V23.2895H297.101V7.38658H299.741H299.696ZM330.509 19.5581H324.592L323.045 23.2895H320.451L327.642 6.72026H327.778L334.97 23.2895H331.966L330.464 19.5581H330.509ZM329.645 17.3814L327.596 12.3618L325.503 17.3814H329.645ZM359.912 22.0457C359.457 22.4011 358.774 22.712 357.909 23.023C357.044 23.3339 356.134 23.4672 355.133 23.4672C353.449 23.4672 351.992 23.1118 350.718 22.4011C349.443 21.6903 348.488 20.7131 347.805 19.5137C347.122 18.3143 346.804 16.9816 346.804 15.5157C346.804 13.9166 347.122 12.4951 347.805 11.2513C348.488 10.0075 349.443 9.03018 350.627 8.31944C351.856 7.60869 353.221 7.25332 354.769 7.25332C355.725 7.25332 356.589 7.38658 357.409 7.60869C358.228 7.87522 358.956 8.18617 359.548 8.54155L358.501 10.9403C357.272 10.0963 356.043 9.69651 354.814 9.69651C353.858 9.69651 352.948 9.96304 352.129 10.4517C351.31 10.9403 350.627 11.6511 350.126 12.4951C349.626 13.3835 349.398 14.3164 349.398 15.338C349.398 16.4486 349.626 17.4259 350.081 18.2699C350.536 19.1583 351.173 19.8246 352.038 20.3133C352.903 20.8019 353.858 21.024 354.951 21.024C355.725 21.024 356.453 20.8907 357.09 20.6686C357.727 20.4465 358.273 20.1356 358.683 19.7802L359.775 22.0457H359.912ZM385.173 7.38658V9.82977H376.98V14.0498H384.262V16.493H376.98V20.8019H385.491V23.2451H374.386V7.34216H385.218L385.173 7.38658Z" fill="#F88C3A"/>
                </svg>
                <div className='bg-white absolute right-80' >
                    <img src={TopEllipse} alt='circle1' className='z-20 w-48 mr-auto' />
                </div>
            </div>
            <div className='w-full flex ' >
                <div className='w-full flex items-center mt-12 mr-36 relative' >
                    <img src={FirstEllipse} alt='circle' className='z-20 w-auto' style={{height: '76vh'}} />
                    <img src={SecondEllipse} alt='circle2' className='-ml-16' style={{height: '42vh'}} />
                    <img src={LoginImage} alt='circle3' className=' absolute z-40 object-contain ml-32' style={{height: '70vh'}} />
                    <div className='w-80 ml-auto bg-white' > 
                        <p className='font-Inter-SemiBold text-3xl' >Log in</p> 
                        <div className='mt-4' >
                            <input
                                name="companyEmail"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("companyEmail", true, true)
                                }  
                                className='border border-[#DDE2E5] rounded px-4 text-sm h-11 w-full ' placeholder='Email' />
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
                            <input 
                                name="password"
                                onChange={formik.handleChange}
                                onFocus={() =>
                                    formik.setFieldTouched("password", true, true)
                                }  
                                className='border faad border-[#DDE2E5] rounded px-4 text-sm h-11 w-full mt-6 ' type='password' placeholder='Password' />
                            <div className="w-full h-auto pt-2">
                                {formik.touched.password && formik.errors.password && (
                                    <motion.p
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                    >
                                        {formik.errors.password}
                                    </motion.p>
                                )}
                            </div>
                            <p className=' text-xs font-Inter-Medium text-[#495057] cursor-pointer mt-3' >Forgot password</p>
                            <button onClick={()=> submit()} disabled={loading ? true : false} className='h-10 rounded font-Inter-Bold text-sm flex justify-center items-center px-6 mt-6 bg-[#F88C3A] text-white' >
                                {loading && (
                                    <> 
                                        <ButtonLoader size='30' />
                                        <span className='ml-3'>Loading</span>
                                    </>
                                )}
                                {!loading && (
                                    <span className='mx-4'>Log in</span>
                                )}
                            </button>
                            {/* <button onClick={()=> submit()} className='h-10 rounded font-Inter-Bold text-sm px-10 mt-6 bg-[#F88C3A] text-white' ></button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 