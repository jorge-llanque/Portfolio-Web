import React, { useRef, useEffect } from 'react'
import './styles/Hero.css'
import { gsap, Expo } from 'gsap'

export default function Hero () {
  const headerTitle = useRef(null)
  const headerName = useRef(null)
  const headerSub = useRef(null)
  const headerParg = useRef(null)
  const headerButton = useRef(null)

  useEffect(() => {
    gsap.to(headerTitle.current, {
      duration: 2,
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(headerName.current, {
      duration: 2,
      opacity: 1,
      delay: 0.3,
      ease: Expo.easeInOut
    })
    gsap.to(headerSub.current, {
      duration: 2,
      opacity: 1,
      delay: 0.6,
      ease: Expo.easeInOut
    })
    gsap.to(headerParg.current, {
      duration: 2,
      opacity: 1,
      delay: 0.9,
      ease: Expo.easeInOut
    })
    gsap.to(headerButton.current, {
      duration: 2,
      opacity: 1,
      delay: 1.2,
      ease: Expo.easeInOut
    })
  }, [])

  return (
    <div className="Hero" >
      <section className="Hero__Section">
          <h1 ref={headerTitle}>Hi, my name is</h1>
          <h2 ref={headerName}>Jorge LLanque.</h2>
          <h3 ref={headerSub}>A web solutions architect.</h3>
          <p ref={headerParg}>I&apos;m Frontend Developer, I love to code Javascript. I would like to collaborate in a team of software development</p>
          <a ref={headerButton} href='/resume.pdf' target="_blank" className="First__Button" >Download CV</a>
      </section>
    </div>
  )
}
