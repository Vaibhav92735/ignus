import React from "react";
import PrergForm from "./PrergForm";
import PreRegistration from "./PreRegistration";
// import LandPage from "./LandPage";
import LandingPage from "./LandingPage";
import { Routes, Route } from 'react-router-dom';

const App = () => {

  document.title = "Ignus 25 | IIT Jodhpur";
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prereg" element={<PreRegistration />} />
      </Routes>
    </div>
  );
};

export default App;
