import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function StepFive() {

    const navigate = useNavigate()
    React.useEffect(() => {
        const timer = setTimeout(() =>  navigate(0), 1000);
    },)

    return (
        <div style={{border: '1px solid #DDE2E5', height: '60vh'}} className='bg-white rounded-lg p-8 ' >
            <div  className='w-full relative h-full flex flex-col justify-center items-center' >
                <svg width="153" height="153" viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M65.2968 104L38.25 76.9529L47.2656 67.9373L65.2968 85.9685L101.359 49.9061L110.375 58.9217L65.2968 104Z" fill="#F66E09"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.375 76.5C6.375 37.771 37.771 6.375 76.5 6.375C115.229 6.375 146.625 37.771 146.625 76.5C146.625 115.229 115.229 146.625 76.5 146.625C37.771 146.625 6.375 115.229 6.375 76.5ZM76.5 133.875C44.8127 133.875 19.125 108.187 19.125 76.5C19.125 44.8127 44.8127 19.125 76.5 19.125C108.187 19.125 133.875 44.8127 133.875 76.5C133.875 108.187 108.187 133.875 76.5 133.875Z" fill="#F66E09"/>
                </svg>
                <p className='text-xl font-Inter-Bold mt-4' >Deal Completed</p>
            
                <div className='w-full bottom-0 flex absolute ' >
                    <button className='py-2 text-sm font-Inter-SemiBold text-[#ACB5BD] rounded-md  bg-[#DDE2E5] px-6' >Report issue</button>
                    <button className='py-2 text-sm font-Inter-SemiBold text-[#ACB5BD] rounded-md ml-auto bg-[#DDE2E5] px-16'>Finish</button>
                </div>
            </div> 
        </div>
    )
} 