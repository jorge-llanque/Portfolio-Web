import React from 'react'
import Navbar from './Navbar'
import logo from './../logo.png'
import './styles/Header.css'

export default function Header() {

  const body = document.body;
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });

  return (
    <div className="Header">
        <img src={logo} alt="logo" className="Logo__Header"/>
        <Navbar />
    </div>
  )
}
