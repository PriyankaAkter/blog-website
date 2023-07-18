import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useSwiper } from 'swiper/react';

const SwiperNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className='w-10 h-10 rounded-full bg-black p-0 text-white flex items-center justify-center hover:bg-white hover:text-black'
      onClick={() => {
        swiper.slideNext();
      }}
    >
      <AiOutlineArrowRight className="w-8" />
    </button>
  );
};

export default SwiperNextButton
{/* <button
      className='w-10 h-10 rounded-full bg-black p-0 absolute top-1/2 -translate-y-1/2 right-0 z-50 text-white flex items-center justify-center hover:bg-white hover:text-black'
      onClick={() => {
        swiper.slideNext();
      }} */}