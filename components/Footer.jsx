import React from 'react'

const Footer = () => {
  return (
    
    <footer className="bg-white  shadow  ">
        <hr className='w--4 border-purple-400'></hr>
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-purple-400 sm:text-center ">
      <p>© 2024 . Made by Tulika Mall</p>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-purple-400  sm:mt-0 ">
      <li className='hidden md:block'>
        <a href="#target" className="hover:underline me-4 md:me-6">
          About
        </a>
      </li>
      <li className='hidden md:block'>
       
      </li>
      <li className='hidden md:block'>
        <a href="mailto:tulika.mall15@gmail.com" className="hover:underline">
          Contact
        </a>
      </li>
    </ul>
  </div>
</footer>

  )
}

export default Footer