import HomeCategory from "../../../components/views/home/HomeCategory"
import HomeJoin from "../../../components/views/home/HomeJoin"
import BlogHero from "./BlogHero"
import BlogPost from "./BlogPost"


const Blog = () => {
  return (
    <div>
        <BlogHero />
        <BlogPost />
        <HomeCategory />
        <HomeJoin />
    </div>
  )
}

export default Blog