import { Select } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'

export default function SearchForTank(props: any) {
 
    const { isLoading, data } = useQuery('SearchAllTank', () =>
        fetch('https://faadoli.herokuapp.com/api/v1/tank', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   

    const OnChangeHandle =async(item: any, index: any)=> {
        // await GetData(index) 
        fetch(`https://faadoli.herokuapp.com/api/v1/tank/${item}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {    
            console.log(data)  
            props.tank(data.data.tank._id)
            // if(!level){
            //     setLevel([...level, data.data.tank.capacity])
            // } else {
            //     level[index] = data.data.tank.capacity
            // }
        })
        .catch((error) => {
            console.error('Error:', error); 
        },); 

    }  

    return (
        <div className='w-full  ' > 
            {!isLoading && ( 
                <>
                    {props.tankNo.map((item: any, index: any)=> {
                        return( 
                            <div key={index} className='flex font-Inter-SemiBold mt-4 items-center' >  
                                <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 font-Inter-Regular ' >Dispatch tank</p> 
                                <div className='w-96 flex items-center relative' >
                                    <div className='w-full' >
                                        <Select onChange={(e)=> OnChangeHandle(e.target.value, index)} placeholder='Search' fontSize='sm' >
                                            {data.data.tanks.map((item: any, index: any ) => {
                                                return(
                                                    <option className='' key={index} value={item._id} >Tank{' '+(index+1)+'  Capacity: '}<span className='font-Inter-Regular' >{item.level+'ℓ  Product Name: '}</span><span className='font-Inter-Regular' >{item.product.productCode}</span></option>
                                                )
                                            })}
                                        </Select>
                                    </div>  
                                </div>
                            </div>
                        )
                    })}
                </>
            )}
        </div>
    )
} 