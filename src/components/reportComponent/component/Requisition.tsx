import React from 'react'
import { useQuery } from 'react-query'

export default function Requisition(props: any) { 
    
    const { isLoading, data } = useQuery('AllRequisition', () =>
        fetch(`https://faadoli.herokuapp.com/api/v1/requisition`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )  

    const [number, setNumber] = React.useState([] as any)    

    return (
        <div> 
            {!isLoading && (
                <> 
                    {data.data.filter((item: any) => item.deal !== null && item.deal._id === props.id).map((item: any, index: any)=> {  
                        number.splice(index, 1, item.amount);          
                        // return( 
                        //     <p>{number.reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>    
                        // )  
                    })} 
                    <p>{number.reduce((partialSum: any, a: any) => (partialSum + a), 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>    
                </>
            )}
        </div>
    )
}
