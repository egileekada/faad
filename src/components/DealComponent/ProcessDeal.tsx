import { Checkbox } from '@chakra-ui/checkbox'
import { background, color } from '@chakra-ui/styled-system'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { IUser, UserContext } from '../context/UserContext'
import PageLoader from '../PageLoader'
import SuccessModal from '../SuccessModal'
import StepFive from './ProcessDealsComponent/StepFive'
import StepFour from './ProcessDealsComponent/StepFour'
import StepOne from './ProcessDealsComponent/StepOne'
import StepThree from './ProcessDealsComponent/StepThree'
import StepTwo from './ProcessDealsComponent/StepTwo'

export default function ProcessDeal(props: any) {

    const [tab, setTab] = React.useState(0)
    const navigate = useNavigate() 
    const userContext: IUser = React.useContext(UserContext); 

    const [showDetail, setShowDetail] = React.useState(false); 
    const [loading, setLoading] = React.useState(false); 
    const [processing, setProcessing] = React.useState(false); 
    const [loadingPage, setLoadingPage] = React.useState(true); 
    // const [clientInfo, setClientInfo] = React.useState({} as any); 
    const [truckInfo, setTruckInfo] = React.useState('');
    const [deliveryId, setDeliveryId] = React.useState('');
    const [tankInfo, setTankInfo] = React.useState([]as any);
    const [agentInfo, setAgentInfo] = React.useState(''); 
    const [truckName, setTruckName] = React.useState('');
    const [tankName, setTankName] = React.useState([]as any);
    const [agentName, setAgentName] = React.useState('');
    const [sealNumber, setSealNumber] = React.useState(''); 
    const [productID, setProductID] = React.useState(''); 
    const [dispatchQuatity, setDispatchQuatity] = React.useState('');
    const [driverInfo, setDriverInfo] = React.useState('');
    const [driverName, setDriverName] = React.useState(''); 
    const [modal, setModal] = React.useState(false); 
    const [inspectInfo, setInspectInfo] = React.useState({
        waterCheck: false,
        truckSealed: false
    });
    const [confirmedDeliveryInfo, setConfirmedDeliveryInfo] = React.useState({
        receivedDeliveryNote: false,
        receivedWaterNote: false,
    });    

    React.useEffect(() => {
        fetch(`https://obscure-oasis-95161.herokuapp.com/api/v1/delivery`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {       
            // console.log(data)
            if(data.status === 'success'){ 
                const t1 = setTimeout(() => {  
                    setLoadingPage(false) 
                    clearTimeout(t1);
                }, 2000); 
            }
            {data.data.delivery.map((item: any)=> {
                if(userContext.dealValue._id === item.deal._id){
                    setTab(3)
                    // setLoadingPage(false)
                    console.log(item)
                    setDeliveryId(item._id)
                    // setTab(2)
                    setShowDetail(true)
                    item.tanks.map((item: any, index: any) => {  
                        tankName.splice(index, 1, 'Tank Capacity: '+item.level+'ℓ');
                        tankInfo.splice(index, 1, item._id);
                        // setTankName([...tankName,'Tank Capacity: '+item.level+'ℓ'])
                        // setTankInfo([...tankInfo, item._id])  
                    }) 
                    setTruckName('Truck TruckID: '+item.truck.truckId)
                    setAgentInfo(item.agent._id)
                    setDriverInfo(item.driver._id)
                    setTruckInfo(item.truck._id)
                    setAgentName(item.agent.name)
                    setDriverName(item.driver.name)
                    setInspectInfo({
                        waterCheck: item.inspect.waterCheck,
                        truckSealed: item.inspect.truckSealed
                    })
                    setSealNumber(item.sealNumber)
                    setDispatchQuatity(item.dispatchQuantity)
                }
            })} 
        })
        .catch((error) => {
            console.error('Error:', error); 
        },);     
    },[] ) 
 
    const submit = async () => { 
        
        setLoading(true); 
        if(!showDetail){ 
            const request = await fetch(`https://obscure-oasis-95161.herokuapp.com/api/v1/delivery`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify({ 
                    dealId: userContext.dealValue._id,
                    tanks: tankInfo,
                    truckId: truckInfo,   
                    userId: userContext.userData._id,
                    productId: productID, 
                    sealNumber: sealNumber,
                    dispatchQuantity: dispatchQuatity,
                    inspect: {
                        waterCheck: inspectInfo.waterCheck,
                        truckSealed: inspectInfo.truckSealed
                    },
                    level: dispatchQuatity,
                    agentId: agentInfo,
                    driverId: driverInfo,
                    confirmedDelivery: {
                        receivedDeliveryNote: confirmedDeliveryInfo.receivedDeliveryNote,
                        receivedWaterNote: confirmedDeliveryInfo.receivedWaterNote,
                    }
                }),
            })

            const json = await request.json(); 

            if (request.status === 200) {     
                // alert('Sucessfull')
                setProcessing(true)
                const request = await fetch(`https://obscure-oasis-95161.herokuapp.com/api/v1/deals/${userContext.dealValue._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization : `Bearer ${localStorage.getItem('token')}` 
                        },
                        body: JSON.stringify({  
                            status: "accepted"
                        }),
                    }) 
                    if (request.status === 200) {  
                        const request = await fetch(`https://obscure-oasis-95161.herokuapp.com/api/v1/truck/${truckInfo}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization : `Bearer ${localStorage.getItem('token')}` 
                            },
                            body: JSON.stringify({  
                                status: "enroute"
                            }),
                        }) 
                        if (request.status === 200) { 
                            // alert('Truck Update')
                            setProcessing(false)
                            setModal(true)

                        }else {
                            alert(json.message);
                            console.log(json)
                            setLoading(false);
                        } 
                    }else {
                        alert(json.message);
                        console.log(json)
                        setLoading(false);
                    }  

                const t1 = setTimeout(() => { 
                    userContext.setDealTab(1)  
                    clearTimeout(t1);
                }, 2000); 
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            } 
        } else {
            setLoading(true); 
            const request = await fetch(`https://obscure-oasis-95161.herokuapp.com/api/v1/delivery/${deliveryId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify({ 
                    // dealId: userContext.dealValue._id,
                    // tank: tankInfo,
                    // truckId: truckInfo,
                    // sealNumber: sealNumber,
                    // dispatchQuantity: dispatchQuatity,
                    inspect: {
                        waterCheck: inspectInfo.waterCheck,
                        truckSealed: inspectInfo.truckSealed
                    },
                    agentId: agentInfo,
                    driverId: driverInfo,
                    confirmedDelivery: {
                        receivedDeliveryNote: confirmedDeliveryInfo.receivedDeliveryNote,
                        receivedWaterNote: confirmedDeliveryInfo.receivedWaterNote,
                    }
                }),
            })

            const json = await request.json(); 

            if (request.status === 200) {     
                // alert('Sucessfull')
                if(confirmedDeliveryInfo.receivedDeliveryNote){

                    const request = await fetch(`https://obscure-oasis-95161.herokuapp.com/api/v1/deals/${userContext.dealValue._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization : `Bearer ${localStorage.getItem('token')}` 
                        },
                        body: JSON.stringify({  
                            status: "completed"
                        }),
                    }) 
                    if (request.status === 200) {  
                        // alert('Deal Update')
                        const request = await fetch(`https://obscure-oasis-95161.herokuapp.com/api/v1/truck/${truckInfo}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization : `Bearer ${localStorage.getItem('token')}` 
                            },
                            body: JSON.stringify({  
                                status: "available"
                            }),
                        }) 
                        if (request.status === 200) { 
                            // alert('Truck Update')
                        }else {
                            alert(json.message);
                            console.log(json)
                            setLoading(false);
                        } 
                    }else {
                        alert(json.message);
                        console.log(json)
                        setLoading(false);
                    } 
                }  
                setTab(4)  
            }else {
                alert(json.message);
                console.log(json)
                setLoading(false);
            } 
        }
    } 

    const ClickHandler =(item: any)=> {
        if(tankInfo !== ''){ 
            setTab(item)
        }
        if(!inspectInfo.truckSealed){ 
            setTab(item)
        }

        setTab(item)
    }   
 


    if (loadingPage) return(
        <div className='w-full h-auto flex mt-2 justify-center  ' > 
            <PageLoader />
        </div>
    )     
     
    console.log(tankInfo);
        
    return (
        <div className='w-full h-full py-8' > 
            <SuccessModal close={modal} message='Deal Processed Successfull' />
            <svg onClick={()=> userContext.setDealTab(1)} className='cursor-pointer fixed z-50 top-14  ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3287 11.0001V13.0001L7.50042 13.0001L10.7429 16.2426L9.32873 17.6568L3.67188 12L9.32873 6.34314L10.7429 7.75735L7.50019 11.0001L20.3287 11.0001Z" fill="#495057"/>
            </svg>
            <div className='w-full flex ' >
                <div onClick={()=> ClickHandler(0)} style={{border: '1px solid #DDE2E5'}} className='w-full bg-white cursor-pointer ' >
                    <div className='w-full flex px-3 py-2 item-center' >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.8 12.014H0.799744L0.800256 12.0241C0.822255 12.4586 0.877381 12.8906 0.977669 13.3029L0.977665 13.3029L0.977974 13.3041C1.11242 13.8419 1.45575 14.6139 1.80732 15.0793C1.8285 15.108 1.85047 15.1387 1.87322 15.1705C1.9383 15.2616 2.00981 15.3616 2.08761 15.4481L2.08787 15.4484C2.65202 16.0728 3.12448 16.4964 3.93663 16.8717C4.68551 17.2205 5.28698 17.3914 6.12132 17.4144V19.4307H1.29025C1.21513 19.4307 1.14861 19.4578 1.1005 19.4844C1.04963 19.5125 1.00242 19.5495 0.962196 19.5893C0.921988 19.629 0.884078 19.6762 0.855092 19.7278C0.82741 19.7771 0.8 19.8445 0.8 19.921V21.4206C0.8 21.5229 0.820707 21.6188 0.867581 21.7034C0.914839 21.7886 0.982488 21.8511 1.05883 21.895C1.20387 21.9784 1.38349 21.9969 1.54288 21.9969H21.7532C21.9142 21.9969 22.0935 21.9766 22.2381 21.8924C22.4012 21.7975 22.496 21.6355 22.496 21.4206V19.921C22.496 19.8458 22.4689 19.7793 22.4423 19.7312C22.4142 19.6803 22.3773 19.6331 22.3375 19.5929C22.2978 19.5527 22.2506 19.5148 22.199 19.4858C22.1497 19.4581 22.0823 19.4307 22.0058 19.4307H17.1747V17.416C17.378 17.4135 17.5321 17.4058 17.6869 17.3859C17.8879 17.36 18.085 17.3143 18.3878 17.2393C18.8058 17.1375 19.3833 16.8985 19.7655 16.6681L19.7665 16.6675C20.1817 16.414 20.2773 16.3311 20.4162 16.2107C20.484 16.1519 20.5622 16.0842 20.6929 15.9832C21.195 15.5964 21.6446 14.9487 21.9678 14.2605C22.2913 13.5714 22.5014 12.8134 22.5014 12.1914V9.53071C22.5014 8.7477 22.2304 7.98119 21.996 7.44131C21.621 6.57014 20.9173 5.77634 20.0748 5.20058C19.2323 4.62485 18.2356 4.25665 17.265 4.25665H9.73234C9.73411 4.16803 9.73674 4.08404 9.73927 4.00354C9.74113 3.94401 9.74294 3.88639 9.74429 3.83022C9.74864 3.6498 9.74856 3.47917 9.72319 3.3349C9.69733 3.1878 9.64063 3.04089 9.50972 2.93662C9.38164 2.8346 9.21555 2.8 9.03036 2.8H6.45033C6.27947 2.8 6.10571 2.83744 5.97 2.94127C5.82619 3.05131 5.75044 3.21666 5.75044 3.41388V4.25803C4.92955 4.31251 4.0766 4.68682 3.48044 5.03034C2.74606 5.45086 1.95567 6.23487 1.54463 6.98938L1.54459 6.98936L1.54262 6.99317C1.51524 7.0461 1.48961 7.09045 1.46266 7.13708C1.4523 7.15501 1.44175 7.17327 1.43082 7.19249C1.3927 7.25957 1.35376 7.33222 1.31911 7.42043L1.31503 7.43052C1.05955 8.06386 0.8 8.7073 0.8 9.52534V12.014ZM3.14521 6.72232L3.14522 6.72233L3.14632 6.72122C3.18116 6.68639 3.21209 6.65445 3.24115 6.62445C3.30595 6.55755 3.36144 6.50026 3.43006 6.44193L3.43069 6.4414C3.51707 6.36736 3.60962 6.30054 3.70826 6.22934C3.72953 6.21398 3.75108 6.19842 3.77292 6.18254L3.77293 6.18256L3.77529 6.18079C3.8625 6.11538 3.93847 6.06798 4.02778 6.01225C4.06229 5.99072 4.09878 5.96795 4.13869 5.94242C4.22771 5.88642 4.29538 5.85692 4.38662 5.81715C4.42946 5.79847 4.47749 5.77753 4.53537 5.75052L4.53538 5.75053L4.5374 5.74956C5.05288 5.50193 5.73681 5.3554 6.53095 5.3554H13.0606H13.0617L17.3487 5.40378H17.351C17.6587 5.40378 17.9793 5.48245 18.2403 5.56591C18.2779 5.57844 18.3162 5.59071 18.3547 5.60303C18.4593 5.63653 18.5649 5.67033 18.6598 5.71048L18.6603 5.71068C19.5654 6.09083 20.2461 6.66895 20.7022 7.41755C21.1591 8.16751 21.3973 9.09993 21.3973 10.1972C21.3973 10.3663 21.3987 10.5324 21.4001 10.6958C21.409 11.7278 21.417 12.6539 21.0569 13.5521L21.0566 13.5528C20.8409 14.0972 20.5013 14.6117 20.096 15.017C19.1596 15.9534 18.0069 16.3183 16.5662 16.3183H6.75133C5.26406 16.3183 4.06065 15.8551 3.22965 15.0318C2.39896 14.2087 1.92026 13.0058 1.92026 11.4872V11.3802L1.90406 11.3694C1.90399 11.3081 1.90386 11.2472 1.90374 11.1866C1.9001 9.42664 1.89705 7.95114 3.14521 6.72232ZM1.90951 20.8497V20.5402H21.3982C21.3999 20.5858 21.3979 20.6456 21.3946 20.7291L21.3941 20.742C21.3927 20.7753 21.3913 20.8113 21.3901 20.8497H1.90951ZM7.23083 19.4307V17.4171H16.0652V19.4307H7.23083ZM6.89758 3.94176H8.57773V4.25127H6.89758V3.94176Z" fill="#414141" stroke="#414141" stroke-width="0.4"/>
                            <path d="M7.74664 9.29126C7.73998 9.30033 7.73323 9.30961 7.72641 9.31908C7.6753 9.39005 7.62519 9.46426 7.58546 9.52312C7.57296 9.54164 7.56148 9.55864 7.55132 9.57354L7.55016 9.57523L7.55015 9.57523C7.42759 9.75108 7.33822 9.88255 7.22242 10.0667C7.20555 10.0939 7.1886 10.1211 7.17162 10.1484C6.96162 10.4853 6.74718 10.8294 6.63268 11.1764C6.51222 11.5414 6.51191 11.8807 6.73759 12.1993L7.74664 9.29126ZM7.74664 9.29126C7.78823 9.34491 7.8362 9.41018 7.88885 9.48501C8.0282 9.68303 8.19543 9.9409 8.35639 10.2115C8.51757 10.4824 8.67035 10.7626 8.78211 11.0057C8.83804 11.1273 8.88233 11.2367 8.91229 11.3292C8.94333 11.425 8.95447 11.4891 8.95447 11.5249C8.95447 12.6991 7.46121 13.2197 6.73764 12.1994L7.74664 9.29126ZM6.05965 13.1527L6.05963 13.1527L6.06214 13.1552L6.10514 13.1982L6.10511 13.1982L6.1081 13.2011C6.82208 13.8861 7.94031 14.1373 8.86418 13.5889L8.86437 13.5888C9.80389 13.0297 10.3376 12.0085 9.95091 10.8899C9.82747 10.5312 9.43028 9.77363 9.01094 9.11253C8.80002 8.78003 8.57799 8.46309 8.37546 8.227C8.27459 8.10941 8.17374 8.00616 8.07739 7.93063C7.98917 7.86147 7.87102 7.7881 7.74083 7.7881C7.44689 7.7881 7.28323 8.01239 7.2008 8.12535C7.19615 8.13172 7.19176 8.13774 7.18761 8.14335L7.18761 8.14335L7.18679 8.14447C7.10353 8.25877 7.02254 8.36698 6.94277 8.47356C6.72532 8.76409 6.51698 9.04244 6.2968 9.39873L6.29669 9.39892C6.17545 9.59559 5.95893 9.95032 5.77246 10.326C5.67921 10.5139 5.59177 10.7104 5.52727 10.8975C5.46374 11.0819 5.41768 11.2706 5.41768 11.4389C5.41768 12.1172 5.56936 12.6447 6.05965 13.1527Z" fill="#414141" stroke="#414141" stroke-width="0.4"/>
                        </svg>
                        <p className='font-Inter-SemiBold text-[rgb(65,65,65)] ml-2 mr-auto' >Step 1</p> 
                        {tankInfo === '' && truckInfo === '' && dispatchQuatity === '' && (
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM4 2H18C19.1046 2 20 2.89543 20 4V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2Z" fill="#DDE2E5"/>
                            </svg>
                        )}
                        {tankInfo !== '' && truckInfo !== '' && dispatchQuatity !== '' && (
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM4 2H18C19.1046 2 20 2.89543 20 4V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2Z" fill="#F88C3A"/>
                                <path d="M9.13133 16.202C8.93607 16.3973 8.61949 16.3973 8.42422 16.202L3.57453 11.3523C3.37975 11.1575 3.3792 10.8419 3.57328 10.6465L4.43534 9.77828C4.6304 9.58184 4.94794 9.58128 5.14369 9.77703L8.42422 13.0576C8.61949 13.2528 8.93607 13.2528 9.13133 13.0576L16.8563 5.33258C17.0521 5.13683 17.3696 5.13739 17.5647 5.33383L18.4267 6.20201C18.6208 6.39747 18.6202 6.71309 18.4255 6.90786L9.13133 16.202ZM18.7778 1H3.22222C1.98889 1 1 1.98889 1 3.22222V18.7778C1 19.3671 1.23413 19.9324 1.65087 20.3491C2.06762 20.7659 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7659 20.3491 20.3491C20.7659 19.9324 21 19.3671 21 18.7778V3.22222C21 1.98889 20 1 18.7778 1Z" fill="#F88C3A"/>
                            </svg>
                        )}
                    </div>
                    <div className={tab > -1 ? 'w-full h-2 bg-[#F88C3A]':'w-full h-2'} />
                </div>
                <div onClick={()=> ClickHandler(1)} style={{border: '1px solid #DDE2E5'}} className='w-full bg-white cursor-pointer ' >
                    <div className='w-full flex px-3 py-2 item-center checkbox' >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 16C19 15.4477 18.5523 15 18 15H10C9.44772 15 9 15.4477 9 16C9 16.5523 9.44772 17 10 17H18C18.5523 17 19 16.5523 19 16Z" fill="#414141"/>
                            <path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H14C14.5523 13 15 12.5523 15 12C15 11.4477 14.5523 11 14 11H6Z" fill="#414141"/>
                            <path d="M8 16C8 15.4477 7.55228 15 7 15H6C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17H7C7.55228 17 8 16.5523 8 16Z" fill="#414141"/>
                            <path d="M17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13H18C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11H17Z" fill="#414141"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 3C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H20ZM4 5H20C20.5523 5 21 5.44772 21 6V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V6C3 5.44771 3.44772 5 4 5Z" fill="#414141"/>
                        </svg>
                        <p className='font-Inter-SemiBold text-[#414141] ml-2 mr-auto' >Step 2</p> 
                        {!inspectInfo.truckSealed && !inspectInfo.waterCheck && sealNumber === '' && (
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM4 2H18C19.1046 2 20 2.89543 20 4V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2Z" fill="#DDE2E5"/>
                            </svg>
                        )}
                        {inspectInfo.truckSealed && inspectInfo.waterCheck && sealNumber !== '' && (
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM4 2H18C19.1046 2 20 2.89543 20 4V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2Z" fill="#F88C3A"/>
                                <path d="M9.13133 16.202C8.93607 16.3973 8.61949 16.3973 8.42422 16.202L3.57453 11.3523C3.37975 11.1575 3.3792 10.8419 3.57328 10.6465L4.43534 9.77828C4.6304 9.58184 4.94794 9.58128 5.14369 9.77703L8.42422 13.0576C8.61949 13.2528 8.93607 13.2528 9.13133 13.0576L16.8563 5.33258C17.0521 5.13683 17.3696 5.13739 17.5647 5.33383L18.4267 6.20201C18.6208 6.39747 18.6202 6.71309 18.4255 6.90786L9.13133 16.202ZM18.7778 1H3.22222C1.98889 1 1 1.98889 1 3.22222V18.7778C1 19.3671 1.23413 19.9324 1.65087 20.3491C2.06762 20.7659 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7659 20.3491 20.3491C20.7659 19.9324 21 19.3671 21 18.7778V3.22222C21 1.98889 20 1 18.7778 1Z" fill="#F88C3A"/>
                            </svg>
                        )}
                    </div>
                    <div className={tab >= 1 ? 'w-full h-2 bg-[#F88C3A]':'w-full h-2'} />
                </div>
                <div onClick={()=> ClickHandler(2)} style={{border: '1px solid #DDE2E5'}} className='w-full bg-white cursor-pointer ' >
                    <div className='w-full flex px-3 py-2 item-center checkbox' >
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 6.20914 4.79086 8 7 8C9.20914 8 11 6.20914 11 4C11 1.79086 9.20914 0 7 0C4.79086 0 3 1.79086 3 4ZM5 4C5 5.10457 5.89543 6 7 6C8.10457 6 9 5.10457 9 4C9 2.89543 8.10457 2 7 2C5.89543 2 5 2.89543 5 4Z" fill="#414141"/>
                            <path d="M2 12C2 11.4477 2.44772 11 3 11H11C11.5523 11 12 11.4477 12 12V18H14V12C14 10.3431 12.6569 9 11 9H3C1.34315 9 0 10.3431 0 12V18H2V12Z" fill="#414141"/>
                        </svg>
                        <p className='font-Inter-SemiBold text-[#414141] ml-2 mr-auto' >Step 3</p> 
                        {agentInfo === '' && driverInfo === '' && (
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM4 2H18C19.1046 2 20 2.89543 20 4V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2Z" fill="#DDE2E5"/>
                            </svg>
                        )}
                        {agentInfo !== '' && driverInfo !== '' && (
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM4 2H18C19.1046 2 20 2.89543 20 4V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2Z" fill="#F88C3A"/>
                                <path d="M9.13133 16.202C8.93607 16.3973 8.61949 16.3973 8.42422 16.202L3.57453 11.3523C3.37975 11.1575 3.3792 10.8419 3.57328 10.6465L4.43534 9.77828C4.6304 9.58184 4.94794 9.58128 5.14369 9.77703L8.42422 13.0576C8.61949 13.2528 8.93607 13.2528 9.13133 13.0576L16.8563 5.33258C17.0521 5.13683 17.3696 5.13739 17.5647 5.33383L18.4267 6.20201C18.6208 6.39747 18.6202 6.71309 18.4255 6.90786L9.13133 16.202ZM18.7778 1H3.22222C1.98889 1 1 1.98889 1 3.22222V18.7778C1 19.3671 1.23413 19.9324 1.65087 20.3491C2.06762 20.7659 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7659 20.3491 20.3491C20.7659 19.9324 21 19.3671 21 18.7778V3.22222C21 1.98889 20 1 18.7778 1Z" fill="#F88C3A"/>
                            </svg>
                        )}
                    </div>
                    <div className={tab >= 2 ? 'w-full h-2 bg-[#F88C3A]':'w-full h-2'} />
                </div>
                <div style={{border: '1px solid #DDE2E5'}} className='w-full bg-white cursor-pointer ' >
                    <div className='w-full flex px-3 py-2 item-center checkbox' >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18ZM8.22 15C7.67 14.39 6.89 14 6 14C5.11 14 4.33 14.39 3.78 15H3V6H15V15H8.22ZM18 18C17.45 18 17 17.55 17 17C17 16.45 17.45 16 18 16C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18Z" fill="#ACB5BD"/>
                        </svg>
                        <p className='font-Inter-SemiBold text-[#414141] ml-2 mr-auto' >Step 4</p> 
                        {tab <= 3 && (
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM4 2H18C19.1046 2 20 2.89543 20 4V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2Z" fill="#DDE2E5"/>
                            </svg>
                        )}
                        {tab > 3 && (
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM4 2H18C19.1046 2 20 2.89543 20 4V18C20 19.1046 19.1046 20 18 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2Z" fill="#F88C3A"/>
                                <path d="M9.13133 16.202C8.93607 16.3973 8.61949 16.3973 8.42422 16.202L3.57453 11.3523C3.37975 11.1575 3.3792 10.8419 3.57328 10.6465L4.43534 9.77828C4.6304 9.58184 4.94794 9.58128 5.14369 9.77703L8.42422 13.0576C8.61949 13.2528 8.93607 13.2528 9.13133 13.0576L16.8563 5.33258C17.0521 5.13683 17.3696 5.13739 17.5647 5.33383L18.4267 6.20201C18.6208 6.39747 18.6202 6.71309 18.4255 6.90786L9.13133 16.202ZM18.7778 1H3.22222C1.98889 1 1 1.98889 1 3.22222V18.7778C1 19.3671 1.23413 19.9324 1.65087 20.3491C2.06762 20.7659 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7659 20.3491 20.3491C20.7659 19.9324 21 19.3671 21 18.7778V3.22222C21 1.98889 20 1 18.7778 1Z" fill="#F88C3A"/>
                            </svg>
                        )}
                    </div>
                    <div className={tab >= 3 ? 'w-full h-2 bg-[#F88C3A]':'w-full h-2'} />
                </div>
            </div> 
            <div className='w-full mt-8 relative' >
                <div className={tab === 0 ? 'w-full ' : 'hidden'} >
                    <StepOne show={showDetail} truckId={truckInfo} tankId={tankInfo} dispatch={dispatchQuatity} truckName={truckName} tankName={tankName} values={userContext.dealValue} dispatchquatity={setDispatchQuatity} tank={setTankInfo} truck={setTruckInfo} product={setProductID} click={ClickHandler} />
                </div>
                <div className={tab === 1 ? 'w-full ' : 'hidden'} >
                    <StepTwo sealNumber={setSealNumber} seal={sealNumber} show={showDetail} inspectDefault={inspectInfo} inspect={setInspectInfo} click={setTab} values={userContext.dealValue} />
                </div>
                <div className={tab === 2 ? 'w-full ' : 'hidden'} >
                    <StepThree show={showDetail} agentName={agentName} driverId={driverInfo} agentId={agentInfo} driverName={driverName} truck={truckInfo} dispatch={dispatchQuatity} values={userContext.dealValue} loading={loading} submit={submit} agent={setAgentInfo} driver={setDriverInfo} click={setTab} />
                </div>
                <div className={tab === 3 ? 'w-full ' : 'hidden'} >
                    <StepFour deliveryDefault={confirmedDeliveryInfo} delivery={setConfirmedDeliveryInfo} submit={submit}  loading={loading}/>
                </div>
                {/* <div className={tab === 4 ? 'w-full ' : 'hidden'} > */}
                    
                    {tab === 4 && (
                        <StepFive />
                    )}
            </div>

            {processing ?  
                <div className='fixed w-full h-full flex z-50 justify-center top-0 left-0 items-center' >
                    <div className='w-64 bg-[#000000A6] py-8 flex justify-center items-center flex-col rounded-xl ' > 
                        <svg  className='animate-spin'width='140px' height='140px'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path fill='#F88C3A' d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4-6-2.7-13.3-1.6-18.3 2.6-4.8 4-7 10.5-5.6 16.6 1.3 6 6 10.9 11.9 12.5 7.1 2 13.6-1.4 17.6-7.2-3.6 4.8-9.1 8-15.2 6.9-6.1-1.1-11.1-5.7-12.5-11.7-1.5-6.4 1.5-13.1 7.2-16.4 5.9-3.4 14.2-2.1 18.1 3.7 1 1.4 1.7 3.1 2 4.8.3 1.4.2 2.9.4 4.3.2 1.3 1.3 3 2.8 2.1 1.3-.8 1.2-2.5 1.1-3.8 0-.4.1.7 0 0z"/>
                        </svg>
                        <p className='font-Inter-Bold text-white mt-6 w-56 text-center  ' >Processing Deal...</p>
                    </div>
                </div>
            :null}
        </div>
    )
} 
