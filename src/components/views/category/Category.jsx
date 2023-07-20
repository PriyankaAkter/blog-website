import React from 'react'
import CategoryHome from './CategoryHome'

import CategoryPost from './CategoryPost'

const Category = ({data,post}) => {

  return (
    <div>
        <CategoryHome data={data}/>
        <CategoryPost post={post}/>
    </div>
  )
}

export default Category