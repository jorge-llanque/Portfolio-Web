import React, { useRef, useEffect } from 'react'
import Navbar from './Navbar'
import logo from './../logo-portfolio.svg'
import './styles/Header.css'
import { gsap, Expo } from 'gsap'

export default function Header () {
  let header = useRef(null)

  useEffect(() => {
    gsap.to(header, {
      duration: 1,
      delay: 5.5,
      top: 0,
      ease: Expo.easeInOut
    })
  }, [])

  const body = document.body
  const scrollUp = 'scroll-up'
  const scrollDown = 'scroll-down'
  let lastScroll = 0

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      body.classList.remove(scrollUp)
      return
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp)
      body.classList.add(scrollDown)
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown)
      body.classList.add(scrollUp)
    }
    lastScroll = currentScroll
  })

  return (
    <div className="Header" ref={(el) => { header = el }}>
        <img src={logo} alt="logo" className="Logo__Header"/>
        <Navbar />
    </div>
  )
}
