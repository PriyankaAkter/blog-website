import React from 'react'
import CategoryPostLeft from './CategoryPostLeft'
import CategoryPostRight from './CategoryPostRight'

const CategoryPost = ({post}) => {
  return (
    <div className='container justify-between py-[64px] flex gap-4 flex-col lg:flex-row'>
        <CategoryPostLeft post={post}/>
        <CategoryPostRight post={post}/>
    </div>
  )
}

export default CategoryPost