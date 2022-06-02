import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import PageLoader from '../PageLoader'

export default function DealsDetail() {
  
    const navigate = useNavigate()
    const { isLoading, data } = useQuery('AllDeals', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/deals', {
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

    return (
        <div className='w-full rounded-3xl p-6 bg-[#DDE2E5B2] my-6 ' style={{border: '1px solid #ACB5BD', boxShadow: '4px 4px 6px 1px #0000000F'}} >
            <div className=' w-full flex items-center' >
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 0C3.86057 0 2.66667 1.19391 2.66667 2.66667V4C2.66667 4.07555 2.66981 4.15037 2.67597 4.22433C1.11752 4.77081 0 6.2549 0 8V24C0 26.2091 1.79086 28 4 28H28C30.2091 28 32 26.2091 32 24V8C32 5.79086 30.2091 4 28 4H15.832C15.2399 1.6997 13.1518 0 10.6667 0H5.33333ZM12.9766 4C12.5155 3.20293 11.6537 2.66667 10.6667 2.66667H5.33333V4H12.9766ZM4 6.66667C3.26362 6.66667 2.66667 7.26362 2.66667 8V24C2.66667 24.7364 3.26362 25.3333 4 25.3333H28C28.7364 25.3333 29.3333 24.7364 29.3333 24V8C29.3333 7.26362 28.7364 6.66667 28 6.66667H4Z" fill="#ACB5BD"/>
                </svg>
                <p className='font-Inter-SemiBold text-lg ml-3' >Ongoing deals</p>
                <p onClick={()=> navigate('/dashboard/deals')} className='font-Inter-Regular text-xs cursor-pointer ml-auto' >see all</p>
            </div>

            {!isLoading && (
                <div className=' w-full flex mt-10' >

                {[...data.data.deals].reverse().map((item: any, index: any)=> {
                    if(index > 1) {
                        
                    } else {
                        if(item.status !== 'completed'){
                            return(
                                <div key={index} className='flex mx-auto' >
                                    <div className='' >     
                                        <p className=' text-[#212429] text-sm font-Inter-SemiBold '>{item.companyName}</p>
                                        <p style={{marginTop: '2px', marginBottom: '2px'}} className=' text-[#212429] text-xs font-Inter-Regular '>{item.fuelType} • {item.quantity.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ℓ</p>
                                        <p className=' text-[#212429] text-xs font-Inter-Bold '>Status: <span className='font-Inter-Regular' >In dispatch</span></p>
                                    </div>
                                    <div className='border-6 w-10 mt-auto ml-2 h-10 border-l-[#F66E09] flex justify-center items-center rotate-45 border-[#ECB891] rounded-full ' >
                                        <p className='font-Inter-Medium text-xs -rotate-45  ' >25</p>
                                    </div>
                                </div> 
                            )
                        }
                    }
                })}
                    {/* <div className='flex ' >
                        <div className='' >     
                            <p className=' text-[#212429] text-sm font-Inter-SemiBold '>Exxon Mobil</p>
                            <p style={{marginTop: '2px', marginBottom: '2px'}} className=' text-[#212429] text-xs font-Inter-Regular '>PMS • 90,000 ℓ</p>
                            <p className=' text-[#212429] text-xs font-Inter-Bold '>Status: <span className='font-Inter-Regular' >In dispatch</span></p>
                        </div>
                        <div className='border-6 w-10 mt-auto ml-2 h-10 border-[#F66E09] flex justify-center items-center rotate-45 border-b-[#ECB891] rounded-full ' >
                            <p className='font-Inter-Medium text-xs -rotate-45  ' >75</p>
                        </div>
                    </div>
                    <div className='flex' >
                        <div className='' >     
                            <p className=' text-[#212429] text-sm font-Inter-SemiBold '>Total</p>
                            <p style={{marginTop: '2px', marginBottom: '2px'}} className=' text-[#212429] text-xs font-Inter-Regular '>AGO • 16,000 ℓ</p>
                            <p className=' text-[#212429] text-xs font-Inter-Bold '>Status: <span className='font-Inter-Regular' >In dispatch</span></p>
                        </div>
                        <div className='border-6 w-10 mt-auto ml-2 h-10 border-l-[#F66E09] flex justify-center items-center rotate-45 border-[#ECB891] rounded-full ' >
                            <p className='font-Inter-Medium text-xs -rotate-45  ' >25</p>
                        </div>
                    </div> */}
                </div> 
            )}
        </div>
    )
} 