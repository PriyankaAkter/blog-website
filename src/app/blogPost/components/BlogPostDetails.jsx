
import Image from "next/image"
const BlogPostDetails = () => {
  return (
    <div className="container">
        <div className="flex justify-center my-16">
        <div className="w-[768px]">
            <div className="flex gap-4 flex-col sm:flex-row mb-6">
              <div>
                 <Image src="/assests/images/testimonial.png" width={48} height={48} />
              </div>
              <div>
                 <h4>Jonathan Vallem</h4>
                 <p>New york, USA</p>
              </div>
            </div>
            <h1 className="mb-8">Step-by-step guide to choosing great font pairs</h1>
            <div className="flex gap-2 items-center">
              <div className="w-6 h-6 relative">
                 <Image src="/assests/images/home/catagory2.svg" fill objectFit="cover" />
               </div>
               <h4>Startup</h4>
            </div>
        </div>
        </div>
        <div className="w-full h-[300px]  lg:h-[582px] relative">
              <Image src='/assests/images/blog/blogpostHero.png' fill objectFit="cover" />
        </div>
       <div className="flex justify-center mt-16">
       <div className="w-[843px]">
        <div className='mb-12'>
          <h1 className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        </div>
        <div className='mb-12'>
          <h1 className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        </div>
        <div>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Non blandit massa enim nec scelerisque</li>
                <li>Neque egestas congue quisque egestas</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        </div>
        <div className='mb-12'>
          <h1 className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
        </div>
       </div>
       </div>
    </div>
  )
}

export default BlogPostDetails