import { Select } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'

export default function SearchProduct(props: any) {

    const { isLoading, data, refetch } = useQuery('AllProductAndPricing', () =>
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




    const OnChangeHandler =(id: any)=> { 
        {data.data.products.map((item: any)=> {
            if(item._id === id){
                props.name(item.productCode)
                props.price(item.newPrice)
            }
        })} 
    }

    
    return (
        <Select  
            onChange={(e)=> OnChangeHandler(e.target.value)}
            title='hele'
            fontSize='sm' placeholder='Select Fuel' size='lg' className='border border-[#DDE2E5] rounded-lg ' >
            {!isLoading && (
                <>
                    {data.data.products.map((item: any)=> {
                        // console.log(item)
                        return(
                            <option value={item._id} >{item.productName+' ('+item.productCode+')'}</option>
                        )
                    })}
                </>
            ) }
        </Select>
    )
}
