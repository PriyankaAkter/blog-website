'use client'
import BlogPost from '@/components/views/blogPost/BlogPost'
import React from 'react'
import { useParams } from 'next/navigation'
import { blogs } from '@/components/views/blog/blogData'

const page = () => {
  const param = useParams()
  const post = blogs.find(e=>e.slug==param.post)
  const blog = blogs.filter(e=>e.slug==param.post)
  console.log({post,blog});
  return (
    <div>
        <BlogPost post={post} blog={blog} />
    </div>
  )
}

export default page