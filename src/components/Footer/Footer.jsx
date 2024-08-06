import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company Details */}
            <div className="space-y-6">
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
            </div>
            {/* Footer Links */}
            <div className="space-y-6">
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
            </div>
            {/* Social Links */}
            {/* Copyright Section */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
