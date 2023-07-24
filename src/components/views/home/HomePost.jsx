import Image from "next/image"
import Link from "next/link"
import CustomButton from "@/components/shared/buttons/CustomButton"
import { HomePostData } from "./homeAboutdata"
import { blogs } from "../blog/blogData"
const HomePost = () => {
  const slicePost = blogs.slice(0,5);

  return (

    <div className="container flex flex-col lg:flex-row gap-8 pt-12 lg:pt-32">
       
        <div className="lg:w-[733px] w-full">
            <h2 className="mb-8">Featured Post</h2>
            <div className='lg:p-8 p-4 border border-theme-medium-gray border-opacity-30'>
              <Image src="/assests/images/home/post.png" width={669} height={352} className="mb-8" />
              <p className='p__small mb-4'>By <span className='text-theme-purple'>Dianne Russell</span>  |  22nd May 2022 </p>
              <h3 className='mb-4'>The Ultimate Guide to Crafting Compelling Storytelling in Marketing</h3>
              <p className='mb-8'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <Link href="/blogPost/the_ultimate_guide_to_crafting_compelling_storytelling_in_marketing"><CustomButton title="Read More" /></Link>
            </div>
        </div>
        <div className="md:w-[517px]">
            <div className="flex justify-between">
              <h2>All Posts</h2>
              <Link href="/blog?page=1"><p className="text-theme-purple">View All</p></Link>
            </div>
           
        {
            slicePost.map((item,index)=>(
              <div  className={`p-8 ${index===1 && "bg-theme-yellow-light border-none"}`}>
              <Link href={`/blogPost/${item.slug}`}>
                <p className="mb-2">By <span className="text-theme-purple">{item.authors.title}</span> | {item.date}</p>
                <h4 className="">{item.title}</h4>
              </Link>
              </div>
            ))
        }
        
        </div>
    </div>
  )
}

export default HomePost