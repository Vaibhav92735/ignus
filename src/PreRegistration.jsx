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

const PreRegistration = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of images to cycle through
    const images = [
        "./ing1.jpeg",
        "./img2.jpeg",
        "./img3.jpeg",
        "./img4.jpeg",
    ];

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

    return (
        <div>
            {/* Background images */}
            <AnimatePresence>
                {images.map((image, index) => (
                    index === currentImageIndex && (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                zIndex: 1,
                            }}
                        />
                    )
                ))}
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
