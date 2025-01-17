// // LandingPage.jsx dump

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

// // export default LandingPage;
// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence, animate, color } from "framer-motion";
// // import FirstPage from "./FirstPage";
// // import SecondPage from "./SecondPage";

// // const LandingPage = () => {
// //   const [currentPage, setCurrentPage] = useState(0);
// //   const [isTransitioning, setIsTransitioning] = useState(false);

// //   const handleScroll = (event) => {
// //     // if (isTransitioning) return;

// //     if (event.deltaY > 0 && currentPage === 0) {
// //       setIsTransitioning(true);
// //       setCurrentPage(1);
// //     } else if (event.deltaY < 0 && currentPage === 1) {
// //       setIsTransitioning(true);
// //       setCurrentPage(0);
// //     }
// //   };

// //   useEffect(() => {
// //     const transitionTimer = setTimeout(() => {
// //       setIsTransitioning(false);
// //     }, 1000);

// //     return () => clearTimeout(transitionTimer);
// //   }, [currentPage]);

// //   // const pageVariants = {
// //   //   initial: (isForward) => ({
// //   //     y: isForward ? "100%" : "-100%",
// //   //     opacity: 0
// //   //   }),
// //   //   in: {
// //   //     y: 0,
// //   //     opacity: 1,
// //   //     transition: {
// //   //       duration: 1,
// //   //       ease: "easeInOut"
// //   //     }
// //   //   },
// //   //   out: (isForward) => ({
// //   //     y: isForward ? "-100%" : "100%",
// //   //     opacity: 0,
// //   //     transition: {
// //   //       duration: 1,
// //   //       ease: "easeInOut"
// //   //     }
// //   //   })
// //   // };

// //   const anim = (variants) => {
// //     return {
// //       initial: "initial",
// //       animate: "enter",
// //       exit: "exit",
// //       variants
// //     }
// //   }

// //   const opacity = {
// //     initial: {
// //       opacity: 0
// //     },
// //     enter: {
// //       opacity: 1,
// //       transition: {
// //         duration: 2
// //       }
// //     },
// //     exit: {
// //       opacity: 1
// //     }
// //   }

// //   const slide = {
// //     initial: {
// //       top: "100vh"
// //     },
// //     enter: {
// //       top: "100vh"
// //     },
// //     exit: {
// //       top: "0",
// //       transition: {
// //         duration: 1,
// //         ease: "easeInOut"
// //       }
// //     }
// //   }

// //   return (
// //     <div
// //       onWheel={handleScroll}
// //       style={{
// //         height: "100vh",
// //         width: "100vw",
// //         overflow: "hidden",
// //         position: "relative"
// //       }}
// //     >
// //       <AnimatePresence>
// //         {currentPage === 0 && (
// //           <div>
// //             <motion.div {...anim(slide)}
// //               style={{
// //                 position: "fixed",
// //                 top: 0,
// //                 left: 0,
// //                 backgroundColor: "red",
// //                 width: "100vw",
// //                 height: "100vh",
// //               }}
// //             />
// //             <motion.div
// //               {...anim(opacity)}
// //             >
// //               <FirstPage />
// //             </motion.div>
// //           </div>
// //         )}
// //         {currentPage === 1 && (
// //           <motion.div
// //             {...anim(opacity)}
// //           >
// //             <SecondPage />
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //       {/* <AnimatePresence initial={false} mode="wait"> */}
// //       {/* <AnimatePresence>

// //         {currentPage === 0 && (
// //           <motion.div
// //           {...anim(opacity)}
// //           // key="first-page"
// //           // custom={true}
// //           // initial="initial"
// //           // animate="in"
// //           // exit="out"
// //           // variants={pageVariants}
// //           // style={{
// //             //   position: "absolute",
// //             //   width: "100%",
// //             //   height: "100%",
// //             //   filter: isTransitioning ? "blur(10px)" : "none",
// //             //   transition: "filter 1s ease-in-out",
// //             //   zIndex: 2
// //             // }}
// //             >
// //             <FirstPage />
// //           </motion.div>
// //         )}
// //         {currentPage === 1 && (
// //           <motion.div
// //           {...anim(opacity)}
// //           // key="second-page"
// //           // custom={false}
// //           // initial={{
// //             //   y: "100%",
// //             //   opacity: 0
// //             // }}
// //             // animate={{
// //               //   y: 0,
// //               //   opacity: 1,
// //               //   transition: {
// //                 //     duration: 1,
// //                 //     ease: "easeInOut"
// //                 //   }
// //                 // }}
// //                 // exit={{
// //                   //   y: "100%",
// //                   //   opacity: 0,
// //                   //   transition: {
// //                     //     duration: 1,
// //                     //     ease: "easeInOut"
// //                     //   }
// //                     // }}
// //                     // style={{
// //                       //   position: "absolute",
// //                       //   width: "100%",
// //                       //   height: "100%",
// //                       //   filter: isTransitioning ? "blur(10px)" : "none",
// //                       //   transition: "filter 1s ease-in-out",
// //                       //   zIndex: 2
// //                       // }}
// //                       >
// //             <SecondPage />
// //           </motion.div>
// //         )}
// //         </AnimatePresence> */}
// //       {/* </AnimatePresence> */}
// //     </div>
// //   );
// // };

