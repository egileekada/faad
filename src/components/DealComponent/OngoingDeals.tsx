import React from 'react'
import { useQuery } from 'react-query'
import { IUser, UserContext } from '../context/UserContext';
import DateFormat from '../DateFormat'
import PageLoader from '../PageLoader'

export default function OngoingDeals(props: any) { 
 
    const userContext: IUser = React.useContext(UserContext); 
    const { isLoading, data, refetch } = useQuery('AllDeals', () =>
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

    React.useEffect(() => {
        refetch()
    }, [userContext.dealTab])

    React.useEffect(() => {
        refetch()
    }, [])

    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    )   

    const ClickHandler=(item: any)=> {
        userContext.setDealTab(2)
        userContext.setDealValue(item)
        // props.values(item)
    } 

    console.log(data.data.deals)

    return (
        <div className='w-full py-6' >
            {[...data.data.deals].reverse().map((item: any, index: any)=> {

                if(item.status !== 'completed'){ 
                    return(
                        <div key={index} style={{border:'0.5px solid #F88C3A'}} className='w-full flex p-6 mb-6 rounded-2xl bg-white ' >
                            <div className='w-full flex flex-col mr-2' >
                                <p className='font-Inter-SemiBold text-lg text-[#F1BD37] ' >{item.quantity} ℓ <span className=' text-[#414141] ml-2 ' >{item.companyName}</span></p>
                                <p className='font-Inter-Regular mt-1 text-sm' >{item.address}</p>
                                <p className='font-Inter-Regular text-sm'>{item.email} <span className='ml-2' >+234{item.phoneNumber}</span></p>
                                <div className='flex mt-10' >
                                    <button className='border border-[#F66E09] font-Inter-Medium rounded py-2 text-sm text-[#F66E09] px-4 ' >Ask customer service</button>
                                    <button onClick={()=> ClickHandler(item)} className='ml-4 bg-[#F66E09] font-Inter-Medium rounded py-2 text-sm text-[#fff] px-4 ' >{item.status === 'accepted' ? 'Finish deal' : 'Process deal' }</button>
                                </div>
                            </div>
                            <div className='w-full flex flex-col ml-2' >
                                <div className='bg-[#DDE2E54D] rounded-2xl p-4  ' >
                                    <p className='font-Inter-Bold text-sm text-[#414141]' >Dispatch Note</p>
                                    <p className='font-Inter-Regular mt-1 text-sm text-[#414141]' >{item.dispatchNote}</p>
                                </div>
                                    <p className='font-Inter-Regular ml-auto mt-auto text-sm flex text-[#414141]' >{DateFormat(item.updatedAt)} <span className='ml-2' >Created by {item?.createdBy?.name}</span><span className='ml-2 font-Inter-Bold' >{item._id.toUpperCase().slice(0,8)}</span></p>
                            </div>
                        </div>
                    )
                }
            })}
        </div >
    )
} 