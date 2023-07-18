import Image from "next/image"
import CustomButton from "@/components/shared/buttons/CustomButton"
import { HomePostData } from "./homeAboutdata"
const HomePost = () => {
  return (

    <div className="container flex flex-col lg:flex-row gap-8 pt-12 lg:pt-32">
       
        <div className="lg:w-[733px] w-full">
            <h2 className="mb-8">Featured Post</h2>
            <div className='lg:p-8 p-4 border border-theme-medium-gray border-opacity-30'>
              <Image src="/assests/images/post.png" width={669} height={352} className="mb-8" />
              <p className='p__small mb-4'>By <span className='text-theme-purple'>James West</span>  |  May 23, 2022 </p>
              <h3 className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
              <p className='mb-8'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <CustomButton title="Read More" />
            </div>
        </div>
        <div className="md:w-[517px]">
            <div className="flex justify-between">
              <h2>All Posts</h2>
              <p className="text-theme-purple">View All</p>
            </div>
            <div >
        {
            HomePostData.map((item,index)=>(
              <div className={`p-8 ${index===1 && "bg-theme-yellow-light border-none"}`}>
                <span className="mb-2">{item.title}</span>
                <h4 className="">{item.subTitle}</h4>
              </div>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default HomePost