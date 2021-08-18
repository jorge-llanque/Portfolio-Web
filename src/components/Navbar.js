import React, { useState } from 'react'
import { FiAlignRight } from 'react-icons/fi'
import { useLocation } from 'wouter'
import './styles/Navbar.css'

export default function Navbar () {
  const [openNavbar, setopenNavbar] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation()

  const handleOpenNavbar = () => {
    setopenNavbar(!openNavbar)
    console.log(openNavbar)
  }

  const handleChangePage = () => {
    setopenNavbar(!openNavbar)
  }

  return (
    <div>
      <FiAlignRight onClick={handleOpenNavbar} className="Navbar__Logo"/>
      <div className= "Navbar__Content">
        <nav className= {openNavbar ? 'Navbar__Active' : 'Navbar__Links'}>
          <ul>
            <li><a onClick={handleChangePage} href="/#about" key="2">About</a></li>
            <li><a onClick={handleChangePage} href="/#skills" key="3">Skills</a></li>
            <li><a onClick={handleChangePage} href="/#projects" key="4">Projects</a></li>
            <li><a onClick={handleChangePage} href="/#experience" key="5">Experience</a></li>
            <li><a onClick={handleChangePage} href="/#contact" key="6">Contact</a></li>
            <li><a onClick={handleChangePage} className="resume-button" href='/resume.pdf' target="_blank">Resume</a></li>
            <li className="Toggle__DarkMode"><input type="checkbox" id="toggle"/><label htmlFor="toggle"></label></li>
          </ul>
        </nav>
        <div className= {openNavbar ? 'Wrapper__Active' : 'Navbar__Wrapper'}
         onClick={handleOpenNavbar}/>
      </div>
    </div>
  )
}
