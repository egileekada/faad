import { Input } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'
import { RadioGroup, Radio } from '@chakra-ui/radio'
import { Select } from '@chakra-ui/select'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditPersonnel() {

    const [edit, setEdit] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)

    const ClickHandler =()=> {
        setShowModal(true)
        const t1 = setTimeout(() => { 
            setShowModal(false)
            clearTimeout(t1);
        }, 2000); 
    }
    const navigate = useNavigate()

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <svg onClick={()=> navigate('/dashboard/deals')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            <div className='w-full rounded-2xl p-10 bg-white flex ' >
                <div className='w-8/12 pr-12 border-r-2 border-[#DDE2E5] ' >
                    <div className='w-full flex' > 
                        <div className='w-44 rounded-xl h-44 bg-red-300' >

                        </div>
                        <p className='font-Inter-Bold text-xs ml-auto' >Joined <span className='font-Inter-Regular' >20-03-2020</span></p>
                    </div>
                    {edit ? 
                        <div className='w-full grid grid-cols-2 gap-6 mt-8' >
                            <div className='w-full font-Inter-Regular' >
                                <p className=' text-xs font-Inter-SemiBold mb-2' >Personnel name </p>
                                <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Name' />
                            </div>
                            <div className='w-full font-Inter-Regular' >
                                <p className=' text-xs font-Inter-SemiBold mb-2' >Personal email </p>
                                <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Email' />
                            </div>
                            <div className='w-full font-Inter-Regular' >
                                <p className=' text-xs font-Inter-SemiBold mb-2' >Department</p>
                                <Select fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Name' />
                            </div>
                            <div className='w-full font-Inter-Regular' >
                                <p className=' text-xs font-Inter-SemiBold mb-2' >Company email </p>
                                <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Company Email' />
                            </div>
                            <div className='w-full font-Inter-Regular' >
                                <p className=' text-xs font-Inter-SemiBold mb-2' >Personal Phone number</p>
                                <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Phone Number' />
                            </div>
                            <div className='w-full font-Inter-Regular' >
                                <p className=' text-xs font-Inter-SemiBold mb-2' >Address</p>
                                <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Address' />
                            </div>
                            <div className='w-full font-Inter-Regular' >
                                <p className=' text-xs font-Inter-SemiBold mb-2' >Company Phone number </p>
                                <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Company Number' />
                            </div>
                        </div> 
                    :
                        <>
                            <div className='w-auto' >
                                <p className='font-Inter-SemiBold text-xl mt-4 ' >Mary J. Blige</p>
                                <p className='font-Inter-Regular text-[#ACB5BD] text-sm' >Customer Service</p>
                            </div>
                            <div className='mt-6' >
                                <div className='flex items-center my-2' >
                                    <svg className='mr-3'  width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00976562 1.83789C0.00976562 1.28561 0.457481 0.837891 1.00977 0.837891H17C17.5523 0.837891 18 1.28561 18 1.83789V13.1621C18 14.2667 17.1046 15.1621 16 15.1621H2C0.89543 15.1621 0 14.2667 0 13.1621V2.16211C0 2.11449 0.00332856 2.06765 0.00976562 2.0218V1.83789ZM2 4.06165V13.1621H16V4.06199L11.1215 8.9405C9.94992 10.1121 8.05042 10.1121 6.87885 8.9405L2 4.06165ZM3.57232 2.80554H14.428L9.70728 7.52628C9.31675 7.91681 8.68359 7.91681 8.29306 7.52628L3.57232 2.80554Z" fill="#ACB5BD"/>
                                    </svg>
                                    <p className=' font-Inter-Regular text-sm' >mary.jblige@faadoil.com</p>
                                </div>
                                <div className='flex items-center my-2' >
                                    <svg className='mr-3'  width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.00976562 1.83789C0.00976562 1.28561 0.457481 0.837891 1.00977 0.837891H17C17.5523 0.837891 18 1.28561 18 1.83789V13.1621C18 14.2667 17.1046 15.1621 16 15.1621H2C0.89543 15.1621 0 14.2667 0 13.1621V2.16211C0 2.11449 0.00332856 2.06765 0.00976562 2.0218V1.83789ZM2 4.06165V13.1621H16V4.06199L11.1215 8.9405C9.94992 10.1121 8.05042 10.1121 6.87885 8.9405L2 4.06165ZM3.57232 2.80554H14.428L9.70728 7.52628C9.31675 7.91681 8.68359 7.91681 8.29306 7.52628L3.57232 2.80554Z" fill="#ACB5BD"/>
                                    </svg>
                                    <p className=' font-Inter-Regular text-sm' >mary.jblige@faadoil.com</p>
                                </div> 
                                <div className='flex items-center my-2' >
                                    <svg className='mr-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 10C20 8.68677 19.7413 7.38647 19.2388 6.1731C18.7362 4.95996 17.9997 3.85742 17.0711 2.92896C16.1425 2.00024 15.0401 1.26367 13.8268 0.76123C12.6136 0.258545 11.3132 0 10 0V2C11.0506 2 12.0909 2.20703 13.0615 2.60889C14.0321 3.01099 14.914 3.60034 15.6569 4.34326C16.3997 5.08594 16.989 5.96802 17.391 6.93848C17.7931 7.90918 18 8.94946 18 10H20Z" fill="#ACB5BD"/>
                                        <path d="M0 8V3C0 2.44775 0.447723 2 1 2H6C6.55228 2 7 2.44775 7 3V7C7 7.55225 6.55228 8 6 8H4C4 12.4182 7.58173 16 12 16V14C12 13.4478 12.4477 13 13 13H17C17.5523 13 18 13.4478 18 14V19C18 19.5522 17.5523 20 17 20H12C5.37259 20 0 14.6274 0 8Z" fill="#ACB5BD"/>
                                        <path d="M15.5433 7.70386C15.8448 8.43188 16 9.21216 16 10H14.2C14.2 9.44849 14.0914 8.90234 13.8803 8.39282C13.6692 7.88306 13.3599 7.42017 12.9698 7.03027C12.5798 6.64014 12.1169 6.33081 11.6073 6.11963C11.0977 5.90869 10.5515 5.80005 10 5.80005V4C10.7879 4 11.5681 4.15527 12.2961 4.45679C13.024 4.7583 13.6855 5.2002 14.2426 5.75732C14.7998 6.31445 15.2418 6.97583 15.5433 7.70386Z" fill="#ACB5BD"/>
                                    </svg>
                                    <p className=' font-Inter-Regular text-sm' >mary.jblige@faadoil.com</p>
                                </div> 
                                <div className='flex items-center my-2' >
                                    <svg className='mr-3' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 10C20 8.68677 19.7413 7.38647 19.2388 6.1731C18.7362 4.95996 17.9997 3.85742 17.0711 2.92896C16.1425 2.00024 15.0401 1.26367 13.8268 0.76123C12.6136 0.258545 11.3132 0 10 0V2C11.0506 2 12.0909 2.20703 13.0615 2.60889C14.0321 3.01099 14.914 3.60034 15.6569 4.34326C16.3997 5.08594 16.989 5.96802 17.391 6.93848C17.7931 7.90918 18 8.94946 18 10H20Z" fill="#ACB5BD"/>
                                        <path d="M0 8V3C0 2.44775 0.447723 2 1 2H6C6.55228 2 7 2.44775 7 3V7C7 7.55225 6.55228 8 6 8H4C4 12.4182 7.58173 16 12 16V14C12 13.4478 12.4477 13 13 13H17C17.5523 13 18 13.4478 18 14V19C18 19.5522 17.5523 20 17 20H12C5.37259 20 0 14.6274 0 8Z" fill="#ACB5BD"/>
                                        <path d="M15.5433 7.70386C15.8448 8.43188 16 9.21216 16 10H14.2C14.2 9.44849 14.0914 8.90234 13.8803 8.39282C13.6692 7.88306 13.3599 7.42017 12.9698 7.03027C12.5798 6.64014 12.1169 6.33081 11.6073 6.11963C11.0977 5.90869 10.5515 5.80005 10 5.80005V4C10.7879 4 11.5681 4.15527 12.2961 4.45679C13.024 4.7583 13.6855 5.2002 14.2426 5.75732C14.7998 6.31445 15.2418 6.97583 15.5433 7.70386Z" fill="#ACB5BD"/>
                                    </svg>
                                    <p className=' font-Inter-Regular text-sm' >mary.jblige@faadoil.com</p>
                                </div> 
                                <div className='flex items-center my-2' >
                                    <svg className='mr-3' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2721 9.27212C13.2721 11.4813 11.4813 13.2721 9.27214 13.2721C7.06301 13.2721 5.27214 11.4813 5.27214 9.27212C5.27214 7.06298 7.06301 5.27212 9.27214 5.27212C11.4813 5.27212 13.2721 7.06298 13.2721 9.27212ZM11.2721 9.27212C11.2721 10.3767 10.3767 11.2721 9.27214 11.2721C8.16758 11.2721 7.27214 10.3767 7.27214 9.27212C7.27214 8.16755 8.16758 7.27212 9.27214 7.27212C10.3767 7.27212 11.2721 8.16755 11.2721 9.27212Z" fill="#ACB5BD"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.79417 15.5183C-0.805757 12.0909 -0.945617 6.39409 2.48178 2.79417C5.90918 -0.805757 11.6059 -0.945617 15.2059 2.48178C18.8058 5.90918 18.9457 11.6059 15.5183 15.2059L9.3124 21.7241L2.79417 15.5183ZM14.0698 13.8268L9.24298 18.8965L4.17324 14.0698C1.3733 11.404 1.26452 6.97318 3.93028 4.17324C6.59603 1.3733 11.0268 1.26452 13.8268 3.93028C16.6267 6.59603 16.7355 11.0268 14.0698 13.8268Z" fill="#ACB5BD"/>
                                    </svg>
                                    <p className=' font-Inter-Regular text-sm' >mary.jblige@faadoil.com</p>
                                </div> 
                            </div>
                        </>
                    }
                    <div className='mt-14 flex ' >
                        {edit ? 
                            <button onClick={()=> ClickHandler()} className='font-Inter-SemiBold text-xs h-10 text-white rounded-lg px-4 bg-[#F88C3A] ' >Save changes</button>
                        :
                            <button onClick={()=> setEdit(true)} className='font-Inter-SemiBold text-xs h-10 text-white rounded-lg px-4 bg-[#F88C3A] ' >Edit profile</button>
                        }
                        <button className='font-Inter-SemiBold text-xs h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#FF1F1F] ml-4 ' > 
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
                        <div className='' >
                            <p className='font-Inter-SemiBold mb-4' >Groups</p>
                            <RadioGroup colorScheme='yellow'>
                                <Stack> 
                                    <Radio value='General'>General</Radio>
                                    <Radio value='Operations'>Operations</Radio>
                                    <Radio value='Customer service'>Customer service</Radio>
                                    <Radio value='Accounts'>Accounts</Radio>
                                </Stack>
                            </RadioGroup> 
                        </div>
                    </div>
                </div>
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
            </div>
        </div>
    )
} 