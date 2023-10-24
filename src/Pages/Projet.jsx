import { useParams } from "react-router-dom";

import Projets from "../assets/Projets.json";

import DescriptionProjet from "../components/Projet/DescriptionProjet";
import TextAnime from "../components/Projet/TextAnime";
import ButtonProjet from "../components/Projet/ButtonProjet";
import Cross from "../components/Projet/Cross";

import { motion } from "framer-motion";

import { AnimateProjetPage } from "../components/Animations";

export default function Projet({ base }) {
    const { name } = useParams();

    const projet = Projets.find((projet) => projet.name === name);

    return (
        <>
            <section id="projet">
                <motion.img
                    variants={AnimateProjetPage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    src={projet.image}
                    alt={projet.image}
                />
                <Cross base={base} />
                <TextAnime projet={projet} />
                <DescriptionProjet projet={projet} />
                <ButtonProjet projet={projet} />
            </section>
        </>
    );
}
