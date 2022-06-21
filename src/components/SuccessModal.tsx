import React from 'react'

export default function SuccessModal(props: any) {
    return (
        <>
            {props.close ?  
                <div className='fixed w-full h-full flex z-50 justify-center top-0 left-0 items-center' >
                    <div className='w-64 bg-[#000000A6] py-8 flex justify-center items-center flex-col rounded-xl ' >
                        <svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.2968 97.9997L32.25 70.9529L41.2656 61.9373L59.2968 79.9685L95.3593 43.9061L104.375 52.9217L59.2968 97.9997Z" fill="#F88C3A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.375 70.5C0.375 31.771 31.771 0.375 70.5 0.375C109.229 0.375 140.625 31.771 140.625 70.5C140.625 109.229 109.229 140.625 70.5 140.625C31.771 140.625 0.375 109.229 0.375 70.5ZM70.5 127.875C38.8127 127.875 13.125 102.187 13.125 70.5C13.125 38.8127 38.8127 13.125 70.5 13.125C102.187 13.125 127.875 38.8127 127.875 70.5C127.875 102.187 102.187 127.875 70.5 127.875Z" fill="#F88C3A"/>
                        </svg>
                        <p className='font-Inter-Bold text-white mt-6 w-56 text-center  ' >{props.message}</p>
                    </div>
                </div>
            :null}
        </>
    )
} 