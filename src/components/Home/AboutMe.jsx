import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import AboutMeSection from "./AboutMeSection";
import AboutMeBtn from "./AboutMeBtn";

export default function AboutMe() {
    const [activeBtn, setActiveBtn] = useState(false);

    return (
        <section id="aboutMe">
            <AnimatePresence>{activeBtn && <AboutMeSection />}</AnimatePresence>
            <AboutMeBtn activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        </section>
    );
}
