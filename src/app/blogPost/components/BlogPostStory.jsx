import { BlogPostData } from "./blogPostData"
import Image from "next/image"
const BlogPostStory = () => {
  return (
    <div className="container py-8 lg:py-16">
    <div  className="mb-[64px]">
    <h1>What to read next</h1>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
    {
        BlogPostData.map((item)=>(
        <div className="flex flex-col lg:items-center gap-8">
                <div className="mb-[14px] w-full h-[318px] relative ">
                  <Image src={item.image} fill objectFit="cover" />
                </div>
           <div>
           <p className="text-theme-purple font-medium tracking-[3px] mb-5">{item.title}</p>
           <h3 className="mb-4">{item.subTitle}</h3>
           <p>{item.description}</p>
           </div>
        </div>
            
        ))
    }
    </div>

</div>
  )
}

export default BlogPostStory