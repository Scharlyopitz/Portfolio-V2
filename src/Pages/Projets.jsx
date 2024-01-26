import ProjetCards from "../components/Projets/ProjetCards";
import LittleCross from "../components/Projets/LittleCross";
import BannerTxt from "../components/Projets/BannerTxt";

import LesProjets from "../assets/Projets.json";

import {
  DelayAnimatedProjet,
  AnimationDuration,
} from "../components/Animations";

import { motion } from "framer-motion";
import TitlePage from "../components/General/TitlePage";

import { useEffect } from "react";

export default function Projets({ base, BasicTitle }) {
  const body = document.querySelector("body");

  useEffect(() => {
    body.classList.add("hidden");

    setTimeout(() => {
      body.classList.remove("hidden");
    }, AnimationDuration * 1300);
  }, []);

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
