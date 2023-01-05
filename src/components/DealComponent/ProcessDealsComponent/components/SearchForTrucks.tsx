import { Select } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'

export default function SearchForTrucks(props: any) {
 
    const { isLoading, data } = useQuery('SearchAllTruck', () =>
        fetch('http://faad-env.eba-kfucwakm.eu-central-1.elasticbeanstalk.com/api/v1/truck', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    
    // const [level, setLevel] = React.useState([] as any) 

    const OnChangeHandle =async(item: any)=> { 
        // console.log(item)  
        props.truck(item)  
    }   

    return (
        <div className='w-full  ' > 
            {!isLoading && ( 
                <> 
                    <div className='flex font-Inter-Regular mt-4 items-center' >  
                        <p className='font-Inter-Regulartext-[#ACB5BD] text-sm w-28 font-Inter-Regular ' >Choose a truck</p> 
                        <div className='w-96 flex items-center relative' >
                            <div className='w-full' >
                                <Select onChange={(e)=> OnChangeHandle(e.target.value)} fontSize='sm' > 
                                    <option key='' >{props.show ? ''+props.truckName : 'Search'}</option>
                                    {data.data.trucks.filter((item: any) => item.status === 'available').map((item: any, index: any ) => {
                                        return(
                                            <option key={index} value={item._id}>{'Truck '+(index+1)+'  TruckID: '+item.truckId+'ℓ  Capacity: '+item.capacity}</option>
                                            // <option className='' key={index} value={item._id} >Truck{' '+(index+1)+'  TruckID: '}<span className='font-Inter-Regular' >{item.truckId}</span></option>
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
