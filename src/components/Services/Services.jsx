import React from "react";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

export const fadeup = (delay) => {
  return{
    hidden:{
      opacity:0,
      y:100,
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:0.5,
        delay:delay
      },
    },
  };
}
const ServicesData = [
  {
    id:1,
    title:"Security",
    link: "#",
    icon: Icon1,
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sem tristique pulvinar erat torquent interdum ultricies. Felis varius justo aliquam, diam feugiat tincidunt. Integer hac fermentum elementum himenaeos netus condimentum.",
    delay: 0.5,
  },
  {
    id:2,
    title:"Security",
    link: "#",
    icon: Icon2,
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sem tristique pulvinar erat torquent interdum ultricies. Felis varius justo aliquam, diam feugiat tincidunt. Integer hac fermentum elementum himenaeos netus condimentum.",
    delay: 0.5,
  },
  {
    id:3,
    title:"Security",
    link: "#",
    icon: Icon3,
    desc: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sem tristique pulvinar erat torquent interdum ultricies. Felis varius justo aliquam, diam feugiat tincidunt. Integer hac fermentum elementum himenaeos netus condimentum.",
    delay: 0.5,
  },
]
const Services = () => {
  return <div>
    <section className="bg-gray-100 font-poppins py-8">
    <div className="container py-14">
      <motion.h1
        variants={fadeup(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-3xl font-bold text-center pb-10">
        Services
      </motion.h1>
    <motion.div
      variants={fadeup(0.2)}
      initial="hidden"
      whileInView="show"
     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {ServicesData.map((data) => (
        <UpdateFollower
          key={data.id}
          mouseOptions={{
           backgroundColor:"white",
           zIndex:9999,
           followSpeed:0.5,
           rotate: 720,
           scale:5,
           mixBlendMode: "darken",
           backgroundElement: (
            <motion.div
              variants={fadeup(data.delay)}
              initial="hidden"
              whileInView="show"
            >
              <img src={data.icon}/>
            </motion.div>
           )}}
        >
          <div className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white">
            <img src={data.icon} className="w-[100px] mb-4"></img>
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">
                {data.title}
              </h1>
              <p className="text-center text-sm text-black/75">{data.desc}</p>
            </div>
          </div>
        </UpdateFollower>
      ))}
    </motion.div>
    </div>

    </section>
  </div>;
};

export default Services;
