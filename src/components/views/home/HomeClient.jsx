import { HomeClientData } from "./homeAboutdata"
import Image from "next/image"
const HomeClient = () => {
  return (
    <div className="container flex flex-col lg:items-center lg:flex-row gap-[75px] py-12 lg:py-24">
        <div>
            <p className="p__small opacity-60">We are</p>
            <span className="text-6 font-bold leading-[32px] font-sens text-theme-medium-gray">Featured in</span>
        </div>
        <div className="grid grid-cols-2 gap-[75px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 opacity-60">
        {
            HomeClientData.map((item)=>(
              <div >
                 <Image src={item.image} width={136} height={32} />
              </div>
            ))
        }
        </div>
        
        </div>
  )
}

export default HomeClient