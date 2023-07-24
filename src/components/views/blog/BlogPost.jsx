import Link from "next/link";
import { blogs } from "./blogData";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const BlogPost = () => {
  const [disableBoolPrev, setDisableBoolPrev] = useState(false);
  const [disableBoolNext, setDisableBoolNext] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const page = params.get("page");
  // console.log(params.get("page"))
  console.log(router)
  // const page = 1;
  const pageSize = 5;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const selectedItem = blogs.slice(startIndex, endIndex);
  // const [disableBool, setDisableBool] = useState(false);
  // const disableBoolHandler = () => {
  //   setDisableBool(true);
  //   alert("Pagination disabled !");
  // };

  const prevButton = () =>{
    if(startIndex===0){
      setDisableBoolPrev(true)
    }
    else{
      router.push(`/blog?page=${Number(page)-1}`)
    }
  }

  const nextButton = () =>{
    if(endIndex===blogs.length){
      setDisableBoolNext(true) 
    }
    else{
      router.push(`/blog?page=${Number(page)+1}`)
    }
  }
  console.log(selectedItem);
  return (
    <div className="container py-[64px]">
      <div className="mb-[64px]">
        <h1>All posts</h1>
        <hr />
      </div>

      <div className="grid grid-cols-1 gap-16">
        {selectedItem.map((item, index) => (
          <Link
            href={`/blogPost/${item.slug}`}
            className="flex flex-col lg:items-center lg:flex-row gap-8"
            key={index}
          >
            <div className="mb-[14px] w-full sm:w-[490px] h-[318px] relative overflow-hidden">
              <Image src={item.image} fill objectFit="cover" />
            </div>
            <div className="lg:w-[624px]">
              <p className="text-theme-purple font-medium tracking-[3px] mb-5">
                {item.category.name}
              </p>
              <h2 className="mb-4">{item.title}</h2>
              <p>{item.subTitle}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-center gap-4 pt-8">
        <button className={`text-xl font-bold bg-inherit p-0 hover:bg-inherit disabled:opacity-50`} onClick={prevButton} disabled={page==1}> 
          &lt; Prev
        </button>
      <button className={`text-xl font-bold bg-inherit p-0 hover:bg-inherit disabled:opacity-50`} onClick={nextButton} disabled={blogs.length<=endIndex}> 
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
