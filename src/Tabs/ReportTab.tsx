import React from 'react'

export default function ReportTab() {

    const [tab, setTab] = React.useState(0)

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            
            <div className='w-full flex items-center absolute justify-center inset-0' >
                <div className='p-1 bg-[rgba(224,224,224,0.5)] rounded-xl flex' style={{boxShadow: 'inset 0px 1px 2px rgba(97, 97, 97, 0.2), inset 0px 2px 4px rgba(97, 97, 97, 0.2)'}}  >
                    <div className={tab === 0 ? 'w-20 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-20 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'} >
                        All Deals
                    </div>
                    <div className={tab === 1 ? 'w-40 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-40 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'}  >
                        Ongoing deals 
                    </div>
                    <div className={tab === 2 ? 'w-20 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-20 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'} >
                        All Deals
                    </div>
                </div>
            </div>
        </div>
    )
} 