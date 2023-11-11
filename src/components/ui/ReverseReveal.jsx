import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export const ReverseReveal = ({ children, width = "full" }) => {
  const mainControls = useAnimation();
  const containerRef = useRef();

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY < window.innerHeight / 2 || !containerRef.current) {
        mainControls.start("visible");
      } else {
        mainControls.start("hidden");
      }
    };

    window.addEventListener("scroll", scrollListener);

    mainControls.start("visible");

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [mainControls]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
