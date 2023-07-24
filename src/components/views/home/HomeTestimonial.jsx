"use client"
import Image from "next/image"
import { HomeTestimonialData } from './homeAboutdata';
// import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y } from 'swiper/modules';
import 'swiper/css';


import SwiperPreviousButton from "@/components/shared/buttons/SwiperPreviousButton";
import SwiperNextButton from "@/components/shared/buttons/SwiperNextButton";

const HomeTestimonial = () => {
  return (


    <div className='container bg-theme-yellow-light py-12 px-8 lg:py-24 lg:px-28'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <span className='tracking-[3px] font-medium mb-6 inline-block'>TESTIMONIALS</span>
                <h2 className='mb-4'>What people say about our blog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
      <Swiper
        modules={[A11y]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        className='mt-8 lg:mt-0 w-full relative'
      >
        {/* <SwiperNextButton />
        <SwiperPreviousButton /> */}
        <div className="flex absolute bottom-0 right-0 z-10 gap-6">
                    <SwiperPreviousButton />
                    <SwiperNextButton />
                    
                  </div>
        {HomeTestimonialData.map((e, index) => (
          <SwiperSlide key={index}>
            
              <div>
                <h4 className="mb-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                <div className="flex flex-col sm:flex-row justify-start gap-4 sm:justify-between sm:items-center">

                  <div className="flex gap-4 flex-col sm:flex-row">
                    <div>
                      <Image src={e.image} width={48} height={48} alt={e.caption} />
                    </div>
                    <div>
                      <h4>{e.name}</h4>
                      <p>{e.address}</p>
                    </div>
                  </div>
                  
                </div>


              </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
    
  )
}

export default HomeTestimonial




