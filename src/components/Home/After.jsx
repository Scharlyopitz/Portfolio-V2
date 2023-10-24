import { motion } from "framer-motion";

import { AnimatedAfter, DelayAfter } from "../Animations";

export default function After() {
    const lettersAfter = "Développeur Front-End.".split("");
    return (
        <motion.div
            variants={DelayAfter}
            initial="initial"
            animate="animate"
            exit="exit"
            className="after"
        >
            <div>
                {lettersAfter.map((letterAFter, idx) => {
                    return (
                        <div key={idx} className="hiddenLetter">
                            <motion.p variants={AnimatedAfter}>
                                {letterAFter}
                            </motion.p>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
