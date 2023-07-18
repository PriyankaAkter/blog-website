import Image from "next/image"

const AboutBlog = () => {
  return (
    <div className="container grid grid-cols-1 gap-[121px] py-[91px]">
     <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-16">
        <div className="w-full lg:w-[519px]">
            <h2 className="mb-4">Our team of creatives</h2>
            <h4 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        <div className="relative">
            <div className="w-[624px] h-[480px]">
              <Image src='/assests/images/about/about1.png'  fill objectFit="cover" />
            </div>
            <div className="hidden w-[103px] h-[116px] bg-secondary rounded-tl-3xl -ml-12 -mt-[400px] absolute"></div>
        </div>
        
        
     </div>
     <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-16">
        <div className="relative">
            <div className="w-[624px] h-[480px]">
              <Image src='/assests/images/about/about2.png'  fill objectFit="cover" />
            </div>
            <div className="w-[74px] h-[74px] bg-theme-purple rounded-full ml-12 -mt-[40px] absolute"></div>
        </div>
        <div className="w-full lg:w-[519px]">
            <h2 className="mb-4">Why we started this Blog</h2>
            <h4 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
        
        
     </div>
    </div>
    
  )
}

export default AboutBlog