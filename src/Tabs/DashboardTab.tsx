import React from 'react'
import { useQuery } from 'react-query'
import { IUser, UserContext } from '../components/context/UserContext';
import DealsDetail from '../components/dashboardComponent/DealsDetail'
import ProductDetails from '../components/dashboardComponent/ProductDetails'

export default function DashboardTab() { 
    
    const userContext: IUser = React.useContext(UserContext);  
    React.useEffect(() => {  
        userContext.setTab('Dashboard')
    },[]); 

    return (
        <div className='w-full h-full px-8 py-8 overflow-y-auto'> 
            <div className='w-full h-auto px-8 pt-8 mb-10 flex'>
                <div className=' w-3/5 ' >
                    <ProductDetails />
                    <DealsDetail />
                    <div className='w-full flex text-white' >
                        <div className='w-full mr-5 bg-[#495057] p-6 rounded-3xl ' > 
                            <div className=' w-full flex items-center' >
                                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8649 6.13321C13.8636 4.66045 12.6686 3.46765 11.1958 3.46901L0.529136 3.47886L0.526672 0.812196L11.1933 0.80234C14.1389 0.79962 16.5289 3.18523 16.5316 6.13075L16.5443 19.8717L21.586 14.8207L23.4733 16.7046L14.9959 25.1977L6.50276 16.7202L8.38664 14.8329L13.878 20.3141L13.8649 6.13321Z" fill="#F88C3A"/>
                                </svg> 
                                <p className='font-Inter-SemiBold ml-3' >Orders</p>
                                <p className='font-Inter-Regular text-xs cursor-pointer ml-auto' >see all</p>
                            </div>
                            <div className='w-full mt-4 pl-6 pr-2' >
                                <p className='font-Inter-SemiBold text-sm' >Genesis Restaurant</p>
                                <p style={{marginTop: '2px'}} className='font-Inter-Regular text-xs' >AGO • 16,000 ℓ</p>
                                <p style={{marginTop: '2px'}} className='font-Inter-Regular text-xs' >Mandela car wash, GRA, Port...</p>
                            </div>
                            <div className='w-full mt-4 pl-6 pr-2' >
                                <p className='font-Inter-SemiBold text-sm' >Genesis Restaurant</p>
                                <p style={{marginTop: '2px'}} className='font-Inter-Regular text-xs' >AGO • 16,000 ℓ</p>
                                <p style={{marginTop: '2px'}} className='font-Inter-Regular text-xs' >Mandela car wash, GRA, Port...</p>
                            </div>
                        </div>
                        <div className='w-full h-full bg-[#F88C3A] p-6 rounded-3xl ' >
                            <div className=' w-full flex items-center' >
                                <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 6.99999C6 6.26362 6.59695 5.66666 7.33333 5.66666H20.6667C21.403 5.66666 22 6.26362 22 6.99999C22 7.73637 21.403 8.33333 20.6667 8.33333H7.33333C6.59695 8.33333 6 7.73637 6 6.99999Z" fill="#FEE8D8"/>
                                    <path d="M6 12.3333C6 11.5969 6.59695 11 7.33333 11H20.6667C21.403 11 22 11.5969 22 12.3333C22 13.0697 21.403 13.6667 20.6667 13.6667H7.33333C6.59695 13.6667 6 13.0697 6 12.3333Z" fill="#FEE8D8"/>
                                    <path d="M7.33333 16.3333C6.59695 16.3333 6 16.9303 6 17.6667C6 18.403 6.59695 19 7.33333 19H20.6667C21.403 19 22 18.403 22 17.6667C22 16.9303 21.403 16.3333 20.6667 16.3333H7.33333Z" fill="#FEE8D8"/>
                                    <path d="M6 23C6 22.2636 6.59695 21.6667 7.33333 21.6667H12.6667C13.403 21.6667 14 22.2636 14 23C14 23.7364 13.403 24.3333 12.6667 24.3333H7.33333C6.59695 24.3333 6 23.7364 6 23Z" fill="#FEE8D8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666666 4.33333C0.666666 2.12419 2.45753 0.333328 4.66667 0.333328H23.3333C25.5425 0.333328 27.3333 2.12419 27.3333 4.33333V25.6667C27.3333 27.8758 25.5425 29.6667 23.3333 29.6667H4.66667C2.45753 29.6667 0.666666 27.8758 0.666666 25.6667V4.33333ZM4.66667 2.99999H23.3333C24.0697 2.99999 24.6667 3.59695 24.6667 4.33333V25.6667C24.6667 26.403 24.0697 27 23.3333 27H4.66667C3.93029 27 3.33333 26.403 3.33333 25.6667V4.33333C3.33333 3.59695 3.93029 2.99999 4.66667 2.99999Z" fill="#FEE8D8"/>
                                </svg>
                                <p className='font-Inter-SemiBold ml-3' >Orders</p> 
                            </div>
                            <div className='w-full mt-4 pl-6 pr-2' >
                                <p className='font-Inter-SemiBold text-sm' >Remember to call Total</p>
                                <p style={{marginTop: '2px'}} className='font-Inter-Regular text-xs' >Call Siki from Total by 3pm to tell them that they are owing us money and they should pay before we send thunder</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1 ml-8 mr-4' >
                    <div className='w-full bg-[#495057] rounded-3xl pt-12 pb-5 px-6' >
                        <div className='flex mb-6 items-center' > 
                            <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 2.99999V3.3865C17.522 4.5339 20.3333 8.1053 20.3333 12.3333V21.6667H21.6667V24.3333H0.333344V21.6667H1.66668V12.3333C1.66668 8.1053 4.47802 4.5339 8.33334 3.3865V2.99999C8.33334 1.52724 9.52725 0.333328 11 0.333328C12.4728 0.333328 13.6667 1.52724 13.6667 2.99999ZM4.33334 21.6667H17.6667V12.3333C17.6667 8.65143 14.6819 5.66666 11 5.66666C7.31811 5.66666 4.33334 8.65143 4.33334 12.3333V21.6667ZM13.6667 27V25.6667H8.33334V27C8.33334 28.4728 9.52725 29.6667 11 29.6667C12.4728 29.6667 13.6667 28.4728 13.6667 27Z" fill="#F88C3A"/>
                            </svg> 
                            <p className=' ml-2 font-Inter-SemiBold text-2xl text-white' >Alerts</p>
                        </div>
                        <div className='w-full text-white bg-[#5A6167] py-4 px-3 rounded-xl my-4' >
                            <div className='flex' >
                                <p className='font-Inter-Bold text-sm' >Olabanji is Bargaining</p>
                                <svg className='ml-auto' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2426 0.34314C10.6331 -0.0473839 11.2663 -0.0473839 11.6568 0.34314C12.0474 0.733665 12.0474 1.36683 11.6568 1.75735L1.75734 11.6568C1.36681 12.0474 0.733649 12.0474 0.343125 11.6568C-0.047399 11.2663 -0.0473993 10.6332 0.343125 10.2426L10.2426 0.34314Z" fill="#DDE2E5"/>
                                    <path d="M3.87866 3.87867C3.09761 4.65972 1.83128 4.65972 1.05023 3.87867C0.269183 3.09763 0.269184 1.8313 1.05023 1.05025C1.83128 0.269199 3.09761 0.269199 3.87866 1.05025C4.65971 1.8313 4.65971 3.09763 3.87866 3.87867Z" fill="#DDE2E5"/>
                                    <path d="M8.1213 10.9497C8.90235 11.7308 10.1687 11.7308 10.9497 10.9497C11.7308 10.1687 11.7308 8.90236 10.9497 8.12132C10.1687 7.34027 8.90235 7.34027 8.1213 8.12132C7.34025 8.90236 7.34025 10.1687 8.1213 10.9497Z" fill="#DDE2E5"/>
                                </svg>
                            </div>
                            <p  className='text-xs font-Inter-Regular mt-1'>Bidding for AGO at N290 for 2000 ℓ from Eagle Island, Port Harcourt.</p>
                        </div>
                        <div className='w-full text-white bg-[#5A6167] py-4 px-3 rounded-xl my-4' >
                            <div className='flex' >
                                <p className='font-Inter-Bold text-sm' >Kimora is Bargaining</p>
                                <svg className='ml-auto' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2426 0.34314C10.6331 -0.0473839 11.2663 -0.0473839 11.6568 0.34314C12.0474 0.733665 12.0474 1.36683 11.6568 1.75735L1.75734 11.6568C1.36681 12.0474 0.733649 12.0474 0.343125 11.6568C-0.047399 11.2663 -0.0473993 10.6332 0.343125 10.2426L10.2426 0.34314Z" fill="#DDE2E5"/>
                                    <path d="M3.87866 3.87867C3.09761 4.65972 1.83128 4.65972 1.05023 3.87867C0.269183 3.09763 0.269184 1.8313 1.05023 1.05025C1.83128 0.269199 3.09761 0.269199 3.87866 1.05025C4.65971 1.8313 4.65971 3.09763 3.87866 3.87867Z" fill="#DDE2E5"/>
                                    <path d="M8.1213 10.9497C8.90235 11.7308 10.1687 11.7308 10.9497 10.9497C11.7308 10.1687 11.7308 8.90236 10.9497 8.12132C10.1687 7.34027 8.90235 7.34027 8.1213 8.12132C7.34025 8.90236 7.34025 10.1687 8.1213 10.9497Z" fill="#DDE2E5"/>
                                </svg>
                            </div>
                            <p  className='text-xs font-Inter-Regular mt-1'>Bidding for PMS at N130 for 6500 ℓ from Transamadi, Port Harcourt.</p>
                        </div>
                        <div style={{height: '1px'}} className='w-full bg-[#E0E0E0] ' />
                        <div className='w-full text-white bg-[#5A6167] py-4 px-3 rounded-xl my-4' >
                            <div className='flex items-center' >
                                <svg className='mr-2' width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18.5C0 18.7761 0.223858 19 0.5 19H0.792893C0.925501 19 1.05268 18.9473 1.14645 18.8536L4.85355 15.1464C4.94732 15.0527 5.0745 15 5.20711 15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM18 13H4.20711C4.0745 13 3.94732 13.0527 3.85355 13.1464L2.85355 14.1464C2.53857 14.4614 2 14.2383 2 13.7929V2.5C2 2.22386 2.22386 2 2.5 2H18" fill="#F88C3A"/>
                                </svg>
                                <p className='font-Inter-Bold text-sm' >Message from Kimora <span className='font-Inter-Regular text-[#F88C3A] ' >NOW</span></p>
                                <svg className='ml-auto cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.2253 0.811082C1.83477 0.420557 1.20161 0.420557 0.811082 0.811082C0.420557 1.20161 0.420557 1.83477 0.811082 2.2253L6.58582 8.00003L0.811141 13.7747C0.420617 14.1652 0.420617 14.7984 0.811141 15.1889C1.20167 15.5794 1.83483 15.5794 2.22535 15.1889L8.00003 9.41424L13.7747 15.1889C14.1652 15.5794 14.7984 15.5794 15.1889 15.1889C15.5794 14.7984 15.5794 14.1652 15.1889 13.7747L9.41424 8.00003L15.189 2.2253C15.5795 1.83477 15.5795 1.20161 15.189 0.811082C14.7985 0.420557 14.1653 0.420557 13.7748 0.811082L8.00003 6.58582L2.2253 0.811082Z" fill="#ACB5BD"/>
                                </svg>
                            </div>
                            <p  className='text-xs font-Inter-Regular mt-1'>Please confirm 195/litre for Total and let the other guys know that our trucks are busy till next Tuesday</p>
                        </div>
                        <div className='w-full text-white bg-[#5A6167] py-4 px-3 rounded-xl my-4' >
                            <div className='flex items-center' >
                                <svg className='mr-2' width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18.5C0 18.7761 0.223858 19 0.5 19H0.792893C0.925501 19 1.05268 18.9473 1.14645 18.8536L4.85355 15.1464C4.94732 15.0527 5.0745 15 5.20711 15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM18 13H4.20711C4.0745 13 3.94732 13.0527 3.85355 13.1464L2.85355 14.1464C2.53857 14.4614 2 14.2383 2 13.7929V2.5C2 2.22386 2.22386 2 2.5 2H18" fill="#F88C3A"/>
                                </svg>
                                <p className='font-Inter-Bold text-sm' >Message from Kimora <span className='font-Inter-Regular text-[#F88C3A] ' >NOW</span></p>
                                <svg className='ml-auto cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.2253 0.811082C1.83477 0.420557 1.20161 0.420557 0.811082 0.811082C0.420557 1.20161 0.420557 1.83477 0.811082 2.2253L6.58582 8.00003L0.811141 13.7747C0.420617 14.1652 0.420617 14.7984 0.811141 15.1889C1.20167 15.5794 1.83483 15.5794 2.22535 15.1889L8.00003 9.41424L13.7747 15.1889C14.1652 15.5794 14.7984 15.5794 15.1889 15.1889C15.5794 14.7984 15.5794 14.1652 15.1889 13.7747L9.41424 8.00003L15.189 2.2253C15.5795 1.83477 15.5795 1.20161 15.189 0.811082C14.7985 0.420557 14.1653 0.420557 13.7748 0.811082L8.00003 6.58582L2.2253 0.811082Z" fill="#ACB5BD"/>
                                </svg>
                            </div>
                            <p  className='text-xs font-Inter-Regular mt-1'>Please confirm 195/litre for Total and let the other guys know that our trucks are busy till next Tuesday</p>
                        </div>
                        <div className='w-full text-white bg-[#5A6167] py-4 px-3 rounded-xl my-4' >
                            <div className='flex items-center' >
                                <svg className='mr-2' width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18.5C0 18.7761 0.223858 19 0.5 19H0.792893C0.925501 19 1.05268 18.9473 1.14645 18.8536L4.85355 15.1464C4.94732 15.0527 5.0745 15 5.20711 15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0ZM18 13H4.20711C4.0745 13 3.94732 13.0527 3.85355 13.1464L2.85355 14.1464C2.53857 14.4614 2 14.2383 2 13.7929V2.5C2 2.22386 2.22386 2 2.5 2H18" fill="#F88C3A"/>
                                </svg>
                                <p className='font-Inter-Bold text-sm' >Message from Kimora <span className='font-Inter-Regular text-[#F88C3A] ' >NOW</span></p>
                                <svg className='ml-auto cursor-pointer' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.2253 0.811082C1.83477 0.420557 1.20161 0.420557 0.811082 0.811082C0.420557 1.20161 0.420557 1.83477 0.811082 2.2253L6.58582 8.00003L0.811141 13.7747C0.420617 14.1652 0.420617 14.7984 0.811141 15.1889C1.20167 15.5794 1.83483 15.5794 2.22535 15.1889L8.00003 9.41424L13.7747 15.1889C14.1652 15.5794 14.7984 15.5794 15.1889 15.1889C15.5794 14.7984 15.5794 14.1652 15.1889 13.7747L9.41424 8.00003L15.189 2.2253C15.5795 1.83477 15.5795 1.20161 15.189 0.811082C14.7985 0.420557 14.1653 0.420557 13.7748 0.811082L8.00003 6.58582L2.2253 0.811082Z" fill="#ACB5BD"/>
                                </svg>
                            </div>
                            <p  className='text-xs font-Inter-Regular mt-1'>Please confirm 195/litre for Total and let the other guys know that our trucks are busy till next Tuesday</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 