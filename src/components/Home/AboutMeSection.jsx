import { motion } from "framer-motion";

import { PageAboutAnimation, AnimationSvg } from "../Animations";
import AboutDescription from "../../Pages/AboutDescription";

export default function AboutMeSection() {
    return (
        <>
            <AboutDescription />
            <motion.div
                initial={{ height: 0 }}
                animate={{
                    height: "25%",
                    transition: {
                        duration: 0.5,
                        ease: [0.33, 1, 0.68, 1],
                        delay: 0.5,
                    },
                }}
                exit={{
                    height: 0,
                    transition: { duration: 0.6, ease: [0.7, 0, 0.84, 0] },
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
