import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { AnimateArrow } from "../Animations";

export default function Cross({ base }) {
  return (
    <Link className="cross" to={`${base}projets`}>
      <motion.div
        className="svg"
        variants={AnimateArrow}
        initial="initial"
        animate="animate"
        exit="exit"
      ></motion.div>
    </Link>
  );
}
