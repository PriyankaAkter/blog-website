import React from 'react';


import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useSwiper } from 'swiper/react';

const SwiperPreviousButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className='w-10 h-10 rounded-full bg-white p-0  text-black flex items-center justify-center hover:bg-black hover:text-white'
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      <AiOutlineArrowLeft className="w-[26px] " />
    </button>
  );
};

export default SwiperPreviousButton;

{/* <button
      className='w-10 h-10 rounded-full bg-white p-0 absolute top-1/2 -translate-y-1/2 left-0 z-50 text-black flex items-center justify-center hover:bg-black hover:text-white'
      onClick={() => {
        swiper.slidePrev();
      }}
    ></button> */}