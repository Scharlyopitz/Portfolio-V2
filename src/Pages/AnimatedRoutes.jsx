import Error from "./Error";
import Home from "./Home";
import Projets from "./Projets";
import Projet from "./Projet";

import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes({ base, setErrorOff }) {
  const location = useLocation();

  const BasicTitle = `Développeur Front-End | Scharly OPITZ`;

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={base} element={<Home BasicTitle={BasicTitle} />} />
          <Route
            path={`${base}projets`}
            element={<Projets base={base} BasicTitle={BasicTitle} />}
          />
          <Route
            path={`${base}projets/:name`}
            element={<Projet base={base} setErrorOff={setErrorOff} />}
          />
          <Route
            path="*"
            element={<Error base={base} setErrorOff={setErrorOff} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
