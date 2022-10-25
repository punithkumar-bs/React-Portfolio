import './App.css';
import React, { useState, useEffect } from "react";
import "./style.css";
import "./App.css";
import 'react-vertical-timeline-component/style.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from './components/Preloader'
import MyNav from './components/MyNav'
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home"
import { Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import Ranking from './components/Ranking';
import EducationJourney from './components/EducationJourney';
import CertificatePage from './components/CertificatePage';
import PersonalSkill from './components/PersonalSkill'
import TechnicalSkill from './components/TechnicalSkill'
import Commingsoon from './components/comingsoon'
import Notfound from './components/notfound'
import TechnicalJourney from './components/TechnicalJourney'
import ProjectJourney from './components/ProjectJourney'
import SocialMedia from './components/SocialMedia'
import Toolkit from './components/Toolkit';

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  return(
      <Router>
      <Preloader load={load}/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route path="/" element={<About/>}></Route>
                                <Route path="personalskill" element={<PersonalSkill/>}/>
                                <Route path="technicalskill" element={<TechnicalSkill/>}/>
                                <Route path="technicaljourney" element={<TechnicalJourney/>}/>
                                <Route path="projectjourney" element={<ProjectJourney/>}/>
                                <Route path="educationjourney" element={<EducationJourney/>}/>
                                <Route path="ranking" element={<Ranking/>}/>
                                <Route path="socialmedia" element={<SocialMedia/>}/>
                                <Route path="toolkit" element={<Toolkit/>}/>
          </Route>
          <Route path="/certificatepage" element={<CertificatePage />}/>
          <Route path="/blogs" element={<Commingsoon />}/>                   
          <Route path="*" element={<Notfound />} />
        </Routes>
      <Footer/>
      </div>
      </Router>
  );
}

export default App;
