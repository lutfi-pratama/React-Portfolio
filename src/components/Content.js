import profilePhoto from "../assets/profile.jpg";
import project_img1 from "../assets/quiz-app.png";
import project_img2 from "../assets/restaurant-app.png";
import project_img3 from "../assets/football-app.png";
import Project from "./Project";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const listProjects = [
  {
    title: "Interactive Quiz App",
    srcImg: project_img1,
    description:
      "Quiz App build with React.js. The App using interactive multiple choice so really enjoy to play. Question come from Trivia API which contain categories and difficulties. User have to choice the answears before time is out",
    link: "https://quizzaoo.netlify.app/",
  },
  {
    title: "PWA Restaurant App",
    srcImg: project_img2,
    description:
      "Restaurant App is my web project using Progressive Web App method. This project has been approved by the Dicoding team. The App is build with Vanilla.js or doesn't use any framework. The app also cares about user accessibility and web performance",
    link: "https://feeder.netlify.app",
  },
  {
    title: "PWA Football App",
    srcImg: project_img3,
    description:
      "Football App is my web project using Progressive Web App method. This project has been approved by the Dicoding team. The App is build with Vanilla.js or doesn't use any framework. It's also used Webpack to manage entire file.",
    link: "https://football-app-fc3e2.firebaseapp.com",
  },
];

const shape_profile = {
  animate: {
    // scale: [1, 1.3, 2, 1, 1],
    rotate: [0, 720],
    transition: {
      duration: 30,
      yoyo: Infinity,
    },
  },
};

const intro_animation_title = {
  hidden: { scale: 0, x: 400 },
  visible: {
    scale: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const intro_animation_desc = {
  hidden: { scale: 0, x: 400 },
  visible: {
    scale: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const project_title = {
  hidden: { scale: 0, y: -400 },
  visibleProject: {
    scale: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Content = () => {
  const [modal, setModal] = useState(false);
  const [refContent, inViewContent] = useInView();
  const [refProject, inViewProject] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inViewContent) {
      controls.start("visible");
    }

    if (inViewProject) {
      controls.start("visibleProject");
    }
  }, [controls, inViewContent, inViewProject]);

  return (
    <div class="content">
      <div class="content-profile">
        <img class="profile-img" src={profilePhoto} alt="profile" />
        <motion.div
          variants={shape_profile}
          animate="animate"
          className="profile-shape1"
        />
        <motion.div
          variants={shape_profile}
          animate="animate"
          className="profile-shape2"
        />
        <motion.div
          variants={shape_profile}
          animate="animate"
          className="profile-shape3"
        />

        <div className="profile-textIntro">
          <motion.h3
            ref={refContent}
            variants={intro_animation_title}
            initial="hidden"
            animate={controls}
          >
            I'am a Front End Developer
          </motion.h3>
          <motion.p
            ref={refContent}
            variants={intro_animation_desc}
            initial="hidden"
            animate={controls}
          >
            My name is Muhammad Lutfi Pratama. I am a Front-end Developer with a
            lot of progression. I create successful websites that are fast, easy
            to use, and built with best practices. I also have possion for
            modern and minimalist design.
          </motion.p>
        </div>
      </div>
      <div class="content-project">
        <motion.h2
          ref={refProject}
          id="project"
          variants={project_title}
          initial="hidden"
          animate={controls}
        >
          Projects
        </motion.h2>
        <Swiper
          id="project-container"
          slidesPerView={window.innerWidth < 758 ? 1 : 2}
          EffectCoverflow
          navigation={true}
          pagination
          tag="section"
          wrapperTag="ul"
          centeredSlides={true}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            madifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide tag="li">
            <Project
              title={listProjects[0].title}
              src={listProjects[0].srcImg}
              description={listProjects[0].description}
              link={listProjects[0].link}
              modal={modal}
              setModal={setModal}
              title_shape="shape-1"
            />
          </SwiperSlide>
          <SwiperSlide tag="li">
            <Project
              title={listProjects[1].title}
              src={listProjects[1].srcImg}
              description={listProjects[1].description}
              link={listProjects[1].link}
              modal={modal}
              setModal={setModal}
              title_shape="shape-2"
            />
          </SwiperSlide>
          <SwiperSlide tag="li">
            <Project
              title={listProjects[2].title}
              src={listProjects[2].srcImg}
              description={listProjects[2].description}
              link={listProjects[2].link}
              modal={modal}
              setModal={setModal}
              title_shape="shape-1"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Content;
