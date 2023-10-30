import { motion } from "framer-motion";

import {
    PageAboutAnimation,
    AnimationSvg,
    easeInExpo,
    easeOutCubic,
} from "../Animations";
import AboutDescription from "../../Pages/AboutDescription";

export default function AboutMeSection({ activeBtn, setActiveBtn }) {
    return (
        <>
            <AboutDescription />
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
            <motion.div
                variants={PageAboutAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                className="sectionAboutMe"
            >
                <svg>
                    <motion.path variants={AnimationSvg} />
                </svg>
            </motion.div>
        </>
    );
}
