import CustomButton from '@/components/shared/buttons/CustomButton'
import Image from "next/image"

const HomeStory = () => {
  return (
    // 
        <div className='flex flex-col xl:flex-row gap-4 container'>
        <div>
            <Image src="/assests/images/home/story.png" width={949} height={705} />
        </div>
        <div className='xl:-ml-[343px] xl:w-[706px] xl:h-[584px] xl:mt-[125px]'>
        <div className=' bg-white xl:p-20'>
            <p className='tracking-[3px] mb-6'>Why we started </p>
            <h1 className='mb-4 -tracking-[2px]'>It started out as a simple idea and evolved into our passion</h1>
            <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <CustomButton title="Discover our story" />
        </div>
        </div>
        
    </div>
     
  )
}

export default HomeStory