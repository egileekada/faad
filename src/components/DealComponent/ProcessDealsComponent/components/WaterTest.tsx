import React from 'react'
import Logo from '../../../../assets/images/printLogo.png'
import DateFormat from '../../../DateFormat';

const WaterTest = React.forwardRef((props: any, ref: any) => { 

    return (
        <> 
            <div ref={ref} className='w-full h-full relative py-10 ' >
                <div className='w-full flex px-10' > 
                    <img src={Logo} alt='printImage' className='w-32' />
                    <div className='ml-auto' >
                        <p className='text-xs font-Inter-Regular text-[#F88C3A] ' >RC 828493</p>
                        <p className='text-xs font-Inter-Regular mt-1' >149 Woji Road G.R.A. Phase II, Port Harcourt</p>
                        <p className='text-xs font-Inter-Regular'>info@faad-ng.com  |  0700FAADOIL</p>
                    </div>
                </div>
                {/* <p className='text-xs font-Inter-Regular mt-6 text-[#414141] ' >{DateFormat(props.value.date)}</p> */}
                <p className='text-4xl mt-4 font-Inter-SemiBold px-10 text-[#F1BD37] ' >Pre-discharge water test</p>
                <div className='w-full flex mt-6 px-10' >
                    <div className='w-full' >
                        <p className='text-sm font-Inter-Bold text-[#414141] ' >Client:</p>
                        <p className='text-sm font-Inter-Regular text-[#414141] ' >{props.value.companyName}</p>
                        <div className='w-full mt-4 grid grid-cols-2 gap-4' >
                            <div className='w-full' > 
                                <p className='text-sm font-Inter-Bold text-[#414141] ' >Date:</p>
                                <p className='text-sm font-Inter-Regular text-[#414141] ' >{DateFormat(props.value.updatedAt)}</p>
                            </div>
                            <div className='w-full' > 
                                <p className='text-sm font-Inter-Bold text-[#414141] ' >Truck no:</p>
                                <p className='text-sm font-Inter-Regular text-[#414141] ' >{props.truck}</p>
                            </div>
                        </div> 
                    </div>
                    <div className='w-full' >
                        <p className='text-sm font-Inter-Bold text-[#414141] ' >Destination:</p>
                        <p className='text-sm font-Inter-Regular text-[#414141] ' >{props.value.address}</p>
                    </div>
                </div>
                <div className='w-full py-10 px-8 mt-8 border-t border-b' >
                    <div className='w-full flex items-center mt-2 ' >  
                        <p className='text-sm font-Inter-Regular text-[#414141] w-80 ' ></p>
                        <p className='text-sm font-Inter-Regular text-[#00BE00] w-8 ' >YES</p>
                        <p className='text-sm font-Inter-Regular text-[#FF1F1F] w-8 ml-6 ' >NO</p>
                        <p className='text-sm font-Inter-Regular text-[#495057] ml-6 ' >REMARK</p> 
                    </div>
                    <div className='w-full flex items-center mt-2 ' >  
                        <p className='text-sm font-Inter-Regular text-[#414141] w-80 ' >Was water test done on client’s Storage?</p>
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD]' />
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                        <div className='w-32 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                    </div>
                    <div className='w-full flex items-center mt-2 ' >  
                        <p className='text-sm font-Inter-Regular text-[#414141] w-80 ' >Was water test done on truck?</p>
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD]' />
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                        <div className='w-32 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                    </div>
                    <div className='w-full flex items-center mt-2 ' >  
                        <p className='text-sm font-Inter-Regular text-[#414141] w-80 ' >Was water present in Client’s Storage?</p>
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD]' />
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                        <div className='w-32 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                    </div>
                    <div className='w-full flex items-center mt-2 ' >  
                        <p className='text-sm font-Inter-Regular text-[#414141] w-80 ' >Was water present in Truck?</p>
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD]' />
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                        <div className='w-32 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                    </div>
                    <div className='w-full flex items-center mt-2 ' >  
                        <p className='text-sm font-Inter-Regular text-[#414141] w-80 ' >Has client approved result?</p>
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD]' />
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                        <div className='w-32 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                    </div>
                    <div className='w-full flex items-center mt-2 ' >  
                        <p className='text-sm font-Inter-Regular text-[#414141] w-80 ' >Has client approved discharge into Storage?</p>
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD]' />
                        <div className='w-8 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                        <div className='w-32 h-8 rounded border-2 border-[#ACB5BD] ml-6' />
                    </div>  
                </div>
                <p className=' font-Inter-Bold px-10 mt-8 text-[#414141] text-base' >FAAD</p>
                <div className='px-10 mt-4 w-full grid grid-cols-3 gap-4 ' >
                    <p className=' font-Inter-Regular text-sm' >Agent: {props.agent}</p>
                    <p className=' font-Inter-Regular text-sm' >Sign:</p>
                    <p className=' font-Inter-Regular text-sm' >Date:</p> 
                    <p className=' font-Inter-Regular text-sm' >Driver: {props.driver}</p>
                    <p className=' font-Inter-Regular text-sm' >Sign:</p>
                    <p className=' font-Inter-Regular text-sm' >Date:</p>  
                </div>
                <p className=' font-Inter-Bold px-10 mt-8 text-[#414141] text-base ' >For client</p>
                <div className='px-10 mt-4 w-full grid grid-cols-3 gap-4 ' >
                    <p className=' font-Inter-Regular text-sm' >Name: <span className='text-[#DDE2E5]' >Write name</span></p>
                    <p className=' font-Inter-Regular text-sm' >Sign:</p>
                    <p className=' font-Inter-Regular text-sm' >Date:</p>   
                </div>
                <p style={{fontStyle: 'italic'}} className=' px-10 text-[#ACB5BD]  mt-10 font-Inter-Regular text-xs ' >Title & Risk under this present supply shall pass from the Seller to the Buyer after the buyer has approved & authorized discharge into his storage.</p>
            </div> 
        </>
    )
})

export default WaterTest;