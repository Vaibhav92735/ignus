import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Pre-Registration.css";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apikey : import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain : import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL : import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId : import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket : import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId : import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const PrergForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    college: "",
    college_state: "",
    current_year: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
  
    // Loop through the fields and check if any field is empty
    [
      "full_name",
      "email",
      "phone_number",
      "college",
      "college_state",
      "current_year",
    ].forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
  
        // Set a timeout to remove the error message after 5 seconds
        setTimeout(() => {
          setErrors((prevErrors) => {
            const updatedErrors = { ...prevErrors };
            delete updatedErrors[field]; // Remove the error for this field
            return updatedErrors;
          });
        }, 7000); // 5 seconds delay
      }
    });
  
    // Email validation
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
  
    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (formData.phone_number && !phoneRegex.test(formData.phone_number)) {
      newErrors.phone_number = "Invalid phone number format";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await set(ref(database, `users/${formData.full_name.replace(/\s+/g, "_")}`), {
        ...formData,
        created_at: new Date().toISOString(),
      });

      toast.success("Registration successful!", {
        position: "top-center",
        theme: "colored",
      });

      setTimeout(() => navigate("/"), 5000);
    } catch (error) {
      toast.error("Registration failed!", {
        position: "top-center",
        theme: "colored",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to cycle through
  const images = ["./ing1.jpeg", "./img2.jpeg", "./img3.jpeg", "./img4.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="pre-registration-body">
      <div className="pre-reg-container" id="pre-reg-container">
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentImageIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    borderRadius: 20,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 1,
                  }}
                />
              )
          )}
        </AnimatePresence>
        <div className="pre-reg-form-container pre-reg-sign-in-container">
          <form>
            <h1>Pre-Registration</h1>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.full_name}
              required
              name="fullName"
              onChange={(e) => handleInputChange("full_name", e.target.value)}
            />
            <input
              type="email"
              placeholder={errors.email ? errors.email : "Email"}
              value={formData.email}
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
              required
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={errors.email ? "error-input" : ""}
            />
            <input
              type="tel"
              required
              placeholder={
                errors.phone_number ? errors.phone_number : "Phone Number"
              }
              value={formData.phone_number}
              name="phoneNumber"
              maxLength="10"
              minLength="10"
              onChange={(e) =>
                handleInputChange("phone_number", e.target.value)
              }
              className={errors.phone_number ? "error-input" : ""}
            />
            <input
              type="text"
              placeholder="College Name"
              value={formData.college}
              name="collegeName"
              required
              onChange={(e) => handleInputChange("college", e.target.value)}
            />

            <select
              name="state"
              id="state"
              placeholder="College State"
              value={formData.college_state}
              required
              onChange={(e) =>
                handleInputChange("college_state", e.target.value)
              }
            >
              <option value="" disabled selected>
                College State
              </option>
              <option value="1">Andhra Pradesh</option>
              <option value="2">Arunachal Pradesh</option>
              <option value="3">Assam</option>
              <option value="4">Bihar</option>
              <option value="5">Chhattisgarh</option>
              <option value="6">Goa</option>
              <option value="7">Gujarat</option>
              <option value="8">Haryana</option>
              <option value="9">Himachal Pradesh</option>
              <option value="10">Jammu & Kashmir</option>
              <option value="11">Jharkhand</option>
              <option value="12">Karnataka</option>
              <option value="13">Kerala</option>
              <option value="14">Madhya Pradesh</option>
              <option value="15">Maharashtra</option>
              <option value="16">Manipur</option>
              <option value="17">Meghalaya</option>
              <option value="18">Mizoram</option>
              <option value="19">Nagaland</option>
              <option value="20">Odisha</option>
              <option value="21">Punjab</option>
              <option value="22">Rajasthan</option>
              <option value="23">Sikkim</option>
              <option value="24">Tamil Nadu</option>
              <option value="25">Telangana</option>
              <option value="26">Tripura</option>
              <option value="27">Uttar Pradesh</option>
              <option value="28">Uttarakhand</option>
              <option value="29">West Bengal</option>
              <option value="30">Andaman and Nicobar Islands</option>
              <option value="31">Chandigarh</option>
              <option value="32">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="33">Daman and Diu</option>
              <option value="34">Lakshadweep</option>
              <option value="35">Delhi</option>
              <option value="36">Puducherry</option>
            </select>

            <select
              name="year"
              id="year"
              value={formData.current_year}
              required
              onChange={(e) =>
                handleInputChange("current_year", e.target.value)
              }
            >
              <option value="" disabled selected>
                Current Year
              </option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
              <option value="5">Fifth Year</option>
              <option value="6">Other</option>
            </select>

            <button
              type="submit"
              className="pre-reg-ghost"
              id="pre-reg-signUp"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PrergForm;
