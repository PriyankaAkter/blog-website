
import HomeJoin from '../home/HomeJoin'
import BlogPostDetails from './BlogPostDetails'
import BlogPostStory from './BlogPostStory'

const BlogPost = ({post,blog}) => {
  return (
    <div>
        <BlogPostDetails post={post} />
        <BlogPostStory blog={blog} />
        <HomeJoin />
    </div>
  )
}

export default BlogPost