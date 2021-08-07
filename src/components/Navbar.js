import React from 'react'
import { useState } from 'react';
import { FiAlignRight } from "react-icons/fi";
import './styles/Navbar.css'

export default function Navbar() {
const [openNavbar, setopenNavbar] = useState(false);

const handleOpenNavbar = () => {
  setopenNavbar(!openNavbar)
  console.log(openNavbar)
}


  return (
    <div>
      <FiAlignRight onClick={handleOpenNavbar} className="Navbar__Logo"/>
      <div className= "Navbar__Content">
        <nav className= {openNavbar ? "Navbar__Links Navbar__Active" : "Navbar__Links"}>
          <ul>
            <li key="1">Home</li>
            <li key="2">About</li>
            <li key="3">Projects</li>
            <li key="4">Contact</li>
          </ul>
        </nav>
        <div className= {openNavbar ? "Wrapper__Active" : "Navbar__Wrapper"}
         onClick={handleOpenNavbar}/>
      </div>
    </div>
  )
}
