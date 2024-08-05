import React, { act } from "react";
import Headphone1 from '../../assets/headphone.png';
import Headphone2 from '../../assets/headphone2.png';
import Headphone3 from '../../assets/headphone3.png';
import Headphone4 from '../../assets/headphone4.png';
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    subtitle:"Ultra-lightweight design for comfortable all-day wear.",
    price: "$100",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    "id": 2,
    "image": Headphone2,
    "title": "Headphones Noise Cancelling",
    "subtitle": "Experience immersive sound with advanced noise-cancellation.",
    "price": "$150",
    "modal": "Modal Black",
    "bgColor": "#343a40"
  },
  {
    "id": 3,
    "image": Headphone3,
    "title": "Headphones Over-Ear",
    "subtitle": "Comfortable over-ear design for extended listening sessions.",
    "price": "$120",
    "modal": "Modal White",
    "bgColor": "#007bff"
  },
  {
    "id": 4,
    "image": Headphone1,
    "title": "Headphones Sports",
    "subtitle": "Durable and sweat-resistant, perfect for workouts.",
    "price": "$90",
    "modal": "Modal Blue",
    "bgColor": "#343a40"
  }  
]

const fadeUp = (delay) => {
  return{
    hidden:{
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show:{
      opacity: 1,
      y: 0,
      scale: 1,
      transition:{
        duration: 0.5,
        delay: delay,
        ease: easeInOut
      },
    },
    exit:{
      opacity: 0,
      y:100,
      scale: 0.5,
      transition:{
        duration: 0.2,
        ease: easeInOut
      },
    },
  };
};

const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);
  const handleActiveData = (data) =>{
   setActiveData(data);
  }
  return (
    <>
      <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          {/* Headphone Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor:"white",
                    zIndex:9999,
                    followSpeed:0.5,
                    mixBlendMode:"difference",
                    scale:10
                  }}
                >
                  <motion.h1 
                  key={activeData.id}
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-3xl lg:text-6xl font-bold font-varela">
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                  <motion.p 
                  key={activeData.id}
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80">
                    {activeData.subtitle}
                  </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
              <UpdateFollower
                  mouseOptions={{
                    backgroundColor:activeData.bgColor,
                    zIndex:9999,
                    followSpeed:0.5,
                    rotate: -720,
                    scale:6,
                    backgroundElement:<div>
                      <img src={activeData.image}/>
                    </div>,
                  }}
                >
              <motion.button
                  key={activeData.id}
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
              style={{
                backgroundColor: activeData.bgColor
              }} className="px-4 py-2 inline-block font-normal rounded-sm">Buy and Listen</motion.button>
              </UpdateFollower>
              </AnimatePresence>
              {/* Headphone list separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm">Top headphones for you.</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </div>
              {/* Headphone list switcher */}
              <div className="grid grid-cols-4 gap-10">
                {headphoneData.map((item) => {
                  return(
                    <div 
                    key={item.id}
                    onClick={() => handleActiveData(item)}
                    className="grid grid-cols-2 place-items-center cursor-pointer">
                      <div>
                        <img className="w-[200px]" src={item.image}></img>
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{item.price}</p>
                        <p className="text-xs font-normal text-nowrap">{item.modal}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex flex-col justify-end items-center">
            <img className="w-[300px] md:w-[400px] xl:w-[550px]" src={activeData.image}></img>
          </div>
          {/* Whatsapp Icon */}
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
          <a href="">
            <FaWhatsapp/>
          </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
