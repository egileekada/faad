import React from 'react'


export default function DateFormat(item: any) {
    var date = new Date(item);
    let string = date+''   // -> "2/1/2013"
    let time = date.toLocaleTimeString()+'' 
    let minute = date.getMinutes() 
    return( 
        <p className=' font-Inter-Regular' >{string.substr(0, 11)+' '+date.getHours()+':'}{minute < 10 ? '0'+minute: minute }{' '+time.substr(8, 9)}</p>
    )
}  