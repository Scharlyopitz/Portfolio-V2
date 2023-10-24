import { motion } from "framer-motion";

import { AnimatedName, AnimatedNameDelay } from "../Animations";

export default function Name() {
    const lettersName = "Scharly".split("");
    return (
        <motion.div
            variants={AnimatedNameDelay}
            initial="initial"
            animate="animate"
            exit="exit"
            className="name"
        >
            {lettersName.map((letterName, idx) => {
                return (
                    <motion.h1 key={idx} variants={AnimatedName}>
                        {letterName}
                    </motion.h1>
                );
            })}
        </motion.div>
    );
}
