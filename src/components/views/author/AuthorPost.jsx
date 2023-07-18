import { AuthorPostData } from "./author"
import Link from "next/link"
import Image from "next/image"
const AuthorPost = () => {
  return (
    <div className="container py-[64px] flex flex-col justify-center lg:flex-col">
        
          <div  className="mb-[64px] w-[1024px]">
             <h1>All posts</h1>
           </div>
        <div className="grid grid-cols-1 gap-16">
        {
            AuthorPostData.map((item,index)=>(
              <Link href="/blogPost" className="flex flex-col lg:items-center lg:flex-row gap-8 key={index}">
                <div className="mb-[14px] w-full lg:w-[490px] h-[318px] relative">
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

export default AuthorPost