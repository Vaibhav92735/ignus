import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Lottie from "lottie-react";
import Fire from "./Fire.json"
import { Link } from "react-router-dom"
import "./landingpage.css";
import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState(null); //define touchStart state
  const [touchEnd, setTouchEnd] = useState(null); //define touchEnd state
  const location = useLocation();
  const [flag, setFlag] = useState((location.state) || '1');



  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1100);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [timeRemaining, setTimeRemaining] = useState('');
  const targetDate = new Date('Feb 9, 2025 00:00:00').getTime();
  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
    if (timeLeft <= 0) {
      setTimeRemaining({ ended: true });
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      setTimeRemaining(`${days}`);
    }
  };

  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, []);



  // controls for the touch device s 
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY); // Record the initial touch Y position
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY); // Update touchEnd as the user moves
  };

  const CSCamelVariant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 0.5,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 1.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const CSCamel2Variant = {
    exit: {
      y: "100vh",
      transition: {
        delay: 1.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const CSLowerVariant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 0.25,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 0.25,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 4,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const CSOuterVariant = {
    initial: {
      y: "100vh",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const OuterVariant = {
    initial: {
      y: "100vh",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 2.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const cloudVariant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 1.3,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const frame5Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 1,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 1.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const plant2Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 2,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 2,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const frame19Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 1.25,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 1.25,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const frame7Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 1.35,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 1.35,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const frame8Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 1.5,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 1.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 0.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const frame9Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 1.65,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 1.65,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 0.75,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const frame11Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 2.5,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 2.5,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const frame12Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 2.25,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 2.25,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        delay: 0.2,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const frame13Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 2.05,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 2.05,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const frame14Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 1.9,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 1.9,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const timeVariant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 1.75,
        duration: 0,
        ease: "easeInOut",
      },
    },
    enter: {
      y: window.innerWidth > 600 ? ["-5vh", 0] : ["-15vh", "-10vh"],
      scale: [0, 1.5, 1.2],
      transition: {
        delay: 2.75,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: 0,
      scale: [1, 1.5, 0],
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const time2Variant = {
    initial: {
      y: "100vh",
      transition: {
        duration: 0,
        ease: "easeInOut",
      },
    },
    enter: {
      y: window.innerWidth > 600 ? ["-5vh", 0] : ["-15vh", "-10vh"],
      scale: [0, 1.5, 1.2],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: 0,
      scale: [1, 1.5, 0],
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const frame22Variant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 1.75,
        duration: 0,
        ease: "easeInOut",
      },
    },
    enter: {
      y: ["-5vh", 0],
      scale: [0, 1.25, 1.1],
      transition: {
        delay: 3,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: 0,
      scale: [1, 1.1, 0],
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const sunVariant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 2.75,
        duration: 2,
        ease: "easeInOut",
      },
    },
    enter: {
      y: 0,
      transition: {
        delay: 2.75,
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "100vh",
      transition: {
        delay: 0,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const moonVariant = {
    initial: {
      y: "100vh", x: "-50vh", scale: [1, 0.9],
      transition: {
        duration: 3,
        ease: "easeInOut"
      }
    },
    enter: {
      y: window.innerWidth > 1100 ? "-10%" : "-20%",
      x: window.innerWidth > 1100 ? "15%" : "0%", transition: { delay: 1, duration: 2, ease: "easeInOut" }
    },
    exit: {
      y: "100vh", x: "-50vh", scale: [1, 0.9],
      transition: {
        duration: 3,
        ease: "easeInOut"
      }
    },
  };


  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Image */}
      <img
        src="/bg.png"
        style={{
          width: "110%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: -10,
          zIndex: 0,
        }}
        alt="404 Not Found"
      />

      <AnimatePresence>
        {(currentPage === 0 && flag === '2') && (
          <>
            <AnimatePresence>
              <motion.div
                key="CSCamel"
                variants={CSCamel2Variant}
                // initial="initial"
                // animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              >
                <img
                  src="/CSCamel.png"
                  alt="CS Camel"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="CSLower"
                variants={CSLowerVariant}
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 14,
                }}
              >
                <img
                  src="/CSLower.png"
                  alt="CS Lower"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="Plants"
                variants={CSOuterVariant}
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 20,
                }}
              >
                <img
                  src="/Plants.png"
                  alt="CS Lower"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="CSOuter"
                variants={OuterVariant}
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 30,
                }}
              >
                <img
                  src="/CSOuter.png"
                  alt="CS Outer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {!isMobile ? (<AnimatePresence>
              <motion.div
                key="moon"
                variants={moonVariant}
                exit="exit"
                style={{
                  position: "absolute",
                  top: window.width < 1100 ? "-20%" : "-10%",
                  left: window.width < 1100 ? "0%" : "15%",
                  width: "100%",
                  height: "100%",
                  zIndex: 4,
                  overflow: "hidden",
                }}
              >
                <img
                  src="/Frame 21.png"
                  alt="moon"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            </AnimatePresence>) : (
              <AnimatePresence>
                <motion.div
                  key="moon"
                  variants={moonVariant}
                  exit="exit"
                  style={{
                    position: "absolute",
                    top: "-20%",
                    left: "0%",
                    width: "97%",
                    height: "100%",
                    zIndex: 4,
                    overflow: "hidden",
                  }}
                >
                  <img 
                    src="/Frame 21.png"
                    alt="moon"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            )}

            <AnimatePresence>
              <motion.div
                key="cstext"
                initial="initial"
                animate="enter"
                variants={time2Variant}
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 4,
                  overflow: "hidden"
                }}
              >
                <img
                  src="/lost.png"
                  alt="moon"
                  style={{
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain",
                    position: "absolute",
                    top: "20%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", 
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="cstext"
                initial="initial"
                animate="enter"
                variants={time2Variant}
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              </motion.div>
            </AnimatePresence>

          </>
        )}
        {(currentPage === 0 && flag === '1') && (
          <>
            <AnimatePresence>
              <motion.div
                key="CSCamel"
                variants={CSCamelVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              >
                <img
                  src="/CSCamel.png"
                  alt="CS Camel"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="CSLower"
                variants={CSLowerVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 14,
                }}
              >
                <img
                  src="/CSLower.png"
                  alt="CS Lower"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="Plants"
                variants={CSOuterVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 20,
                }}
              >
                <img
                  src="/Plants.png"
                  alt="CS Lower"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="CSOuter"
                variants={OuterVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 30,
                }}
              >
                <img
                  src="/CSOuter.png"
                  alt="CS Outer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="moon"
                variants={moonVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  zIndex: 4,
                  overflow: "hidden",
                }}
              >
                <img
                  src="/Frame 21.png"
                  alt="moon"
                  style={{
                    width: "100%",
                    height: "100%",
                    top: window.width < 1100 ? "-15%" : "0%",
                    left: window.width < 1100 ? "-15%" : "0%",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="cstext"
                variants={timeVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 4,
                  overflow: "hidden"
                }}
              >
                <img
                  src="/lost.png"
                  alt="moon"
                  style={{
                    width: "35%", 
                    height: "35%", 
                    objectFit: "contain",
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    transform: "translate(-50%, -50%)", 
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="cstext"
                variants={timeVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              </motion.div>
            </AnimatePresence>

          </>
        )}
        {currentPage === 1 && (
          <>
            <AnimatePresence>
              <motion.div
                key="Frame5"
                variants={frame5Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 35,
                }}
              >
                <img
                  className="frame5"
                  src="/SecondOuter.png"
                  alt="CS Camel"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="plant"
                variants={plant2Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 35,
                }}
              >
                <img
                  src="/Second Plants.png"
                  alt="CS Camel"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="Frame19"
                variants={frame19Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 25,
                }}
              >
                <img
                  src="/Frame 19.png"
                  alt="CS Lower"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="Frame7"
                variants={frame7Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 15,
                }}
              >
                <img
                  src="/Frame 7.png"
                  alt="CS Outer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="Frame8"
                variants={frame8Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 13,
                }}
              >
                <img
                  src="/Frame 8.png"
                  alt="CS Outer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="Frame9"
                variants={frame9Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 11,
                }}
              >
                <img
                  src="/Frame 9.png"
                  alt="CS Outer"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="Frame11"
                variants={frame11Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 9,
                }}
              >
                <img
                  src="/Frame 11.png"
                  alt="Frame11"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="Frame12"
                variants={frame12Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 9,
                }}
              >
                <img
                  src="/Frame 12.png"
                  alt="Frame12"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="Frame13"
                variants={frame13Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 9,
                }}
              >
                <img
                  src="/Frame 13.png"
                  alt="Frame11"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="Frame14"
                variants={frame14Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 9,
                }}
              >
                <img
                  src="/Frame 14.png"
                  alt="Frame14"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="sun"
                variants={sunVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 9,
                }}
              >
                <img
                  src="/Frame 15.png"
                  alt="Frame14"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="sun"
                variants={sunVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 9,
                }}
              >
                <img
                  src="/Frame 15.png"
                  alt="Frame14"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {(window.width > 1100) && (<AnimatePresence>
              <motion.div
                key="sun"
                variants={sunVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 10000,
                }}
              >
                <div style={{
                  position: "absolute",
                  top: "67%",
                  left: "40%",
                  width: "100%",
                  zIndex: 100,
                  display: "flex",
                  justifyContent: "center"
                }}>
                  <div style={{
                    height: "300px"
                  }}>
                    <Lottie
                      loop={true}
                      animationData={Fire}
                      style={{ width: "100%", height: "100%", zIndex: 100000 }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>)}

            <AnimatePresence>
              <motion.div
                key="time"
                variants={timeVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 30,
                }}
              >
                <div style={{
                  top: "47%",
                  left: "50%",
                  position: "absolute",
                  zIndex: 1400,
                  fontFamily: "'Irish Grover', cursive",
                  color: " #900C3F",
                  fontSize: "3rem",
                  transform: "translate(-50%, -50%)",
                  textShadow: "4px 4px 8px rgba(0,0,0,0.3)",
                }}
                >
                  <h2>{timeRemaining}</h2>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="time"
                variants={timeVariant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  top: "-5%",
                  left: window.width > 1100 ? "0%" : 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 50,
                }}
              >
                <img
                  src="/Frame 18.png"
                  alt="Frame14"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              <motion.div
                key="frame22"
                variants={frame22Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  bottom: "0%",
                  left: 0,
                  width: "100%",
                  // height: "100%",  
                  zIndex: 39,
                }}
              >
                <img
                  src="/Frame 22.png"
                  className="frame22"
                  alt="Frame14"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </>

        )}
      </AnimatePresence>

    </div>
  );
};

export default NotFound;
