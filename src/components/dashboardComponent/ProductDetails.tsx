import React from 'react'
import { useQuery } from 'react-query'
import PageLoader from '../PageLoader'

export default function ProductDetails() { 
    
    const { isLoading, data } = useQuery('AllProductAndPricing', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/product', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    const [start, setStart] = React.useState(0)
    const [end, setEnd] = React.useState(3)

    React.useEffect(() => { 
        if(data?.data?.products.length !< end){ 
            const t1 = setTimeout(() => {  
                    if(data?.data?.products.length -1 !== end){ 
                        setStart(start+1)
                        setEnd(end+1)
                    } else { 
                        setStart(0)
                        setEnd(3)
                    }
            clearTimeout(t1);
            }, 5000); 
        }
    },)
 
    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    )   


    const NextButton =()=>{
        if(data?.data?.products.length-1 !== end){
            setStart(start+1)
            setEnd(end+1)
        }
    }

    const PrevButton =()=>{
        if(start !== 0){
            setStart(start-1)
            setEnd(end-1)
        }
    }    
    
    return (
        <div className='w-full rounded-3xl py-6 px-8 flex items-center  bg-[#FBF3EE] ' style={{border: '1px solid #F9A362', boxShadow: '4px 4px 6px 1px #0000000F'}} >
            <svg onClick={()=> PrevButton()} className='cursor-pointer' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.75739L13.4142 8.1716L10.5858 11L13.4142 13.8284L12 15.2426L7.75736 11L12 6.75739Z" fill="#495057"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18ZM20 4V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18L2 4C2 2.89543 2.89543 2 4 2L18 2C19.1046 2 20 2.89543 20 4Z" fill="#495057"/>
            </svg>
            <div className='w-full flex justify-center mx-auto' >
                {!isLoading && (
                    <>
                        {data?.data?.products?.filter((item: any)=> item.newPrice >= 0 ).slice(start, end).map((item: any, index: any ) => {
                             
                            return(
                                <div key={index} className='mx-auto' >
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="24" fill="#FEE8D8"/>
                                        <path d="M18.3431 31.5208C15.219 28.3966 15.219 23.3313 18.3431 20.2071L24 14.5503L29.6569 20.2071C32.781 23.3313 32.781 28.3966 29.6569 31.5208C26.5327 34.645 21.4673 34.645 18.3431 31.5208Z" stroke="#F88C3A" stroke-width="2"/>
                                    </svg>
                                    <p className=' text-[#212429] text-center text-sm font-Inter-SemiBold mt-4 ' >{item.productCode} {item.percentageDifference > 0 && (<span className='text-[#009B00]' >{item.percentageDifference}% ↑</span> )} {item.percentageDifference < 0 && (<span className='text-[#EC0000]' >{item.percentageDifference}% ↓</span>)} </p>
                                    <p className=' text-[#212429] font-Inter-SemiBold text-sm text-center '>₦{item.newPrice}</p>
                                    {/* <p className='text-[#212429] font-Inter-Regular text-xs ' >Available  • {item.level.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}ℓ</p> */}
                                </div>

                            )  
                        })} 
                    </>
                )} 
            </div>
            <svg onClick={()=> NextButton()} className='cursor-pointer ' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4853 11.0451L11.2426 6.80249L9.8284 8.2167L12.6568 11.0451L9.8284 13.8736L11.2426 15.2878L15.4853 11.0451Z" fill="#495057"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H19C20.6569 0 22 1.34315 22 3V19C22 20.6569 20.6569 22 19 22H3C1.34315 22 0 20.6569 0 19V3ZM3 2H19C19.5523 2 20 2.44772 20 3V19C20 19.5523 19.5523 20 19 20H3C2.44772 20 2 19.5523 2 19V3C2 2.44772 2.44772 2 3 2Z" fill="#495057"/>
            </svg>
        </div>
    )
} 