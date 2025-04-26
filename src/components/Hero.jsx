import { motion } from "framer-motion";

import { styles } from "../styles";
import heroBg from "../assets/herobg.png";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${heroBg})`,
        margin: "0 auto",
      }}
      className="relative w-full h-screen mx-auto bg-cover bg-no-repeat bg-center"
    >
      <div
        className={`paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        style={{ margin: "0 auto" }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="w-full flex flex-col">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Sara</span>
            </h1>
            <p
              className={`${styles.heroSubText} text-white-100`}
              style={{ marginTop: "8px" }}
            >
              I'm a Software Engineer passionate about
              <br className="sm:block hidden" /> building digital experiences
              that work.
            </p>
          </div>

          <HeroAnimation />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
