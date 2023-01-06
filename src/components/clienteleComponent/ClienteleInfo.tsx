import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import console from 'console'
import React from 'react'
import { QueryCache, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import DateFormat from '../DateFormat'
import DealHistory from '../DealComponent/component/DealHistory'
import PageLoader from '../PageLoader'
import { BASEURL } from '../../assets/BasicUrl/Url'

export default function ClienteleInfo() {

    const navigate = useNavigate() 
    const current = window.location.pathname 
    localStorage.setItem("current", current)
 
    const { isLoading, data } = useQuery('ClientsByID'+localStorage.getItem('clientID'), () =>
        fetch(`${BASEURL.URL}client/${localStorage.getItem('clientID')}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  
    
    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    )     

    const ClickHandler =()=> { 
        navigate('/dashboard/clientele')
    }
    
    const EditHandler =()=> {
        localStorage.setItem('editClientID', data.data.client._id) 
        navigate('/dashboard/clientele/editclientprofile')
    }

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <svg onClick={()=> ClickHandler()} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            {!isLoading && ( 
                <div style={{border: '1px solid #DDE2E5'}} className=' w-full h-auto overflow-y-auto rounded-2xl py-10  my-8 bg-white flex flex-col ' >    
                    <div className='w-full flex px-10' > 
                        <div className='' >
                            <p className='font-Inter-SemiBold text-2xl ' >{data.data.client.companyName}</p>
                            <p className='font-Inter-Regular text-sm ' >{data.data.client.industry}</p> 
                        </div>
                        <div className='ml-auto' >
                            <p className='font-Inter-Regular text-sm ' >Onboarded •{DateFormat(data.data.client.updatedAt)}</p>  
                        </div> 
                    </div>
                    <div className='w-full flex items-end px-10' >
                        <div className='w-auto flex flex-1 flex-col' > 
                            <p className='font-Inter-Regular mt-4 text-sm  ' >{data.data.client.address}</p>
                            <p className='font-Inter-Regular mt-2 text-sm  ' >{data.data.client.email}</p>
                            <p className='font-Inter-Regular mt-2 text-sm my-2  ' >{data.data.client.phoneNumber}</p>
                        </div>

                        <button onClick={()=> EditHandler()} className='font-Inter-SemiBold text-xs mb-3 h-10 text-white rounded-lg px-4 bg-[#F88C3A] ' >Edit client profile</button>
                    </div>

                    <p className='font-Inter-SemiBold mb-2 mt-3 bg-[#F8F9FA] px-10 py-2' >Contact Person(s)</p> 
                    <div className='w-full grid-cols-3 grid gap-4 my-2  px-10' >
                        <p className='font-Inter-Bold text-sm flex '  >{data.data.client.contactPersonDetails.name}
                            <span className=' ml-3 font-Inter-Regular mr-3 flex flex-col' >
                                <span>{data.data.client.contactPersonDetails.email}</span>
                                <span className='mt-2' >+234{data.data.client.contactPersonDetails.phone}</span>
                            </span>
                        </p>
                        {/* <p className='font-Inter-Bold text-sm flex '  >Sisco Ramon 
                            <span className=' ml-3 font-Inter-Regular mr-3 flex flex-col' >
                                <span>sisco.ramon@pwc.com</span>
                                <span className='mt-2' >+23487878787</span>
                            </span>
                        </p>
                        <p className='font-Inter-Bold text-sm flex '  >Zlatan Ibile
                            <span className=' ml-3 font-Inter-Regular mr-3 flex flex-col' >
                                <span>dele.canchos@pwc.com</span>
                                <span className='mt-2' >+23487878787</span>
                            </span>
                        </p>  */}
                    </div>
                    <p className='font-Inter-SemiBold mb-2 mt-3 bg-[#F8F9FA] px-10 py-2' >Deal History</p>
                    <DealHistory name={data.data.client.companyName} />
                    {/* {data.data.client.deals.length === 0 && (
                        <p className=' text-center my-8 font-Inter-Medium ' >No Records Found</p>
                    )} */}
                </div>  
            )}
        </div>
    )
}  
