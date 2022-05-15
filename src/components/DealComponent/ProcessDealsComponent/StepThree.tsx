import { Checkbox, Input, Select } from '@chakra-ui/react'
import React from 'react'
import ButtonLoader from '../../ButtonLoader'
import PrintButton from './components/PrintButton'
import SearchForClient from './components/SearchForClient'

export default function StepThree(props: any) {
    return (
        <div style={{border: '1px solid #DDE2E5', height: '55vh'}} className='bg-white rounded-lg p-8 ' >
            <div  className='w-full h-full flex flex-col' >
                <p className='font-Inter-SemiBold text-xl text-[#212429]' >Add agents and print files</p>
                {/* <p className='font-Inter-Regular mt-1 text-[#495057] text-sm ' >20000ℓ • Waterfall </p>  */}
                {/* <div className='flex mt-4 items-center' >  
                    <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 ' >Agent</p> 
                    <div className='w-72' >
                        <Select placeholder='Search' fontSize='sm' />
                    </div> 
                </div> */}
                <SearchForClient name='Agent' index={props.agent} role='Agents' />
                {/* <div className='flex mt-4 items-center' >  
                    <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 ' >Driver</p> 
                    <div className='w-72' >
                        <Select placeholder='Search' fontSize='sm' />
                    </div> 
                </div> */}
                <SearchForClient name='Driver' index={props.driver} role='Drivers' />
                <div className='flex items-center mt-14' > 
                    <PrintButton name='delivery' />
                    <PrintButton name='water' />
                    <PrintButton name='dispatch' /> 
                </div>
                {/* <Input className='mt-4' width='240px' fontSize='sm' placeholder='Enter seal number' /> */}
                <div className='mt-auto flex' > 
                    <button onClick={()=> props.submit()} className='py-2 text-sm font-Inter-SemiBold text-white ml-auto rounded-md flex items-center bg-[#F1BD37] px-16' >
                        {props.loading && (
                            <> 
                                <ButtonLoader size='30' />
                                <span className='ml-3'>Loading</span>
                            </>
                        )}
                        {!props.loading && (
                            <span className='mx-4'>Proccess Deal</span>
                        )}  
                    </button>
                    <button onClick={()=> props.click(3)} className='py-2 text-sm font-Inter-SemiBold text-white rounded-md  ml-6 bg-[#F88C3A] px-16' >Complete Deal</button>
                </div>
            </div>
        </div>
    )
} 