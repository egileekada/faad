import React from 'react'

export default function OngoingDeals(props: any) {
    return (
        <div className='w-full py-6' >
            <div style={{border:'1px solid #F88C3A'}} className='w-full flex p-6 rounded-2xl bg-white ' >
                <div className='w-full flex flex-col mr-2' >
                    <p className='font-Inter-SemiBold text-lg text-[#F1BD37] ' >20,000 ℓ <span className=' text-[#414141] ml-2 ' >Schlumberger LTD</span></p>
                    <p className='font-Inter-Regular mt-1 text-sm' >16, Alaska street, East west road, Before the bridge, Port Harcourt. RIvers State</p>
                    <p className='font-Inter-Regular text-sm'>jesica@schlumbeger.com <span className='ml-2' >+2348133223322</span></p>
                    <div className='flex mt-10' >
                        <button className='border border-[#F66E09] font-Inter-Medium rounded py-2 text-sm text-[#F66E09] px-4 ' >Ask customer service</button>
                        <button onClick={()=> props.click(2)} className='ml-4 bg-[#F66E09] font-Inter-Medium rounded py-2 text-sm text-[#fff] px-4 ' >Process deal</button>
                    </div>
                </div>
                <div className='w-full flex flex-col ml-2' >
                    <div className='bg-[#DDE2E54D] rounded-2xl p-4  ' >
                        <p className='font-Inter-Bold text-sm text-[#414141]' >Dispatch Note</p>
                        <p className='font-Inter-Regular mt-1 text-sm text-[#414141]' >The density has to be 0.85 kg/l. Dont make it like friedrice so it can stay in the fridge for long. We also like chocolate toppings. Add some stew.</p>
                    </div>
                        <p className='font-Inter-Regular ml-auto mt-auto text-sm text-[#414141]' >12 - 01 - 2020 • 5:30 <span className='ml-2' >Created by Kimora</span><span className='ml-2 font-Inter-Bold' >FA2343-B3</span></p>
                </div>
            </div>
        </div >
    )
} 