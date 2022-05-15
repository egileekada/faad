import { Checkbox, Input } from '@chakra-ui/react'
import React from 'react'

export default function StepTwo(props: any) {

    const [inspect, setInspectInfo] = React.useState({
        waterCheck: false,
        truckSealed: false
    })

    React.useEffect(() => {
        props.inspect(inspect)
    }, [inspect]) 

    return (
        <div style={{border: '1px solid #DDE2E5', height: '60vh'}} className='bg-white rounded-lg p-8 ' >
            <div  className='w-full h-full flex flex-col' >
                <p className='font-Inter-SemiBold text-xl text-[#212429]' >Inspect and seal truck</p>
                <p className='font-Inter-Regular mt-1 text-[#495057] text-sm ' >20000ℓ • Waterfall </p>
                <div className='flex mt-8 items-center' >
                    <Checkbox 
                     onChange={(e) =>  setInspectInfo({...inspect,
                        waterCheck: e.target.checked
                    })} colorScheme='orange' />
                    <div className='ml-3' > 
                        <p className='font-Inter-Medium text-[#000] text-sm ' >Water check complete</p>
                        <p className='font-Inter-Regular mt-1 text-[#ACB5BD] text-sm ' >Ensure you have double checked</p>
                    </div>
                </div>
                <div className='flex mt-4 items-center' >
                    <Checkbox 
                     onChange={(e) =>  setInspectInfo({...inspect,
                        truckSealed: e.target.checked
                    })} colorScheme='orange' />
                    <div className='ml-3' > 
                        <p className='font-Inter-Medium text-[#000] text-sm ' >Truck sealed</p>
                        <p className='font-Inter-Regular mt-1 text-[#ACB5BD] text-sm ' >Ensure you have double checked</p>
                    </div>
                </div>
                <Input className='mt-4' width='240px' fontSize='sm' placeholder='Enter seal number' />
                <button onClick={()=> props.click(2)} className='py-2 text-sm font-Inter-SemiBold text-white rounded-md mt-auto ml-auto bg-[#F88C3A] px-16' >Next</button>
            </div>
        </div>
    )
}
