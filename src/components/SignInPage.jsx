import React from 'react';
import { FaUser } from 'react-icons/fa';
import { motion } from "motion/react";

const SignInPage = ({ isOpen, onClose, onRegisterClick }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "stiff" }}
      className="fixed inset-0 flex items-center justify-center"
    >
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

        <h2 className="text-2xl font-bold text-center mb-6">Log in</h2>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#272263] hover:bg-[#101054] transition text-white rounded-lg font-semibold"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{' '}
          <a onClick={onRegisterClick} className="cursor-pointer underline underline-offset-2">
            Register
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default SignInPage;