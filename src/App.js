import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'
import Layout from './components/Layout'
import Footer from './components/Footer'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Layout>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
