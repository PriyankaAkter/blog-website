import { HomeCategoryData } from "./homeAboutdata"
import Image from "next/image"
import Link from "next/link"
const HomeCategory = () => {
  return (
    <div className="container py-[64px]">
       <div>
        <h3 className="text-center mb-12">Choose A Catagory</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {
            HomeCategoryData.map((item,index)=>(
              <Link href="/category" className={`p-8 border border-theme-medium-gray border-opacity-30 ${index===1 && "bg-secondary border-none"}`}>
                <div className="rounded-lg bg-[#FBF6EA] p-2 inline-block mb-[14px]">
                  <Image src={item.image} width={23} height={23} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
              </Link>
            ))
        }
        </div>
       </div>
    </div>
  )
}

export default HomeCategory