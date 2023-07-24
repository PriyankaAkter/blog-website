import { BlogPostData } from "./blogPostData"
import { blogs } from "../blog/blogData"
import Link from "next/link"
import Image from "next/image"
const BlogPostStory = ({blog}) => {
  return (
    <div className="container py-8 lg:py-16">
    <div  className="mb-[64px]">
    <h1>What to read next</h1>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
    {
        blog.map((item,index)=>(
        <Link href={`/blogPost/${item.slug}`} className="flex flex-col lg:items-center gap-8" key={index}>
                <div className="mb-[14px] w-full sm:w-[405px] h-[318px] relative ">
                  <Image src={item.image} fill objectFit="cover" />
                </div>
           <div className="w-full sm:w-[405px]">
           <p className="text-theme-purple font-medium tracking-[3px] mb-5">By {item.authors.title} | {item.date}</p>
           <h3 className="mb-4">{item.title}</h3>
           <p>{item.subTitle}</p>
           </div>
        </Link>
            
        ))
    }
    </div>
    
</div>
  )
}

export default BlogPostStory