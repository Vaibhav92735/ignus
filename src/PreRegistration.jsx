import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import PrergForm from "./PrergForm";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const PreRegistration = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navigate = useNavigate();

    // Array of images to cycle through
    // const images = [
    //     "./ing1.jpeg",
    //     "./img2.jpeg",
    //     "./img3.jpeg",
    //     "./img4.jpeg",
    // ];
    // const images = [];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 5000); // Change image every 5 seconds
    //     return () => clearInterval(interval);
    // }, [images.length]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Select all elements matching the class
            const formElements = document.querySelectorAll('.pre-reg-container');
            let isOutside = true;

            // Check if the clicked target is inside any of the form elements
            formElements.forEach((formElement) => {
                if (formElement.contains(event.target)) {
                    isOutside = false;
                }
            });

            if (isOutside) {
                console.log('Clicked outside the form');
                document.removeEventListener('click', handleClickOutside);
                Swal.fire({
                    title: 'Are you sure you want to exit the registration form?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'No, Stay',
                    cancelButtonText: 'Yes, Exit',
                    customClass: {
                        title: 'custom-title',
                        popup: 'custom-popup',
                        confirmButton: 'custom-btn',
                        cancelButton: 'custom-btn',
                    },
                }).then((result) => {
                    if (result.isConfirmed === false) {
                        console.log('Exiting the registration form');
                        // window.location.href = '/';
                        navigate('/', { state: '2' });
                    }
                    else {
                        console.log('Staying on the registration form');
                        setTimeout(() => {
                            document.addEventListener('click', handleClickOutside);
                            console.log('Event listener added');
                        }, 2000);
                    }
                });
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1100);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


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


    const sideArrowVariant = {
        initial: {
            x: "-100vw",
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        enter: {
            x: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        exit: {
            x: "-100vw",
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: "easeInOut",
            },
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

            <img
                src="/bg.png"
                style={{
                    width: "110%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: -10,
                    zIndex: 0,
                }}
                alt="Coming Soon"
            />

            <img
                src="/CSCamel.png"
                alt="CS Camel"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                }}
            />

            <img
                src="/CSLower.png"
                alt="CS Camel"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                }}
            />

            <img
                src="/CSOuter.png"
                alt="CS Camel"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                }}
            />

            <img
                src="/Plants.png"
                alt="CS Camel"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    overflow: "hidden",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                }}
            />

            {!isMobile ? (<img
                src="/Frame 21.png"
                alt="CS Camel"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    position: "absolute",
                    overflow: "hidden",
                    top: window.width < 1100 ? "16%" : "-10%",
                    left: window.width < 1100 ? "25%" : "15%",
                    zIndex: 10,
                }}
            />) : (
                <img
                    src="/Frame 21.png"
                    alt="CSCamel"
                    style={{
                        width: "97%",
                        height: "100%",
                        objectFit: "contain",
                        position: "absolute",
                        overflow: "hidden",
                        top: "-20%",
                        left: "0%",
                        zIndex: 10,
                    }}
                />
            )}

            {/* {isMobile ? (
                <img
                    src="/Frame 21.png"
                    alt="CS Camel"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        overflow: "hidden",
                        top: "-10%",
                        left: "25%",
                        zIndex: 10,
                    }}
                />
            ) : (

                <img
                    src="/Frame 21.png"
                    alt="CS Camel"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        position: "absolute",
                        overflow: "hidden",
                        top: "0%",
                        left: "0%",
                        zIndex: 10,
                    }}
                />

            )} */}


            <AnimatePresence>
                <motion.div key="form"
                    variants={sideArrowVariant}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    style={{
                        position: "absolute",
                        top: "0%",
                        left: 0,
                        width: "10%",
                        height: "10%",
                        zIndex: 40,
                        overflow: "hidden",
                        // display:"none"
                    }}>
                    <a href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            console.log("clicked");
                        }}>
                        <img
                            src="back.png"
                            style={{
                                width: "80%",
                                height: "80%",
                                objectFit: "contain",
                                position: "absolute",
                                overflow: "hidden",
                                opacity: "50%",
                                top: "15%",
                                left: "-5%",
                                zIndex: 100,
                            }}
                        />
                    </a>
                </motion.div>
            </AnimatePresence>


            {/* Form Component */}
            <AnimatePresence>
                <motion.div
                    key="form"
                    id="prereg-form"
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
                    id="prereg-form"
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
