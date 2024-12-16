// LandingPage.jsx dump

// import React from 'react';
// import './App.css';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// // Importing images
// import artback from '/Frame 10.png';
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

// function LandingPage() {
//   return (
//     <div style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
//       <Parallax pages={2} style={{ width: '100%', height: '100vh' }}>
//         {/* First Page */}
//         <ParallaxLayer
//           offset={0}
//           speed={1.0}
//           style={{
//             backgroundImage: `url(${artback})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.15}
//           style={{
//             backgroundImage: `url(${frame11})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.30}
//           style={{
//             backgroundImage: `url(${frame12})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.45}
//           style={{
//             backgroundImage: `url(${frame13})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.6}
//           style={{
//             backgroundImage: `url(${frame14})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.75}
//           style={{
//             backgroundImage: `url(${frame15})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={1.9}
//           style={{
//             backgroundImage: `url(${frame18})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.05}
//           style={{
//             backgroundImage: `url(${frame8})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.20}
//           style={{
//             backgroundImage: `url(${frame9})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.40}
//           style={{
//             backgroundImage: `url(${frame7})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={2.75}
//           style={{
//             backgroundImage: `url(${frame6})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//         <ParallaxLayer
//           offset={0}
//           speed={3.0}
//           style={{
//             backgroundImage: `url(${frame5})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />

//         {/* Second Page */}
//         <ParallaxLayer
//           offset={1} // Correctly aligns with the second page
//           speed={3.5}
//           style={{
//             backgroundImage: `url(/Coming_Soon.png)`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//           }}
//         />
//       </Parallax>
//     </div>
//   );
// }

// export default LandingPage;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, animate, color } from "framer-motion";
// import FirstPage from "./FirstPage";
// import SecondPage from "./SecondPage";

// const LandingPage = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const handleScroll = (event) => {
//     // if (isTransitioning) return;

//     if (event.deltaY > 0 && currentPage === 0) {
//       setIsTransitioning(true);
//       setCurrentPage(1);
//     } else if (event.deltaY < 0 && currentPage === 1) {
//       setIsTransitioning(true);
//       setCurrentPage(0);
//     }
//   };

//   useEffect(() => {
//     const transitionTimer = setTimeout(() => {
//       setIsTransitioning(false);
//     }, 1000);

//     return () => clearTimeout(transitionTimer);
//   }, [currentPage]);

//   // const pageVariants = {
//   //   initial: (isForward) => ({
//   //     y: isForward ? "100%" : "-100%",
//   //     opacity: 0
//   //   }),
//   //   in: {
//   //     y: 0,
//   //     opacity: 1,
//   //     transition: {
//   //       duration: 1,
//   //       ease: "easeInOut"
//   //     }
//   //   },
//   //   out: (isForward) => ({
//   //     y: isForward ? "-100%" : "100%",
//   //     opacity: 0,
//   //     transition: {
//   //       duration: 1,
//   //       ease: "easeInOut"
//   //     }
//   //   })
//   // };

//   const anim = (variants) => {
//     return {
//       initial: "initial",
//       animate: "enter",
//       exit: "exit",
//       variants
//     }
//   }

//   const opacity = {
//     initial: {
//       opacity: 0
//     },
//     enter: {
//       opacity: 1,
//       transition: {
//         duration: 2
//       }
//     },
//     exit: {
//       opacity: 1
//     }
//   }

//   const slide = {
//     initial: {
//       top: "100vh"
//     },
//     enter: {
//       top: "100vh"
//     },
//     exit: {
//       top: "0",
//       transition: {
//         duration: 1,
//         ease: "easeInOut"
//       }
//     }
//   }

//   return (
//     <div
//       onWheel={handleScroll}
//       style={{
//         height: "100vh",
//         width: "100vw",
//         overflow: "hidden",
//         position: "relative"
//       }}
//     >
//       <AnimatePresence>
//         {currentPage === 0 && (
//           <div>
//             <motion.div {...anim(slide)}
//               style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 backgroundColor: "red",
//                 width: "100vw",
//                 height: "100vh",
//               }}
//             />
//             <motion.div
//               {...anim(opacity)}
//             >
//               <FirstPage />
//             </motion.div>
//           </div>
//         )}
//         {currentPage === 1 && (
//           <motion.div
//             {...anim(opacity)}
//           >
//             <SecondPage />
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {/* <AnimatePresence initial={false} mode="wait"> */}
//       {/* <AnimatePresence>

//         {currentPage === 0 && (
//           <motion.div
//           {...anim(opacity)}
//           // key="first-page"
//           // custom={true}
//           // initial="initial"
//           // animate="in"
//           // exit="out"
//           // variants={pageVariants}
//           // style={{
//             //   position: "absolute",
//             //   width: "100%",
//             //   height: "100%",
//             //   filter: isTransitioning ? "blur(10px)" : "none",
//             //   transition: "filter 1s ease-in-out",
//             //   zIndex: 2
//             // }}
//             >
//             <FirstPage />
//           </motion.div>
//         )}
//         {currentPage === 1 && (
//           <motion.div
//           {...anim(opacity)}
//           // key="second-page"
//           // custom={false}
//           // initial={{
//             //   y: "100%",
//             //   opacity: 0
//             // }}
//             // animate={{
//               //   y: 0,
//               //   opacity: 1,
//               //   transition: {
//                 //     duration: 1,
//                 //     ease: "easeInOut"
//                 //   }
//                 // }}
//                 // exit={{
//                   //   y: "100%",
//                   //   opacity: 0,
//                   //   transition: {
//                     //     duration: 1,
//                     //     ease: "easeInOut"
//                     //   }
//                     // }}
//                     // style={{
//                       //   position: "absolute",
//                       //   width: "100%",
//                       //   height: "100%",
//                       //   filter: isTransitioning ? "blur(10px)" : "none",
//                       //   transition: "filter 1s ease-in-out",
//                       //   zIndex: 2
//                       // }}
//                       >
//             <SecondPage />
//           </motion.div>
//         )}
//         </AnimatePresence> */}
//       {/* </AnimatePresence> */}
//     </div>
//   );
// };

// export default LandingPage;
