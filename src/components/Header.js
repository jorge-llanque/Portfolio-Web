import React, { useRef, useEffect, useContext } from 'react'
import ThemeContext from './../context/ThemeContext'
import Navbar from './Navbar'
import logo from './../logo-portfolio.svg'
import './styles/Header.css'
import { gsap, Expo } from 'gsap'

export default function Header () {
  const { darkTheme } = useContext(ThemeContext)
  let header = useRef(null)

  useEffect(() => {
    gsap.to(header, {
      duration: 1.5,
      delay: 0,
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

  const headerStyle = {
    backgroundColor: 'rgb(243 243 243)',
    color: 'white',
    transition: 'all 1s ease'
  }
  const themeStyle = darkTheme ? headerStyle : null

  return (
    <div style={themeStyle} className="Header" ref={(el) => { header = el }} >
        <img src={logo} alt="logo" className="Logo__Header"/>
        <Navbar />
    </div>
  )
}
