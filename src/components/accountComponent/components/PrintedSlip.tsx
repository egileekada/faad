import React from 'react'
import { useQuery } from 'react-query'
import Logo from '../../../assets/images/printLogo.png'
import DateFormat from '../../DateFormat'
 
const PrintedSlip = React.forwardRef((props: any, ref: any) => {

    // console.log(props.value)

    const [driver, setDriverInfo] = React.useState('')
    const [agent, setAgentInfo] = React.useState('')
    const [truck, setTruckInfo] = React.useState('')

    if(props.value.truck){  
        fetch(`https://faadoli.herokuapp.com/api/v1/truck/${props.value.truck}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {    
            // console.log('truck '+data.data.truck.truckId)
            setTruckInfo(data.data.truck.truckId) 
        })
        .catch((error) => {
            console.error('Error:', error); 
        },);  
    } 

    if(props.value.driver){ 

        fetch(`https://faadoli.herokuapp.com/api/v1/auth/profile/all`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {     
            data.data.users.map((item: any) => { 
                if(item._id === props.value.driver){ 
                    setDriverInfo(item.name)
                }
                if(item._id === props.value.agent){ 
                    setAgentInfo(item.name)
                }
            })
            // if(!level){
            //     setLevel([...level, data.data.tank.capacity])
            // } else {
            //     level[index] = data.data.tank.capacity
            // }
        })
        .catch((error) => {
            console.error('Error:', error); 
        },);  
    }
 
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
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{truck}</p> 
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{driver}</p> 
                        <p className='text-sm font-Inter-Regular text-[#414141] mt-2 ' >{agent}</p> 
                    </div>
                </div>
            </div> 
        </>
    )
})

export default PrintedSlip;