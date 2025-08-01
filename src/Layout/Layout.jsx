import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './../Footer/Footer';
import Copyright from '../Copyright/Copyright';

export default function Layout() {
  return (
    <>
    <Navbar/>
    
      <div className='mt-5 pt-5'>
        <Outlet/>
      </div>
 <Footer/>
   
    </>
  )
}
