import { useParams } from "react-router-dom";

import Projets from "../assets/Projets.json";

import DescriptionProjet from "../components/Projet/DescriptionProjet";
import TextAnime from "../components/Projet/TextAnime";
import Cross from "../components/Projet/Cross";

import { motion } from "framer-motion";

import {
    AnimateProjetPage,
    easeInOutQuart,
    easeInExpo,
} from "../components/Animations";

export default function Projet({ base }) {
    const { name } = useParams();

    const projet = Projets.find((projet) => projet.name === name);

    return (
        <>
            <motion.section
                variants={AnimateProjetPage}
                initial="initial"
                animate="animate"
                exit="exit"
                id="projet"
            >
                <motion.div
                    initial={{ y: "20%" }}
                    animate={{
                        y: "-50%",
                        transition: { duration: 1.2, ease: easeInOutQuart },
                    }}
                    exit={{
                        y: "20%",
                        transition: {
                            // delay: 0.2,
                            duration: 0.8,
                            ease: easeInExpo,
                        },
                    }}
                    className="img-container"
                >
                    <motion.img
                        // initial={{ scale: 1.1 }}
                        // animate={{
                        //     scale: 1,
                        //     transition: { duration: 1.2, ease: easeInOutQuart },
                        // }}
                        src={projet.image}
                        alt={projet.image}
                    />
                </motion.div>
                <Cross base={base} />
                <TextAnime projet={projet} />
                <DescriptionProjet projet={projet} />
            </motion.section>
        </>
    );
}
