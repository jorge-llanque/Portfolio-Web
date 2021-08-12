import React, { useState } from 'react'
import { FiAlignRight } from 'react-icons/fi'
import './styles/Navbar.css'

export default function Navbar () {
  const [openNavbar, setopenNavbar] = useState(false)

  const handleOpenNavbar = () => {
    setopenNavbar(!openNavbar)
    console.log(openNavbar)
  }

  return (
    <div>
      <FiAlignRight onClick={handleOpenNavbar} className="Navbar__Logo"/>
      <div className= "Navbar__Content">
        <nav className= {openNavbar ? 'Navbar__Links Navbar__Active' : 'Navbar__Links'}>
          <ul>
            <li><a href="/#about" key="2">About</a></li>
            <li><a href="/#skills" key="3">Skills</a></li>
            <li><a href="/#projects" key="4">Projects</a></li>
            <li><a href="/#experience" key="5">Experience</a></li>
            <li><a href="/#contact" key="6">Contact</a></li>
            <li><a className="resume-button" href='/resume.pdf' target="_blank">Resume</a></li>
          </ul>
        </nav>
        <div className= {openNavbar ? 'Wrapper__Active' : 'Navbar__Wrapper'}
         onClick={handleOpenNavbar}/>
      </div>
    </div>
  )
}
