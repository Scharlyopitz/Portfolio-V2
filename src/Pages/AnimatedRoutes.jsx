import Error from "./Error";
import Home from "./Home";
import Projets from "./Projets";
import Projet from "./Projet";

import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { AnimationDuration } from "../components/Animations";

import { useEffect } from "react";

export default function AnimatedRoutes({ base, setErrorOff }) {
  const location = useLocation();

  const body = document.querySelector("body");

  const BasicTitle = `Développeur Front-End | Scharly OPITZ`;

  useEffect(() => {
    if (location.pathname === `${base}projets`) {
      body.classList.add("hidden");
      setTimeout(() => {
        body.classList.remove("hidden");
      }, AnimationDuration * 1300);
    }
  }, [location]);

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
