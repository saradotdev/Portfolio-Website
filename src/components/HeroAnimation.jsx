import Lottie from "lottie-react";

import animationData from "../assets/lottie/animation.json";

const HeroAnimation = () => {
  return (
    <div className="w-full flex justify-center">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-[600px] h-[400px]"
      />
    </div>
  );
};

export default HeroAnimation;
