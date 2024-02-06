import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import { AnimatedNav } from "../Animations";

import { useState } from "react";

export default function Nav() {
  const links = [
    {
      title: "Home".split(""),
      rederect: "/",
    },
    {
      title: "Projets".split(""),
      rederect: "/projets",
    },
  ];

  const [data, setData] = useState("");

  function handleClick(e) {
    const data = parseInt(e.target.dataset.id);
    setData(data);
  }

  function handleMouseEnter(e) {
    const data = parseInt(e.target.dataset.id);
    setData(data);
  }

  return (
    <>
      <header>
        {links.map((link, idx) => {
          return (
            <motion.div
              variants={AnimatedNav}
              initial="initial"
              animate="animate"
              key={idx}
              className="container-link"
            >
              <NavLink
                to={link.rederect}
                data-id={idx}
                onMouseEnter={(e) => handleMouseEnter(e)}
                onClick={(e) => handleClick(e)}
                onMouseLeave={() => setData(false)}
              >
                <motion.div className={`${data === idx && "activeTransition"}`}>
                  {link.title.map((letter, idx) => {
                    return (
                      <p
                        style={{
                          transitionDelay: `${0.05 * idx}s`,
                        }}
                        key={idx}
                      >
                        {letter}
                      </p>
                    );
                  })}
                </motion.div>
                <motion.div
                  className={`under-text ${data === idx && "activeTransition"}`}
                >
                  {link.title.map((letter, idx) => {
                    return (
                      <p
                        style={{
                          transitionDelay: `${0.05 * idx}s`,
                        }}
                        key={idx}
                        className="orangeRed"
                      >
                        {letter}
                      </p>
                    );
                  })}
                </motion.div>
              </NavLink>
            </motion.div>
          );
        })}
      </header>
    </>
  );
}
