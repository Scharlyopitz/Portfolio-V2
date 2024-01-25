import {
  AnimateProjetDescription,
  DelayProjetDescription,
  AnimateProjetTrait,
} from "../Animations";

import { motion } from "framer-motion";
import ButtonProjet from "./ButtonProjet";

export default function DescriptionProjet({ projet }) {
  return (
    <>
      <motion.div
        className="txtProjet"
        variants={DelayProjetDescription}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {projet?.description.map((desc, idx) => {
          return (
            <div key={idx} className="projet_description">
              <motion.p variants={AnimateProjetDescription}>{desc}</motion.p>
            </div>
          );
        })}
        <motion.div
          variants={AnimateProjetTrait}
          className="projet_description_trait"
        ></motion.div>
        <ButtonProjet projet={projet} />
      </motion.div>
    </>
  );
}
