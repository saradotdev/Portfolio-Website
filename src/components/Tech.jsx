import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills</p>
        <h2 className={styles.sectionHeadText}>TechStack.</h2>
      </motion.div>

      <div
        className="flex flex-row flex-wrap justify-center gap-10"
        style={{
          marginTop: "16px",
        }}
      >
        {technologies.map((technology) => (
          <div
            className="w-28 h-28"
            style={{
              marginTop: "16px",
            }}
            key={technology.name}
          >
            {isMobile ? (
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain"
              />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
