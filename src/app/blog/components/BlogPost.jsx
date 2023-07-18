import Link from "next/link"
import { BlogData } from "../blogData"
import Image from "next/image"

const BlogPost = () => {
  return (
    <div className="container py-[64px]">
        <div  className="mb-[64px]">
        <h1>All posts</h1>
        <hr />
        </div>
        
        <div className="grid grid-cols-1 gap-16">
        {
            BlogData.map((item,index)=>(
              <Link  href='/blogPost' className="flex flex-col lg:blogs-center lg:flex-row gap-8">
                <div className="mb-[14px] w-full sm:w-[490px] h-[318px] relative overflow-hidden">
                  <Image src={item.image} fill objectFit="cover" />
                </div>
               <div className="lg:w-[624px]">
               <p className="text-theme-purple font-medium tracking-[3px] mb-5">{item.title}</p>
               <h2 className="mb-4">{item.subTitle}</h2>
               <p>{item.description}</p>
               </div>
               </Link>
                
            ))
        }
        </div>
  
    </div>
  )
}

export default BlogPost