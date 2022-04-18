import React from 'react'

export default function CustomerService() {
    return (
        <div className='w-full h-full flex px-8 py-8 overflow-y-auto bg-[#F9FAFC] border-t border-l border-[#DDE2E5]' > 
            <div style={{width: '70%'}}  className=' p-8 flex-1 bg-white  rounded-2xl' >
                <p className='font-Inter-SemiBold text-xl' >#Customer Service</p> 
                <div className=' w-full overflow-y-auto h-full pr-6  flex-1 pt-4' >
                    <div className='flex my-2' >
                        {/* Sender */}
                        <div className='bg-yellow-400 w-10 h-10 rounded-full' />
                        <div style={{width: '55%'}} className='pl-3 ' >
                            <div style={{borderRadius: '0px 12px 12px 12px', backgroundColor: '#DDE2E5'}} className=' p-3 ml-3 ' >
                                <div className='flex items-center' > 
                                    <p className='font-Inter-Bold text-sm' >Beauty Bagins</p>
                                    <p className='font-Inter-Regular text-xs ml-auto' >02-02-2020 • 16:30</p>
                                </div>
                                <p className='font-Inter-Regular mt-3 text-sm' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, malesuada aliquet arcu, eu quis consequat adipiscing purus. Cursus mi suspendisse metus vitae, ornare. </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-2 w-full justify-end' >
                        {/* Reciever */}
                        <div style={{width: '55%'}} className='pl-3 ' >
                            <div style={{borderRadius: '12px 0px 12px 12px', backgroundColor: '#F8F9FA'}} className=' p-3 ' >
                                <div className='flex items-center' > 
                                    <p className='font-Inter-Regular text-xs' >02-02-2020 • 16:30</p>
                                    <p className='font-Inter-Bold text-sm  ml-auto' >Beauty Bagins</p>
                                </div>
                                <p className='font-Inter-Regular mt-3 text-sm' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, malesuada aliquet arcu, eu quis consequat adipiscing purus. Cursus mi suspendisse metus vitae, ornare. </p>
                            </div>
                        </div>
                        <div className='bg-yellow-400 w-10 h-10 rounded-full ml-3' />
                    </div>
                    <div className='flex my-2' >
                        {/* Sender */}
                        <div className='bg-yellow-400 w-10 h-10 rounded-full' />
                        <div style={{width: '55%'}} className='pl-3 ' >
                            <div style={{borderRadius: '0px 12px 12px 12px', backgroundColor: '#DDE2E5'}} className=' p-3  ' >
                                <div className='flex items-center' > 
                                    <p className='font-Inter-Bold text-sm' >Beauty Bagins</p>
                                    <p className='font-Inter-Regular text-xs ml-auto' >02-02-2020 • 16:30</p>
                                </div>
                                <p className='font-Inter-Regular mt-3 text-sm' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, malesuada aliquet arcu, eu quis consequat adipiscing purus. Cursus mi suspendisse metus vitae, ornare. </p>
                            </div>

                            <div style={{borderRadius: '0px 12px 12px 12px', backgroundColor: '#DDE2E5'}} className=' p-3 mt-4 ' >
                                <div className='flex items-center' > 
                                    <p className='font-Inter-Bold text-sm' >Beauty Bagins</p>
                                    <p className='font-Inter-Regular text-xs ml-auto' >02-02-2020 • 16:30</p>
                                </div>
                                <p className='font-Inter-Regular mt-3 text-sm' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, malesuada aliquet arcu, eu quis consequat adipiscing purus. Cursus mi suspendisse metus vitae, ornare. </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex my-2 w-full justify-end' >
                        {/* Reciever */}
                        <div style={{width: '55%'}} className='pl-3 ' >
                            <div style={{borderRadius: '12px 0px 12px 12px', backgroundColor: '#F8F9FA'}} className=' p-3 ' >
                                <div className='flex items-center' > 
                                    <p className='font-Inter-Bold text-sm' >Beauty Bagins</p>
                                    <p className='font-Inter-Regular text-xs ml-auto' >02-02-2020 • 16:30</p>
                                </div>
                                <p className='font-Inter-Regular mt-3 text-sm' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, malesuada aliquet arcu, eu quis consequat adipiscing purus. Cursus mi suspendisse metus vitae, ornare. </p>
                            </div>
                        </div>
                        <div className='bg-yellow-400 w-10 h-10 rounded-full ml-3' />
                    </div> 
                    <div className='flex my-2 w-full justify-end' >
                        {/* Reciever */}
                        <div style={{width: '55%'}} className='pl-3 ' >
                            <div style={{borderRadius: '12px 0px 12px 12px', backgroundColor: '#F8F9FA'}} className=' p-3 ' >
                                <div className='flex items-center' > 
                                    <p className='font-Inter-Regular text-xs' >02-02-2020 • 16:30</p>
                                    <p className='font-Inter-Bold text-sm  ml-auto' >Beauty Bagins</p>
                                </div>
                                <p className='font-Inter-Regular mt-3 text-sm' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, malesuada aliquet arcu, eu quis consequat adipiscing purus. Cursus mi suspendisse metus vitae, ornare. </p>
                            </div>
                        </div>
                        <div className='bg-yellow-400 w-10 h-10 rounded-full ml-3' />
                    </div>
                </div>
            </div>
            <div style={{width: '30%'}} className=' p-8 ' >
                <p className='font-Inter-SemiBold text-xl' >Members</p>
                <div className='mt-3' >
                    <div className='flex items-center my-2' > 
                        <div className='bg-yellow-400 w-10 h-10 rounded-full mr-3' />
                        <p className='font-Inter-Medium' >Kimora Kim</p>
                    </div>
                    <div className='flex items-center my-2' > 
                        <div className='bg-yellow-400 w-10 h-10 rounded-full mr-3' />
                        <p className='font-Inter-Medium' >Beauty Bagins</p>
                    </div>
                    <div className='flex items-center my-2' > 
                        <div className='bg-yellow-400 w-10 h-10 rounded-full mr-3' />
                        <p className='font-Inter-Medium' >Kimora Kim</p>
                    </div>
                    <div className='flex items-center my-2' > 
                        <div className='bg-yellow-400 w-10 h-10 rounded-full mr-3' />
                        <p className='font-Inter-Medium' >Yemi Alade</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
