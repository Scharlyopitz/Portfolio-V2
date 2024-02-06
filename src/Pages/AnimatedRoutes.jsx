import Error from "./Error";
import Home from "./Home";
import Projets from "./Projets";
import Projet from "./Projet";

import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes({ setErrorOff }) {
  const location = useLocation();

  const BasicTitle = `Développeur Front-End | Scharly OPITZ`;

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home BasicTitle={BasicTitle} />} />
          <Route
            path="/projets"
            element={<Projets BasicTitle={BasicTitle} />}
          />
          <Route
            path="/projets/:name"
            element={<Projet setErrorOff={setErrorOff} />}
          />
          <Route path="*" element={<Error setErrorOff={setErrorOff} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
