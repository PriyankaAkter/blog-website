import Link from "next/link"
import { BlogAboutData } from "../../../app/blog/blogData"
import AboutInfo from "./AboutInfo"

const AboutAbout = () => {
  return (
    <div className="container">
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[61px] bg-[#F4F0F8] py-12 px-10 lg:py-24 lg:px-20">
        {
            BlogAboutData.map((item,index)=>(
              <Link key={index} href={`/blog/${item.id}`} className="xl:w-[515px]">
                <span className='tracking-[3px] font-medium mb-6 inline-block'>{item.title}</span>
                <h3 className='mb-4'>{item.subTitle}</h3>
                <p>{item.description}</p>
              </Link>
            ))
        }
    </div>
    {/* <button>Read More</button> */}
    <div>
      
    </div>
    </div>
  )
}

export default AboutAbout

 {/* <div className="flex justify-end">
        <div className="w-[779px] h-[23px] bg-[#FFD050]"></div>
        <div className="w-[282px] h-[23px] bg-[#592EA9]"></div>
      </div> */}