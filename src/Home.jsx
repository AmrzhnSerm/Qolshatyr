import React from 'react'
import Header from './components/header'
import About from './components/about'
import Chat from './components/chat'
import Map from './components/map'
import Resources from './components/resources'
import Contact from './components/contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer'
import Collab from './components/collab'

const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Collab/>
      <Map/>
      <Resources/>
      <Chat/>
      <Contact/>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default Home