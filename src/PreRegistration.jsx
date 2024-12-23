// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, delay } from "framer-motion";
// import PrergForm from "./PrergForm";

// const PreRegistration = () => {
//     const formVariant = {
//         initial: {
//             y: "100vh",
//             transition: {
//                 delay: 0.5,
//                 duration: 0,
//                 ease: "easeInOut",
//             },
//         },
//         enter: {
//             y: ["-5vh", 0],
//             scale: [0, 1.1, 1],
//             transition: {
//                 delay: 0.5,
//                 duration: 1,
//                 ease: "easeInOut",
//             },
//         },
//         exit: {
//             y: 0,
//             scale: [1, 1.1, 0],
//             transition: {
//                 delay: 0.3,
//                 duration: 0.5,
//                 ease: "easeInOut",
//             },
//         },
//     };


//     return (
//         <div>

//             <AnimatePresence>
//                 <motion.div
//                     key="form"
//                     variants={formVariant}
//                     initial="initial"
//                     animate="enter"
//                     exit="exit"
//                     style={{
//                         position: "absolute",
//                         bottom: "0%",
//                         left: 0,
//                         width: "100%",
//                         height: "100%",
//                         zIndex: 39,
//                     }}
//                 >
//                     <PrergForm />
//                 </motion.div>
//                 <motion.div
//                     key="form"
//                     variants={formVariant}
//                     initial="initial"
//                     animate="enter"
//                     exit="exit"
//                     style={{
//                         position: "absolute",
//                         bottom: "0%",
//                         left: 0,
//                         width: "100%",
//                         height: "100%",
//                         zIndex: 39,
//                     }}
//                 >
//                     <PrergForm />
//                 </motion.div>
//             </AnimatePresence>

//         </div>
//     )


// }

// export default PreRegistration;
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import PrergForm from "./PrergForm";
import Lottie from "lottie-react";
import Fire from "./Fire.json";
import { Link } from "react-router-dom";

const PreRegistration = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to cycle through
  const images = ["./ing1.jpeg", "./img2.jpeg", "./img3.jpeg", "./img4.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const formVariant = {
    initial: {
      y: "100vh",
      transition: {
        delay: 0.5,
        duration: 0,
        ease: "easeInOut",
      },
    },
    enter: {
      y: ["-5vh", 0],
      scale: [0, 1.1, 1],
      transition: {
        delay: 0.5,
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
      y: ["-5vh", 0],
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
      y: "100vh",
      x: "-50vh",
      scale: [1, 0.9],
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
    enter: {
      y: "-10%",
      x: 0,
      transition: { delay: 1, duration: 2, ease: "easeInOut" },
    },
    exit: {
      y: "100vh",
      x: "-50vh",
      scale: [1, 0.9],
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
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
            zIndex: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></motion.div>
      </AnimatePresence>
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
        {images.map(
          (image, index) =>
            index === currentImageIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "50%",
                  height: "65%",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "20px",
                  zIndex: 15,
                }}
              />
            )
        )}
      </AnimatePresence>
      

      {/* Form Component */}
      <AnimatePresence>
        <motion.div
          key="form"
          variants={formVariant}
          initial="initial"
          animate="enter"
          exit="exit"
          style={{
            position: "absolute",
            bottom: "0%",
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 39,
          }}
        >
          <PrergForm />
        </motion.div>
        <motion.div
          key="form"
          variants={formVariant}
          initial="initial"
          animate="enter"
          exit="exit"
          style={{
            position: "absolute",
            bottom: "0%",
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 39,
          }}
        >
          <PrergForm />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PreRegistration;
