"use client"
import Category from '@/components/views/category/Category'
import { blogs } from '../../blog/blogData'
import { useParams } from 'next/navigation'

const page = () => {
  const param = useParams()
  const category = blogs.find(e=>e.slug==param.category)
  const post = blogs.filter(e=>e.slug==param.category)
  // if(!category) return null

  
  return (
    <div>
        <Category data={category} post={post} />
    </div>
  )
}

export default page