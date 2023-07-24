// import { HomeCategoryData } from "../home/homeAboutdata"
import { blogs } from "@/components/views/blog/blogData"
import Link from "next/link"
import Image from "next/image"
const CategoryPostRight = ({post}) => {
  let uniqueObjArray = [...new Map(blogs.map((item) => [item["category"]["slug"], item])).values()];
  return (
    <div className="sm:w-72 w-full">
        <h1 className="mb-10">Categories</h1>
        <div>
        <div className="grid grid-cols-1 gap-6">
        {/* {
            post?.map((item,index)=>(
              <Link href="/category" className={`flex justify-start p-6 items-center gap-4  border border-theme-medium-gray border-opacity-30 ${index===0 && "bg-secondary border-none"}`}>
                <div className="rounded-lg bg-[#FBF6EA] p-3 inline-block ">
                  <Image src={item.icon} width={23} height={23} />
                </div>
                <h3>{item.category}</h3>
              </Link>
            ))
        } */}
        {
            uniqueObjArray.map((item,index)=>(
              <Link href={`/category/${item.category.slug}`} className={`flex justify-start p-6 items-center gap-4  border border-theme-medium-gray border-opacity-30 ${index===0 && "bg-secondary border-none"}`}>
                <div className="rounded-lg bg-[#FBF6EA] p-3 inline-block ">
                  <Image src={item.icon} width={23} height={23} />
                </div>
                <h3>{item.category.name}</h3>
              </Link>
            ))
        }
        </div>
        </div>
        <div className="mt-12">
            <h1 className="mb-6">All Tags</h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="py-2 text-center border border-theme-medium-gray border-opacity-30 rounded-full">
                    <Link href='/'>Business</Link>
                </div>
                <div className="py-2 text-center border border-theme-medium-gray border-opacity-30 rounded-full">
                    <Link href='/'>Experience</Link>
                </div>
                <div className="py-2 text-center border border-theme-medium-gray border-opacity-30 rounded-full">
                    <Link href='/'>Screen</Link>
                </div>
                <div className="py-2 text-center border border-theme-medium-gray border-opacity-30 rounded-full">
                    <Link href='/'>Technology</Link>
                </div>
                <div className="py-2 text-center border border-theme-medium-gray border-opacity-30 rounded-full">
                    <Link href='/'>Marketing</Link>
                </div>
                <div className="py-2 text-center border border-theme-medium-gray border-opacity-30 rounded-full">
                    <Link href='/'>Life</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryPostRight