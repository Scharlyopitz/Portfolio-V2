import { Link } from "react-router-dom";

import ArrowSvg from "../General/Arrowsvg";

import { motion } from "framer-motion";

import {
  AnimateProjetDescription,
  DelayProjetDescription,
} from "../Animations";

export default function ButtonProjet({ projet }) {
  const buttonsNames = ["Voir code", "Voir site"];
  return (
    <motion.div
      variants={DelayProjetDescription}
      initial="initial"
      animate="animate"
      exit="exit"
      className="buttons-container"
    >
      {projet?.liens.map((lien, idx) => {
        return (
          <div key={idx} className="parent-btn">
            <motion.div variants={AnimateProjetDescription} className="button">
              <ArrowSvg />
              <Link to={lien} target="_blank">
                <p>{buttonsNames[idx]}</p>
              </Link>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}
