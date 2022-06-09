import { Input } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ReportTab() {

    const [tab, setTab] = React.useState(0)
    const navigate = useNavigate()

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <div className='w-auto flex flex-col flex-1 ' >  
                    <div className='w-full flex items-center relative font-Inter-Regular' >  
                            <div className='w-full flex items-center absolute justify-center inset-0' >
                                <div className='p-1 bg-[rgba(224,224,224,0.5)] rounded-xl flex' style={{boxShadow: 'inset 0px 1px 2px rgba(97, 97, 97, 0.2), inset 0px 2px 4px rgba(97, 97, 97, 0.2)'}}  >
                                    <div onClick={()=> setTab(0)} className={tab === 0 ? 'w-20 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-20 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'} >
                                        All Deals
                                    </div>
                                    <div  onClick={()=> setTab(1)} className={tab === 1 ? 'w-40 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-40 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'}  >
                                        Ongoing deals 
                                    </div>
                                    <div  onClick={()=> setTab(2)} className={tab === 2 ? 'w-40 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-40 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'}  >
                                        Ongoing deals 
                                    </div>
                                </div>
                            </div>  
                    </div> 
                </div>
        </div>
    )
} 