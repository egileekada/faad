import React from 'react' 
import Logo from '../../../../assets/images/printLogo.png'
import DateFormat from '../../../DateFormat'
import { IUser, UserContext } from '../../../context/UserContext'

const DispatchNote = React.forwardRef((props: any, ref: any) => {

    const userContext: IUser = React.useContext(UserContext);  

    const [startDate, set] = React.useState(new Date()); 

    return (
        <> 
            <div ref={ref} className='w-full h-full p-10' >
                <img src={Logo} alt='printImage' className='w-32' />
                <p className='text-xs font-Inter-Regular mt-6 text-[#414141] ' >{DateFormat(startDate.toJSON())}</p>
                <p className='text-sm mt-1 font-Inter-Bold text-[#495057]' >DISPATCH NOTE</p>
                <div className='w-full flex mt-6' >
                    <div className='w-40' >
                        <p className='text-sm font-Inter-SemiBold text-[#414141] ' >Truck plate no:</p>
                        <p className='text-sm font-Inter-SemiBold mt-2 text-[#414141] ' >Quantity:</p>
                        <p className='text-sm font-Inter-SemiBold text-[#414141] mt-2 ' >Driver:</p>
                        <p className='text-sm font-Inter-SemiBold text-[#414141] mt-2 ' >Agent:</p>
                        <p className='text-sm font-Inter-SemiBold text-[#414141] mt-2 ' >Approved by:</p>
                        <p className='text-sm font-Inter-SemiBold text-[#414141] mt-2 ' >Signature: </p>
                    </div>
                    <div className='w-auto' >
                        <p className='text-sm font-Inter-Regular text-[#414141] ' >{props.truck}</p> 
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{props.value.quantity}</p> 
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{props.driver}</p> 
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{props.agent}</p> 
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{userContext.userData.name}</p> 
                        <p className='text-sm font-Inter-Regular text-[#DDE2E5] mt-2 ' >Sign here</p> 
                    </div>
                </div>
            </div> 
        </>
    )
})

export default DispatchNote;