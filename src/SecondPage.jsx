import React from "react";
import Lottie from "lottie-react";
import Fire from "./Fire.json"

const images = [
  { src: "/Frame.png", depth: 1200 },
  { src: "/Frame 10.png", depth: 1100 },
  { src: "/Frame 11.png", depth: 1000 },
  { src: "/Frame 12.png", depth: 900 },
  { src: "/Frame 13.png", depth: 800 },
  { src: "/Frame 14.png", depth: 700 },
  { src: "/Frame 15.png", depth: 600 },
  { src: "/Frame 18.png", depth: 500 },
  { src: "/Frame 8.png", depth: 400 },
  { src: "/Frame 9.png", depth: 300 },
  { src: "/Frame 7.png", depth: 200 },
  { src: "/Frame 19.png", depth: 100 },
  { src: "/Frame 5.png", depth: 0 },
];

const SecondPage = () => {
  return (
    <div style={{
      position: "relative",
      width: "100vw",
      height: "100vh",
      overflow: "hidden"
    }}>
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
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -image.depth
          }}
        >
          <img
            src={image.src}
            alt={`Background layer ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SecondPage;