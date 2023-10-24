import { motion } from "framer-motion";

import { AnimatedName, AnimatedFirstNameDelay } from "../Animations";

import After from "./After";

export default function FirstName() {
    const lettersFirstname = "Opitz".split("");
    return (
        <>
            <motion.div
                variants={AnimatedFirstNameDelay}
                initial="initial"
                animate="animate"
                exit="exit"
                className="firstName"
            >
                {lettersFirstname.map((letterFirstname, idx) => {
                    return (
                        <motion.h1 key={idx} variants={AnimatedName}>
                            {letterFirstname}
                        </motion.h1>
                    );
                })}
                <After />
            </motion.div>
        </>
    );
}
