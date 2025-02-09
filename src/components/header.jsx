import React from 'react'
import Navbar from './navbar'
import { motion } from "motion/react"
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: `url("/main1.png")`}} id='Header'>
        <Navbar/>
        <motion.div 
        initial={{opacity:0, y:100}}s
        transition={{duration:1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className=' text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-light pt-20'>"No matter the circumstances, we are here for you"</h2>
            <div className='space-x-6 mt-16'>
                <a href="#Map" className='border border-white px-8 py-3 rounded bg-transparent hover:bg-[#474278]'>Look for shelter</a>
                <Link to="/donate" className='bg-[#272263] hover:bg-[#101054] transition px-8 py-3 rounded'>Donate</Link>
            </div>
        </motion.div>
      </div>
  )
}

export default header