// // export default LandingPage;



{/* <div>
        {currentPage === 0 && (
          <AnimatePresence>
            <motion.div
              key="page-0"
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
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: 1,
                }}
                alt="Sun"
              />
            </motion.div>
            <motion.div
              key="page-0"
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
                zIndex: 2,
              }}
            >
              <img
                src="/CSLower.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: 2,
                }}
                alt="Sun"
              />
            </motion.div>
            <motion.div
              key="page-0"
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
                zIndex: 3,
              }}
            >
              <img
                src="/CSOuter.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: 3,
                }}
                alt="Sun"
              />
            </motion.div>
          </AnimatePresence>

        )}

        {currentPage === 1 && (
          <AnimatePresence >

            <motion.div
              key="page-1"
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
                zIndex: 3,
              }}
              >
              <img
                src="/Frame 5.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: 3,
                }}
                alt="Frame 5"
                />
            </motion.div>
            <motion.div
              key="page-1"
              variants={cloudVariant}
              initial="initial"
              animate="enter"
              exit="exit"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 2,
              }}
              >
              <img
                src="/Frame 6.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: 2,
                }}
                alt="Frame 6"
                />
            </motion.div>
            <motion.div
              key="page-1"
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
                zIndex: 1,
              }}
              >
              <img
                src="/Frame 7.png"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  zIndex: 1,
                }}
                alt="Frame 5"
                />
            </motion.div>
          </AnimatePresence>
        )}
      </div> */}


         // const AnimatedText = ({ text }) => {
    //     const letterVariant = {
    //         hidden: { opacity: 0, y: 50 },
    //         visible: (i) => ({
    //             opacity: 1,
    //             y: 0,
    //             transition: {
    //                 delay: 2 + i * 0.1,
    //                 duration: 0.5,
    //             },
    //         }),
    //     };

    //     return (

    //         <div
    //             style={{
    //                 // display: "flex",
    //                 flexWrap: "wrap",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 position: "absolute",
    //                 top: "15%",
    //                 left: "56%",
    //                 height: "10vh",
    //                 fontSize: "2.5rem",
    //                 fontWeight: "bold",
    //                 fontFamily: "Arial, sans-serif",
    //                 color: "#5C4033",
    //                 zIndex: 50, 
    //             }}
    //         >
    //             {text.split("").map((letter, i) => (
    //                 <motion.span
    //                     key={i}
    //                     custom={i}
    //                     variants={letterVariant}
    //                     initial="hidden"
    //                     animate="visible"
    //                     style={{ display: "inline-block" }}
    //                 >
    //                     {letter === " " ? "\u00A0" : letter}
    //                 </motion.span>
    //             ))}
    //         </div>
    //     );
    // };

    // const AnimatedLightText = ({ text }) => {
    //     const letterVariant = {
    //         hidden: { opacity: 0, y: 50 },
    //         visible: (i) => ({
    //             opacity: 1,
    //             y: 0,
    //             transition: {
    //                 delay: 3 + i * 0.1,
    //                 duration: 0.5,
    //             },
    //         }),
    //     };

    //     return (
    //         <div
    //             style={{
    //                 flexWrap: "wrap",
    //                 justifyContent: "center",
    //                 alignItems: "flex-start",
    //                 position: "absolute",
    //                 top: "26%",
    //                 left: "55%",
    //                 width: "550px",
    //                 fontSize: "2rem",
    //                 fontFamily: "Arial, sans-serif",
    //                 color: "brown",
    //                 zIndex: 50,
    //             }}
    //         >
    //             {text.split("").map((letter, i) => (
    //                 <motion.span
    //                     key={i}
    //                     custom={i}
    //                     variants={letterVariant}
    //                     initial="hidden"
    //                     animate="visible"
    //                     style={{
    //                         display: "inline-block",
    //                         margin: "0.1rem",
    //                     }}
    //                 >
    //                     {letter === " " ? "\u00A0" : letter}
    //                 </motion.span>
    //             ))}
    //         </div>
    //     );
    // };


    // const testText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis culpa maiores facere cum deserunt, suscipit sint incidunt expedita nostrum quo qui odio, quos illum, impedit quidem autem necessitatibus iusto."


{/* <AnimatedText text="Hello, You are welcomed!" />
            <AnimatedLightText text={testText} /> */}