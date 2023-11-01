import { Link } from "react-router-dom";

import { motion, useScroll, useTransform } from "framer-motion";

import { useState } from "react";

import { AnimatedProjet } from "../Animations";

export default function ProjetCard({ base, projet, idx }) {
    const [dataClick, setDataClick] = useState("");

    const { scrollYProgress } = useScroll();

    const parallax = useTransform(scrollYProgress, [0, 1], ["-30%", "-10%"]);

    const slowScroll = useTransform(scrollYProgress, [0, 1], ["0", "100vh"]);

    const [activePointerEvents, setActivePointerEvents] = useState(false);

    const slowParallax = useTransform(
        scrollYProgress,
        [0, 1],
        ["-30%", "-25%"]
    );

    function handleClick(e) {
        setDataClick(parseInt(e.dataset.id));
    }

    return (
        <>
            <Link
                to={`${base}projets/${projet.name}`}
                className={`projet-${idx + 1} `}
                key={idx}
                style={{ pointerEvents: activePointerEvents && "all" }}
            >
                <motion.div
                    style={{
                        y: idx + 1 == 2 || idx + 1 == 4 ? slowScroll : null,

                        filter:
                            dataClick === idx + 1
                                ? "grayscale(0)"
                                : "grayscale(1)",
                    }}
                    onClick={(e) => handleClick(e.target)}
                    variants={AnimatedProjet}
                    onAnimationComplete={() => setActivePointerEvents(true)}
                    data-id={idx + 1}
                    data-name={projet.name}
                    whileHover={{
                        filter: "grayscale(0)",
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    <motion.img
                        src={projet.image}
                        alt={projet.image}
                        style={{
                            y:
                                idx + 1 === 2 || idx + 1 === 4
                                    ? slowParallax
                                    : parallax,
                        }}
                    />
                </motion.div>
            </Link>
        </>
    );
}
