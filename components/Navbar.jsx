'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

  const [isOpen , setIsOpen] = useState(false);
   const toggleNavbar =  () =>{
    setIsOpen(!isOpen);
   }
   
   const scrollToSection = (e) => {
    e.preventDefault();
    const target = document.getElementById('target');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }}



  return (
    
    <div className='bg-white'>
    <div className='flex items-center justify-between'>

      <img className="h-20 mx-8 mt-4" src='assets/logo.jpg' alt='logo'></img>

      <div className='hidden md:block text-xl font-extrabold text-purple-400  p-4 px-16 mt-8 space-x-20 '>
       <a href='/' className='hover:text-purple-500 '>Home</a>
       <Link href="#target" onClick={scrollToSection} className='hover:text-purple-500 '>About</Link>
       <a href="mailto:tulika.mall15@gmail.com" className='hover:text-purple-500 '>Contact</a>
        </div>
        
      
       
        <div className='md:hidden  items-center justify-end p-4 px-8 mt-4'>
        <button onClick={toggleNavbar}>
        {isOpen ? (
  <svg
    className="h-10 w-10 text-purple-400 p-1 border-2 rounded-xl border-purple-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
) : (
  <svg
    className="h-10 w-10 text-purple-400 p-1 border-2 rounded-xl border-purple-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
)}

    </button>
        </div>
        

    </div>
    {isOpen && (
      <div className='md:hidden'>
         <div className='absolute text-xl font-extrabold text-purple-400 p-6 z-20 shadow-lg bg-white border-2 rounded-lg border-purple-400 right-4'>
       <a href='/' className='hover:text-purple-500 block'>Home</a>
       <Link href="#target" onClick={scrollToSection} className='hover:text-purple-500 block'>About</Link>
       <a href="mailto:tulika.mall15@gmail.com" className='hover:text-purple-500 block'>Contact</a>
        </div>
      </div>
    )}

    </div>



  )
}

export default Navbar