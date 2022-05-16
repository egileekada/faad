import { Checkbox } from '@chakra-ui/checkbox'
import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import React from 'react'
import SearchForTank from './components/SearchForTank'
import SearchForTrucks from './components/SearchForTrucks'

export default function StepOne(props: any) {
    
    const [numberOfTanks, setNumberOfTanks] = React.useState(['One'])  

    return (
        <div style={{border: '1px solid #DDE2E5'}} className='bg-white rounded-lg p-8 ' >
            <div  className='w-full h-full flex flex-col' >
                <p className='font-Inter-SemiBold text-xl text-[#212429]' >Load a truck</p> 

                <div className='flex mt-4 items-center' >  
                    <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 ' >Product</p> 
                    <div className=' w-96' >
                        <Input value={props.values.fuelType} placeholder='Select Fuel' fontSize='sm' />
                    </div>
                    <div className='ml-6' > 
                        <p className='font-Inter-Bold text-[#000] text-sm ' >Client:</p>
                        <p className='font-Inter-Regular mt-1 text-[#ACB5BD] text-sm ' >{props.values.companyName}</p>
                    </div>
                </div>
                <div className='flex mt-4 items-center' >  
                    <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 ' >Quantity requested (ℓ)</p> 
                    <div className='w-96' >
                        <Input value={props.values.quantity} placeholder='AGO' fontSize='sm' />
                    </div>
                    <div className='ml-6' > 
                        <p className='font-Inter-Bold text-[#000] text-sm ' >Supply location:</p>
                        <p className=' w-64 font-Inter-Regular mt-1 text-[#ACB5BD] text-sm ' >{props.values.address}</p>
                    </div>
                </div> 
                <SearchForTank tank={props.tank} tankNo={numberOfTanks} />
                <div className='flex mt-4 items-center' >  
                    <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 ' >Enter dispatch quantity (ℓ)</p> 
                    <div className='w-96' >
                        <Input onChange={(e)=> props.dispatchquatity(e.target.value)} placeholder='00.00' fontSize='sm' />
                    </div> 
                </div>
                <SearchForTrucks truck={props.truck} /> 
                <div className='flex mt-4 items-center ml-28 cursor-pointer' >
                    <svg onClick={()=> setNumberOfTanks([...numberOfTanks, 'New'])} className='mr-3' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 4.5C10.5523 4.5 11 4.94772 11 5.5V9.5H15C15.5523 9.5 16 9.94771 16 10.5C16 11.0523 15.5523 11.5 15 11.5H11V15.5C11 16.0523 10.5523 16.5 10 16.5C9.44771 16.5 9 16.0523 9 15.5V11.5H5C4.44772 11.5 4 11.0523 4 10.5C4 9.94771 4.44772 9.5 5 9.5H9V5.5C9 4.94772 9.44771 4.5 10 4.5Z" fill="#ACB5BD"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 20.5C1.34315 20.5 0 19.1569 0 17.5V3.5C0 1.84315 1.34315 0.5 3 0.5H17C18.6569 0.5 20 1.84315 20 3.5V17.5C20 19.1569 18.6569 20.5 17 20.5H3ZM2 17.5C2 18.0523 2.44772 18.5 3 18.5H17C17.5523 18.5 18 18.0523 18 17.5V3.5C18 2.94772 17.5523 2.5 17 2.5H3C2.44772 2.5 2 2.94772 2 3.5V17.5Z" fill="#ACB5BD"/>
                    </svg>
                    <p className='font-Inter-Regular text-[#F88C3A] underline text-sm ' >Dispatch from multiple tanks</p> 
                </div> 
                <button onClick={()=> props.click(1)} className='py-2 text-sm font-Inter-SemiBold text-white rounded-md mt-auto ml-auto bg-[#F88C3A] px-16' >Next</button>
            </div>
        </div>
    )
} 