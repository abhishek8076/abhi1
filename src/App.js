// import logo from './logo.svg';
// import './App.css';
import React,{useState,useEffect} from "react";
import ResponsiveAppBa from './components/NavBar/navbar';
import About from './components/About/About';
import Footer from "./components/Footer_/Footer";
import ResumeNew from "./components/resume/Resume";
// import BackToTop from './components/BackToTop';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ResponsiveAppBa />
        {/* <ScrollToTop /> */}
        <About/>
        <ResumeNew />
        <Routes>
          {/* <Route path="/" element={<Abhishek />} /> */}
          {/* <Route path="/project" element={<Projects />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumeNew />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
