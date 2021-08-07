import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
            <li><Link to="/#about" key="2">About</Link></li>
            <li><Link to="/#projects" key="3">Projects</Link></li>
            <li><Link to="/#experience" key="4">Experience</Link></li>
            <li><Link to="/#contact" key="5">Contact</Link></li>
            <Link className="resume-button" to='./../resume.pdf' target="_blank">Resume</Link>
          </ul>
        </nav>
        <div className= {openNavbar ? 'Wrapper__Active' : 'Navbar__Wrapper'}
         onClick={handleOpenNavbar}/>
      </div>
    </div>
  )
}
