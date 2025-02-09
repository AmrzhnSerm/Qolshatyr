import React from 'react'
import { resourcesData } from '../assets/assets'
import { motion } from "motion/react"

const resources = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Resources'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Useful 
        <span className='underline underline-offset-4 decoration-1 under font-light'> Resources</span>
        </h1>
        <p className='text-center text-gray-500 max-w-80 mb-8 mx-auto'>We know that it is hard to have conversations with local residents, when you speak on completely different languages. Which is why we found some great videos about learning kazakh language with the most essential phrases and topics. Additionally chatbot can also answer your questions and be your guide.</p>
        <div className='flex flex-wrap justify-center gap-8'>
            {resourcesData.map((resource, index) => (
                <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                    <iframe className='w-full h-[200px]' src={resource.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen={true}></iframe>
                    <h2 className='text-xl text-gray-700 font-medium mt-3'>{resource.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{resource.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    </div>
                    <p className='text-gray-600'>{resource.description}
                    </p>
                </div>    
            ))}
        </div>
    </motion.div>
  )
}

export default resources