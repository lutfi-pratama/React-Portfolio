import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

const navMotion = {
  whileHover: {
    scale: 1.5,
    color: "#f8e112",
  },
  whileTap: {
    scale: 0.9,
  },
};

const Navigation = () => {
  const [openHamburberNav, setOpenHamburgerNav] = useState(false);
  const [scrollNavChanged, handleScrollNavChanged] = useState(1);

  const handleHamburger = () => {
    setOpenHamburgerNav(!openHamburberNav);
  };

  const handleScroll = () => {
    if (window.scrollY >= 1400) handleScrollNavChanged(3);
    else if (window.scrollY >= 750) handleScrollNavChanged(2);
    else handleScrollNavChanged(1);
  };

  window.addEventListener("scroll", handleScroll);

  const scrollNavEvent = () => {
    if (scrollNavChanged === 1) return ``;
    else if (scrollNavChanged === 2) return `showNavBg`;
    else return `showNavSmallBg animate__animated animate__flipInX`;
  };

  return (
    <nav className={`nav-main ${scrollNavEvent()}`}>
      <div class="nav-logo">
        <img src={Logo} class="brand-logo" id="site-logo" alt="Logo" />
      </div>
      <div className="nav-hamburger" onClick={handleHamburger}>
        <div
          className={`line ${openHamburberNav ? `changeHamburger` : ``}`}
        ></div>
        <div
          className={`line ${openHamburberNav ? `changeHamburger` : ``}`}
        ></div>
        <div
          className={`line ${openHamburberNav ? `changeHamburger` : ``}`}
        ></div>
      </div>
      <ul className={`nav-link ${openHamburberNav ? `openNav` : ``}`}>
        <li>
          <motion.div
            variants={navMotion}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <a href="#project" onClick={handleHamburger}>
              Projects
            </a>
          </motion.div>
        </li>
        <li>
          <motion.div
            variants={navMotion}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <a href="#contact" onClick={handleHamburger}>
              Contacts
            </a>
          </motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
