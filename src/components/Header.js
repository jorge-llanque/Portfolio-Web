import React from 'react'
import Navbar from './Navbar'
import logo from './../logo.png'
import './styles/Header.css'

export default function Header() {
  return (
    <div className="Header">
        <img src={logo} alt="logo" className="Logo__Header"/>
        <Navbar />
    </div>
  )
}
