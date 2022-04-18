import React from 'react'

export default function MyNotes() {
    return (
        <div className='w-full h-full flex px-8 py-8 overflow-y-auto bg-[#F9FAFC] border-t border-l border-[#DDE2E5]' > 
            <div style={{width: '70%'}}  className=' p-8 flex-1 bg-white  rounded-2xl' >
                <p className='font-Inter-SemiBold text-xl' >#Operations</p> 
                <div className=' w-full overflow-y-auto h-full pr-6  flex-1 pt-4' >
                    <div className='flex my-2' >
                        {/* Sender */}
                        <div className='bg-yellow-400 w-10 h-10 rounded-full' />
                        <div style={{width: '60%'}} className='px-3 ' >
                            <div style={{borderRadius: '0px 12px 12px 12px', backgroundColor: '#DDE2E5'}} className=' p-3 ml-3 ' >
                                <div className='flex items-center' > 
                                    <p className='font-Inter-Bold text-sm' >Beauty Bagins</p>
                                    <p className='font-Inter-Regular text-xs ml-auto' >02-02-2020 • 16:30</p>
                                </div>
                                <p className='font-Inter-Regular mt-3 text-sm' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, malesuada aliquet arcu, eu quis consequat adipiscing purus. Cursus mi suspendisse metus vitae, ornare. </p>
                            </div>
                        </div>
                        <svg className='mt-1' width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="#ACB5BD"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12 8.973 9.83771 11.441 7 11.917V17C7 17.5523 6.55229 18 6 18C5.44771 18 5 17.5523 5 17V11.917C2.16229 11.441 0 8.973 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z" fill="#ACB5BD"/>
                        </svg> 
                    </div> 
                </div>
            </div>
            <div style={{width: '30%'}} className=' p-8 ' >
                <p className='font-Inter-SemiBold text-xl' >Members</p>
                <div className='mt-3' >
                    <div className='flex items-center my-2' > 
                        <div className='bg-yellow-400 w-10 h-10 rounded-full mr-3' />
                        <p className='font-Inter-Medium' >Beauty Bagins</p>
                    </div> 
                </div>
            </div>
        </div>
    )
} 