import { Input } from '@chakra-ui/input'
import { Radio, RadioGroup, Select, Stack } from '@chakra-ui/react'
import React from 'react'
import { useLinkClickHandler, useNavigate } from 'react-router-dom'

export default function NewProfile() {
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
                        <div className='w-44 rounded-xl h-44 flex flex-col bg-[#DDE2E5]' >
                            <div className=' w-full h-full
                            flex justify-center items-center' >
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
                        <p className='font-Inter-Bold text-xs ml-auto' >Joined <span className='font-Inter-Regular' >20-03-2020</span></p>
                    </div> 
                    <div className='w-full grid grid-cols-2 gap-6 mt-8 overflow-y-auto' >
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Personnel name </p>
                            <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Name' />
                        </div>
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Personal email </p>
                            <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Email' />
                        </div>
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Department</p>
                            <Select fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Name' />
                        </div>
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Company email </p>
                            <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Company Email' />
                        </div>
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Personal Phone number</p>
                            <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Phone Number' />
                        </div>
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Address</p>
                            <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Your Address' />
                        </div>
                        <div className='w-full font-Inter-Regular' >
                            <p className=' text-sm font-Inter-Regular mb-2' >Company Phone number </p>
                            <Input fontSize='sm' border='1px solid #DDE2E5' backgroundColor='white' placeholder='Enter Company Number' />
                        </div>
                    </div>  
                    <div className='mt-14 flex ' > 

                    <button onClick={()=> ClickHandler()} className='font-Inter-SemiBold text-xs h-10 text-white rounded-lg px-4 bg-[#F88C3A] ' >Create new personnel profile</button>
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
                            <p className='font-Inter-Bold text-white mt-6 text-lg ' >Created successfully</p>
                        </div>
                    </div>
                :null}
            </div>
        </div>
    )
} 