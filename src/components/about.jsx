import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom';
const about = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About
        <span className='ml-2 underline underline-offset-4 decoration-1 under font-light'>Our Goal</span>
        </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>
            In recent years, the world has faced an alarming increase in forced displacement due to armed conflicts, political instability, and economic hardships. 
            According to data from the <strong>United Nations High Commissioner for Refugees (UNHCR)</strong>, 
            as of 2024, more than <strong>110 million people</strong> worldwide have been forced to leave their homes. 
            This includes refugees, asylum seekers, and internally displaced persons (IDPs).
        </p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src="about.png" alt="" className='w-32 sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-3xl font-medium text-gray-800'>37.9 Million</p>
                        <p>Are refugees</p>
                    </div>
                    <div>
                        <p className='text-3xl font-medium text-gray-800'>8 Million</p>
                        <p>Are asylum seekers</p>
                    </div>
                    <div>
                        <p className='text-3xl font-medium text-gray-800'>47 Million</p>
                        <p>Are children</p>
                    </div>
                    <div>
                        <p className='text-3xl font-medium text-gray-800'>65 %</p>
                        <p>Originate from only 4 countries</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg'>
                    We believe that everyone deserves decent living conditions. Our partners and volunteers work to create comfortable and affordable housing options for those in need.
                    If you know people who are in dire need of help and are looking for a safe haven, a hefty amount of facilities are available all around Kazakhstan
                </p>
                <button className='bg-[#272263] hover:bg-[#101054] transition text-white px-8 py-2 rounded'><Link to="/info">Learn More</Link></button>
            </div>
        </div>
    </motion.div>
  )
}

export default about