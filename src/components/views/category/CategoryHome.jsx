import React from 'react'

const CategoryHome = ({data}) => {
  return (
<div className='w-screen bg-[#F4F0F8] flex flex-col items-center '>

<div className='py-20 px-8 w-full lg:w-[515px] text-center'>
    <h1 className='display mb-8'>{data.category}</h1>
    <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    <p className='tracking-[3px] font-medium'><span>Blog &gt; {data.category}</span></p>
</div>
 
</div>
  )
}

export default CategoryHome