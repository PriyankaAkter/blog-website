"use client"
import Category from '@/components/views/category/Category'
import { blogs } from '../../../components/views/blog/blogData'
import { useParams } from 'next/navigation'

const page = () => {
  const param = useParams()
  const category = blogs.find(e=>e.category.slug==param.category)
  const post = blogs.filter(e=>e.category.slug==param.category)
  
  

  
  return (
    <div>
        <Category data={category} post={post} />
    </div>
  )
}

export default page