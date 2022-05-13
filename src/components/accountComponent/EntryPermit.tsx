import { Input } from '@chakra-ui/input'
import { Select } from '@chakra-ui/select'
import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/table'
import React from 'react'
import PrintButton from './components/PrintButton'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { motion } from 'framer-motion'

export default function EntryPermit() {
 
    const dataall = [
        { 
            vendor: 'NNPC',
            agent: 'AGO', 
            truck: 'ABJ 123 DC',  
            reprint: 'Reprint last entry permit',   
        }, 
        { 
            vendor: 'NNPC',
            agent: 'AGO', 
            truck: 'ABJ 123 DC',  
            reprint: 'Reprint last entry permit',   
        }, 
        { 
            vendor: 'NNPC',
            agent: 'AGO', 
            truck: 'ABJ 123 DC',  
            reprint: 'Reprint last entry permit',   
        }, 
        { 
            vendor: 'NNPC',
            agent: 'AGO', 
            truck: 'ABJ 123 DC',  
            reprint: 'Reprint last entry permit',   
        }, 
        { 
            vendor: 'NNPC',
            agent: 'AGO', 
            truck: 'ABJ 123 DC',  
            reprint: 'Reprint last entry permit',   
        }, 
    ]

    const [show, setShow] = React.useState(false)


    const loginSchema = yup.object({ 
        date: yup.string().required('Required'),
        fuel: yup.string().required('Required'),
        vendor: yup.string().required('Required'),   
        truck: yup.string().required('Required'),   
        agent: yup.string().required('Required'),   
        driver: yup.string().required('Required')   
    })    
    // {
    //     date: { type: Date },
    //     fuel: { type: productId },
    //     vendor: { type: vendorId },
    //     truck: { type: truckId},
    //     agent: { type: distributorid },
    //     driver: { type: distributorid }
    // }
    // formik
    const formik = useFormik({
        initialValues: {
            date: '',
            fuel: '',
            vendor: '', 
            truck: '',
            agent: '',
            driver: ''
        },
        validationSchema: loginSchema,
        onSubmit: () => {},
    });
 
    const submit = async () => { 
        if (!formik.dirty) {
          alert('You have to fill in the form to continue'); 
          return;
        }
        else if (!formik.isValid) {
          alert('You have to fill in the form correctly to continue'); 
          return;
        }
        else {
            setShow(true)
        }
    }   

    return (
        <div className='w-full h-full bg-white rounded-2xl' >
            <div className='pb-14 border-b px-8 py-8  border-[#e0e0e0]' > 
                <p className='font-Inter-SemiBold text-xl ' >Print entry permit</p>
                <div className='flex w-full mt-6' >
                    <div className='w-full pr-8' >
                        <div className='flex mb-6 items-center w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4' >Date</p>
                            <div className='w-full' >
                                <Input 
                                    name="date"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("date", true, true)
                                    }  
                                    size='lg' fontSize='sm' border='1px solid #ACB5BD' backgroundColor='white' type='datetime-local' />
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.date && formik.errors.date && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.date}
                                        </motion.p>
                                    )}
                                </div> 
                            </div>
                        </div>
                        <div className='flex mb-6 items-center w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4' >Vendor </p>
                            <div className='w-full' >
                                <Input  
                                    name="vendor"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("vendor", true, true)
                                    }  
                                    size='lg' fontSize='sm' border='1px solid #ACB5BD' backgroundColor='white' placeholder='Enter Name' />
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.vendor && formik.errors.vendor && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.vendor}
                                        </motion.p>
                                    )}
                                </div> 
                            </div>
                        </div>
                        <div className='flex mb-6 items-center w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4' >Agent name</p>
                            <div className='w-full' >
                                <Input  
                                    name="agent"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("agent", true, true)
                                    }  
                                    size='lg' fontSize='sm' border='1px solid #ACB5BD' backgroundColor='white' placeholder='Enter Name' />
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.agent && formik.errors.agent && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.agent}
                                        </motion.p>
                                    )}
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className='w-full ml-4' >
                        <div className='flex items-center mb-6 w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4 ' >Fuel</p>
                            <div className='w-full' >
                                <Select  
                                    name="fuel"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("fuel", true, true)
                                    }  
                                    size='lg' fontSize='sm' border='1px solid #ACB5BD' backgroundColor='white' placeholder='Select Fuel Type'>
                                    <option>AGO</option>
                                </Select>
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.fuel && formik.errors.fuel && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.fuel}
                                        </motion.p>
                                    )}
                                </div> 
                            </div>
                        </div>
                        <div className='flex mb-6 items-center w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4' >Truck Number</p>
                            <div className='w-full' >
                                <Input  
                                    name="truck"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("truck", true, true)
                                    }  
                                    size='lg' fontSize='sm' border='1px solid #ACB5BD' backgroundColor='white' placeholder='Enter truck number' />
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.truck && formik.errors.truck && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.truck}
                                        </motion.p>
                                    )}
                                </div>
                            </div> 
                        </div>
                        <div className='flex mb-6 items-center w-full' >
                            <p className='font-Inter-Regular text-sm w-36 mr-4' >Driver name</p>
                            <div className='w-full' >
                                <Input  
                                    name="driver"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("driver", true, true)
                                    }  
                                    size='lg' fontSize='sm' border='1px solid #ACB5BD' backgroundColor='white' placeholder='Enter Name' />
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.driver && formik.errors.driver && (
                                        <motion.p
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                        >
                                            {formik.errors.driver}
                                        </motion.p>
                                    )}
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <PrintButton show={show} click={submit} value={formik.values} />
                {/* <button className='font-Inter-SemiBold mt-10 text-sm h-10 flex justify-center items-center text-white rounded-lg px-4 bg-[#F88C3A] '>
                    <svg className='mr-2' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4H8.5V6H16.5V4ZM6.5 6H2.5V18H6.5V22H18.5V18H22.5V6H18.5V2H6.5V6ZM4.5 16H6.5V14H18.5V16H20.5V8H4.5V16ZM16.5 16H8.5V20H16.5V16ZM16.5 10H18.5V12H16.5V10Z" fill="white"/>
                    </svg> 
                    Print entry permit
                </button> */}
            </div>

            <div className=' w-full px-10 py-12 ' >
                <p className='font-Inter-SemiBold text-2xl mb-5' >Print History</p>
                <Table variant='unstyled' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className=' font-Inter-SemiBold text-xl' >
                            <Th>No</Th>  
                            <Th>Vendor</Th>  
                            <Th>Agent</Th> 
                            <Th>Truck number</Th>  
                            <Th>Reprint</Th>   
                        </Tr>
                    </Thead>
                    <Tbody >
                        {dataall.map((item, index)=> {
                            return(
                                <Tr className=' cursor-pointer font-Inter-Regular text-xs ' key={index} paddingBottom='30px' >
                                    <Td>{index+1}</Td>  
                                    <Td> 
                                            {item.vendor} 
                                    </Td> 
                                    <Td> 
                                            {item.agent} 
                                    </Td>   
                                    <Td> 
                                            {item.truck}
                                    </Td> 
                                    <Td className='text-[#ACB5BD]' >{item.reprint}</Td>  
                                </Tr> 
                            )
                        })}
                    </Tbody> 
                </Table> 
            </div>
        </div>
    )
} 