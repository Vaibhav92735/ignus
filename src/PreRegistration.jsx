import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import PrergForm from "./PrergForm";

const PreRegistration = () => {
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

    const AnimatedText = ({ text }) => {
        const letterVariant = {
            hidden: { opacity: 0, y: 50 },
            visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: 2 + i * 0.1,
                    duration: 0.5,
                },
            }),
        };

        return (

            <div
                style={{
                    // display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "15%",
                    left: "56%",
                    height: "10vh",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    fontFamily: "Arial, sans-serif",
                    color: "#5C4033",
                    zIndex: 50, 
                }}
            >
                {text.split("").map((letter, i) => (
                    <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariant}
                        initial="hidden"
                        animate="visible"
                        style={{ display: "inline-block" }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </div>
        );
    };

    const AnimatedLightText = ({ text }) => {
        const letterVariant = {
            hidden: { opacity: 0, y: 50 },
            visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: 3 + i * 0.1,
                    duration: 0.5,
                },
            }),
        };

        return (
            <div
                style={{
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    position: "absolute",
                    top: "26%",
                    left: "55%",
                    width: "550px",
                    fontSize: "2rem",
                    fontFamily: "Arial, sans-serif",
                    color: "brown",
                    zIndex: 50,
                }}
            >
                {text.split("").map((letter, i) => (
                    <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariant}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "inline-block",
                            margin: "0.1rem",
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </div>
        );
    };


    const testText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi debitis culpa maiores facere cum deserunt, suscipit sint incidunt expedita nostrum quo qui odio, quos illum, impedit quidem autem necessitatibus iusto."

    return (
        <div>
            <AnimatedText text="Hello, You are welcomed!" />
            <AnimatedLightText text={testText} />
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
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
                <img
                    src="/CSCamel.png"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                    alt="Coming Soon"
                />
                <img
                    src="/CSLower.png"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                    alt="Coming Soon"
                />
                <img
                    src="/Frame 21.png"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                    alt="Coming Soon"
                />
                <img
                    src="/CSOuter.png"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                    alt="Outer"
                />
            </div>
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
    )


}

export default PreRegistration;