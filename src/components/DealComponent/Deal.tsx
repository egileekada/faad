import { Select, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import DateFormat from '../DateFormat'
import PageLoader from '../PageLoader'
import DealsTable from './DealsTable'
import OngoingDeals from './OngoingDeals'
import ProcessDeal from './ProcessDeal'

export default function Deal() {
 
    const navigate = useNavigate()
    // const dataall = [
    //     { 
    //         client: 'Schlumbeger LTD', 
    //         product: 'AGO',  
    //         qty: '20,000 ℓ', 
    //         price: '185.67', 
    //         contact: 'jesica@schlumbeger.com',
    //         deal: '185.67',  
    //         date: '19-02-2022 - 5:30', 
    //     }, 
    //     { 
    //         client: 'Schlumbeger LTD', 
    //         product: 'AGO',  
    //         qty: '20,000 ℓ', 
    //         price: '185.67', 
    //         contact: 'jesica@schlumbeger.com',
    //         deal: '185.67',  
    //         date: '19-02-2022 - 5:30', 
    //     }, 
    //     { 
    //         client: 'Schlumbeger LTD', 
    //         product: 'AGO',  
    //         qty: '20,000 ℓ', 
    //         price: '185.67', 
    //         contact: 'jesica@schlumbeger.com',
    //         deal: '185.67',  
    //         date: '19-02-2022 - 5:30', 
    //     }, 
    //     { 
    //         client: 'Schlumbeger LTD', 
    //         product: 'AGO',  
    //         qty: '20,000 ℓ', 
    //         price: '185.67', 
    //         contact: 'jesica@schlumbeger.com',
    //         deal: '185.67',  
    //         date: '19-02-2022 - 5:30', 
    //     }, 
    //     { 
    //         client: 'Schlumbeger LTD', 
    //         product: 'AGO',  
    //         qty: '20,000 ℓ', 
    //         price: '185.67', 
    //         contact: 'jesica@schlumbeger.com',
    //         deal: '185.67',  
    //         date: '19-02-2022 - 5:30', 
    //     }, 
    //     { 
    //         client: 'Schlumbeger LTD', 
    //         product: 'AGO',  
    //         qty: '20,000 ℓ', 
    //         price: '185.67', 
    //         contact: 'jesica@schlumbeger.com',
    //         deal: '185.67',  
    //         date: '19-02-2022 - 5:30', 
    //     }, 
    // ]

    const [tab, setTab] = React.useState(0)   
    const [Value, setValue] = React.useState({} as any) 

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <div className='w-auto flex flex-col flex-1 ' > 
                {tab !== 2 && (
                    <div className='w-full flex items-center relative font-Inter-Regular' > 
                        <div className='w-64' >
                            <Select border='1px solid #DDE2E5' className='relative z-30' backgroundColor='white' placeholder='Search by name or department' fontSize='sm' /> 
                        </div> 
                        <div className='w-full flex items-center absolute justify-center inset-0' >
                            <div className='p-1 bg-[rgba(224,224,224,0.5)] rounded-xl flex' style={{boxShadow: 'inset 0px 1px 2px rgba(97, 97, 97, 0.2), inset 0px 2px 4px rgba(97, 97, 97, 0.2)'}}  >
                                <div onClick={()=> setTab(0)} className={!tab ? 'w-20 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-20 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'} >
                                    All Deals
                                </div>
                                <div onClick={()=> setTab(1)} className={tab ? 'w-32 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-32 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'}  >
                                    Ongoing deals
                                </div>
                            </div>
                        </div>
                        <button disabled={tab === 0 ? false:true}  onClick={()=> navigate('createdeal')} className={tab === 0 ? ' rounded relative w-36 flex justify-center items-center h-10 font-Inter-SemiBold ml-auto text-sm text-white bg-[#F88C3A]' : ' rounded relative w-36 flex justify-center items-center h-10 font-Inter-SemiBold ml-auto text-sm text-[#ACB5BD] bg-[#DDE2E5]'} >
                            <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="white"/>
                            </svg>
                            New Deal
                        </button>
                    </div> 
                )}
                <div className='w-full h-full' >
                    {tab === 0 && (
                        <DealsTable />
                    )}
                    {tab === 1 && (
                        <OngoingDeals click={setTab} values={setValue} />
                    )}
                    {tab === 2 && (
                        <ProcessDeal values={Value} />
                    )}
                </div>
            </div>
        </div>
    )
} 