'use client'
import Blog from '@/components/views/blog/Blog'
import React from 'react'
// import { blogs } from '../../components/views/blog/blogData'
// import { useParams } from 'next/navigation'

function page() {
  // const param = useParams()
  // const blog = blogs.find(e=>e.slug==param.slug)
  // console.log({blog});
  return (
    <div>
        <Blog />
    </div>
  )
}

export default page