import React, { useState } from 'react';
import { motion } from "motion/react"
import { toast } from 'react-toastify';
const contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "54036bc9-29a5-47d2-a419-98f9f0a75458");  //Email api
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message)
        setResult("");
      }
    };

    
  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact
        <span className='underline underline-offset-4 decoration-1 under font-light'> Us</span>
        </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>If you need to be heard or have a message to us, feel free to contact us and we will respond to you in no time. Additionally your emails will be saved and used for sending useful information and notices</p>
 
<form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8' >
    <div className=' flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>
            Your name
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder="Your name" required/>
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder="Your Email" required/>
        </div>
    </div>
    <div className='my-6 text-left'>
        Message
        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name='Message' placeholder="Message" required></textarea>
    </div>
    <button className='bg-[#272263] hover:bg-[#101054] transition text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send message"}</button>
</form>

    </motion.div>
  )
}

export default contact