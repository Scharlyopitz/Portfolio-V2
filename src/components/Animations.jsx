const easeInOutQuint = [0.83, 0, 0.17, 1];
const easeInOutCubic = [0.65, 0, 0.35, 1];
const easeOutCubic = [0.33, 1, 0.68, 1];
const easeInOutQuart = [0.76, 0, 0.24, 1];
const easeInCubic = [0.32, 0, 0.67, 0];
const easeOutQuint = [0.22, 1, 0.36, 1];
const easeInExpo = [0.7, 0, 0.84, 0];

const DelayTransitionPage = 0.5;

export const AnimatedName = {
    initial: {
        y: "100%",
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: easeOutCubic },
    },
    exit: {
        y: "-100%",
        opacity: 0,
        transition: { duration: 1, ease: easeInOutQuint },
    },
};

export const AnimatedNameDelay = {
    animate: {
        transition: {
            delayChildren: DelayTransitionPage,
            staggerChildren: 0.04,
        },
    },
    exit: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export const AnimatedFirstNameDelay = {
    animate: {
        transition: {
            delayChildren: DelayTransitionPage,
            staggerChildren: 0.03,
        },
    },
    exit: {
        transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
};

// ANIMATION AFTER HOME PAGE

export const AnimatedAfter = {
    initial: {
        x: "-110%",
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: easeOutCubic,
        },
    },
    exit: {
        y: "-110%",
        opacity: 0,
        transition: { duration: 0.6, ease: easeInOutQuint },
    },
};

export const DelayAfter = {
    animate: {
        transition: { delayChildren: 0.8 },
    },
    exit: {
        transition: { staggerChildren: 0.005, staggerDirection: -1 },
    },
};

// ANIMATION CONTACT

export const AnimatedContact = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: easeOutCubic,
        },
    },
    exit: {
        y: "100%",
        transition: {
            duration: 0.5,
            ease: easeOutCubic,
        },
    },
};

// ANIMATION NAVBAR

export const AnimatedNav = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            delay: 0.5,
            duration: 0.5,
            ease: easeOutCubic,
        },
    },
};

// ANIMATIONS PAGE PROJETS

// ANIMATION TEXTE

export const AnimationDuration = 1;

export const AnimatedProjetsTxt = {
    initial: {
        x: "-100%",
    },
    animate: {
        x: 0,
        transition: {
            delay: DelayTransitionPage,
            duration: 1.5,
            ease: easeOutQuint,
        },
    },
    exit: {
        x: "100%",
        transition: { duration: AnimationDuration, ease: easeInOutQuart },
    },
};

// ANIMATION LITTLECROSS

export const DelayCross = {
    animate: {
        transition: {
            delayChildren: DelayTransitionPage,
        },
    },
};

export const DelayCrossCOntainer = {
    animate: {
        transition: {
            staggerChildren: 0.015,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.015,
        },
    },
};

export const AnimatedCrossWidth = {
    initial: {
        width: 0,
    },
    animate: {
        width: "50%",
        transition: { duration: 1.5, ease: easeOutQuint },
    },
    exit: {
        width: 0,
        transition: { duration: 0.5, ease: easeInCubic },
    },
};

export const AnimatedCrossHeight = {
    initial: {
        height: 0,
    },
    animate: {
        height: "50%",
        transition: { duration: 1.5, ease: easeOutQuint },
    },
    exit: {
        height: 0,
        transition: { duration: 0.5, ease: easeInCubic },
    },
};

// ANIMATION DES PROJETS

const initialPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
const animatedPath = "polygon(0 100%, 100% 100%, 100% 0, 0 0)";
const exitPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";

export const AnimatedProjet = {
    initial: {
        opacity: 0,
        clipPath: initialPath,
    },
    animate: {
        opacity: 1,
        clipPath: animatedPath,
        transition: {
            duration: AnimationDuration,
            ease: easeOutQuint,
        },
    },
    exit: {
        clipPath: exitPath,
        opacity: 0,
        transition: {
            duration: AnimationDuration,
            ease: easeInOutQuart,
        },
    },
};

