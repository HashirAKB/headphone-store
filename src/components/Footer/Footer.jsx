import React from "react";
import { FaFacebook,FaInstagram,FaTelegram,FaGoogle, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import cards from '../../assets/credit-cards.webp';
import { motion } from "framer-motion";
import { fadeup } from "../Services/Services";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company Details */}
            <motion.div
              variants={fadeup(0.2)}
              initial="hidden"
              whileInView="show"
             className="space-y-6">
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Sem tristique pulvinar erat torquent interdum ultricies. Felis varius justo aliquam, diam feugiat tincidunt.</p>
              <div>
                <p className="flex items-center gap-2 mt-2">
                  <FaPhone></FaPhone>
                  +9 19633078242
                </p>
                <p className="flex items-center gap-2 mt-2">
                  {" "}
                  <FaMapLocation/>
                  Trivandrum, Kerala
                </p>
              </div>
            </motion.div>
            {/* Footer Links */}
            <motion.div
              variants={fadeup(0.5)}
              initial="hidden"
              whileInView="show"
             className="space-y-6">
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* Social Links */}
            <motion.div
              variants={fadeup(0.9)}
              initial="hidden"
              whileInView="show"
             className="space-y-6">
              <h1 className="text-3xl font-bold">Follow Us</h1>
              <div className="flex items-center gap-3">
                <FaFacebook className="text-3xl hover:scale-105 duration-300"/>
                <FaInstagram className="text-3xl hover:scale-105 duration-300"/>
                <FaTelegram className="text-3xl hover:scale-105 duration-300"/>
                <FaGoogle className="text-3xl hover:scale-105 duration-300"/>
              </div>
              <div className="space-y-2">
                <p>Payment Methods</p>
                <img src={cards} className="w-[80%]"></img>
              </div>
            </motion.div>
          </div>
             {/* Copyright Section */}
             <p className="text-white text-center mt-8 border-t-2 pt-8">© 2024. All Rights Reserved || HashirAKB </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
