import React, { useRef, useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import DeliveryNote from "./DeliveryNote";
import DispatchNote from "./DispatchNote";
import WaterTest from "./WaterTest";

const PrintButton = (props: any) => {
  const componentRef = useRef(); 
  const [show, setShow] = useState(false)
  const [detail, setDetail] = useState({} as any)
  const handlePrint = useReactToPrint({ 
    content: () => componentRef.current as any
  });
  
  const [agentId, setAgentInfo] = React.useState('')
  const [driverId, setDriverInfo] = React.useState('')
  const [truck, setTruckInfo] = React.useState('')

  if(props.agent){  
    fetch(`https://faadoli.herokuapp.com/api/v1/auth/profile/all`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(data => {     
        data.data.users.map((item: any) => { 
            if(item._id === props.driver){ 
                setDriverInfo(item.name)
            }
            if(item._id === props.agent){ 
                setAgentInfo(item.name)
            }
        })
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
  
  if(props.truck){  
    fetch(`https://faadoli.herokuapp.com/api/v1/truck/${props.truck}`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .then(data => {    
        // console.log('truck '+data.data.truck.truckId)
        setTruckInfo(data.data.truck.truckId) 
    })
    .catch((error) => {
        console.error('Error:', error); 
    },);  
}  

  return (
    <div className="">  
      {props.name === 'delivery' && (
        <div onClick={()=> setShow(true)} className='flex items-center cursor-pointer' >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H8V6H16V4ZM6 6H2V18H6V22H18V18H22V6H18V2H6V6ZM4 16H6V14H18V16H20V8H4V16ZM16 16H8V20H16V16ZM16 10H18V12H16V10Z" fill="#ACB5BD"/>
            </svg>
            <p className='font-Inter-Regulartext-[#ACB5BD] ml-3 text-sm w-28 ' >Delivery note</p> 
        </div>
      )}

      {props.name === 'water' && (
        <div onClick={()=> setShow(true)} className=' ml-3 flex items-center cursor-pointer' >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H8V6H16V4ZM6 6H2V18H6V22H18V18H22V6H18V2H6V6ZM4 16H6V14H18V16H20V8H4V16ZM16 16H8V20H16V16ZM16 10H18V12H16V10Z" fill="#ACB5BD"/>
            </svg>
            <p className='font-Inter-Regulartext-[#ACB5BD] ml-3 text-sm w-28 ' >water test form</p> 
        </div>
      )}
 
      {props.name === 'dispatch' && (
      <div onClick={()=> setShow(true)} className='ml-3 flex items-center cursor-pointer' >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H8V6H16V4ZM6 6H2V18H6V22H18V18H22V6H18V2H6V6ZM4 16H6V14H18V16H20V8H4V16ZM16 16H8V20H16V16ZM16 10H18V12H16V10Z" fill="#ACB5BD"/>
          </svg>
          <p className='font-Inter-Regulartext-[#ACB5BD] ml-3 text-sm w-28 ' >Dispatch note</p> 
      </div>
      )}

      {show ? 
        (
          <>
            <div style={{width: '700px' }} className="h-auto w-auto flex hidescrollbar justify-center items-start py-2 overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 mx-auto outline-none focus:outline-none"> 
              <div  style={{width: '650px' }} className=" bg-white h-auto flex flex-col rounded-lg relative z-50" >
                <div className='flex items-center px-10 mt-10' >
                  <p className=' font-Inter-Bold text-lg ' >Print Details</p>
                  <svg onClick={()=> setShow(false)} className='ml-auto cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <g id="Iconly_Light_Close_Square" data-name="Iconly/Light/Close Square" transform="translate(0.75 0.75)">
                          <g id="Close_Square" data-name="Close Square">
                          <path id="Stroke_1" data-name="Stroke 1" d="M4.792,0,0,4.792" transform="translate(6.853 6.845)" fill="none" stroke="#F88C3A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <path id="Stroke_2" data-name="Stroke 2" d="M4.8,4.8,0,0" transform="translate(6.85 6.843)" fill="none" stroke="#F88C3A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          <path id="Stroke_3" data-name="Stroke 3" d="M13.584,0H4.915C1.894,0,0,2.139,0,5.166v8.168C0,16.361,1.885,18.5,4.915,18.5h8.668c3.031,0,4.917-2.139,4.917-5.166V5.166C18.5,2.139,16.614,0,13.584,0Z" fill="none" stroke="#F88C3A" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                          </g>
                      </g>
                  </svg>
                </div> 
                {props.name === 'delivery' && (
                  <DeliveryNote dispatch={props.dispatch} truck={truck} value={props.values} ref={componentRef} />  
                )}
                {props.name === 'water' && (
                  <WaterTest agent={agentId} driver={driverId} truck={truck} value={props.values}  ref={componentRef} />  
                )}
                {props.name === 'dispatch' && (
                  <DispatchNote dispatch={props.dispatch}  agent={agentId} driver={driverId} truck={truck} value={props.values}  ref={componentRef} />  
                )}
                <button onClick={()=> handlePrint()} className=' mr-10 mb-10 ml-auto font-Inter-SemiBold mt-10 text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 py-2 bg-[#F88C3A] '>
                    <svg className='mr-2' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4H8.5V6H16.5V4ZM6.5 6H2.5V18H6.5V22H18.5V18H22.5V6H18.5V2H6.5V6ZM4.5 16H6.5V14H18.5V16H20.5V8H4.5V16ZM16.5 16H8.5V20H16.5V16ZM16.5 10H18.5V12H16.5V10Z" fill="white"/>
                    </svg> 
                    Print
                </button>  
              </div>
            </div> 
            <div onClick={()=> setShow(false)} className="opacity-20 fixed flex flex-1 cursor-pointer inset-0 z-40 bg-black"/>
          </>
        ) : null}  
    </div>
  );
};

export default PrintButton;
