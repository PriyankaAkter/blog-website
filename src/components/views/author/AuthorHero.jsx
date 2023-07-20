import { AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram,AiFillLinkedin } from 'react-icons/ai'
import Image from "next/image"
const AuthorHero = ({data}) => {
  return (
    <div className=" bg-[#F4F0F8] ">
        <div className="container py-[64px] ">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className='w-[251px] h-[294px] relative'>
                <Image src="/assests/images/author/author.png" fill objectFit='cover' />
            </div>
            <div className="lg:w-[624px] w-full">
               <h1 className="mb-4">Hey there, I’m {data.title} and welcome to my Blog</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
               <div className="flex gap-7 mt-4">
              <AiFillFacebook  className="text-[#6D6E76] " size={16}/>
              <AiOutlineTwitter  className="text-[#6D6E76]" size={16}/>
              <AiOutlineInstagram  className="text-[#6D6E76]" size={16}/>
              <AiFillLinkedin  className="text-[#6D6E76]" size={16}/>
              {/* <AiOutlineTwitter /> */}
          </div>
            </div>
        </div>
        </div>
        
    </div>
    
  )
}

export default AuthorHero