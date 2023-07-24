import CustomButton from '@/components/shared/buttons/CustomButton'
import Image from "next/image"
import Link from 'next/link'
const BlogHero = () => {
  return (
    <div className={`bg-[#F4F0F8] `}>
        <div className='container py-20 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-[141px] w-full h-full'>
            <div>
                <p className='tracking-[3px] font-medium mb-6 font-sens'>Featured Post</p>
                <h2 className='mb-6'>Step-by-step guide to choosing great font pairs</h2>
                <p className='mb-6'>By <span className='text-theme-purple'>John Doe</span>  |  May 23, 2022 </p>
                <p className='mb-12'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <Link href="/blogPost"><CustomButton title="Read More" /></Link>
            </div>
            <div >
                <Image src='/assests/images/blog/hero.png' width={515} height={359} />
            </div>
        </div>
    </div>

  )
}

export default BlogHero