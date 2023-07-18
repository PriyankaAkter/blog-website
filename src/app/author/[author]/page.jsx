"use client"
import AuthorHero from '@/components/views/author/AuthorHero'
import AuthorPost from '@/components/views/author/AuthorPost'
import React from 'react'
import {useParams} from 'next/navigation'
import { HomeAuthorData } from '@/components/views/home/homeAboutdata'

const page = () => {
  const param = useParams()
  const author = HomeAuthorData.find(e=>e.slug==param.author)
  console.log({param,author});

  return (
    <div>
        <AuthorHero data={author} />
        <AuthorPost />
    </div>
  )
}

export default page