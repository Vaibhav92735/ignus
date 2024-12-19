import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentPage === 0) {
      setCurrentPage(1);
    } else if (event.deltaY < 0 && currentPage === 1) {
      setCurrentPage(0);
    }
  };

  const slideVariantsFirsttoSecond = {
    initial: { y: "-100vh" },
    enter: { y: 0, transition: { duration: 1, ease: "easeInOut" } },
    exit: { y: "-100vh", transition: { duration: 1, ease: "easeInOut" } },
  };

  const slideVariantsSecondtoFirst = {
    initial: { y: "100vh" },
    enter: { y: 0, transition: { duration: 1, ease: "easeInOut" } },
    exit: { y: "100vh", transition: { duration: 1, ease: "easeInOut" } },
  };

  const opacityVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const perspectiveVariants = {
    initial: { scale: 1, y: 0 },
    enter: { scale: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
    exit: {
      scale: 0.9,
      y: -50,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div
      onWheel={handleScroll}
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      
      <AnimatePresence>
        {currentPage === 0 && (
          <motion.div
            key="firstPage"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={slideVariantsFirsttoSecond}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
          >
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={perspectiveVariants}
            >
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={opacityVariants}
              >
                <FirstPage />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        {currentPage === 1 && (
          <motion.div
            key="secondPage"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={slideVariantsSecondtoFirst}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
          >
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={perspectiveVariants}
            >
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={opacityVariants}
              >
                <SecondPage />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;