import AboutDescription1 from "../assets/About1.json";
import AboutDescription2 from "../assets/About2.json";

import {
    PageAboutDescription,
    PageAboutDescriptionDelay,
} from "../components/Animations";

import { motion } from "framer-motion";

export default function AboutDescription() {
    return (
        <>
            <div className="about-description">
                <motion.div
                    variants={PageAboutDescriptionDelay}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="description1 "
                >
                    {AboutDescription1.map((txt, idx) => {
                        return (
                            <div key={idx}>
                                <motion.p variants={PageAboutDescription}>
                                    {txt}
                                </motion.p>
                            </div>
                        );
                    })}
                </motion.div>
                <motion.div
                    variants={PageAboutDescriptionDelay}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="description2 "
                >
                    {AboutDescription2.map((txt, idx) => {
                        return (
                            <div key={idx}>
                                <motion.p variants={PageAboutDescription}>
                                    {txt}
                                </motion.p>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </>
    );
}
