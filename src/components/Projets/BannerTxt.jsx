import { motion } from "framer-motion";

import { AnimatedProjetsTxt } from "../Animations";

export default function BannerTxt() {
    const lettersProjet = "Projets".split("");
    return (
        <div className="title">
            {lettersProjet.map((letter, idx) => {
                return (
                    <div key={idx}>
                        <motion.p
                            variants={AnimatedProjetsTxt}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {letter}
                        </motion.p>
                    </div>
                );
            })}
        </div>
    );
}
