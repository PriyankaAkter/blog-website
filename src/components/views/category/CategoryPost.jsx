import React from 'react'
import CategoryPostLeft from './CategoryPostLeft'
import CategoryPostRight from './CategoryPostRight'

const CategoryPost = () => {
  return (
    <div className='container justify-between py-[64px] flex gap-4 flex-col lg:flex-row'>
        <CategoryPostLeft />
        <CategoryPostRight />
    </div>
  )
}

export default CategoryPost