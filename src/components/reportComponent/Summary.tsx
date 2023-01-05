import React from 'react'
import { useQuery } from 'react-query'
import PageLoader from '../PageLoader'
import Stock from './Stock'
import { BASEURL } from '../../assets/BasicUrl/Url'

export default function Summary(props: any) {
  
    const [productData, setProductData ] = React.useState([] as any)
    const [tab, setTab ] = React.useState('')
    const [type, setType ] = React.useState('')
    const [loading, setLoading] = React.useState(true)
    const { isLoading, data } = useQuery('AllDelivery', () =>
        fetch('https://obscure-oasis-95161.herokuapp.com/api/v1/delivery', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    const ClickHandler =(month: any)=>{
        props.tab(1)
        props.month(month)
    }    


    React.useEffect(() => {
        fetch('https://obscure-oasis-95161.herokuapp.com/api/v1/product', {
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
                    setLoading(false) 
                    clearTimeout(t1);
                }, 2000); 
            }
            {data.data.products.filter((item: any)=> item.newPrice >= 0 ).map((item: any, index: any ) => {
                productData.splice(index, 1, item); 
            })} 
        })
        .catch((error) => {
            console.error('Error:', error); 
        },);  
    },)   

    const LastMonth =(fuel: any, fuelType: any)=> {
        const money = [] as any
        const product = [] as any
        if(fuel === '' ){
            {!isLoading && (
                <>
                    {data.data.delivery.filter((item: any)=> new Date(item.updatedAt).getMonth() !== new Date().getMonth() && new Date(item.updatedAt).getFullYear() === new Date().getFullYear()).map((item: any, index: any) => { 
    
                        money.splice(index, 1, item.deal.costBeforDispatched * item.deal.quantity);  
                    })}
                </>
            )} 
            return(
                <p className=' font-Inter-SemiBold text-xl '>N{money.reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            )
        } else { 
            {!isLoading && (
                <>
                {data.data.delivery.filter((item: any)=> new Date(item.updatedAt).getMonth() !== new Date().getMonth() && new Date(item.updatedAt).getFullYear() === new Date().getFullYear() && (item.deal.fuelType === fuel || item.deal.fuelType === fuelType)).map((item: any, index: any) => {  
                        product.splice(index, 1, item.deal.costBeforDispatched * item.deal.quantity);  
                    })}
                </>
            )} 
            return(
                <p className=' font-Inter-Regular ml-2 '>• N{product.reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            )
        }
    }

    const ThisMonth =(fuel: any, fuelType: any)=> { 
        const money = [] as any
        const product = [] as any
        if(fuel === '' ){
            {!isLoading && (
                <>
                    {data.data.delivery.filter((item: any)=> new Date(item.updatedAt).getMonth() === new Date().getMonth() && new Date(item.updatedAt).getFullYear() === new Date().getFullYear()).map((item: any, index: any) => {  
                        money.splice(index, 1, item.deal.costBeforDispatched * item.deal.quantity);  
                    })}
                </>
            )} 
            return(
                <p className=' font-Inter-SemiBold text-xl '>N{money.reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            )
        } else { 
            {!isLoading && (
                <>
                    {data.data.delivery.filter((item: any)=> new Date(item.updatedAt).getMonth() === new Date().getMonth() && new Date(item.updatedAt).getFullYear() === new Date().getFullYear() && (item.deal.fuelType === fuel || item.deal.fuelType === fuelType)).map((item: any, index: any) => {   
                        product.splice(index, 1, item.deal.costBeforDispatched * item.deal.quantity);  
                    })}
                </>
            )} 
            return(
                <p className=' font-Inter-Regular ml-2 '>• N{product.reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            )
        }
    }


    const ThisYear =(fuel: any, fuelType: any)=> {
        const money = [] as any
        const product = [] as any
        if(fuel === '' ){
            {!isLoading && (
                <>
                    {data.data.delivery.filter((item: any)=> new Date(item.updatedAt).getFullYear() === new Date().getFullYear()).map((item: any, index: any) => {   
                        money.splice(index, 1, item.deal.costBeforDispatched * item.deal.quantity);  
                    })}
                </>
            )} 
            return(
                <p className=' font-Inter-SemiBold text-xl '>N{money.reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            )
        } else { 
            {!isLoading && (
                <>
                    {data.data.delivery.filter((item: any)=> new Date(item.updatedAt).getFullYear() === new Date().getFullYear() && (item.deal.fuelType === fuel || item.deal.fuelType === fuelType)).map((item: any, index: any) => {   
                        product.splice(index, 1, item.deal.costBeforDispatched * item.deal.quantity);  
                    })}
                </>
            )} 
            return(
                <p className=' font-Inter-Regular ml-2 '>• N{product.reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            )
        }
    } 

    return (
        <div className='w-full h-full px-8 py-8 bg-white rounded-xl overflow-y-auto' > 
            <p className=' font-Inter-SemiBold text-xl text-[#F66E09] ' >Sales</p>
            <div className='mt-6 w-full flex' > 
                <div onClick={()=> ClickHandler('this')}  className=' w-auto bg-[#0A3977] cursor-pointer py-4 px-6 rounded-lg text-white ' >
                    <div className=' pb-3 border-b border-[#0F56B3] ' >
                        <p className=' font-Inter-Medium flex ' >This month
                         {/* <span className='text-[#47FF47] ml-3 '>11% ↑</span> */}
                        </p>
                        {ThisMonth('', '')} 
                    </div>
                    <div className='pt-3 relative text-sm grid grid-cols-2 gap-x-3 gap-y-1 ' > 
                        {!loading && (
                            <>
                                {productData.filter((item: any, index: any)=> index <= 5).map((item: any, index: any)=> { 
                                    return( 
                                        <div key={index} className='flex mt-1' >
                                            <p className=' font-Inter-Regular w-8' >{item.productCode}</p>
                                            {ThisMonth(item.productName, item.productCode)} 
                                        </div>
                                    )
                                })}
                            </>
                        )}  
                        {loading && ( 
                            <div className=' absolute pt-10 w-full h-full flex py-4 justify-center items-center' > 
                                <PageLoader />
                            </div>
                        )}
                    </div> 
                </div>
                <div onClick={()=> ClickHandler('all')} className=' w-auto bg-[#0A3977] ml-6 cursor-pointer py-4 px-6 rounded-lg text-white ' >
                    <div className=' pb-3 border-b border-[#0F56B3] ' >
                        <p className=' font-Inter-Medium flex ' >This Year 
                        {/* <span className='text-[#47FF47] ml-3 '>11% ↑</span> */}
                        </p>
                        {ThisYear('', '')} 
                    </div>
                    <div className='pt-3 text-sm' >
                        <div className=' grid grid-cols-2 relative gap-x-3 gap-y-1 ' > 
                            {!loading && (
                                <>
                                    {productData.filter((item: any, index: any)=> index <=5).map((item: any, index: any)=> { 
                                        return( 
                                            <div key={index} className='flex mt-1' >
                                                <p className=' font-Inter-Regular w-8' >{item.productCode}</p>
                                                {ThisYear(item.productName, item.productCode)} 
                                            </div>
                                        )
                                    })}
                                </>
                            )}  
                        </div>  
                        {loading && ( 
                            <div className='  w-full h-full flex pb-4 justify-center items-center' > 
                                <PageLoader />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <p className=' font-Inter-SemiBold text-xl mt-8 text-[#F66E09] ' >Stock</p>
            <Stock tab={props.tab} type={props.type} />
        </div>
    )
} 
