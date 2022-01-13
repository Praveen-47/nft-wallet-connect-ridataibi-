import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "../node_modules/font-awesome/css/font-awesome.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { Header } from './components/header/Header';
import { Hero } from "./components/hero/Hero";
import React from "react";
import { About } from "./components/about/About";
import { Benefits } from "./components/benefits/Benefits";
import { Roadmap } from "./components/roadmap/Roadmap";
import { Team } from "./components/Team/Team";
import { Faq } from "./components/faq/Faq";
import { Footer } from "./components/footer/Footer";
import $ from "jquery";


function App() {
  return (
    <React.Fragment>
    <Header/>
    <Hero/>
    <About/>
    <Benefits/>
    <Roadmap/>
    <Team/>
    <Faq/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
