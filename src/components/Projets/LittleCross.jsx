import { motion } from "framer-motion";

import {
    AnimatedCrossHeight,
    AnimatedCrossWidth,
    DelayCross,
    DelayCrossCOntainer,
} from "../Animations";

export default function LittleCross() {
    return (
        <>
            <motion.div
                variants={DelayCrossCOntainer}
                initial="initial"
                animate="animate"
                exit="exit"
                className="littleCross"
            >
                {[...Array(30)].map((_, idx) => {
                    return (
                        <motion.div
                            variants={DelayCross}
                            key={idx}
                            className="cross-container"
                        >
                            {[...Array(3)].map((_, idx) => {
                                return (
                                    <div key={idx} className="cross">
                                        <motion.div
                                            variants={AnimatedCrossWidth}
                                            className="trait--1"
                                        ></motion.div>
                                        <motion.div
                                            variants={AnimatedCrossWidth}
                                            className="trait--2"
                                        ></motion.div>
                                        <motion.div
                                            variants={AnimatedCrossHeight}
                                            className="trait--3"
                                        ></motion.div>
                                        <motion.div
                                            variants={AnimatedCrossHeight}
                                            className="trait--4"
                                        ></motion.div>
                                    </div>
                                );
                            })}
                        </motion.div>
                    );
                })}
            </motion.div>
        </>
    );
}
