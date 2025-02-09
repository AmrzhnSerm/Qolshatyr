import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const DonatePage = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Donation submitted:', amount, name, email);
    toast.error('Sorry but we cannot proceed with donation, since we do not have rights to do so.');
  };

  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id='/donate'>
      <h1 className="text-4xl font-bold mb-2">Donation</h1>
      <p className="text-gray-500 max-w-80 text-left mb-8">
        First of all select your donation amount
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full">
        <label className="text-lg font-medium text-gray-800 mb-1" htmlFor="amount">
          Donation amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-gray-100 border border-gray-300 p-2 rounded-lg mb-4 w-full"
        />
        <label className="text-lg font-medium text-gray-800 mb-1" htmlFor="name">
          Name of the donor
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-100 border border-gray-300 p-2 rounded-lg mb-4 w-full"
        />
        <label className="text-lg font-medium text-gray-800 mb-1" htmlFor="email">
          Email for receipt
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 border border-gray-300 p-2 rounded-lg mb-4 w-full"
        />
        <button
          type="submit"
          className="py-2 px-4 bg-[#272263] hover:bg-[#101054] transition text-white rounded-full cursor-pointer mt-4"
        >
          Proceed
        </button>
      </form>
      <Link to="/" className="bg-[#272263] hover:bg-[#101054] transition text-white px-8 py-2 rounded-full cursor-pointer mt-4">
        Return to main page
      </Link>
    </div>
  );
};

export default DonatePage;