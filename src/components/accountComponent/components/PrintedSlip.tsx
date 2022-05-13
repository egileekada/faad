import React from 'react'
import Logo from '../../../assets/images/printLogo.png'
import DateFormat from '../../DateFormat'
 
const PrintedSlip = React.forwardRef((props: any, ref: any) => {

    // console.log(props.value)

    return (
        <> 
            <div ref={ref} className='w-full h-full p-10' >
                <img src={Logo} alt='printImage' className='w-32' />
                <p className='text-xs font-Inter-Regular mt-6 text-[#414141] ' >{DateFormat(props.value.date)}</p>
                <p className='text-sm mt-1 font-Inter-Bold text-[#495057]' >ENTRY PERMIT</p>
                <div className='w-full flex mt-6' >
                    <div className='w-40' >
                        <p className='text-sm font-Inter-SemiBold text-[#414141] ' >Vendor</p>
                        <p className='text-sm font-Inter-SemiBold mt-2 text-[#414141] ' >Truck plate no:</p>
                        <p className='text-sm font-Inter-SemiBold text-[#414141] mt-2 ' >Driver:</p>
                        <p className='text-sm font-Inter-SemiBold text-[#414141] mt-2 ' >Agent:</p>
                    </div>
                    <div className='w-auto' >
                        <p className='text-sm font-Inter-Regular text-[#414141] ' >{props.value.vendor}</p> 
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{props.value.truck}</p> 
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{props.value.driver}</p> 
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{props.value.agent}</p> 
                    </div>
                </div>
            </div> 
        </>
    )
})

export default PrintedSlip;