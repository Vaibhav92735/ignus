import React from "react";
import PrergForm from "./PrergForm";
import PreRegistration from "./PreRegistration";
// import LandPage from "./LandPage";
import LandingPage from "./LandingPage";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./NotFound";
import SEO from './SEO';
 
const App = () => {

  document.title = "Ignus 25 | IIT Jodhpur";
  return (
    <div>
      <SEO />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prereg" element={<PreRegistration />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  );
};

export default App;
