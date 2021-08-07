import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
