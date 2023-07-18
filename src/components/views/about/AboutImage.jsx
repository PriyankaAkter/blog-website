import Image from "next/image"

const AboutImage = () => {
  return (
    <div className='container'>
        <div className="">
        <div className="w-full h-[444px] relative">
           <Image src='/assests/images/about/hero.png' fill objectFit="cover" />
        </div>
        <div className="-mt-[151px] lg:-mt-[151px] xl:-mt-[175px] lg:ml-28 absolute hidden xl:block">
            <div className="grid grid-cols-3 gap-16 bg-secondary py-8 px-12 lg:w-[630px] ">
                <div>
                    <h1 className="display">12+</h1>
                    <p>Blogs Published</p>
                </div>
                <div>
                    <h1 className="display">18K+</h1>
                    <p>Views on Finsweet</p>
                </div>
                <div>
                    <h1 className="display">30K+</h1>
                    <p>Total active Users</p>
                </div>
            </div>
            <div className="flex justify-start">
              <div className="w-[311px] h-[23px] bg-[#592EA9]"></div>
              <div className="w-[550px] h-[23px] bg-[#FFD050]"></div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default AboutImage