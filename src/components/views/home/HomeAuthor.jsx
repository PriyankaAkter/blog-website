import { HomeAuthorData } from "./homeAboutdata"
import Image from "next/image"
import Link from "next/link"
import { AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram,AiFillLinkedin } from 'react-icons/ai'
const HomeAuthor = () => {
  return (
    <div className="container pt-12 lg:pt-32 ">
       <div>
        <h3 className="text-center mb-12">List of Authors</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
            HomeAuthorData.map((item,index)=>(
              <Link href={`/author/${item.slug}`} className={`py-20 flex flex-col items-center bg-theme-white ${index===1 && "bg-theme-yellow-light "}`}>
                <div className="mb-5">
                  <Image src={item.image} width={128} height={128} />
                </div>
                <h3>{item.title}</h3>
                <p className="p_small mb-5">{item.subTitle}</p>
                <div className="flex gap-4">
                   <AiFillFacebook  className="text-[#232536] " size={16}/>
                   <AiOutlineTwitter  className="text-[#232536]" size={16}/>
                   <AiOutlineInstagram  className="text-[#232536]" size={16}/>
                   <AiFillLinkedin  className="text-[#232536]" size={16}/>
                </div>
              </Link>
            ))
        }
        </div>
       </div>
    </div>
  )
}

export default HomeAuthor