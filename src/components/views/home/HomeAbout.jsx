import { HomeAboutData } from "./homeAboutdata"

const HomeAbout = () => {
  return (
    <div className="container lg:pt-32 pt-12">
      <div className="flex justify-end">
        <div className="w-[779px] h-[23px] bg-[#FFD050]"></div>
        <div className="w-[282px] h-[23px] bg-[#592EA9]"></div>
      </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[61px] bg-[#F4F0F8] px-8 py-12 lg:py-24 lg:px-20">
        {
            HomeAboutData.map((item)=>(
              <div className="xl:w-[515px]">
                <span className='tracking-[3px] font-medium mb-6 inline-block'>{item.title}</span>
                <h3 className='mb-4'>{item.subTitle}</h3>
                <p>{item.description}</p>
              </div>
            ))
        }
    </div>
    {/* <button>Read More</button> */}
    <div>
      
    </div>
    </div>
    
  )
}

export default HomeAbout