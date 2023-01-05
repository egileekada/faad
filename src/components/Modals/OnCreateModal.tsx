import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OnCreateModal(props: any) {

    const [notify, setNotify] = React.useState(false)
    const navigate = useNavigate()

    
    return (
        <div className='absolute flex z-50 rounded-2xl p-10 mx-8 my-8 bg-white flex-1 inset-0 justify-center items-center flex-col' >
            
            {!props.failed && (
                <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.2968 97.9997L32.25 70.9529L41.2656 61.9373L59.2968 79.9685L95.3593 43.9061L104.375 52.9217L59.2968 97.9997Z" fill="#F66E09"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.375 70.5C0.375 31.771 31.771 0.375 70.5 0.375C109.229 0.375 140.625 31.771 140.625 70.5C140.625 109.229 109.229 140.625 70.5 140.625C31.771 140.625 0.375 109.229 0.375 70.5ZM70.5 127.875C38.8127 127.875 13.125 102.187 13.125 70.5C13.125 38.8127 38.8127 13.125 70.5 13.125C102.187 13.125 127.875 38.8127 127.875 70.5C127.875 102.187 102.187 127.875 70.5 127.875Z" fill="#F66E09"/>
                </svg>
            )}

            {props.failed && (
                <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M98.1638 53.4306C100.739 51.0301 100.881 46.9961 98.4808 44.4206C96.0803 41.845 92.0463 41.703 89.4707 44.1036L70.8167 61.4896L53.4306 42.8356C51.0301 40.26 46.9961 40.1181 44.4206 42.5186C41.845 44.9191 41.703 48.953 44.1036 51.5286L61.4896 70.1827L42.8356 87.5688C40.26 89.9693 40.1181 94.0032 42.5186 96.5788C44.9191 99.1544 48.953 99.2963 51.5286 96.8958L70.1827 79.5097L87.5688 98.1638C89.9693 100.739 94.0032 100.881 96.5788 98.4808C99.1544 96.0803 99.2963 92.0463 96.8958 89.4707L79.5097 70.8167L98.1638 53.4306Z" fill="#FF1F1F"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.375 70.5C0.375 31.771 31.771 0.375 70.5 0.375C109.229 0.375 140.625 31.771 140.625 70.5C140.625 109.229 109.229 140.625 70.5 140.625C31.771 140.625 0.375 109.229 0.375 70.5ZM70.5 127.875C38.8127 127.875 13.125 102.187 13.125 70.5C13.125 38.8127 38.8127 13.125 70.5 13.125C102.187 13.125 127.875 38.8127 127.875 70.5C127.875 102.187 102.187 127.875 70.5 127.875Z" fill="#FF1F1F"/>
                </svg>
            )}
            <p className='text-2xl mt-2 font-Inter-SemiBold' >{props.failed ? 'Failed': 'Deal created'}</p>
            <div className=' flex mt-10 ' > 
                {!props.failed && (
                    <>
                        <button onClick={()=> setNotify(true)} className={notify ? 'font-Inter-SemiBold text-xs flex items-center justify-center h-10 text-[#ACB5BD] rounded-lg w-40 bg-[#DDE2E5] ' :'font-Inter-SemiBold text-xs flex items-center justify-center h-10 text-white rounded-lg w-40 bg-[#F88C3A] '} >
                            {!notify && (
                                <a className=' flex items-center' target="_blank" href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+props.email+"&su=Deal Notification&body=Your Deal Have Been Create And Will Soon be Processed"}> 
                                    <svg className='mr-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="white"/>
                                    </svg>
                                    Notify Client
                                </a>
                            )}

                            {notify && (
                                <> 
                                    <svg className='mr-3' width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.41409 9.58579L1.41421 5.58567L0 6.99989L5.41409 12.4142L16.4141 1.41423L14.9998 1.33514e-05L5.41409 9.58579Z" fill="#ACB5BD"/>
                                    </svg>
                                    Client notified
                                </>
                            )}
                        </button>
                        <button onClick={()=> navigate('/dashboard/deals')} className='font-Inter-SemiBold text-xs h-10 flex justify-center items-center ml-4 text-[#fff] rounded-lg  w-40 bg-[#F4CC66] ' >View deal</button>
                    </>
                )}
                {props.failed && (
                    <button className='font-Inter-SemiBold text-xs flex items-center justify-center h-10 text-white rounded-lg w-36 bg-[#F88C3A] ' >
                        Try again
                    </button>
                )}
            </div>

            {!props.failed && (
                <p className='text-sm font-Inter-Regular flex mt-4 items-center text-[#ACB5BD]' >
                    <svg className='mr-3' width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 10.9611 1.60879 13.5465 4 14.9297V14.9999C4 17.2091 5.79086 18.9999 8 18.9999C10.2091 18.9999 12 17.2091 12 14.9999V14.9297C14.3912 13.5465 16 10.9611 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM12 12.4722C13.2275 11.3736 14 9.777 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 9.777 2.7725 11.3736 4 12.4722L6 12.4713V15C6.00003 16.1045 6.89545 16.9999 8 16.9999C9.10455 16.9999 9.99997 16.1045 10 14.9999V12.4713L12 12.4722Z" fill="#ACB5BD"/>
                        <path d="M6 20.0064V20C6.58835 20.3403 7.27143 20.5351 8 20.5351C8.72857 20.5351 9.41165 20.3403 10 20V20.0064C10 21.111 9.10457 22.0064 8 22.0064C6.89543 22.0064 6 21.111 6 20.0064Z" fill="#ACB5BD"/>
                    </svg>
                    {!notify && (
                        'Check with the operations department to follow up on execution'
                    )}
                    {notify && (
                        'View deal to follow up'
                    )}
                </p>
            )}
        </div>
    )
} 