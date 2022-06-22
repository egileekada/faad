import { Input } from '@chakra-ui/react'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../components/context/UserContext'
import Activity from '../components/reportComponent/Activity'
import Permission from '../components/reportComponent/Permission'
import SalesInfo from '../components/reportComponent/SalesInfo'
import StockInfo from '../components/reportComponent/StockInfo'
import Summary from '../components/reportComponent/Summary'

export default function ReportTab() {

    const [tab, setTab] = React.useState(0)
    const [subTab, setSubTab] = React.useState(0) 
    const [month, setMonth] = React.useState('') 
    const userContext: IUser = React.useContext(UserContext);  

    React.useEffect(() => {  
        userContext.setTab('Report')
    },[]); 

    return (
        <div className='w-full h-full border-t border-l border-[#DDE2E5] px-8 bg-[#F8F9FA] py-8 overflow-y-auto' > 
            <div className='w-auto flex flex-col flex-1  ' >  
                <div className='w-full h-10 relative font-Inter-Regular ' >  
                    {subTab === 1 && tab === 0 && (
                        <div className='w-64 h-full ' >
                            <Input border='1px solid #DDE2E5' className='z-30' backgroundColor='white' placeholder='Search by Name' fontSize='sm' /> 
                        </div>  
                    )}
                    <div className='w-full flex items-center absolute justify-center inset-0' >
                        <div className='p-1 bg-[rgba(224,224,224,0.5)] rounded-xl flex' style={{boxShadow: 'inset 0px 1px 2px rgba(97, 97, 97, 0.2), inset 0px 2px 4px rgba(97, 97, 97, 0.2)'}}  >
                            <div onClick={()=> setTab(0)} className={tab === 0 ? 'w-32 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-32 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'} >
                                <svg className='mr-2' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.775 7C21.9242 7.65461 22 8.32542 22 9H13V0C13.6746 0 14.3454 0.0758356 15 0.225036C15.4923 0.337242 15.9754 0.490942 16.4442 0.685084C17.5361 1.13738 18.5282 1.80031 19.364 2.63604C20.1997 3.47177 20.8626 4.46392 21.3149 5.55585C21.5091 6.02455 21.6628 6.5077 21.775 7ZM19.7082 7C19.6397 6.77018 19.5593 6.54361 19.4672 6.32122C19.1154 5.47194 18.5998 4.70026 17.9497 4.05025C17.2997 3.40024 16.5281 2.88463 15.6788 2.53284C15.4564 2.44073 15.2298 2.36031 15 2.2918V7H19.7082Z" fill={tab === 0 ? '#F88C3A':"#ACB5BD"}/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 8.02944 4.02944 4 9 4C9.67458 4 10.3454 4.07584 11 4.22504V11H17.775C17.9242 11.6546 18 12.3254 18 13C18 17.9706 13.9706 22 9 22C4.02944 22 0 17.9706 0 13ZM15.8035 13H9V6.19648C5.24252 6.19648 2.19648 9.24252 2.19648 13C2.19648 16.7575 5.24252 19.8035 9 19.8035C12.7575 19.8035 15.8035 16.7575 15.8035 13Z" fill={tab === 0 ? '#F88C3A':"#ACB5BD"}/>
                                </svg>
                                Summary
                            </div>
                            <div  onClick={()=> setTab(1)} className={tab === 1 ? 'w-28 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-28 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'}  >
                                <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 5C11.4477 5 11 5.44772 11 6C11 6.55228 11.4477 7 12 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H12Z" fill={tab === 1 ? '#F88C3A':"#ACB5BD"}/>
                                    <path d="M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12Z" fill={tab === 1 ? '#F88C3A':"#ACB5BD"}/>
                                    <path d="M3 18C3 17.4477 3.44772 17 4 17H12C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19H4C3.44772 19 3 18.5523 3 18Z" fill={tab === 1 ? '#F88C3A':"#ACB5BD"}/>
                                </svg>
                                Activity
                            </div>
                            {/* <div  onClick={()=> setTab(2)} className={tab === 2 ? 'w-36 bg-white cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center' : 'w-36 cursor-pointer h-10 font-Inter-Regular rounded-xl flex justify-center items-center'}  >
                                <svg  className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.0367 10.0367H16.0367V16.0367H10.0367V14.0367H12.6225L7.29297 8.70713L8.70718 7.29292L14.0367 12.6225L14.0367 10.0367Z" fill={tab === 2 ? '#F88C3A':"#ACB5BD"}/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" fill={tab === 2 ? '#F88C3A':"#ACB5BD"}/>
                                </svg>
                                Permissions
                            </div> */}
                        </div>
                    </div>  
                </div> 
            </div> 
                <div className='w-full h-full mt-10' > 
                    <div className={tab === 0 ? 'flex' : 'hidden'} > 
                        {subTab === 0 && (
                            <div className='w-full' > 
                                <Summary tab={setSubTab} month={setMonth} />
                            </div>
                        )}
                        {subTab === 1 && (
                            <div className='w-full' > 
                                <SalesInfo tab={setSubTab} month={month} />
                            </div>
                        )}
                        {subTab === 2 && (
                            <div className='w-full' > 
                                <StockInfo tab={setSubTab} />
                            </div>
                        )}
                    </div> 
                    <div className={tab === 1 ? 'flex' : 'hidden'} >
                        <Activity />
                    </div>
                    <div className={tab === 2 ? 'flex' : 'hidden'} >
                        <Permission />
                    </div>
                </div>
        </div>
    )
} 