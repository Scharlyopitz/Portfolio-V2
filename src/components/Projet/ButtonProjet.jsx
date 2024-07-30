import { Link } from "react-router-dom";

import ArrowSvg from "../General/Arrowsvg";

import { motion } from "framer-motion";

import {
  AnimateProjetDescription,
  DelayProjetDescription,
} from "../Animations";

export default function ButtonProjet({ projet }) {
  return (
    <motion.div
      variants={DelayProjetDescription}
      initial="initial"
      animate="animate"
      exit="exit"
      className="buttons-container"
    >
      {projet.liens?.github && (
        <Links projet={projet.liens?.github} name="Voir Code" />
      )}
      {projet.liens?.site && (
        <Links projet={projet.liens?.site} name="Voir Site" />
      )}
    </motion.div>
  );
}

function Links({ projet, name }) {
  return (
    <div className="parent-btn">
      <motion.div variants={AnimateProjetDescription} className="button">
        <ArrowSvg />
        <Link to={projet} target="_blank">
          <p>{name}</p>
        </Link>
      </motion.div>
    </div>
  );
}
