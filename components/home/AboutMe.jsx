import React from 'react'
import { Lora, Berkshire_Swash } from "next/font/google";

const bs = Berkshire_Swash({ subsets: ["latin"], weight:'400'});
const lr = Lora({ subsets: ["latin"]});

const AboutMe = () => {
  return (
    <div id="target" className='m-8 sm:m-24  grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='hidden md:block'>
           <h1 className={`${lr.className} text-violet-400 font-semibold`}>From an early age, my insatiable curiosity fueled a deep passion for exploring new realms of knowledge. 
           This insatiable thirst for learning birthed my lifelong love affair with books. There's just something magical about diving into a new story, getting lost in its pages, and emerging with a renewed sense of wonder.</h1>
           <h1 className={`${lr.className} pt-4 text-violet-400 font-semibold`}>As I matured, my thirst for growth only intensified. I dedicate myself wholeheartedly to self-improvement, constantly seeking ways to enhance every facet of my being. Whether it's mastering a new skill, refining existing talents, or broadening my perspective, I embrace each opportunity for personal development.</h1>
           <h1 className={`${lr.className} pt-4 text-violet-400 font-semibold`}>Beyond my love for literature, I find joy in various forms of expression. Whether it's dancing to the rhythm of life, experimenting with new recipes in the kitchen, or sketching my thoughts onto paper, I embrace each opportunity to let my creativity soar.</h1>
           <h1 className={`${lr.className} pt-4 text-violet-400 font-semibold`}>And, if you ever want to win me over, just suggest a boba date, and I'm all in!</h1>

        </div>
        <div className='pt-8 pl-8 '>
        <h1 className={`text-6xl md:text-7xl flex justify-center items-center text-orange-400  ${bs.className}`}>  More </h1>
        <h1 className={`pr-28 text-6xl md:text-7xl flex justify-end items-center text-orange-400  ${bs.className}`}> About </h1>
        <div className='flex flex-row justify-center'>
        <svg
        className='flex justify-start'
        viewBox="0 0 24 24"
        height="2em"
        xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="#A78BFA " d="M16 16a3 3 0 110 6 3 3 0 010-6zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm8.5-10a5.5 5.5 0 110 11 5.5 5.5 0 110-11z" />
        </svg>
        <h1 className={`text-8xl md:text-9xl flex justify-center items-center text-orange-400   ${bs.className}`}>  ME </h1>
        <svg
        className='flex justify-start relative top-20'
        viewBox="0 0 24 24"
        height="2em"
        xmlns="http://www.w3.org/2000/svg">
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="#A78BFA " d="M16 16a3 3 0 110 6 3 3 0 010-6zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm8.5-10a5.5 5.5 0 110 11 5.5 5.5 0 110-11z" />
        </svg>
        </div>
        </div>
        <div className='block md:hidden pt-4'>
           <h1 className={`${lr.className} text-violet-500 font-small`}>From an early age, my insatiable curiosity fueled a deep passion for exploring new realms of knowledge. 
           This insatiable thirst for learning birthed my lifelong love affair with books. There's just something magical about diving into a new story, getting lost in its pages, and emerging with a renewed sense of wonder.</h1>
           <h1 className={`${lr.className} pt-4 text-violet-500`}>As I matured, my thirst for growth only intensified. I dedicate myself wholeheartedly to self-improvement, constantly seeking ways to enhance every facet of my being. Whether it's mastering a new skill, refining existing talents, or broadening my perspective, I embrace each opportunity for personal development.</h1>
           <h1 className={`${lr.className} pt-4 text-violet-500`}>Beyond my love for literature, I find joy in various forms of expression. Whether it's dancing to the rhythm of life, experimenting with new recipes in the kitchen, or sketching my thoughts onto paper, I embrace each opportunity to let my creativity soar.</h1>
           <h1 className={`${lr.className} pt-4 text-violet-500`}>And, if you ever want to win me over, just suggest a boba date, and I'm all in!</h1>

        </div>
        
    </div>
  ) 
}

export default AboutMe