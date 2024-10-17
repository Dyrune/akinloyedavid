import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = ({ moveSlideRight }) => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={"Architecture,"} />
      <BannerRowCenter title={"Planning,"} playMarquee={playMarquee} />
      <BannerRowBottom title={"Solutions."} moveSlideRight={moveSlideRight} />
    </motion.div>
  );
};

// AnimatedLetters component with animation capability
const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className="row-title"
    variants={disabled ? null : banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index) => (
      <motion.span
        className="row-letter"
        key={index}
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

// Top row with animated letters
const BannerRowTop = ({ title }) => {
  return (
    <div className="banner-row">
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className="row-col"
      >
        <span className="row-message">
          " I design buildings and structures, balancing aesthetics, functionality, and safety. They create detailed plans and collaborate with clients and engineers to bring their visions to life."
        </span>
      </motion.div>
    </div>
  );
};

// Bottom row with animated letters and scroll functionality
const BannerRowBottom = ({ title, moveSlideRight }) => {
  return (
    <div className="banner-row center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className="scroll"
        onClick={moveSlideRight} // Trigger fullPage.js scroll to the next slide
        style={{ cursor: 'pointer' }} // Make it clear the text is clickable
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          scroll
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

// Middle row with static (non-animated) letters
const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className="banner-row marquee">
      <div className="marquee__inner">
        <span className="row-title">{title}</span>
      </div>
    </div>
  );
};

export default Banner;
