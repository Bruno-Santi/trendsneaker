import "animate.css";
import { useState } from "react";
import { useNavigateTo } from ".";

export const useArrowBack = () => {
  const { handleNavigate } = useNavigateTo();
  const [backing, setBacking] = useState(false);
  const handleBack = () => {
    setBacking(true);
    setTimeout(() => {
      handleNavigate(-1);
    }, 1200);
  };
  const animateBack = "animate__fadeOutLeft animate__animated animate__delay-0.5s animate__slow";
  const animateIn = "animate__fadeInLeft animate__animated animate__delay-0.5s animate__slow";

  const animateBackArrow = `${animateBack} absolute text-main/40 text-5xl lg:text-6xl top-24 left-6 lg:top-40 lg:left-20 duration-500 hover:scale-110 hover:text-secondary hover:opacity-100`;
  const animateInArrow = `${animateIn} absolute text-main/40 text-5xl lg:text-6xl top-24 left-6 lg:top-40 lg:left-20 duration-500 hover:scale-110 hover:text-secondary hover:opacity-100`;
  return {
    animateBack,
    animateIn,
    animateBackArrow,
    animateInArrow,
    backing,
    handleBack,
  };
};
