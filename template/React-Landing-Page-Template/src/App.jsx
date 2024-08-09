import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Joblist } from "./components/joblist";
import { Myapply } from "./components/myapply";
import { Team } from "./components/Team";
import { Login } from "./components/login";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (    
    <Router>
      <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />                 
      <Routes>
        <Route path="/" element={<Header data={landingPageData.Header} />}/>
        <Route path="/joblist" element={<Joblist data={landingPageData.Gallery} />}/>
        <Route path="/myapply" element={<Myapply data={landingPageData.Testimonials} />}/>
        <Route path="/login" element={<Login data={landingPageData.Contact} />}/>
      </Routes>
    </Router>

  );
};

export default App;
