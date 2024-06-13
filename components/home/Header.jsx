import React from 'react'
import { Lora, Berkshire_Swash } from "next/font/google";


const bs = Berkshire_Swash({ subsets: ["latin"], weight:'400'});
const l = Lora({ subsets: ["latin"]});

const Header = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
        <div className='absolute'>
        <img className='opacity-35 sm:p-8  md:h-[30rem] h-[20rem] '
        src='assets/LLavender.jpg' alt="bloom"></img>
        </div>

 
   <div className="flex flex-col justify-end items-center z-10 p-8 sm:pb-24 sm:p-14 pt-36 md:pt-20 pl-50 md:pl-54 lg:pl-56 ">
    <h1 className={` text-6xl  lg:text-[4em] font-extrabold tracking-wide text-right text-violet-400 ${bs.className}`}>
      " From dreams  
    </h1>
    <h1 className={`text-6xl  lg:text-[4em] font-extrabold tracking-wide text-right text-violet-400 ${bs.className}`}>
      to reality "
    </h1>
    <h1 className={`${l.className}flex justify-end p-4 z-10 text-violet-400 text-lg`}>Hi, I am Tulika. I am a frontend developer, a graphic designer and a boba enthusiast.</h1>
    </div>
   

 
   <div className='flex justify-center mx-2'>
    <img className='
    flex justify-center z-10 rounded-full border-2 border-violet-400  p-4 shadow h-[28rem] sm:h-[30rem]  mt-4 sm:mt-8 ' src="assets/me.jpeg" alt="my photo"></img>
   </div>
   

        
    </div>
  )
}  

export default Header