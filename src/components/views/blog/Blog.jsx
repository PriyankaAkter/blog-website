import HomeCategory from "../home/HomeCategory"
import HomeJoin from "../home/HomeJoin"
import BlogHero from "./BlogHero"
import BlogPost from "./BlogPost"


const Blog = () => {
  return (
    <div>
        <BlogHero />
        <BlogPost  />
        <HomeCategory />
        <HomeJoin />
    </div>
  )
}

export default Blog