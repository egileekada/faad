import { Checkbox, Input, Select } from '@chakra-ui/react'
import React from 'react'
import ButtonLoader from '../../ButtonLoader'
import PrintButton from './components/PrintButton'
import SearchForClient from './components/SearchForClient'

export default function StepThree(props: any) {

    // const [agentId, setAgentInfo] = React.useState(props.agentId)
    // const [driverId, setDriverInfo] = React.useState(props.driverId)

    // React.useEffect(() => {
    //     props.agent(agentId)
    //     props.driver(driverId)
    // }, [agentId, driverId])

    // console.log(props.driverId)

    return (
        <div style={{border: '1px solid #DDE2E5', height: '55vh'}} className='bg-white rounded-lg p-8 ' >
            <div  className='w-full h-full flex flex-col' >
                <p className='font-Inter-SemiBold text-xl text-[#212429]' >Add agents and print files</p> 
                <SearchForClient show={props.show} default={props.agentName} id={props.agentId} name='Agent' index={props.agent} role='Agents' /> 
                <SearchForClient show={props.show} default={props.driverName} id={props.driverId} name='Driver' index={props.driver} role='Drivers' />
                <div className='flex items-center mt-14' > 
                    <PrintButton truck={props.truck} dispatch={props.dispatch} agent={props.agentId} driver={props.driverId} values={props.values} name='delivery' />
                    <PrintButton truck={props.truck} dispatch={props.dispatch} agent={props.agentId} driver={props.driverId} values={props.values} name='water' />
                    <PrintButton truck={props.truck} dispatch={props.dispatch} agent={props.agentId} driver={props.driverId} values={props.values} name='dispatch' /> 
                </div> 
                <div className='mt-auto flex justify-end' > 
                    
                    {!props.show && (
                        <button disabled={props.loading ? true : false} onClick={()=> props.submit()} className=' text-sm font-Inter-SemiBold text-white flex justify-center items-center rounded-md bg-[#F1BD37] h-11 w-44' >
                            {props.loading && (
                                <> 
                                    <ButtonLoader size='23' />
                                    <span className='ml-3'>Loading</span>
                                </>
                            )}
                            {!props.loading && (
                                <span className=''>Proccess Deal</span>
                            )}  
                        </button>
                    )}
                    {props.show && (
                        <button onClick={()=> props.click(3)} className='py-2 text-sm font-Inter-SemiBold text-white rounded-md  ml-6 bg-[#F88C3A] px-16' >Next</button>
                    )}
                    </div>
            </div>
        </div>
    )
} 