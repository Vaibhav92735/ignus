import React from "react";
import Lottie from "lottie-react";
import DownArrow from "./DownArrow.json";
import Birds from "./Birds.json"
import { useEffect, useState } from "react";

const FirstPage = () => {

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
      setTimeRemaining({ days, hours, minutes, seconds, ended: false });
    }
  };

  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval); // Cleanup the interval on unmount
  }, []);

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      position: "relative"
    }}>

      {/* Countdown Box */}
       <div
        style={{
          position: "absolute",
          top: "50%",
          left: "45%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          background: "rgba(0, 0, 0, 0.8)",
          borderRadius: "15px",
          padding: "15px 30px",
          textAlign: "center",
          boxShadow: "0 4px 10px rgba(255, 0, 0, 0.6)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        className="countdown-box"
      >
        <div
          style={{
            color: "white",
            fontSize: "1.3rem",
            fontWeight: "bold",
            marginBottom: "2px",
            letterSpacing: "2px",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.9), 0 0 20px rgba(255, 0, 0, 0.8)",
          }}
        >
          Countdown to Launch!
        </div>
        {timeRemaining.ended ? (
          <h1
            style={{
              color: "#ff6666",
              fontSize: "1.8rem",
              fontWeight: "bold",
            }}
          >
            Countdown Ended!
          </h1>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              color: "#fff",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textShadow: "0 0 10px #ff0000, 0 0 20px rgba(255, 0, 0, 0.8)",
                }}
              >
                {timeRemaining.days}
              </p>
              <p>Days</p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textShadow: "0 0 10px #ff0000, 0 0 20px rgba(255, 0, 0, 0.8)",
                }}
              >
                {timeRemaining.hours}
              </p>
              <p>Hours</p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textShadow: "0 0 10px #ff0000, 0 0 20px rgba(255, 0, 0, 0.8)",
                }}
              >
                {timeRemaining.minutes}
              </p>
              <p>Minutes</p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textShadow: "0 0 10px #ff0000, 0 0 20px rgba(255, 0, 0, 0.8)",
                }}
              >
                {timeRemaining.seconds}
              </p>
              <p>Seconds</p>
            </div>
          </div>
        )}
      </div>

      {/* Hover Effect */}
      <style>
        {`
          .countdown-box:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 15px rgba(255, 0, 0, 1);
          }
        `}
      </style>

      <img
        src="/Coming_Soon.png"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1
        }}
        alt="Coming Soon"
      />
      <div style={{
        position: "absolute",
        top: "4%",
        width: "100%",
        zIndex: 2,
        display: "flex",
      }}>
        <div style={{
          width: "600px", height: "600px"
        }}>
          <Lottie
            loop={true}
            animationData={Birds}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div style={{
        position: "absolute",
        top: "3%",
        left: "20%",
        width: "100%",
        zIndex: 2,
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{
          width: "600px", height: "600px"
        }}>
          <Lottie
            loop={true}
            animationData={Birds}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      {/* <div style={{
        position: "absolute",
        top: "75%",
        width: "100%",
        zIndex: 2,
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{
          width: "200px", height: "200px"
        }}>
          <Lottie
            loop={true}
            animationData={DownArrow}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default FirstPage;