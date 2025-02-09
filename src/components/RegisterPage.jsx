import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { motion } from "motion/react";
import registerUser from '../../registration';

const RegisterPage = ({ isOpen, onClose, onSignInClick }) => {
  if (!isOpen) return null;
  const [fullName, setFullName] = useState('');
  const [passportID, setPassportID] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await registerUser(fullName, passportID, username, email, password);
      if (user) {
        console.log('User registered successfully!');
      } else {
        setError('Error registering user!');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "stiff" }}
      className="fixed inset-0 flex items-center justify-center"
    >
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-lg"
        >
          ✖
        </button>

        <div className="flex justify-center mb-4">
          <FaUser className="text-6xl text-[#272263]" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              value={fullName} 
              onChange={(event) => setFullName(event.target.value)}
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              value={passportID} 
              onChange={(event) => setPassportID(event.target.value)}
              type="password"
              placeholder="Enter passport ID"
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              value={username} 
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              value={email} 
              onChange={(event) => setEmail(event.target.value)} 
              type="email" 
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              value={password} 
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            onClick={onClose}
            className="w-full py-3 text-white rounded-lg font-semibold bg-[#272263] hover:bg-[#101054] transition">
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{' '}
          <a onClick={onSignInClick} className="cursor-pointer underline underline-offset-2">
            Log in
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default RegisterPage;