import React from "react";
import HeadPhone4 from '../../assets/headphone4.png';
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { fadeup } from "../Services/Services";


const Banner = () => {
  return(
    <>
    <section>
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
      {/* Banner Image */}
      <div>
        <motion.img
          initial={{
            opacity:0,
            x: -100,
            rotate: -180,
          }}
          animate={{
            opacity:1,
            x: 0,
            rotate: 0,
          }}
          transition={{
            duration:0.8,
            delay:0.2,
            ease:"easeInOut"
          }}
          src={HeadPhone4} className="w-[300px] md:w-[400px]"></motion.img>
      </div>
      {/* Banner Text info */}
      <div
        variants={fadeup(0.2)}
        initial="hidden"
        whileInView="show"
       className="flex flex-col justify-center">
        <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
          <motion.h1
            variants={fadeup(0.2)}
            initial="hidden"
            whileInView="show"
           className="text-3xl lg:text-4xl font-semibold font-poppins">
            The latest headphone with the latest technology
          </motion.h1>
          <motion.p
          variants={fadeup(0.6)}
          initial="hidden"
          whileInView="show"
      >Lorem ipsum odor amet, consectetuer adipiscing elit. Sem tristique pulvinar erat torquent interdum ultricies.</motion.p>
          <UpdateFollower
          mouseOptions={{
           backgroundColor:"white",
           zIndex:9999,
           followSpeed:0.5,
           scale:5,
           mixBlendMode: "difference",
          }}
        >
          <motion.button 
            variants={fadeup(1)}
            initial="hidden"
            whileInView="show"
          className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white ">Learn More</motion.button>
        </UpdateFollower>
      </div>
      </div>
      </div>
    </section>
  </>
  )
};

export default Banner;
