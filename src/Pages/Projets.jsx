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

import { useEffect, useState } from "react";

export default function Projets({ base, BasicTitle }) {
  const body = document.querySelector("body");

  const [responsive, setResponsive] = useState(null);

  useEffect(() => {
    body.classList.add("hidden");
    window.innerWidth < 1024 && setResponsive(false);
    window.innerWidth > 1024 && setResponsive(true);

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
          <ProjetCards
            LesProjets={LesProjets}
            base={base}
            responsive={responsive}
          />
        </motion.div>

        <div className="text-container">
          <BannerTxt />
          <LittleCross />
        </div>
      </section>
    </>
  );
}
