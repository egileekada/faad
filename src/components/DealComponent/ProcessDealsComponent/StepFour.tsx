import { Checkbox, Input, Radio, RadioGroup, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'
import ButtonLoader from '../../ButtonLoader'

export default function StepFour(props: any) {

    const [show, setShow] = React.useState(false)
    

    return (
        <div style={{border: '1px solid #DDE2E5'}} className='bg-white rounded-lg p-8 ' >
            <div  className='w-full h-full flex flex-col' >
                
                <div className={!show ? 'w-full': 'hidden'} >
                    <p className='font-Inter-SemiBold text-xl text-[#212429]' >Confirm delivery and end deal</p>
                    {/* <p className='font-Inter-Regular mt-1 text-[#495057] text-sm ' >20000ℓ • Waterfall </p> */}
                    <div className='flex mt-8 items-center' >
                        <Checkbox onChange={(e) =>  props.delivery({...props.deliveryDefault,
                            receivedDeliveryNote: e.target.checked
                        })}colorScheme='orange' />
                        <div className='ml-3' > 
                            <p className='font-Inter-Medium text-[#000] text-sm ' >Received delivery note</p>
                            <p className='font-Inter-Regular mt-1 text-[#ACB5BD] text-sm ' >Ensure you have double checked</p>
                        </div>
                    </div>
                    <div className='flex mt-4 items-center' >
                        <Checkbox onChange={(e) =>  props.delivery({...props.deliveryDefault,
                            receivedWaterNote: e.target.checked
                        })} colorScheme='orange' />
                        <div className='ml-3' > 
                            <p className='font-Inter-Medium text-[#000] text-sm ' >Received Water test form</p>
                            <p className='font-Inter-Regular mt-1 text-[#ACB5BD] text-sm ' >Ensure you have double checked</p>
                        </div>
                    </div>
                    <Textarea className='mt-4' width='300px' height='150px' fontSize='sm' placeholder='Comment' />
                </div>
                    
                <div className={show ? 'w-full': 'hidden'} >
                    <p className='font-Inter-SemiBold text-xl text-[#212429]' >Report issue</p>
                    <Textarea className='mt-8' width='300px' height='150px' fontSize='sm' placeholder='Type in report' /> 
                    <p className='font-Inter-Medium text-[#000] text-sm mt-6 my-4 ' >Who do you want to see this</p>

                    <RadioGroup >
                        <Stack spacing={8} direction='row'>
                            <Radio colorScheme='green' value='doctor'>
                            Accounts
                            </Radio>
                            <Radio colorScheme='yellow' value='nurse'>
                            Operations
                            </Radio>
                            <Radio colorScheme='green' value='pharmacy'>
                            Customer service
                            </Radio>
                            <Radio colorScheme='green' value='lab'>
                            General
                            </Radio> 
                        </Stack>
                    </RadioGroup>
                </div> 
                <div className='w-full flex mt-14' >
                    <button onClick={()=> setShow((prev)=> !prev)} className='py-2 text-sm font-Inter-SemiBold text-white rounded-md mt-auto bg-[#F1BD37] px-6' >Report issue</button>
                    {props.deliveryDefault.receivedDeliveryNote && (

                        <button onClick={()=> props.submit()} disabled={show ? true: false} className={show ? ' text-sm font-Inter-SemiBold text-[#ACB5BD] rounded-md mt-auto ml-auto flex items-center justify-center bg-[#DDE2E5] h-11 w-44':'text-sm font-Inter-SemiBold text-white rounded-md mt-auto flex justify-center items-center ml-auto bg-[#F88C3A] h-11 w-44'} >
                            {props.loading && (
                                <> 
                                    <ButtonLoader size='23' />
                                    <span className='ml-3'>Loading</span>
                                </>
                            )}
                            {!props.loading && (
                                <span className=''>Complete Deal</span>
                            )}  
                        </button>
                        // <button onClick={()=> props.click} disabled={show ? true: false} className={show ? 'py-2 text-sm font-Inter-SemiBold text-[#ACB5BD] rounded-md mt-auto ml-auto bg-[#DDE2E5] px-16':'py-2 text-sm font-Inter-SemiBold text-white rounded-md mt-auto ml-auto bg-[#F88C3A] px-16'} >Finish</button>
                    )}
                </div>
            </div>
        </div>
    )
} 