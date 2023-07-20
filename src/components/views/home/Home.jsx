
import HomeAbout from './HomeAbout'
import HomeAuthor from './HomeAuthor'
import HomeCategory from './HomeCategory'
import HomeClient from './HomeClient'
import HomeHero from './HomeHero'
import HomeJoin from './HomeJoin'
import HomePost from './HomePost'
import HomeStory from './HomeStory'
import HomeTestimonial from './HomeTestimonial'
// import Image from 'next/image'

const Home = () => {
  return (
   <div > 
    <HomeHero />
    <HomePost />
    {/* <HomePost1 /> */}
    <HomeAbout />
    <HomeCategory/>
    <HomeStory />
    <HomeAuthor />
    <HomeClient />
    <HomeTestimonial />
    <HomeJoin />
   </div>
  )
}

export default Home