import React, { useState } from "react";
import Logo from "../assets/logo.png";

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
          <a href="#project" onClick={handleHamburger}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleHamburger}>
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
