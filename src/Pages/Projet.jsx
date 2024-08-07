import { useParams } from "react-router-dom";

import Projets from "../assets/Projets.json";

import DescriptionProjet from "../components/Projet/DescriptionProjet";
import TextAnime from "../components/Projet/TextAnime";
import Cross from "../components/Projet/Cross";
import Error from "./Error";

import { motion } from "framer-motion";

import {
  AnimateProjetPage,
  easeInOutQuart,
  easeInExpo,
} from "../components/Animations";
import TitlePage from "../components/General/TitlePage";

export default function Projet({ setErrorOff }) {
  const { name } = useParams();

  const projet = Projets.find((projet) => projet.name === name);

  if (!projet) {
    return <Error setErrorOff={setErrorOff} />;
  }

  return (
    <>
      <TitlePage title={projet?.name} />
      <motion.section
        variants={AnimateProjetPage}
        initial="initial"
        animate="animate"
        exit="exit"
        id="projet"
      >
        <motion.div
          initial={{ y: "20%", opacity: 0 }}
          animate={{
            y: "-50%",
            opacity: 1,
            transition: { duration: 1.2, ease: easeInOutQuart },
          }}
          exit={{
            y: "20%",
            transition: {
              duration: 0.8,
              ease: easeInExpo,
            },
          }}
          className="img-container"
        >
          <motion.img
            initial={{ y: "-50%" }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 1.2, ease: easeInOutQuart },
            }}
            src={projet?.image}
            alt={projet?.image}
          />
        </motion.div>
        <Cross />
        <TextAnime projet={projet} />
        <DescriptionProjet projet={projet} />
      </motion.section>
    </>
  );
}
