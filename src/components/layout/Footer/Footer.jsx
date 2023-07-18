import Link from "next/link"
import Image from "next/image"
import CustomButton from "@/components/shared/buttons/CustomButton"
import { AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram,AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="bg-primary py-12">
      <div className="container">
      <nav className=" flex flex-col gap-4 lg:flex-row justify-between items-center mb-[54px]">
            <div>
                <Image src="/assests/images/home/Logo.svg" alt="Logo" width={140} height={29} />
            </div>
            <div className="gap-8">
                <ul className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <li className={`text-white text-base font-normal`}>
                    <Link href="/"><span>Home</span></Link>
                  </li>
                  <li className={`text-white text-base font-normal`}>
                    <Link href="/blog"><span>Blog</span></Link>
                  </li>
                  <li className={`text-white text-base font-normal`}>
                    <Link href="/about"><span>About us</span></Link>
                  </li>
                  <li className={`text-white text-base font-normal`}>
                    <Link href="/contact"><span>Contact us</span></Link>
                  </li>
                  <li className={`text-white text-base font-normal`}>
                    <Link href="/privacy"><span>Privacy Policy</span></Link>
                  </li>
                </ul>
            </div>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-10 px-8 lg:py-20 lg:px-[64px] bg-[#2E3040] gap-[64px] mb-[48px]">
           <h2 className="text-white font-sens">Subscribe to our news letter to get <br />latest updates and news</h2>
           <form action="/" className="flex flex-col gap-7 md:flex-row">
            <div>
            <input type="email" placeholder="Enter Your Email" className="w-full py-[14px] pl-[25px] border border-theme-light-gray bg-transparent" />
            </div>
            
            <CustomButton title="Subscribe" />
           </form>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
          <div className="text-[#BDBDC2] text-center lg:text-left">
             <p>Finstreet 118 2561 Fintown</p>
             <p>Hello@finsweet.com  020 7993 2905</p>
          </div>
          <div className="flex gap-[27px]">
              <Link href="/facebook.com"><AiFillFacebook  className="text-[#6D6E76] " size={16}/></Link>
              <Link href="/twitter.com"><AiOutlineTwitter  className="text-[#6D6E76]" size={16}/></Link>
              <Link href="/instagram.com"><AiOutlineInstagram  className="text-[#6D6E76]" size={16}/></Link>
              <Link href="/linkdin.com"><AiFillLinkedin  className="text-[#6D6E76]" size={16}/></Link>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Footer