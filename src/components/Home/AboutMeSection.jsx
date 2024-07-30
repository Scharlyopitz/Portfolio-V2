import { motion } from "framer-motion";

import { PageAboutAnimation, easeInExpo, easeOutCubic } from "../Animations";
import AboutDescription from "../../Pages/AboutDescription";
import { useEffect, useRef, useState } from "react";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function AboutMeSection({ activeBtn, setActiveBtn }) {
  return (
    <>
      <AboutDescription />
      <Cross activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      <Trait />
      <PageAbout />
    </>
  );
}
function Cross({ activeBtn, setActiveBtn }) {
  return (
    <div
      className="cross-back-container"
      onClick={() => setActiveBtn(!activeBtn)}
    >
      <motion.div
        initial={{ y: "110%" }}
        animate={{
          y: 0,
          transition: {
            duration: 0.5,
            ease: easeOutCubic,
            delay: 0.65,
          },
        }}
        exit={{
          y: "110%",
          transition: { duration: 0.5, ease: easeInExpo },
        }}
        className="cross-back"
      ></motion.div>
    </div>
  );
}

function Trait() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{
        height: "25%",
        transition: {
          duration: 0.5,
          ease: easeOutCubic,
          delay: 0.5,
        },
      }}
      exit={{
        height: 0,
        transition: { duration: 0.6, ease: easeInExpo },
      }}
      className="trait"
    ></motion.div>
  );
}

function PageAbout() {
  return (
    <motion.div
      variants={PageAboutAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="sectionAboutMe"
    >
      <Svg />
    </motion.div>
  );
}

function Svg() {
  const ref = useRef(null);

  const [height, setHeight] = useState();

  useEffect(() => {
    function resize() {
      setHeight(ref.current.clientHeight);
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const initialSvgPath = `M0 0 Q ${window.innerWidth / 2} ${height * 2} ${
    window.innerWidth
  } 0`;

  const animatedSvgPath = `M0 0 Q ${window.innerWidth / 2} 0 ${
    window.innerWidth
  } 0`;

  const AnimationSvg = {
    initial: { d: initialSvgPath },
    animate: {
      d: animatedSvgPath,
      transition: {
        duration: 1,
        ease: [0.65, 0, 0.35, 1],
      },
    },
    exit: {
      d: initialSvgPath,
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
        delay: 0.3,
      },
    },
  };
  return (
    <svg ref={ref}>{height > 0 && <motion.path variants={AnimationSvg} />}</svg>
  );
}
