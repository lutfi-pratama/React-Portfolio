import { Github, Linkedin, Instagram } from "react-bootstrap-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const linkAnimate = {
  hidden: { scale: 0 },
  visible: {
    scale: [2, 4, 2],
    transition: {
      duration: 0.6,
    },
  },
  hover: {
    scale: 2.5,
  },
  click: {
    scale: [1.5, 2, 1.5, 2],
  },
};

const Footer = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <footer>
      <div class="contact" id="contact">
        <ul>
          <motion.div
            ref={ref}
            variants={linkAnimate}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            whileTap="click"
          >
            <a
              href="https://www.linkedin.com/in/muhammad-lutfi-pratama-4ab052217"
              className="contact-item"
            >
              <Linkedin />
            </a>
          </motion.div>

          <motion.div
            ref={ref}
            variants={linkAnimate}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            whileTap="click"
          >
            <a href="https://github.com/lutfi-pratama" className="contact-item">
              <Github />
            </a>
          </motion.div>

          <motion.div
            ref={ref}
            variants={linkAnimate}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            whileTap="click"
          >
            <a
              href="https://www.instagram.com/lutfi.pratama22/"
              className="contact-item"
            >
              <Instagram />
            </a>
          </motion.div>
          {/* <GitHub class="contact-item" color="disable" fontSize="small" />
          <Instagram class="contact-item" color="disable" fontSize="small" /> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
