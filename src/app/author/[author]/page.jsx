"use client"
import AuthorHero from '@/components/views/author/AuthorHero'
import AuthorPost from '@/components/views/author/AuthorPost'
import React from 'react'
import {useParams} from 'next/navigation'
import { HomeAuthorData } from '@/components/views/home/homeAboutdata'
import { blogs } from '@/app/blog/blogData'

const page = () => {
  const param = useParams()
  const author = HomeAuthorData.find(e=>e.slug==param.author)
  const blog = blogs.filter(e=>e.authors.slug==param.author)
  console.log({blog,author});

  return (
    <div>
        <AuthorHero data={author} />
        <AuthorPost data={blog} />
    </div>
  )
}

export default page