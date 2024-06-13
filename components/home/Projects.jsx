'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Lora, Berkshire_Swash } from 'next/font/google';

const bs = Berkshire_Swash({ subsets: ['latin'], weight: '400' });
const lr = Lora({ subsets: ['latin'] });

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <div className="p-4 md:p-8">
      <div className={`flex justify-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl items-center text-green-400 ${bs.className}`}>
        My Projects
      </div>
      <div className='flex items-center justify-center py-8 md:py-16 lg:py-24'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 'auto',
            }
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-full"
        >
          <SwiperSlide>
            <img className="h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] w-full md:w-[48rem] lg:w-[56rem] xl:w-[64rem]" src="assets/p1.jpg" />
            <h5 className={`text-xl md:text-2xl lg:text-3xl pl-4 md:pl-8 lg:pl-12 text-green-400 ${bs.className}`}> 
              <a href="https://novelaria.vercel.app/" className="hover:underline">Novelaria</a>
            </h5>
            <div className='flex flex-wrap space-x-2 m-2 pl-4 md:pl-8 lg:pl-12'>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                HTML
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                CSS
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                Javascript
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                ReactJs
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                Tailwind CSS
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] w-full md:w-[48rem] lg:w-[56rem] xl:w-[64rem]" src="assets/p2.jpg" />
            <h5 className={`text-xl md:text-2xl lg:text-3xl pl-4 md:pl-8 lg:pl-12 text-green-400 ${bs.className}`}>
              <a href="https://bloggy-zeta.vercel.app/" className="hover:underline">Bloggy</a>
            </h5>
            <div className='flex flex-wrap space-x-2 m-2 pl-4 md:pl-8 lg:pl-12'>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                HTML
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                CSS
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                Javascript
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                ReactJs
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                Tailwind CSS
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] w-full md:w-[48rem] lg:w-[56rem] xl:w-[64rem]" src="assets/p3.jpg" />
            <h5 className={`text-xl md:text-2xl lg:text-3xl pl-4 md:pl-8 lg:pl-12 text-green-400 ${bs.className}`}>
              <a href="https://www.gvieaesthetic.com/" className="hover:underline">GVie Aesthetic</a>
            </h5>
            <div className='flex flex-wrap space-x-2 m-2 pl-4 md:pl-8 lg:pl-12'>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                HTML
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                CSS
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                Javascript
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                ReactJs
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                Tailwind CSS
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] w-full md:w-[48rem] lg:w-[56rem] xl:w-[64rem]" src="assets/p4.jpg" />
            <h5 className={`text-xl md:text-2xl lg:text-3xl pl-4 md:pl-8 lg:pl-12 text-green-400 ${bs.className}`}>
              MovieMania
            </h5>
            <div className='flex flex-wrap space-x-2 m-2 pl-4 md:pl-8 lg:pl-12'>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                HTML
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                CSS
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                Javascript
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                ReactJs
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] w-full md:w-[48rem] lg:w-[56rem] xl:w-[64rem]" src="assets/p5.jpg" />
            <h5 className={`text-xl md:text-2xl lg:text-3xl pl-4 md:pl-8 lg:pl-12 text-green-400 ${bs.className}`}>
              Newsway
            </h5>
            <div className='flex flex-wrap space-x-2 m-2 pl-4 md:pl-8 lg:pl-12'>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                HTML
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                CSS
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                Javascript
              </button>
              <button className="bg-purple-400 text-white text-xs py-0.5 px-1.5 rounded-full mb-2">
                ReactJs
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
