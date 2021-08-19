import React, { useState, useRef, useEffect, useContext } from 'react'
import ThemeContext from './../context/ThemeContext'
import { gsap, Expo } from 'gsap'
import logo from './../logo-portfolio.svg'
import './styles/Layout.css'

// eslint-disable-next-line react/prop-types
export default function Layout ({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const overlay = useRef(null)
  const logoAnimate = useRef(null)
  const { darkTheme } = useContext(ThemeContext)

  useEffect(() => {
    gsap.to(logoAnimate.current, {
      duration: 0.9,
      rotation: 450,
      transformOrigin: 'center center',
      delay: 0.5
    })
    gsap.to(logoAnimate.current, {
      duration: 0.5,
      display: 'none',
      delay: 2
    })
    gsap.to(overlay.current, {
      duration: 1,
      delay: 2,
      top: '-100%',
      backgroundColor: 'var(--color-background)',
      ease: Expo.easeInOut
    })
    gsap.to(overlay.current, {
      duration: 2.6,
      backgroundColor: 'var(--color-background)',
      onComplete: isLoadingFalse
    })
  }, [])

  const isLoadingFalse = () => {
    setIsLoading(false)
  }

  const layoutStyle = {
    backgroundColor: 'rgb(255 255 255)',
    color: '#000',
    transition: 'all 1s ease'
  }
  const themeStyle = darkTheme ? layoutStyle : null

  return (
    <div>
      {
        isLoading
          // eslint-disable-next-line no-const-assign
          ? <div className="Overlay" ref={overlay}>
        <img src={logo} className="prueba" ref={logoAnimate}/>
      </div>
          : <div style={themeStyle} className="Layout">
             {children}
            </div>
      }
    </div>
  )
}