export const DelayAnimatedProjet = {
    animate: {
        transition: {
            delayChildren: 0.7,
            staggerChildren: 0.05,
        },
    },
};

// PAGE PROJET

// ANIMATION TRANSITION PAGE

export const AnimateProjetPage = {
    initial: {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",

        scale: 1.5,
    },
    animate: {
        scale: 1,
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        transition: {
            delay: 0.1,
            duration: 1.2,
            ease: easeInOutQuart,
        },
    },
    exit: {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        transition: {
            duration: 1.2,
            ease: easeInOutCubic,
        },
    },
};

const DlayForProjet = 0.8;

// ANIMATION FLECHE

export const AnimateArrow = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,

        transition: {
            delay: DlayForProjet,
            duration: 0.5,
            ease: easeInOutCubic,
        },
    },
    exit: {
        y: "100%",
        transition: {
            duration: 0.8,
            ease: easeInOutQuint,
        },
    },
};

// ANIMATION TEXTE

export const AnimateProjetTxt = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.7,
            ease: easeOutCubic,
        },
    },
    exit: {
        y: "100%",
        transition: {
            duration: 0.55,
            ease: easeInExpo,
        },
    },
};

export const AnimatedProjetChildren = {
    animate: {
        transition: {
            delayChildren: DlayForProjet,
            staggerChildren: 0.02,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.02,
        },
    },
};

// ANIMATION POINT

export const AnimateDot = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            delay: DlayForProjet,
            duration: 0.7,
            ease: easeOutCubic,
        },
    },
    exit: {
        y: "100%",
        transition: {
            duration: AnimationDuration,
            ease: easeInOutQuint,
        },
    },
};

// ANIMATION DESCRIPTION

export const AnimateProjetDescription = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.7,
            ease: easeOutCubic,
        },
    },
    exit: {
        y: "110%",
        transition: {
            duration: 0.5,
            ease: easeInExpo,
        },
    },
};

export const DelayProjetDescription = {
    animate: {
        transition: {
            delayChildren: DlayForProjet,
            staggerChildren: 0.03,
        },
    },
    exit: {
        transition: {
            staggerDirection: -1,
            staggerChildren: 0.03,
        },
    },
};

// ANIMATION PAGE ABOUT

export const PageAboutAnimation = {
    initial: {
        y: "calc(-100% - 100px)",
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeInOutCubic,
        },
    },
    exit: {
        y: "calc(-100% - 100px)",
        transition: {
            duration: 0.8,
            delay: 0.3,
            ease: easeInOutCubic,
        },
    },
};

export const PageAboutDescription = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: easeInOutCubic,
        },
    },
    exit: {
        y: "110%",
        transition: {
            duration: 0.5,
            ease: easeInExpo,
        },
    },
};

export const PageAboutDescriptionDelay = {
    animate: {
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.03,
        },
    },
    exit: {
        transition: {
            staggerDirection: -1,
            staggerChildren: 0.03,
        },
    },
};

// SVG

const initialSvgPath = `M0 0 Q ${window.innerWidth / 2} 200 ${
    window.innerWidth
} 0`;

const animatedSvgPath = `M0 0 Q ${window.innerWidth / 2} 0 ${
    window.innerWidth
} 0`;

export const AnimationSvg = {
    initial: { d: initialSvgPath },
    animate: {
        d: animatedSvgPath,
        transition: {
            duration: AnimationDuration,
            ease: easeInOutCubic,
        },
    },
    exit: {
        d: initialSvgPath,
        transition: {
            duration: 0.6,
            ease: easeInOutCubic,
            delay: 0.3,
        },
    },
};

// ANIMATION BTN ABOUT ME

export const AnimatedABoutBtn = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,

        transition: {
            duration: AnimationDuration,
            ease: easeInOutQuint,
            delay: 0.8,
        },
    },
    exit: {
        y: "-100%",
        transition: { duration: AnimationDuration, ease: easeInOutQuint },
    },
};
