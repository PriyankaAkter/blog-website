import CustomButton from '@/components/shared/buttons/CustomButton'
import Link from 'next/link'
const HomeHero = () => {
  return (
    <div className={`bg-[url('/assests/images/home/hero.png')] bg-style w-screen h-[calc(100vh-80px)] `}>
        <div className='w-full h-full' style={{background: "radial-gradient(80.99% 71.93% at 74.58% 0.00%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)"}}>
            <div className='container  text-white flex items-center w-full h-full'>
                <div>
                    
                    <p className='tracking-[3px] font-medium mb-6 font-sens'>Posted on startup</p>
                    <span className='display mb-6 block'>Step-by-step guide to choosing <br />great font pairs</span>
                    <p className='mb-6'>By <span className='text-secondary'>James West</span>  |  May 23, 2022 </p>
                    <p className='mb-12'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <Link href="/blog"><CustomButton title="Read More" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHero