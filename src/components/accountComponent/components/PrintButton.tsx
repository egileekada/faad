import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import PrintedSlip from "./PrintedSlip";

const PrintButton = (props: any) => {
  const navigate = useNavigate()
  const componentRef = useRef(); 
  const [show, setShow] = useState(false)
  const [detail, setDetail] = useState({} as any)
  const handlePrint = useReactToPrint({ 
    content: () => componentRef.current as any,
    onAfterPrint: () => setShow(false)
  });  

  

useEffect(() => {
  setDetail(props.value)
  setShow(props.show)
}, [props.value, props.show]) 

  return (
    <div className=""> 
      {!props.table && (
        <button onClick={()=> props.click()} className='font-Inter-SemiBold mt-10 text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] '>
            <svg className='mr-2' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4H8.5V6H16.5V4ZM6.5 6H2.5V18H6.5V22H18.5V18H22.5V6H18.5V2H6.5V6ZM4.5 16H6.5V14H18.5V16H20.5V8H4.5V16ZM16.5 16H8.5V20H16.5V16ZM16.5 10H18.5V12H16.5V10Z" fill="white"/>
            </svg> 
            Print entry permit
        </button> 
      )}
      {props.table && (
        <p onClick={()=> setShow(true)} className='text-[#ACB5BD] cursor-pointer ' >Reprint last entry permit</p> 
      )}
      {show ? 
        (
          <>
            <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
              <div style={{width: '500px'}} className=" bg-white flex flex-col rounded-lg" >
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
                <PrintedSlip table={props.table} value={props.values !== undefined ? props.values : props.value} ref={componentRef} />  
                
                  <button onClick={()=> handlePrint()} className=' mr-10 mb-10 ml-auto font-Inter-SemiBold mt-10 text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] '>
                      <svg className='mr-2' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4H8.5V6H16.5V4ZM6.5 6H2.5V18H6.5V22H18.5V18H22.5V6H18.5V2H6.5V6ZM4.5 16H6.5V14H18.5V16H20.5V8H4.5V16ZM16.5 16H8.5V20H16.5V16ZM16.5 10H18.5V12H16.5V10Z" fill="white"/>
                      </svg> 
                      Print
                  </button>   
              </div>
            </div> 
            <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
          </>
        ) : null}  
    </div>
  );
};

export default PrintButton;
