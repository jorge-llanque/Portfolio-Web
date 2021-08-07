import React, {useRef, useEffect} from 'react'
import {gsap, Expo} from 'gsap'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'
import logo from './logo-portfolio.svg'



function App() {
  let overlay = useRef(null);
  let hola = useRef(null);


  useEffect(()=>{
    gsap.to(overlay,{
      duration: 1.5,
      delay: .1,
      top: "0%",
      ease: Expo.easeInOut
    })

    gsap.to(hola,{
      duration: 1,
      rotation: 360,
      transformOrigin: "center center",
      delay: .5
    })
    gsap.to(hola,{
      duration: 1,
      ease: "back.out(4)",
      x: 10,
      delay: 2
    })
    gsap.to(hola, {
      duration: 1,
      "--color-logo":"green",
      yoyo:true,
      repeat: 1,
      delay: 3
    })
    gsap.to(hola,{
      duration: 1,
      display: "none",
      delay: 4
    })
    gsap.to(overlay,{
      duration: 1.5,
      delay: 4.5,
      top: "-100%",
      ease: Expo.easeInOut
    })
  }, [])

  return (
    <div>
      <BrowserRouter>
        <div className="Overlay" ref={(el)=>{overlay = el}}/>
        <div className="prueba" ref={(el) => {hola = el}}>Hola</div>
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
