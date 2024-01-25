import { motion } from "framer-motion";

import {
  AnimateProjetTxt,
  AnimatedProjetChildren,
  AnimateDot,
} from "../Animations";

export default function TextAnime({ projet }) {
  return (
    <>
      <div className="animate-text-container">
        {[...Array(2)].map((_, idx) => {
          return (
            <div key={idx} className={` anime ${projet?.projet}`}>
              {[...Array(4)].map((_, idx) => {
                return (
                  <div key={idx} className="words-container">
                    <NameProjet projet={projet} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

function NameProjet({ projet }) {
  return (
    <>
      {projet?.name.split(" ").map((word, idx) => {
        return (
          <motion.div
            variants={AnimatedProjetChildren}
            initial="initial"
            animate="animate"
            exit="exit"
            key={idx}
            className="word"
          >
            {word.split("").map((letter, idx) => {
              return (
                <motion.p variants={AnimateProjetTxt} key={idx}>
                  {letter}
                </motion.p>
              );
            })}
          </motion.div>
        );
      })}{" "}
      <div className="point-container">
        <motion.div
          variants={AnimateDot}
          initial="initial"
          animate="animate"
          exit="exit"
          className="point"
        >
          &nbsp;•&nbsp;
        </motion.div>
      </div>
    </>
  );
}
