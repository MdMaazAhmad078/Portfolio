import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/Service';
import Contact from './components/Contact';
import FrontEndModel from './components/FrontEndModel';
import BackEndModel from './components/BackEndModel';
import FullStackModel from './components/FullStackModel';
import Qualification from './components/Qualification';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
    
    {/* <Route path="/" exact component={Login} /> */}
    {/* <Route path="/Signup" exact component={Signup} /> */}
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/About" exact component={About} />
    <Route path="/Skills" exact component={Skills} />
    <Route path="/Service" exact component={Service} />
    <Route path="/Contact" exact component ={Contact}/>
    <Route path="/FrontEndModel" exact component ={FrontEndModel}/>
    <Route path="/BackEndModel" exact component ={BackEndModel}/>
    <Route path="/FullStackModel" exact component ={FullStackModel}/>
    <Route path="/Qualification" exact component ={Qualification}/>
    <Route path="/Portfolio" exact component ={Portfolio}/>
    <Footer/>
    </div>

</Router>
  );
}

export default App;