// // import React, { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import FirstPage from "./FirstPage";
// // import SecondPage from "./SecondPage";

// // const LandingPage = () => {
// //   const [currentPage, setCurrentPage] = useState(0);

// //   const handleScroll = (event) => {
// //     if (event.deltaY > 0 && currentPage === 0) {
// //       setCurrentPage(1);
// //     } else if (event.deltaY < 0 && currentPage === 1) {
// //       setCurrentPage(0);
// //     }
// //   };

// //   const slideVariantsFirsttoSecond = {
// //     initial: { y: "-100vh" },
// //     enter: { y: 0, transition: { duration: 1, ease: "easeInOut" } },
// //     exit: { y: "-100vh", transition: { duration: 1, ease: "easeInOut" } },
// //   };

// //   const slideVariantsSecondtoFirst = {
// //     initial: { y: "100vh" },
// //     enter: { y: 0, transition: { duration: 1, ease: "easeInOut" } },
// //     exit: { y: "100vh", transition: { duration: 1, ease: "easeInOut" } },
// //   };

// //   const opacityVariants = {
// //     initial: { opacity: 0 },
// //     enter: { opacity: 1, transition: { duration: 1 } },
// //     exit: { opacity: 0, transition: { duration: 1 } },
// //   };

// //   const perspectiveVariants = {
// //     initial: { scale: 1, y: 0 },
// //     enter: { scale: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
// //     exit: {
// //       scale: 0.9,
// //       y: -50,
// //       transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
// //     },
// //   };

// //   return (
// //     <div
// //       onWheel={handleScroll}
// //       style={{
// //         height: "100vh",
// //         width: "100vw",
// //         overflow: "hidden",
// //         position: "relative",
// //       }}
// //     >

// //       <AnimatePresence>
// //         {currentPage === 0 && (
// //           <motion.div
// //             key="firstPage"
// //             initial="initial"
// //             animate="enter"
// //             exit="exit"
// //             variants={slideVariantsFirsttoSecond}
// //             style={{
// //               position: "absolute",
// //               top: 0,
// //               left: 0,
// //               width: "100vw",
// //               height: "100vh",
// //             }}
// //           >
// //             <motion.div
// //               initial="initial"
// //               animate="enter"
// //               exit="exit"
// //               variants={perspectiveVariants}
// //             >
// //               <motion.div
// //                 initial="initial"
// //                 animate="enter"
// //                 exit="exit"
// //                 variants={opacityVariants}
// //               >
// //                 <FirstPage />
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //         {currentPage === 1 && (
// //           <motion.div
// //             key="secondPage"
// //             initial="initial"
// //             animate="enter"
// //             exit="exit"
// //             variants={slideVariantsSecondtoFirst}
// //             style={{
// //               position: "absolute",
// //               top: 0,
// //               left: 0,
// //               width: "100vw",
// //               height: "100vh",
// //             }}
// //           >
// //             <motion.div
// //               initial="initial"
// //               animate="enter"
// //               exit="exit"
// //               variants={perspectiveVariants}
// //             >
// //               <motion.div
// //                 initial="initial"
// //                 animate="enter"
// //                 exit="exit"
// //                 variants={opacityVariants}
// //               >
// //                 <SecondPage />
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // export default LandingPage;
// import React from 'react';
// import './App.css';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// // Importing images
// import artback from '/bg.png';
// import CSCamel from "/CSCamel.png"
// import CSOuter from "/CSOuter.png"
// import CSLower from "/CSLower.png"
// import frame5 from '/Frame 5.png';
// import frame6 from '/Frame 6.png';
// import frame7 from '/Frame 7.png';
// import frame8 from '/Frame 8.png';
// import frame9 from '/Frame 9.png';
// import frame11 from '/Frame 11.png';
// import frame12 from '/Frame 16.png';
// import frame13 from '/Frame 13.png';
// import frame14 from '/Frame 14.png';
// import frame15 from '/Frame 15.png';
// import frame18 from '/Frame 18.png';
// import frame20 from '/Frame 20.png'

// export default function LandingPage() {
//   return (
//     <div style={{ margin: 0, padding: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
//       {/* <div style={{
//         height: "100vh",
//         width: "100vw",
//         margin: 0,
//         padding: 0,
//         overflow: "hidden",
//         position: "relative"
//       }}>

//         <img
//           src="/Frame 20.png"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             zIndex: 0
//           }}
//           alt="Coming Soon"
//         />
//       </div> */}
//       <Parallax pages={1.99} >
//         <ParallaxLayer
//           offset={0}
//           speed={0}
//           style={{
//             backgroundImage: `url(${artback})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.5}
//           style={{
//             backgroundImage: `url(${CSCamel})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.6}
//           style={{
//             backgroundImage: `url(${CSLower})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.7}
//           style={{
//             backgroundImage: `url(${CSOuter})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         {/* <ParallaxLayer
//           offset={0}
//           speed={1.0}
//           style={{
//             backgroundImage: `url(${artback})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.15}
//           style={{
//             backgroundImage: `url(${frame11})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.30}
//           style={{
//             backgroundImage: `url(${frame12})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.45}
//           style={{
//             backgroundImage: `url(${frame13})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.6}
//           style={{
//             backgroundImage: `url(${frame14})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.75}
//           style={{
//             backgroundImage: `url(${frame15})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.9}
//           style={{
//             backgroundImage: `url(${frame18})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.05}
//           style={{
//             backgroundImage: `url(${frame8})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.20}
//           style={{
//             backgroundImage: `url(${frame9})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.40}
//           style={{
//             backgroundImage: `url(${frame7})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.75}
//           style={{
//             backgroundImage: `url(${frame6})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={3.0}
//           style={{
//             backgroundImage: `url(${frame5})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//       </Parallax> */}
//         {/* <ParallaxLayer
//           offset={0.99}
//           speed={0.5}
//           style={{
//             backgroundImage: `url(${artback})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         /> */}
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.6}
//           style={{
//             backgroundImage: `url(${frame11})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.7}
//           style={{
//             backgroundImage: `url(${frame12})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.45}
//           style={{
//             backgroundImage: `url(${frame13})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.6}
//           style={{
//             backgroundImage: `url(${frame14})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.75}
//           style={{
//             backgroundImage: `url(${frame15})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.8}
//           style={{
//             backgroundImage: `url(${frame18})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.5}
//           style={{
//             backgroundImage: `url(${frame8})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.20}
//           style={{
//             backgroundImage: `url(${frame9})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.40}
//           style={{
//             backgroundImage: `url(${frame7})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.75}
//           style={{
//             backgroundImage: `url(${frame6})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0.99}
//           speed={1.70}
//           style={{
//             backgroundImage: `url(${frame5})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             // height: '100vh',
//           }}
//         />
//       </Parallax>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Lottie from "lottie-react";
import Birds from "./Birds.json";
import Fire from "./Fire.json"

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
      {/* Background Image */}
      <img
        src="/bg.png"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
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
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 4,
                }}
              >
                <img
                  src="/Frame 21.png"
                  alt="moon"
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
                }}
              >
                <img
                  src="/CS.png"
                  alt="moon"
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
