import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import DateFormat from '../DateFormat'
import PageLoader from '../PageLoader'
import { BASEURL } from '../../assets/BasicUrl/Url'

export default function BargainInfo() {

    const navigate = useNavigate()
    const [deleteModal, setDeleteModal] = React.useState(false)
    const [text, setText] = React.useState('')
    const [tab, setTab] = React.useState(0)
    const Subject ='Processing Bargain'
    
    const { isLoading, data } = useQuery('BargainByID'+localStorage.getItem('barginID'), () =>
        fetch(`${BASEURL.URL}bargain/${localStorage.getItem('barginID')}`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res =>
            res.json()
        )
    )   

    if (isLoading) return(
        <div className='w-full h-auto flex mt-12 justify-center  ' > 
            <PageLoader />
        </div>
    )    

    const DeleteHandler =async()=> {
        const request = await fetch(`${BASEURL.URL}bargain/${data.data.bargain._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}` 
            },  
            body: JSON.stringify({
                status: 'rejected'
            }),
        });
        console.log(request.json())
        navigate('/dashboard/bargains')
    }

    const ClickHandler =(tab: any, item: any)=> {
        setTab(tab)
        setText(item)
    }
    const current = window.location.pathname 
    localStorage.setItem("current", current)

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto' > 
            <svg onClick={()=> navigate('/dashboard/bargains')} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            {!isLoading && ( 
                <div className=' w-full rounded-2xl p-10 my-8 bg-white flex flex-col ' >  
                    <div className=' w-full flex border-b border-[#E0E0E0] pb-10' >
                        <div className='flex flex-col flex-1 pr-10 ' > 
                            <div className='w-full flex' > 
                                <p className='font-Inter-SemiBold text-2xl ' >{data.data.bargain.companyName}</p>
                                <p className='font-Inter-Regular mt-4 text-sm ml-auto ' >{DateFormat(data.data.bargain.updatedAt)}</p>
                            </div>
                            <p className='font-Inter-Regular mt-4 text-sm ' >{data.data.bargain.address}</p>
                            <p className='font-Inter-Regular mt-4 text-sm mb-2' >{data.data.bargain.email}</p>
                            <p className='font-Inter-Regular text-sm my-2' >{data.data.bargain.phoneNumber}</p>
                            <p className='font-Inter-Bold text-sm my-2' >Product: <span className='font-Inter-Regular mr-3' >{data.data.bargain.fuel}</span> Quantity: <span className='font-Inter-Regular'>{data.data.bargain.quantity} ℓ</span></p>
                            <p className='font-Inter-Bold text-sm my-2' >Asking price: <span className='font-Inter-Regular mr-3' >N{data.data.bargain.askingPrice}</span> Bidding price: <span className='font-Inter-Regular'>N{data.data.bargain.biddingPrice}</span></p>
                            {data.data.bargain.status !== 'rejected' && (
                                <div className='mt-14 flex ' > 
                                    <button onClick={()=>setDeleteModal(true)} className='font-Inter-SemiBold text-xs h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#FF1F1F] ' >Reject Bargain</button>
                                    <button onClick={()=> navigate('/dashboard/bargains/createdeals')} className='font-Inter-SemiBold text-xs h-10 text-white rounded-lg px-4 ml-4 bg-[#F88C3A] ' >Create deal from bargain</button>
                                </div>
                            )}
                        </div>
                        <div className='w-80' > 
                            <div className='w-80 relative bg-[#495057] rounded-3xl pt-5 pb-4 px-4' >
                                <div className='flex mb-6 items-center' > 
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 5C4 4.44772 4.44772 4 5 4H15C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H5C4.44771 6 4 5.55228 4 5Z" fill="#F88C3A"/>
                                        <path d="M4 9C4 8.44771 4.44772 8 5 8H15C15.5523 8 16 8.44771 16 9C16 9.55229 15.5523 10 15 10H5C4.44771 10 4 9.55229 4 9Z" fill="#F88C3A"/>
                                        <path d="M5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44771 14 5 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H5Z" fill="#F88C3A"/>
                                        <path d="M4 17C4 16.4477 4.44772 16 5 16H9C9.55228 16 10 16.4477 10 17C10 17.5523 9.55228 18 9 18H5C4.44772 18 4 17.5523 4 17Z" fill="#F88C3A"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V19C20 20.6569 18.6569 22 17 22H3C1.34315 22 0 20.6569 0 19V3ZM3 2H17C17.5523 2 18 2.44771 18 3V19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19V3C2 2.44772 2.44771 2 3 2Z" fill="#F88C3A"/>
                                    </svg> 
                                    <p className=' ml-2 font-Inter-SemiBold text-lg text-white' >Notes</p>
                                    <svg className='ml-auto' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4648 1.09166C19.0743 0.701136 18.4411 0.701136 18.0506 1.09166C17.9516 1.19067 17.8015 1.21479 17.6708 1.16451C16.5979 0.751812 15.3358 0.978065 14.4706 1.84327L3.59661 12.7173C3.44041 12.8735 3.44041 13.1268 3.59662 13.283L8.68778 18.3741C8.84399 18.5303 9.09726 18.5303 9.25347 18.3741L20.1274 7.50012C20.9926 6.63492 21.2189 5.37272 20.8062 4.29989C20.7559 4.16919 20.78 4.0191 20.879 3.92009C21.2696 3.52956 21.2696 2.8964 20.879 2.50587L19.4648 1.09166ZM18.954 5.27937C19.1103 5.43558 19.1103 5.68884 18.954 5.84505L9.25347 15.5457C9.09726 15.7019 8.84399 15.7019 8.68778 15.5457L6.42504 13.283C6.26883 13.1268 6.26883 12.8735 6.42504 12.7173L16.1256 3.01663C16.2818 2.86042 16.5351 2.86042 16.6913 3.01663L18.954 5.27937Z" fill="white"/>
                                        <path d="M0.675362 21.7662C0.376756 21.8476 0.102765 21.5736 0.184213 21.275L1.94032 14.8368C2.02114 14.5405 2.39192 14.4421 2.60908 14.6593L7.29086 19.3417C7.50801 19.5588 7.40954 19.9296 7.11324 20.0104L0.675362 21.7662Z" fill="white"/>
                                    </svg> 
                                </div> 
                                <div  style={{height: '250px'}}  className='darknote overflow-y-auto pb-5 px-2 ' >
                                    <div className='w-full text-white bg-[#5A6167] py-4 px-3 rounded-xl my-4' >
                                        <p  className='text-xs font-Inter-Regular mt-1'>Their admin has reported that the fuel we sold to them is 20 litres over the quantity requested.</p>
                                        <p className='text-xs mt-3 font-Inter-Regular' >Kim 16/03 • 12:23</p>
                                    </div> 
                                    <div className='w-full text-white bg-[#5A6167] py-4 px-3 rounded-xl my-4' >
                                        <p  className='text-xs font-Inter-Regular mt-1'>Their admin has reported that the fuel we sold to them is 20 litres over the quantity requested.</p>
                                        <p className='text-xs mt-3 font-Inter-Regular' >Kim 16/03 • 12:23</p>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-10 w-auto flex' >
                        <div style={{width: '345px', height: '198px'}} className={tab === 1 ? 'rounded-3xl border border-[#F88C3A] text-sm font-Inter-Regular bg-[#F8F9FA] py-3 px-4': 'rounded-3xl text-sm font-Inter-Regular bg-[#F8F9FA] py-3 px-4'} >
                            <button onClick={()=> ClickHandler(1, 'Hello, Thank you for sending your bargain. Please be notified that your bargain is accepted and we’d love to process your order immediately. Kindly reply this email to confirm that we can proceed with your order')} style={{height: '175px'}} className='overflow-y-auto text-left ' >
                                <p className='mt-2' >Hello,</p>
                                <p className='mt-2'>Thank you for sending your bargain.</p>
                                <p className='mt-2'>Please be notified that your bargain is accepted and we’d love to process your order immediately.</p>
                                <p className='mt-2'>Kindly reply this email to confirm that we can proceed with your order</p> 
                                {/* <p className='mt-2'>Please be notified that your bargain is accepted and we’d love to process your order immediately.</p>
                                <p className='mt-2'>Kindly reply this email to confirm that we can proceed with your order</p>  */}
                            </button>
                        </div>
                        <div className=' w-8/12 ml-4' >
                            <p className='font-Inter-SemiBold text-xl mb-3' >Auto messages</p>
                            <div className='grid grid-cols-3 gap-x-4  text-xs' >
                                <button onClick={()=> ClickHandler(2, 'Sorry, we cannot accept your offer at the moment. We can do 20% above your offer.')} className={tab === 2 ? 'p-4 bg-[#F8F9FA] rounded-2xl border border-[#F88C3A] text-left': 'text-left p-4 bg-[#F8F9FA] rounded-2xl '} >Sorry, we cannot accept your offer at the moment. We can do 20% above your offer. Sorry, we cannot accept your offer at the moment. We can do 20% above your offer</button>
                                <button onClick={()=> ClickHandler(3, 'Sorry, we cannot accept your offer at the moment. We can do 20% above your offer.')} className={tab === 3 ? 'p-4 bg-[#F8F9FA] rounded-2xl border border-[#F88C3A] text-left': 'p-4 text-left bg-[#F8F9FA] rounded-2xl '}>Sorry, we cannot accept your offer at the moment. We can do 20% above your offer. Sorry, we cannot accept your offer at the moment. We can do 20% above your offer</button>
                                <button onClick={()=> ClickHandler(4, 'Sorry, we cannot accept your offer at the moment. We can do 20% above your offer.')} className={tab === 4 ? 'p-4 bg-[#F8F9FA] rounded-2xl border border-[#F88C3A] text-left': 'p-4 text-left bg-[#F8F9FA] rounded-2xl '}>Sorry, we cannot accept your offer at the moment. We can do 20% above your offer. Sorry, we cannot accept your offer at the moment. We can do 20% above your offer</button>
                            </div>
                        </div>
                    </div>
                    <a target="_blank" href={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+data.data.bargain.email+"&su="+Subject+"&body="+text} className={tab !==0 ? 'font-Inter-SemiBold flex justify-center items-center text-sm h-10 text-white rounded-lg w-44 bg-[#F88C3A]':' h-10 hidden justify-center items-center text-sm font-Inter-SemiBold text-[#ACB5BD] rounded-md  bg-[#DDE2E5] w-44'} >Send email</a>
                </div>
            )} 

            {deleteModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <div className='w-80 rounded-lg flex flex-col justify-center items-center bg-white p-8' >
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="#ff0000"/>
                                    <path d="M9 9H11V17H9V9Z" fill="#ff0000"/>
                                    <path d="M13 9H15V17H13V9Z" fill="#ff0000"/>
                                </svg>
                                <p className=' font-Inter-Medium text-sm mt-3 text-black text-center' >Do You Want To Delete This Product?</p>
                                <div className='flex mt-8' >
                                    <button onClick={()=> setDeleteModal(false) } className=' bg-gray-400 text-white py-2 rounded mr-1 px-6 font-Inter-Bold text-sm' >Cancel</button>
                                    <button  onClick={()=> DeleteHandler()} className=' bg-[#ff0000] text-white py-2 rounded ml-1 px-6 font-Inter-Bold text-sm' >Delete</button>
                                </div> 
                                {/* <button onClick={()=> DeleteHandler(item._id)} ></button> */}
                            </div>
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
}
