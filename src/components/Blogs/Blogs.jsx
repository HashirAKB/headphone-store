import React from "react";
import Blog1 from "../../assets/blogs/blog1.jpg"
import Blog2 from "../../assets/blogs/blog2.jpg"
import Blog3 from "../../assets/blogs/blog3.jpg"
import Blog4 from "../../assets/blogs/blog4.jpg"
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { data } from "autoprefixer";

const blogData = [
  {
    id:1,
    title: "Lorem ipsum odor amet",
    desc:"Lorem ipsum odor amet, consectetuer adipiscing elit. Sem tristique pulvinar erat torquent interdum ultricies. Felis varius justo aliquam, diam feugiat tincidunt. Integer hac fermentum elementum himenaeos netus condimentum.",
    link:"#",
    img:Blog1
  },
  {
    id:2,
    title: "Lorem ipsum odor amet",
    desc:"Lorem ipsum odor amet, consectetuer adipiscing elit. Sem tristique pulvinar erat torquent interdum ultricies. Felis varius justo aliquam, diam feugiat tincidunt. Integer hac fermentum elementum himenaeos netus condimentum.",
    link:"#",
    img:Blog2
  },
  {
    id:3,
    title: "Lorem ipsum odor amet",
    desc:"Lorem ipsum odor amet, consectetuer adipiscing elit. Sem tristique pulvinar erat torquent interdum ultricies. Felis varius justo aliquam, diam feugiat tincidunt. Integer hac fermentum elementum himenaeos netus condimentum.",
    link:"#",
    img:Blog3
  },
  {
    id:4,
    title: "Lorem ipsum odor amet",
    desc:"Lorem ipsum odor amet, consectetuer adipiscing elit. Sem tristique pulvinar erat torquent interdum ultricies. Felis varius justo aliquam, diam feugiat tincidunt. Integer hac fermentum elementum himenaeos netus condimentum.",
    link:"#",
    img:Blog4
  },

];
const Blogs = () => {
  return (
    <>
      <section>
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
          Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {blogData.map((data) => {
              return(
                <>
                <UpdateFollower
                    key={data.id}
                    mouseOptions={{
                      backgroundColor: "black",
                      zIndex:9999,
                      followSpeed:1.5,
                      rotate: -720,
                      scale:3,
                      text: "Read",
                      textFontSize:"3.5px"
                    }}>
                      <div className="flex flex-col items-center justify-center pag-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                    <img src={data.img}></img>
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold line-clamp-2">
                        {data.title}
                      </h1>
                      <p className="line-clamp-2">
                        {data.desc}
                      </p>
                    </div>
                  </div>
                    </UpdateFollower>
                </>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
};

export default Blogs;
