import React from 'react'
import { useQuery } from 'react-query'
import Truck from '../../assets/images/tanker.png'
import PageLoader from '../PageLoader'
import AddTruck from './Modal/AddTruck'

export default function Trucks() {

    const { isLoading, data, refetch } = useQuery('AllTruck', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/truck', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    React.useEffect(() => {
        refetch()
    },[])

    const [showModal, setShowModal] = React.useState(false)
    // console.log(data)

    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    ) 
    
    return (
        <div className='w-full h-full p-10 rounded-2xl bg-white' >
            <div className='flex w-full items-center' >
                <p className='font-Inter-SemiBold text-2xl ' >Trucks</p>
                <button onClick={()=> setShowModal(true)} className=' relative rounded w-36 flex justify-center items-center h-10 font-Inter-SemiBold ml-auto text-sm text-white bg-[#F88C3A]' >
                    <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="white"/>
                    </svg>
                    New Trucks
                </button>
            </div>
            <div  className='w-full grid grid-cols-2 gap-x-4  gap-y-14 mt-8'>
                {!isLoading && (
                    <>
                        {data.data.trucks.map((item: any ) => {
                            return(
                                <div className='w-full flex items-center' >
                                    <div className='bg-[#C4C4C4] py-10 rounded-2xl px-2' >
                                        <img src={Truck} alt='tanker' className='object-cover' style={{width: '227px'}} />
                                    </div>
                                    <div className='ml-6' > 
                                        <p className='font-Inter-SemiBold text-lg mb-4 text-[#ACB5BD]' >Israelite</p>
                                        <p className='font-Inter-Bold mb-2 text-sm' >Truck ID<span className='font-Inter-Regular ml-3' >{item.truckId}</span></p>
                                        <p className='font-Inter-Bold mt-1 mb-2 text-sm' >Capacity<span className='font-Inter-Regular ml-3' >{Number(item.capacity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ℓ</span></p> 
                                        {item.status !== 'available' && (
                                            <div className='flex items-center' >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="#FF1F1F"/>
                                                </svg>
                                                <p className='font-Inter-Medium ml-1 text-xs' >enroute</p>
                                            </div> 
                                        )}
                                        {item.status === 'available' && (
                                            <div className='flex items-center' >
                                                <svg width="16" height="16"  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#00BE00"/>
                                                </svg>
                                                <p className='font-Inter-Medium ml-1 text-xs' >Available</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })} 
                    </>
                )}
                {/* <div className='w-full flex items-center' >
                    <div className='bg-[#C4C4C4] py-10 rounded-2xl px-2' >
                        <img src={Truck} alt='tanker' className='object-cover' style={{width: '227px'}} />
                    </div>
                    <div className='ml-6' > 
                        <p className='font-Inter-SemiBold text-lg mb-4 text-[#ACB5BD]' >Israelite</p>
                        <p className='font-Inter-Bold mb-2 text-sm' >Truck ID<span className='font-Inter-Regular ml-3' >PHC123ZY</span></p>
                        <p className='font-Inter-Bold mt-1 mb-2 text-sm' >Capacity<span className='font-Inter-Regular ml-3' >500,000 ℓ</span></p> 
                        <div className='flex items-center' >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="#00BE00"/>
                            </svg> 
                            <p className='font-Inter-Medium ml-1 text-xs' >Available</p>
                        </div> 
                    </div>
                </div> */}
            </div>

            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <AddTruck close={setShowModal} reload={refetch} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}  
        </div>
    )
} 