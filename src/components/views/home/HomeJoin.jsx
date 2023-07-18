import CustomButton from '@/components/shared/buttons/CustomButton'
import React from 'react'

const HomeJoin = () => {
  return (
    <div className='container flex justify-center items-center py-12 lg:py-32'>
     <div className='w-[414px] text-center'>
        <h2 className='m-4'>Join our team to be a part of our story</h2>
        <p className='m-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <CustomButton title="Join Now" />
     </div>
    </div>
  )
}

export default HomeJoin