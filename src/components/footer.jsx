import React, { useState } from 'react';
import { auth, db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const footer = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await addDoc(collection(db, 'candidates'), { email });
          console.log('Email stored successfully!');
        } catch (error) {
          console.error('Error storing email:', error.message);
        }
      };

  return (
    <div className='pt-10 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img className='w-40' src="Logo svet.svg" alt="" />
                <p className='text-gray-400 mt-4'>Qolshatyr is more than just a tool for finding a place to live. We are a team dedicated to helping people in their hardest times. Whether you are looking for temporary housing or a stable place to live, we are willing to help.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Group</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#About" className='hover:text-white'>About us</a>
                    <a href="#Contact" className='hover:text-white'>Contact us</a>
                    <a href="#Collab" className='hover:text-white'>Collab</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Join our team</h3>
                <p className='text-gray-400 mb-4 max-w-80'>
                And make a difference in the lives of those in need
                </p>
                <div className='flex gap-2'>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="p-2 bg-gray-800 text-gray-400 rounded w-full border border-gray-700 focus:outline-none md:w-auto"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">
                        <button type="submit" className="py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 transition cursor-pointer text-white">Send</button>
                    </form>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2025 @ Qolshatyr. All rights reserved
        </div>
    </div>
  )
}

export default footer