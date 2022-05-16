import { Select } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'

export default function SearchForProduct(props: any) {
 
    const { isLoading, data } = useQuery('SearchAllProDuct', () =>
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

    const OnChangeHandle =async(item: any)=> {
        // console.log(item) 
        props.index(item)
    }   

    console.log(data)

    return (
        <div className='w-full  ' > 
            {!isLoading && ( 
                <> 
                    <div className='flex font-Inter-Regular mt-4 items-center' >   
                        <div className='w-full flex items-center relative' >
                            <div className='w-full' >
                                <Select onChange={(e)=> OnChangeHandle(e.target.value)} placeholder='Search' fontSize='sm' >
                                    {data.data.products.map((item: any, index: any ) => { 
                                        return(
                                            <option className='' key={index} value={item._id} >{item.productName}</option>
                                        ) 
                                    })}
                                </Select>
                            </div>  
                        </div>
                    </div> 
                </>
            )}
        </div>
    )
} 