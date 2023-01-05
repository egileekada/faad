import { Item } from 'framer-motion/types/components/Reorder/Item'
import React from 'react'
import Logo from '../../../../assets/images/printLogo.png'
import { IUser, UserContext } from '../../../context/UserContext'
import DateFormat from '../../../DateFormat'
 
const DeliveryNote = React.forwardRef((props: any, ref: any) => { 
 
    
    const userContext: IUser = React.useContext(UserContext); 
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
                <p className='text-4xl mt-4 font-Inter-SemiBold px-10 text-[#F1BD37] ' >Delivery note</p>
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
                <div className='w-full py-6 px-8 mt-8 border-t border-b grid grid-cols-5 ' >
                    <div className='w-full px-4 py-3' > 
                        <p className='text-sm font-Inter-Bold text-[#414141] ' >Product code</p>
                        <p className='text-sm font-Inter-Regular mt-2 text-[#414141] ' >{props.value.fuelType}</p>
                    </div>
                    <div className='w-full px-4 py-3 border-l' > 
                        <p className='text-sm font-Inter-Bold text-[#414141] ' >Description</p>
                        <p className='text-sm font-Inter-Regular mt-2 text-[#414141] ' >{props.value.dispatchNote}</p>
                    </div>
                    <div className='w-full px-4 py-3 border-l' > 
                        <p className='text-sm font-Inter-Bold text-[#414141] ' >Quantity requested</p>
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{(props.value.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                    <div className='w-full px-4 py-3 border-l' > 
                        <p className='text-sm font-Inter-Bold text-[#414141] ' >Quantity loaded</p>
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{(props.dispatch).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                    </div>
                    <div className='w-full px-4 py-3 border-l' > 
                        <p className='text-sm font-Inter-Bold text-[#414141] ' >Quantity discharged</p>
                        <p className='text-sm font-Inter-Regular text-[#DDE2E5] mt-2 ' >0000</p>
                    </div>
                </div>
                <div className='px-10 mt-8 w-full grid grid-cols-2 gap-4 ' >
                    <div className='w-full text-sm ' >
                        <p className=' font-Inter-Bold text-base' >Landing note</p>
                        <div className='w-full mt-4 flex' > 
                            <p className=' font-Inter-Regular text-[#414141] w-32' >Qty requested:</p>
                            <p className=' font-Inter-Regular text-[#414141] '>________________</p>
                        </div>
                        <div className='w-full mt-1 flex' > 
                            <p className=' font-Inter-Regular text-[#414141] w-32 ' >Qty received:</p>
                            <p className=' font-Inter-Regular text-[#414141] '>________________</p>
                        </div>
                        <div className='w-full mt-1 flex' > 
                            <p className=' font-Inter-Regular text-[#414141] w-32 ' >Difference:</p>
                            <p className=' font-Inter-Regular text-[#414141] '>________________</p>
                        </div> 
                        <p className='text-sm font-Inter-Bold text-[#414141] mt-8 ' >Dispatched by:</p>
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-1 ' >{userContext.userData.name}</p>
                        <p className='text-sm font-Inter-Bold text-[#414141] mt-6 ' >Sign:</p>
                        <p className='text-sm font-Inter-Regular text-[#DDE2E5] mt-1 ' >Sign here</p>
                    </div>
                    <div className='w-full' >
                        <p className=' font-Inter-Bold text-[#F1BD37] text-base' >Customer receiving officer</p>
                        <p className='text-sm font-Inter-Medium text-[#414141] mt-3 ' >Name:</p>
                        <p className='text-sm font-Inter-Regular text-[#DDE2E5] mt-1 ' >Write name</p>
                        <p className='text-sm font-Inter-Medium text-[#414141] mt-3 ' >Designation:</p>
                        <p className='text-sm font-Inter-Regular text-[#DDE2E5] mt-1 ' >Write designation</p>
                        <p className='text-sm font-Inter-Medium text-[#414141] mt-3 ' >Signature:</p>
                        <p className='text-sm font-Inter-Regular text-[#DDE2E5] mt-1 ' >Sign here</p>
                        <p className='text-sm font-Inter-Medium text-[#414141] mt-3 ' >Date:</p>
                        <p className='text-sm font-Inter-Regular text-[#DDE2E5] mt-1 ' >Write date</p>
                    </div>
                </div>
            </div> 
        </>
    )
})

export default DeliveryNote;