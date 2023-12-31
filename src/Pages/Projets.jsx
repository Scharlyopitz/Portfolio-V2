import ProjetCards from "../components/Projets/ProjetCards";
import LittleCross from "../components/Projets/LittleCross";
import BannerTxt from "../components/Projets/BannerTxt";

import LesProjets from "../assets/Projets.json";

import { DelayAnimatedProjet } from "../components/Animations";

import { motion } from "framer-motion";
import TitlePage from "../components/General/TitlePage";

export default function Projets({ base, BasicTitle }) {
    return (
        <>
            <TitlePage title={BasicTitle} />
            <section id="projets">
                <div className="background"></div>

                <motion.div
                    className="container-projets"
                    variants={DelayAnimatedProjet}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <ProjetCards LesProjets={LesProjets} base={base} />
                </motion.div>

                <div className="text-container">
                    <BannerTxt />
                    <LittleCross />
                </div>
            </section>
        </>
    );
}
