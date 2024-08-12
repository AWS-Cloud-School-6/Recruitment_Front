import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import Joblist from "./components/joblist";
import JobDetails from "./components/jobDetails";
import Myapply from "./components/myapply";
import { Team } from "./components/Team";
import { Login } from "./components/login";
import Application from "./components/application";
import { Signup } from "./components/signup";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


import { BrowserRouter as Router, Route, Routes, useLocation  } from "react-router-dom";
import { LoginSuccess } from './components/loginsuccess';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// 추후 시간 남으면 애니메이션 효과 구현

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Header data={landingPageData.Header} />} />
        <Route path="/features" element={<Features data={landingPageData.Features} />} />
        <Route path="/joblist" element={<Joblist data={landingPageData.Gallery} />} />
        <Route path="/myapply" element={<Myapply data={landingPageData.Testimonials} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginsuccess" element={<LoginSuccess />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/joblist/:id" element={<JobDetails />} />
        <Route path="/joblist/:id/apply" element={<Application />} />
      </Routes>
    </Router> 
  );
};

export default App;
