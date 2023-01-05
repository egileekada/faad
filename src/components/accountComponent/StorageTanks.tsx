import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import PageLoader from '../PageLoader'
import AddStorageTanks from './Modal/AddStorageTanks'
import CalibrateTank from './Modal/CalibrateTank'
import Alert from '../../assets/images/alert.png' 
import TopUpHistory from './components/TopUpHistory'

export default function StorageTanks() {

    const [showModal, setShowModal] = React.useState(false)
    const [showCalibrate, setShowCalibrate] = React.useState(false)
    const [showFill, setShowFill] = React.useState(false)
    const [tankId, setTankId] = React.useState('')
    const [reload, setReload] = React.useState('')
    const [tankDetail, setTankDetail] = React.useState({} as any) 

    const ClickCalibrate =(item: any)=> {
        setTankId(item._id)
        setTankDetail(item)
        setShowCalibrate(true)
    }

    const ClickFill =(item: any)=> {
        setTankId(item._id)
        setTankDetail(item) 
        console.log(item)
        setShowFill(true)
    } 

    const { isLoading, data, refetch } = useQuery('AllTank', () =>
        fetch('http://faad-env.eba-kfucwakm.eu-central-1.elasticbeanstalk.com/api/v1/tank', {
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

    return (
        <div className='w-full h-full flex flex-col rounded-2xl bg-white' >
            <div className='flex w-full p-10 items-center' >
                <p className='font-Inter-SemiBold text-2xl ' >Storage Tanks</p>
                <button onClick={()=> setShowModal(true)} className=' relative rounded w-36 flex justify-center items-center h-10 font-Inter-SemiBold ml-auto text-sm text-white bg-[#F88C3A]' >
                    <svg className='mr-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" fill="white"/>
                    </svg>
                    New Tanks
                </button>
            </div>
            <div className='w-full grid grid-cols-2 gap-x-4 pb-12 border-[#E0E0E0] border-b  gap-y-14 px-10 mt-8' >
                {!isLoading && (
                    <>
                        {data.data.tanks.map((item: any, index: any ) => { 
                            return(
                                <div key={index} className='w-full flex items-center' >
                                    <svg width="234" height="349" viewBox="0 0 234 349" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="2" width="230" height="345" rx="34" fill="white" stroke="#F1BD37" stroke-width="4"/>
                                        <rect x="12.8057" y="80.0337" width="209.857" height="259.206" rx="28" fill="url(#paint0_linear_658_16323)"/>
                                        <rect x="9.90234" y="290.051" width="215.662" height="10.8243" fill="#FF4747" stroke="white" stroke-width="3"/>
                                        <path d="M102.416 323.135H98.8068V312.953H102.446C103.47 312.953 104.352 313.157 105.091 313.565C105.83 313.969 106.398 314.551 106.796 315.31C107.197 316.069 107.398 316.977 107.398 318.034C107.398 319.095 107.197 320.006 106.796 320.769C106.398 321.531 105.827 322.116 105.081 322.524C104.339 322.931 103.45 323.135 102.416 323.135ZM100.96 321.291H102.327C102.963 321.291 103.498 321.178 103.933 320.953C104.37 320.724 104.698 320.371 104.917 319.894C105.139 319.413 105.25 318.793 105.25 318.034C105.25 317.282 105.139 316.667 104.917 316.19C104.698 315.713 104.372 315.361 103.938 315.136C103.503 314.911 102.968 314.798 102.332 314.798H100.96V321.291ZM109.023 323.135V315.499H111.14V323.135H109.023ZM110.087 314.515C109.772 314.515 109.502 314.41 109.276 314.201C109.054 313.989 108.943 313.736 108.943 313.441C108.943 313.149 109.054 312.899 109.276 312.69C109.502 312.478 109.772 312.372 110.087 312.372C110.401 312.372 110.67 312.478 110.892 312.69C111.117 312.899 111.23 313.149 111.23 313.441C111.23 313.736 111.117 313.989 110.892 314.201C110.67 314.41 110.401 314.515 110.087 314.515ZM112.907 323.135V315.499H114.96V316.831H115.04C115.179 316.357 115.413 315.999 115.741 315.757C116.069 315.512 116.447 315.39 116.874 315.39C116.98 315.39 117.095 315.396 117.217 315.409C117.34 315.423 117.448 315.441 117.541 315.464V317.343C117.441 317.314 117.304 317.287 117.128 317.264C116.952 317.241 116.792 317.229 116.646 317.229C116.334 317.229 116.056 317.297 115.81 317.433C115.569 317.565 115.376 317.751 115.234 317.99C115.095 318.228 115.025 318.503 115.025 318.815V323.135H112.907ZM123.15 315.499V317.09H118.551V315.499H123.15ZM119.595 313.669H121.713V320.789C121.713 320.984 121.743 321.137 121.803 321.246C121.863 321.352 121.945 321.427 122.051 321.47C122.161 321.513 122.287 321.534 122.429 321.534C122.529 321.534 122.628 321.526 122.728 321.51C122.827 321.49 122.903 321.475 122.956 321.465L123.289 323.041C123.183 323.074 123.034 323.112 122.842 323.155C122.65 323.202 122.416 323.23 122.141 323.24C121.631 323.26 121.183 323.192 120.799 323.036C120.417 322.88 120.121 322.638 119.909 322.31C119.697 321.982 119.592 321.568 119.595 321.067V313.669Z" fill="white"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_658_16323" x1="117.734" y1="80.0337" x2="117.734" y2="339.24" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.425" stop-color="#FFD56B"/>
                                        <stop offset="0.962133" stop-color="#AE7D00"/>
                                        </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className='ml-3' >
                                        <p className='font-Inter-SemiBold text-lg mb-4 text-[#ACB5BD]' >FAAD Oil</p>
                                        <p className='font-Inter-Bold mb-2 text-sm' >Product<span className='font-Inter-Regular ml-3' >{item.product === null ? '' :item.product.productName} ({item.product === null ? '' :item.product.productCode})</span></p>
                                        <p className='font-Inter-Bold mt-1 mb-2 text-sm' >Capacity<span className='font-Inter-Regular ml-3' >{item.capacity.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ℓ</span></p>
                                        <p className='font-Inter-Bold my-1 mb-2 text-sm' >Dirt<span className='font-Inter-Regular ml-3' >{item.dirt?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ℓ</span></p>
                                        <p className='font-Inter-Bold my-1 mb-2 text-sm' >Tank ID<span className='font-Inter-Regular ml-3' >{item.tankId}</span></p>
                                        <p className='font-Inter-Bold my-1 mb-2 text-sm' >Location<span className='font-Inter-Regular ml-3' >{item.location}</span></p>
                                        <p className='font-Inter-Bold my-1 mb-2 text-sm text-[#00BE00] ' >Level<span className='font-Inter-Regular ml-3' >{item.level?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ℓ</span></p>
                                        <p className='font-Inter-Bold my-1 mb-2 text-sm' >Avg Price<span className='font-Inter-Regular ml-3' >{item.avgPrice}/ℓ</span></p> 
                                        <div className='flex items-center mt-4' >
                                            <button onClick={()=> ClickFill(item) } className=' rounded px-3 flex justify-center items-center h-10 font-Inter-SemiBold text-sm text-white bg-[#F88C3A]' >Fill Tank</button>
                                            <button onClick={()=> ClickCalibrate(item) } className=' rounded px-3 flex justify-center items-center h-10 font-Inter-SemiBold text-sm ml-2 text-[#F88C3A] bg-white border border-[#F88C3A]' >Calibrate</button>
                                        </div>
                                    </div>
                                </div>
                            ) 
                        })} 
                    </>
                )}
            </div> 
            <TopUpHistory reload={reload} />
            {showModal ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <AddStorageTanks close={setShowModal} reload={refetch} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null}  
            
            {showFill ? 
                (
                    <>
                        <div className="h-full flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <CalibrateTank top={setReload} fill={true} name='Top Up' reload={refetch} values={tankDetail} close={setShowCalibrate} close2={setShowFill} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 

            {showCalibrate ? 
                (
                    <>
                        <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                            <CalibrateTank top={setReload} name='Calibrate' reload={refetch} values={tankDetail} close={setShowCalibrate} close2={setShowFill} />
                        </div> 
                        <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                    </>
                ) : null} 
        </div>
    )
} 
