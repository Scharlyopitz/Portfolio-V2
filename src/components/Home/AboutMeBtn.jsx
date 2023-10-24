import { motion } from "framer-motion";

import { AnimatedABoutBtn } from "../Animations";

export default function AboutMeBtn({ setActiveBtn, activeBtn }) {
    return (
        <div onClick={() => setActiveBtn(!activeBtn)} className="about-btn">
            <motion.p
                variants={AnimatedABoutBtn}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                more about me
            </motion.p>
        </div>
    );
}
