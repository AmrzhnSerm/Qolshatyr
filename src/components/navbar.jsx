import React, { useEffect, useState } from 'react'
import SignInPage from './SignInPage'
import RegisterPage from './RegisterPage';

const navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  
    const handleSignInClose = () => {
      setIsSignInOpen(false);
    };
  
    const handleRegisterClose = () => {
      setIsRegisterOpen(false);
    };
  
    const handleRegisterClick = () => {
      handleSignInClose();
      setIsRegisterOpen(true);
    };
  
    const handleSignInClick = () => {
      handleRegisterClose();
      setIsSignInOpen(true);
    };

  useEffect(() => {
    if(showMobileMenu){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
          <img className='w-32 mt-2 rounded-2xl' src="/Logo temnyi.svg" alt="Logo" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="/" className='cursor-pointer hover:text-[#706d97]'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-[#706d97]'>About</a>
                <a href="#Map" className='cursor-pointer hover:text-[#706d97]'>Map</a>
                <a href="#Resources" className='cursor-pointer hover:text-[#706d97]'>Resources</a>
            </ul>
            <button onClick={() => setIsSignInOpen(true)} className='hidden md:block bg-[#272263] hover:bg-[#101054] transition text-white px-8 py-2 rounded-full cursor-pointer' >Sign Up</button>
            {isSignInOpen && (
              <SignInPage
                isOpen={isSignInOpen}
                onClose={handleSignInClose}
                onRegisterClick={handleRegisterClick}
              />
            )}
            {isRegisterOpen && (
              <RegisterPage
                isOpen={isRegisterOpen}
                onClose={handleRegisterClose}
                onSignInClick={handleSignInClick}
              />
            )}
            <img onClick={()=> setShowMobileMenu(true)} src="menu.svg" className='lg:hidden md:hidden cursor-pointer' alt="" />
        </div>

        {/*-------mobile menu-------------*/}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0' } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={() => setShowMobileMenu(false)} src="cross.svg" className='w-6' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py2 rounded-full inline-block'>Home</a>
            <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py2 rounded-full inline-block'>About</a>
            <a onClick={() => setShowMobileMenu(false)} href="#Map" className='px-4 py2 rounded-full inline-block'>Map</a>
            <a onClick={() => setShowMobileMenu(false)} href="#Resources" className='px-4 py2 rounded-full inline-block'>Resources</a>
          </ul>
        </div>
    </div>
  )
}

export default navbar