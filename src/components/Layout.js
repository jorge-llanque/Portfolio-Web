import React, { useState, useRef, useEffect } from 'react'
import { gsap, Expo } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import logo from './../logo-portfolio.svg'
import './styles/Layout.css'

// eslint-disable-next-line react/prop-types
export default function Layout ({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const overlay = useRef(null)
  const logoAnimate = useRef(null)

  useEffect(() => {
    gsap.to(logoAnimate.current, {
      duration: 1,
      rotation: 450,
      transformOrigin: 'center center',
      delay: 0.5
    })
    gsap.to(logoAnimate.current, {
      duration: 0.8,
      ease: CustomEase.create('custom', 'M0,0 C0.129,0.572 0.259,1.016 0.517,1.09 0.678,1.136 0.836,0 1,0 '),
      x: 70,
      delay: 2
    })
    gsap.to(logoAnimate.current, {
      duration: 0.5,
      display: 'none',
      delay: 3
    })
    gsap.to(overlay.current, {
      duration: 1,
      delay: 3,
      top: '-100%',
      ease: Expo.easeInOut,
      onComplete: isLoadingFalse
    })
  }, [])

  const isLoadingFalse = () => {
    setIsLoading(false)
  }
  return (
    <>
      {
        isLoading
          // eslint-disable-next-line no-const-assign
          ? <div className="Overlay" ref={overlay}>
        <img src={logo} className="prueba" ref={logoAnimate}/>
      </div>
          : (children)
      }
    </>
  )
}
