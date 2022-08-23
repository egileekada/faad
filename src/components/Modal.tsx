import { motion } from 'framer-motion' 
import React from 'react'


export default function Modal(props: any) {

    const [modal, setModal] = React.useState(0)

    React.useEffect(() => {
        setModal(props.modal)
    }, [props.modal])    

    return (
        <> 
            {modal === 1 ? 
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-green-400 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className=' font-Ubuntu-Medium' >{props.message}</p>
                    </div>
                </motion.div>
            :null}
            {modal === 2 ?  
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="h-12 flex justify-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className=' w-full bg-red-500 px-4 py-2 flex justify-center items-center ' > 
                        <p style={{color: '#FFF', fontSize: '16px'}} className='font-Ubuntu-Bold' >{props.message}</p>
                    </div>
                </motion.div>
            :null}
        </>
    )
}
