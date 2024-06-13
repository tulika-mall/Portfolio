import AboutMe from '@/components/home/AboutMe'
import Header from '@/components/home/Header'
import Projects from '@/components/home/Projects'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
        <Header/>
        <AboutMe/>
        <Projects/>
    </div>
  )
}

export default HomePage