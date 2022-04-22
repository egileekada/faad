import { Input } from '@chakra-ui/input'
import React from 'react'

export default function ProductAndPricing() {
    return (
        <div className='w-full h-full bg-white rounded-2xl' >
            <div className='pb-14 border-b px-8 py-8  border-[#e0e0e0]' >
                <p className='font-Inter-SemiBold text-xl ' >Diesel (AGO)</p>
                <div className='w-full flex items-end mt-4' >
                    <div className='w-full' >
                        <p className='font-Inter-Regular text-sm mb-1' >Old</p>
                        <Input fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                    </div>
                    <div className='w-full ml-4' >
                        <p className='font-Inter-Regular text-sm mb-1' >New</p>
                        <Input fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                    </div>
                    <div className='w-full ml-10' >
                        <p className='font-Inter-Regular text-sm mb-1' >Reset percentage</p>
                        <Input fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                    </div>
                    <button className='font-Inter-SemiBold  ml-10 text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] ' >Update</button>
                </div>
                <p className='font-Inter-SemiBold text-xl mt-8 ' >Petrol (PMS)</p>
                <div className='w-full flex items-end mt-4' >
                    <div className='w-full' >
                        <p className='font-Inter-Regular text-sm mb-1' >Old</p>
                        <Input fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                    </div>
                    <div className='w-full ml-4' >
                        <p className='font-Inter-Regular text-sm mb-1' >New</p>
                        <Input fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                    </div>
                    <div className='w-full ml-10' >
                        <p className='font-Inter-Regular text-sm mb-1' >Reset percentage</p>
                        <Input fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                    </div>
                    <button className='font-Inter-SemiBold  ml-10 text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] ' >Update</button>
                </div>
                <p className='font-Inter-SemiBold text-xl mt-8 ' >Kerosine (DPK)</p>
                <div className='w-full flex items-end mt-4' >
                    <div className='w-full' >
                        <p className='font-Inter-Regular text-sm mb-1' >Old</p>
                        <Input fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                    </div>
                    <div className='w-full ml-4' >
                        <p className='font-Inter-Regular text-sm mb-1' >New</p>
                        <Input fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                    </div>
                    <div className='w-full ml-10' >
                        <p className='font-Inter-Regular text-sm mb-1' >Reset percentage</p>
                        <Input fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                    </div>
                    <button className='font-Inter-SemiBold  ml-10 text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] ' >Update</button>
                </div>
            </div>
            <div className='pt-14 pb-10 px-10' > 
                <p className='font-Inter-SemiBold text-xl ' >Products</p>
                <div className='w-full grid grid-cols-2 gap-6 mt-6' >
                    <div className=' rounded-xl bg-[#414141] text-white px-8 py-4  w-full' >
                        <div className='flex' >
                            <div className='' >
                                <p className=' text-xs font-Inter-Bold w-full' >Product Code</p>
                                <p className=' font-Inter-SemiBold ' >AGO</p>
                            </div>
                            <div className='mx-auto' >
                                <p className=' text-xs font-Inter-Bold' >Product Name</p>
                                <p className=' font-Inter-SemiBold ' >Diesel</p>
                            </div>
                            <div className='' >
                                <p className=' text-xs font-Inter-Bold' >Discription</p>
                                <p className=' text-xs font-Inter-Regular w-32 ' >Universally accepted standand oil for cooking rice and . </p>
                            </div>
                        </div>
                        <div className='flex' >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="white"/>
                                <path d="M9 9H11V17H9V9Z" fill="white"/>
                                <path d="M13 9H15V17H13V9Z" fill="white"/>
                            </svg> 
                            <svg className='ml-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.73652C22.0976 3.12704 22.0976 3.76021 21.7071 4.15073L20.8348 5.02308C21.3675 6.13821 21.172 7.51427 20.2484 8.43791L9.64175 19.0445L3.9849 13.3877L14.5915 2.78106C15.5151 1.85742 16.8912 1.66195 18.0063 2.19466L18.8787 1.3223C19.2692 0.93178 19.9024 0.93178 20.2929 1.3223L21.7071 2.73652ZM13.1965 7.00451L6.81332 13.3877L9.64175 16.2161L16.0249 9.83294L13.1965 7.00451ZM15.0147 5.18624L16.0057 4.19527C16.3962 3.80475 17.0294 3.80475 17.4199 4.19527L18.8341 5.60948C19.2247 6.00001 19.2247 6.63317 18.8341 7.0237L17.8432 8.01466L15.0147 5.18624Z" fill="white"/>
                                <path d="M1.04979 22L8.82835 19.8783L3.17111 14.2218L1.04979 22Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div className=' rounded-xl bg-[#414141] text-white px-8 py-4  w-full' >
                        <div className='flex' >
                            <div className='' >
                                <p className=' text-xs font-Inter-Bold w-full' >Product Code</p>
                                <p className=' font-Inter-SemiBold ' >AGO</p>
                            </div>
                            <div className='mx-auto' >
                                <p className=' text-xs font-Inter-Bold' >Product Name</p>
                                <p className=' font-Inter-SemiBold ' >Diesel</p>
                            </div>
                            <div className='' >
                                <p className=' text-xs font-Inter-Bold' >Discription</p>
                                <p className=' text-xs font-Inter-Regular w-32 ' >Universally accepted standand oil for cooking rice and . </p>
                            </div>
                        </div>
                        <div className='flex mt-2' >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="white"/>
                                <path d="M9 9H11V17H9V9Z" fill="white"/>
                                <path d="M13 9H15V17H13V9Z" fill="white"/>
                            </svg> 
                            <svg className='ml-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.73652C22.0976 3.12704 22.0976 3.76021 21.7071 4.15073L20.8348 5.02308C21.3675 6.13821 21.172 7.51427 20.2484 8.43791L9.64175 19.0445L3.9849 13.3877L14.5915 2.78106C15.5151 1.85742 16.8912 1.66195 18.0063 2.19466L18.8787 1.3223C19.2692 0.93178 19.9024 0.93178 20.2929 1.3223L21.7071 2.73652ZM13.1965 7.00451L6.81332 13.3877L9.64175 16.2161L16.0249 9.83294L13.1965 7.00451ZM15.0147 5.18624L16.0057 4.19527C16.3962 3.80475 17.0294 3.80475 17.4199 4.19527L18.8341 5.60948C19.2247 6.00001 19.2247 6.63317 18.8341 7.0237L17.8432 8.01466L15.0147 5.18624Z" fill="white"/>
                                <path d="M1.04979 22L8.82835 19.8783L3.17111 14.2218L1.04979 22Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <button className=' relative rounded w-36 flex justify-center items-center h-10 font-Inter-SemiBold mt-8 text-sm text-white bg-[#F88C3A]' >
                    <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="white"/>
                    </svg>
                    New product
                </button>
            </div>
        </div>
    )
} 