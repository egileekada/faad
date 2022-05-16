import { Checkbox, Input, Select } from '@chakra-ui/react'
import React from 'react'
import ButtonLoader from '../../ButtonLoader'
import PrintButton from './components/PrintButton'
import SearchForClient from './components/SearchForClient'

export default function StepThree(props: any) {

    const [agentId, setAgentInfo] = React.useState('')
    const [driverId, setDriverInfo] = React.useState('')

    React.useEffect(() => {
        props.agent(agentId)
        props.driver(driverId)
    }, [agentId, driverId])

    return (
        <div style={{border: '1px solid #DDE2E5', height: '55vh'}} className='bg-white rounded-lg p-8 ' >
            <div  className='w-full h-full flex flex-col' >
                <p className='font-Inter-SemiBold text-xl text-[#212429]' >Add agents and print files</p> 
                <SearchForClient name='Agent' index={setAgentInfo} role='Agents' /> 
                <SearchForClient name='Driver' index={setDriverInfo} role='Drivers' />
                <div className='flex items-center mt-14' > 
                    <PrintButton truck={props.truck} dispatch={props.dispatch} agent={agentId} driver={driverId} values={props.values} name='delivery' />
                    <PrintButton truck={props.truck} dispatch={props.dispatch} agent={agentId} driver={driverId} values={props.values} name='water' />
                    <PrintButton truck={props.truck} dispatch={props.dispatch} agent={agentId} driver={driverId} values={props.values} name='dispatch' /> 
                </div> 
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