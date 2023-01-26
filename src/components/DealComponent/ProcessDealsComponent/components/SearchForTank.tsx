import { Select } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { BASEURL } from '../../../../assets/BasicUrl/Url'

export default function SearchForTank(props: any) {
 
    const { isLoading, data } = useQuery('SearchAllTank', () =>
        fetch(BASEURL.URL+'tank', {
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
        fetch(`${BASEURL.URL}tank/${item}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {       
                props.id.splice(index, 1, data.data.tank._id); 
                props.product(data.data.tank.product._id)
            // }
            // console.log(data.data.tank);
            
        })
        .catch((error) => {
            console.error('Error:', error); 
        },); 

    }     

    return (
        <div className='w-full  ' > 
            {!isLoading && ( 
                <>
                    {props.id.map((item: any, index: any)=> {
                        return( 
                            <div key={index} className='flex font-Inter-Regular mt-4 items-center' >  
                                <p className='font-Inter-Regular text-sm w-28 ' >Dispatch tank</p> 
                                <div className='w-96 flex items-center relative' >
                                    <div className='w-full' >
                                        <Select disabled={props?.show ? true : false} onChange={(e)=> OnChangeHandle(e.target.value, index)} fontSize='sm' >
                                            <option key='' >{props.show ? ''+props.tankName[index] : 'Search'}</option>
                                            {data.data.tanks.filter((item: any)=> item.level >= props.quantity &&(item?.product?.productCode === props?.fuelType || item?.product?.productName === props?.fuelType)).map((item: any, index: any ) => { 
                                                // console.log(item);
                                                
                                                return(
                                                    <option  key={index} value={item._id} >{'Tank '+(index+1)+'  Tank Level: '+item.level+'ℓ  Product Name: '+(item.product === null ? '':item.product.productCode)}</option>
                                                    // <option className='' key={index} value={item._id} >Tank{' '+(index+1)+'  Capacity: '}<span className='font-Inter-Regular' >{JSON.parse(item.level)+'ℓ  Product Name: '}</span><span className='font-Inter-Regular' >{item.product === null ? '':item.product.productCode}</span></option>
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
