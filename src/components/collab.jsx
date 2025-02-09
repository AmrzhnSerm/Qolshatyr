import React from 'react';
import {motion} from "motion/react"

const Collab = () => {
  return (
    <motion.div
    initial={{opacity:0, x:200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id='#Collab'>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-4xl font-bold mb-2">Collaborate
            <span className='ml-2 underline underline-offset-4 decoration-1 under font-light'> With Us</span>
          </h1>
          <p className="text-gray-500 max-w-80 text-left mb-8">
          Our team aims to provide shelter for every asylum seeker. We believe that this is an essential human right: everyone deserves a home, whether it is a shelter or a shipping container. If you want to make the world a bit better, support us through your donation or by volunteering
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <img
            src="tents.png"
            alt="Обложка"
            className="w-full h-auto md:w-auto md:h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Collab;