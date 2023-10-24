import { Link } from "react-router-dom";

import ArrowSvg from "./Arrowsvg";

import Medias from "../../assets/Medias.json";

import { motion } from "framer-motion";

import { AnimatedContact } from "../Animations";

export default function Contact() {
    return (
        <>
            <div id="contact">
                {Medias.map((socialMedia, idx) => {
                    return (
                        <div key={idx} className="contact-link-container">
                            <motion.div
                                variants={AnimatedContact}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                <ArrowSvg />
                                <Link to={socialMedia.link} target="_blank">
                                    {socialMedia.name}
                                </Link>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
