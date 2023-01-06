import { Input } from '@chakra-ui/input'
import React from 'react'
import { useQuery } from 'react-query'
import PageLoader from '../PageLoader'
import AddProduct from './Modal/AddProduct'
import ButtonLoader from '../ButtonLoader' 
import { IUser, UserContext } from '../context/UserContext'
import { BASEURL } from '../../assets/BasicUrl/Url'

export default function ProductAndPricing() {

    const [showModal, setShowModal] = React.useState(false)
    const [deleteModal, setDeleteModal] = React.useState(false)
    const [loading, setLoading] = React.useState(''); 
    const userContext: IUser = React.useContext(UserContext);  
    const [deleteId, setDeleteId] = React.useState(''); 
    const [newPrice, setNewPrice] = React.useState({
        index: '',
        value: ''
    })
    const [percentage, setPercentage] = React.useState({
        index: '',
        value: ''
    })

    React.useEffect(() => {  
        userContext.setTab('Accounts')
    },[]); 

    const { isLoading, data, refetch } = useQuery('AllProductAndPricing', () =>
        fetch(BASEURL.URL+'product', {
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

    // const DeleteTank=(index: any)=> {

    //     fetch(`${BASEURL.URL}tank`, {
    //         method: 'GET', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization : `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {        
    //         {data.data.tanks.map((item: any)=> {
    //             if(index === item.product._id){ 
    //                 console.log(item)
    //                 fetch(`${BASEURL.URL}tank/${item._id}`, {
    //                     method: 'DELETE',
    //                     headers: {
    //                         'Content-Type': 'application/json',
    //                         Authorization : `Bearer ${localStorage.getItem('token')}` 
    //                     }
    //                 });  
    //             } 
    //         })} 
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error); 
    //     },); 

    //     refetch()
    //     setDeleteModal(false)
    // }

    const DeleteHandler =async(index: any)=> {
        await fetch(`${BASEURL.URL}product/${index}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}` 
            }, 
        });

        refetch()
        setDeleteModal(false)
        // {DeleteTank(index)}
    }

    const UpdateHandler =async(item: any, perc: any )=> {
        setLoading(item)
        if(newPrice.value === ''){
            alert('Enter New Price')
            setLoading('')
        } else{ 
            await fetch(`${BASEURL.URL}product/${item}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify({ 
                    newPrice: Number(newPrice.value),
                    percentageDifference: percentage.value === '' ? perc :Number(percentage.value)
                }),
            });
            refetch()
            setLoading('')
            setNewPrice({} as any)
            setPercentage({} as any)
        }
        setLoading('')
        setNewPrice({} as any)
        setPercentage({} as any)
    }

    const ClickHandler =(item: any)=> {
        setDeleteModal(true)
        setDeleteId(item)
    }

    const OnChangeHandler =(item: any, ID: any, intial: any)=> {
        setNewPrice({
            index: ID,
            value: item
        })

        let percentage: any = ((item - intial) / intial) * 100

        setPercentage({
            index: ID,
            value: percentage.toFixed(2)
        })
    }

    return (
        <div className='w-full h-full bg-white rounded-2xl' >
            <div className='pb-14 border-b px-8 py-8  border-[#e0e0e0]' >
                {!isLoading && (
                    <>
                        {[...data.data.products].reverse().map((item: any, index: any)=> {
                            return(
                                <div key={index} className='w-full mb-4' >
                                    <p className='font-Inter-SemiBold text-xl ' >{item.productName} ({item.productCode})</p>
                                    <div className='w-full flex items-end mt-4' >
                                        <div className='w-full' >
                                            <p className='font-Inter-Regular text-sm mb-1' >Old</p>
                                            <Input fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' value={item.newPrice}  />
                                        </div>
                                        <div className='w-full ml-4' >
                                            <p className='font-Inter-Regular text-sm mb-1' >New</p>
                                            <Input value={newPrice.index === item._id ? newPrice.value : ''} onChange={(e)=> OnChangeHandler(e.target.value, item._id, item.newPrice)} fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                                        </div>
                                        <div className='w-full ml-10' >
                                            <p className='font-Inter-Regular text-sm mb-1' >Reset percentage</p>
                                            <Input value={percentage.index === item._id ? percentage.value : ''} className=' cursor-not-allowed' fontSize='sm' size='lg' border='1px solid #ACB5BD' backgroundColor='white' placeholder='000.00'  />
                                        </div>
                                        <button onClick={()=> UpdateHandler(item._id, item.percentageDifference)} disabled={loading === item._id ? true : false} className='font-Inter-SemiBold  ml-10 text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] ' >
                                            {loading === item._id && (
                                                <> 
                                                    <ButtonLoader size='30' />
                                                    <span className='ml-3'>Loading</span>
                                                </>
                                            )}
                                            {loading !== item._id && (
                                                <span className='mx-4'>Update</span>
                                            )} 
                                        </button>
                                        {/* <button onClick={()} className='font-Inter-SemiBold  ml-10 text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] ' >Update</button> */}
                                    </div>  
                                </div>
                            )
                        })}
                    </>
                )} 
            </div>
            <div className='pt-14 pb-10 px-10' > 
                <p className='font-Inter-SemiBold text-xl ' >Products</p>
                <div className='w-full grid grid-cols-2 gap-6 mt-6' >
                    {!isLoading && (
                        <>
                            {[...data.data.products].reverse().map((item: any)=> {
                                return(
                                    <div key={item._id} className=' rounded-xl bg-[#414141] text-white px-8 py-4  w-full' >
                                        <div className='flex' >
                                            <div className='' >
                                                <p className=' text-xs font-Inter-Bold w-full' >Product Code</p>
                                                <p className=' font-Inter-SemiBold ' >{item.productCode}</p>
                                            </div>
                                            <div className='mx-auto' >
                                                <p className=' text-xs font-Inter-Bold' >Product Name</p>
                                                <p className=' font-Inter-SemiBold ' >{item.productName}</p>
                                            </div>
                                            <div className='' >
                                                <p className=' text-xs font-Inter-Bold' >Discription</p>
                                                <p className=' text-xs font-Inter-Regular w-32 ' >{item.description}</p>
                                            </div>
                                        </div>
                                        <div className='flex mt-4' >
                                            <svg className=' cursor-pointer' onClick={()=> ClickHandler(item._id)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="white"/>
                                                <path d="M9 9H11V17H9V9Z" fill="white"/>
                                                <path d="M13 9H15V17H13V9Z" fill="white"/>
                                            </svg> 
                                            {/* <svg className='ml-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.73652C22.0976 3.12704 22.0976 3.76021 21.7071 4.15073L20.8348 5.02308C21.3675 6.13821 21.172 7.51427 20.2484 8.43791L9.64175 19.0445L3.9849 13.3877L14.5915 2.78106C15.5151 1.85742 16.8912 1.66195 18.0063 2.19466L18.8787 1.3223C19.2692 0.93178 19.9024 0.93178 20.2929 1.3223L21.7071 2.73652ZM13.1965 7.00451L6.81332 13.3877L9.64175 16.2161L16.0249 9.83294L13.1965 7.00451ZM15.0147 5.18624L16.0057 4.19527C16.3962 3.80475 17.0294 3.80475 17.4199 4.19527L18.8341 5.60948C19.2247 6.00001 19.2247 6.63317 18.8341 7.0237L17.8432 8.01466L15.0147 5.18624Z" fill="white"/>
                                                <path d="M1.04979 22L8.82835 19.8783L3.17111 14.2218L1.04979 22Z" fill="white"/>
                                            </svg> */}
                                        </div>

                                    </div>
                                )
                            })}
                        </>
                    )} 
                </div>

                <button onClick={()=> setShowModal(true)} className=' relative rounded w-36 flex justify-center items-center h-10 font-Inter-SemiBold mt-8 text-sm text-white bg-[#F88C3A]' >
                    <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="white"/>
                    </svg>
                    New product
                </button>
            </div> 
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <AddProduct close={setShowModal} reload={refetch} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}  


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
                                <p className=' font-Inter-Medium text-xs mt-1 text-gray-400 text-center'>Note: The Storage Tank Of This Product Will Be Deleted</p>
                                <div className='flex mt-8' >
                                    <button onClick={()=> setDeleteModal(false) } className=' bg-gray-400 text-white py-2 rounded mr-1 px-6 font-Inter-Bold text-sm' >Cancel</button>
                                    <button  onClick={()=> DeleteHandler(deleteId)} className=' bg-[#ff0000] text-white py-2 rounded ml-1 px-6 font-Inter-Bold text-sm' >Delete</button>
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
