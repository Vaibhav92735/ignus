import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Lottie from "lottie-react";
import Fire from "./Fire.json"
import { Link } from "react-router-dom"

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentPage === 0) {
      setCurrentPage(1);
    } else if (event.deltaY < 0 && currentPage === 1) {
      setCurrentPage(0);
    }
  };

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
      y: "-100vh",
      transition: {
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
      y: "-100vh",
      transition: {
        delay: 0.25,
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
      y: "-100vh",
      transition: {
        delay: 0.5,
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
      y: "-100vh",
      transition: {
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
      y: "-100vh",
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
      y: "-100vh",
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
      y: "-100vh",
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
      y: "-100vh",
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
        delay: 0,
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
        delay: 0.1,
        duration: 0.5,
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
        duration: 0.5,
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
        delay: 0.3,
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
      y: ["-5vh", 0],
      scale: [0, 1.5, 1],
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
      scale: [0, 1.1, 1],
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
      y: "-100vh",
      transition: {
        delay: 0,
        duration: 0.5,
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
    enter: { y: 0, x: 0, transition: { delay: 1, duration: 2, ease: "easeInOut" } },
    exit: {
      y: "100vh", x: "-50vh", scale: [1, 0.9],
      transition: {
        duration: 3,
        ease: "easeInOut"
      }
    },
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY); // Record the initial touch Y position
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY); // Update touchEnd as the user moves
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const touchDelta = touchStart - touchEnd;

    // Threshold for detecting a significant swipe
    const swipeThreshold = 50;

    if (touchDelta > swipeThreshold) {
      // Swipe up detected
      handleScroll({ deltaY: 1 });
    } else if (touchDelta < -swipeThreshold) {
      // Swipe down detected
      handleScroll({ deltaY: -1 });
    }

    // Reset values after the swipe
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handlePreRegistration = () => {
    console.log("Preregistration Clicked");
  }

  return (
    <div
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
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
        alt="Coming Soon"
      />

      <AnimatePresence>
        {currentPage === 0 && (
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
                  zIndex: 20,
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
                key="CSOuter"
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
                  top: "-3%",
                  left: "10%",
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
                  src="/CS.png"
                  alt="moon"
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
                <Link to="/prereg">
                  <button
                    style={{
                      width: "200px",
                      height: "50px",
                      backgroundColor: "#ffff",
                      color: "red",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "16px",
                      textAlign: "center",
                      zIndex: 50,
                    }}
                    
                    onClick={handlePreRegistration}
                    >
                    Pre-Register Now
                  </button>
                </Link>
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
                  src="/Frame 5.png"
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
                  zIndex: 30,
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
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
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
                key="frame22"
                variants={frame22Variant}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{
                  position: "absolute",
                  bottom: "10%",
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 39,
                }}
              >
                <img
                  src="/Frame 22.png"
                  alt="Frame14"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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

export default LandingPage;
