import React from 'react'
import { useQuery } from 'react-query'

export default function Stock(props: any) {
    const [tankData, setTankData ] = React.useState([] as any)
 
    const { isLoading, data, refetch } = useQuery('AllStock', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/stock', {
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
        
        fetch('https://faadoli.herokuapp.com/api/v1/tank', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {     
            if(data.status === 'success'){ 
                const t1 = setTimeout(() => {  
                    // setLoading(false) 
                    clearTimeout(t1);
                }, 2000); 
            }
            {data.data.tanks.map((item: any, index: any ) => {
                tankData.splice(index, 1, item); 
            })} 
        })
        .catch((error) => {
            console.error('Error:', error); 
        },); 
    },)  


    const ThisMonthTankInfo =(fuel: any, fuelType: any, sold: any)=> {  
        
        const stockDetail = [] as any 

        {!isLoading && (
            <>
                {data.data.stocks.filter((item: any)=> new Date(item.date).getMonth() === new Date().getMonth() && new Date(item.date).getFullYear() === new Date().getFullYear() && item.isAdding === sold && item.product !== null && item.product.productCode === fuelType).map((item: any, index: any) => {   
                    stockDetail.splice(index, 1, item.level);  
                })}
            </>
        )} 
        return(
            <p className='font-Inter-SemiBold text-lg '>{stockDetail.reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}ℓ</p>
        ) 
    }

    const ThisYearTankInfo =(fuel: any, fuelType: any, sold: any)=> { 
        const stockDetail = [] as any 
        {!isLoading && (
            <>
                {data.data.stocks.filter((item: any)=> new Date(item.date).getFullYear() === new Date().getFullYear()).map((item: any, index: any) => {   
                    stockDetail.splice(index, 1, item.level);  
                })}
            </>
        )} 
        return(
            <p className=' font-Inter-SemiBold text-lg '>{stockDetail.reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}ℓ</p>
        ) 
    }

    const ClickHandler =(item: any)=> {
        props.tab(2)
        props.type(item)
    }

    return (
        <div className='mt-6 w-full grid grid-cols-3 gap-6 ' >
            {tankData.map((item: any, index: any)=> {
                return(
                    <div key={index} onClick={()=> ClickHandler(item.product.productCode)} className=' w-auto cursor-pointer bg-[#0A3977]  py-4 px-4 rounded-lg text-white ' >
                        <div className=' pb-3 border-b border-[#0F56B3] ' >
                            <p className=' font-Inter-Medium text-lg ' >{item.product.productCode} (This month)</p> 
                            <div className='mt-2 flex' >
                                <div className=' border-[#68A4F3] border-r pr-3 ' >
                                    <p className=' font-Inter-SemiBold text-sm text-[#47FF47]  ' >In</p> 
                                    {ThisMonthTankInfo(item.product.productName, item.product.productCode, true)} 
                                    {/* <p className=' font-Inter-SemiBold text-lg ' >{(item.capacity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}ℓ</p> */}
                                </div>
                                <div className=' pl-3' > 
                                    <p className=' font-Inter-SemiBold text-sm text-[#FF7070]  ' >Out</p> 
                                    {ThisMonthTankInfo(item.product.productName, item.product.productCode, false)} 
                                    {/* <p className=' font-Inter-SemiBold text-lg ' >{(item.capacity - item.level).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}ℓ</p> */}
                                </div>
                            </div>   
                            <p className=' text-sm font-Inter-Regular mt-2 '>Closing Stock• {item.level.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}ℓ</p>
                        </div>
                        <div className='pt-3' >
                            <p className=' font-Inter-Medium text-lg ' >{item.product.productCode} (This year)</p> 
                            <div className='mt-2 flex' >
                                <div className=' border-[#68A4F3] border-r pr-3 ' >
                                    <p className=' font-Inter-SemiBold text-sm text-[#47FF47]  ' >In</p>
                                    {ThisYearTankInfo(item.product.productName, item.product.productCode, true)} 
                                    {/* <p className=' font-Inter-SemiBold text-lg ' >{(item.capacity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}ℓ</p> */}
                                </div>
                                <div className=' pl-3' > 
                                    <p className=' font-Inter-SemiBold text-sm text-[#FF7070]  ' >Out</p>
                                    {ThisYearTankInfo(item.product.productName, item.product.productCode, false)} 
                                    {/* <p className=' font-Inter-SemiBold text-lg ' >{(item.capacity - item.level).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}ℓ</p> */}
                                </div>
                            </div>
                            <p className=' text-sm font-Inter-Regular mt-2 '>Closing Stock• {item.level.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}ℓ</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
} 