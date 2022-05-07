import React from 'react'

export default function DateFormat(item: any) {
    var date = new Date(item);
    let string = date+''   // -> "2/1/2013"
    let time = date.toLocaleTimeString()+''
    date.getHours() 
    return( 
        <p className=' font-Inter-Regular' >{string.substr(0, 11)+' '+date.getHours()+':'+date.getMinutes()+' '+time.substr(8, 9)}</p>
    )
}  