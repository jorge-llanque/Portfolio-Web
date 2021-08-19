import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Footer from './components/Footer'
import './index.css'

function App () {
  return (
    <div>
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
    </div>
  )
}

export default App
