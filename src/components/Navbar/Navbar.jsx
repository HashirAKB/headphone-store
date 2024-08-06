/**
 * 1. Created NavBar Skeleton.
 * 2. Listed NavBar items using NavBar menu with map fn.
 * 3. Installed react-icons, and framer-motion.
 * 4. Imported MDMenu and SLEarphones.
 * 5. Set colors, container styles and fontfamily in tailwind config.
 * 6. Imported gfont valera round into index.css.
 * 7. Gave tailwind css styles.
 * 8. Added react mouse follower to app.jsx
 * 9. Imported UpdateFollower to style mouse hover.
 * 10. Imported framer motion and used to animate navbar.
 */
import React from "react";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "https://github.com/HashirAKB",
  },
  {
    id: 2,
    title: "Categories",
    link: "https://github.com/HashirAKB",
  },{
    id: 3,
    title: "Blog",
    link: "https://github.com/HashirAKB",
  },{
    id: 4,
    title: "About",
    link: "https://github.com/HashirAKB",
  },{
    id: 5,
    title: "Contact",
    link: "https://github.com/HashirAKB",
  },
]
const Navbar = () => {
  return (
  <>
    <div className="bg-brandDark text-white py-8 font-varela">
      <motion.nav
       initial={{ opacity: 0}}
       animate={{ opacity: 1}}
       transition={{duration: 1, delay: 0.5}}
       className="container flex justify-between items-center">
        {/** Logo Section*/}
        <div>
          <a href="https://github.com/HashirAKB" className="text-xl font-bold uppercase">
            Playing / <span className="font-extralight text-white/70">Market</span>
          </a>
        </div>
        {/** Menu Section*/}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 ">
            {
              NavbarMenu.map((item) => (
                <li key={item.id}>
                <UpdateFollower mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}>
                  <a href={item.link} className="inline-block text-sm py-2 px-3 uppercase">{item.title}</a>
                </UpdateFollower>
                </li>
              ))
            }
            <UpdateFollower mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.5,
                  scale: 5,
                  mixBlendMode: "difference",
                }}>
                <button className="text-xl ps-14">
                  <SlEarphones/>
                </button>
            </UpdateFollower>
          </ul>
        </div>
        {/** Mobile Hamburger Section*/}
        <div className="md:hidden">
          <MdMenu className="text-4xl"/>
        </div>
        {/** */}
      </motion.nav>
    </div>
  </>
  )
};

export default Navbar;
