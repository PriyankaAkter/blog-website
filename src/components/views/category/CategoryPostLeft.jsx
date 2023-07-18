import { CategoryBlogData } from "./categoryData"
import Link from "next/link"
import Image from "next/image"
const CategoryPostLeft = () => {
  return (
    <div className="flex-1">
        <div className="grid grid-cols-1 gap-8">
        {
            CategoryBlogData.map((item,index)=>(
              <div className="flex flex-col 2xl:items-center lg:flex-row gap-8">
                <div className="w-full h-[312px] relative">
                  <Image src={item.image} fill objectFit="cover" />
                </div>
               <div className="w-full lg:w-[512px]">
               <p className="text-theme-purple font-medium tracking-[3px] mb-3">{item.title}</p>
               <h2 className="mb-4">{item.subTitle}</h2>
               <p>{item.description}</p>
               </div>
               </div>
                
            ))
        }
        </div>
  
    </div>
  )
}

export default CategoryPostLeft
// w-[624px]