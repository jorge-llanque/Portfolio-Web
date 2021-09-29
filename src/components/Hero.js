/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
import React, { useRef, useEffect, useContext } from 'react'
import ThemeContext from './../context/ThemeContext'
import './styles/Hero.css'
import { gsap, Expo } from 'gsap'

export default function Hero() {
  const { darkTheme } = useContext(ThemeContext)

  const headerTitle = useRef(null)
  const headerName = useRef(null)
  const headerSub = useRef(null)
  const headerParg = useRef(null)
  const headerButton = useRef(null)

  useEffect(() => {
    gsap.to(headerTitle.current, {
      duration: 2,
      opacity: 1,
      ease: Expo.easeInOut,
    })
    gsap.to(headerName.current, {
      duration: 2,
      opacity: 1,
      delay: 0.3,
      ease: Expo.easeInOut,
    })
    gsap.to(headerSub.current, {
      duration: 2,
      opacity: 1,
      delay: 0.6,
      ease: Expo.easeInOut,
    })
    gsap.to(headerParg.current, {
      duration: 2,
      opacity: 1,
      delay: 0.9,
      ease: Expo.easeInOut,
    })
    gsap.to(headerButton.current, {
      duration: 2,
      opacity: 1,
      delay: 1.2,
      ease: Expo.easeInOut,
    })
  }, [])

  const titleStyle = {
    color: '#868686',
    transition: 'all 1s ease',
  }
  const subStyle = {
    color: '#656565',
    transition: 'all 1s ease',
  }
  const butStyle = {
    backgroundColor: '#109259',
    color: '#fefefe',
    border: 'none',
    transition: 'all 1s ease',
  }

  const titleCustomStyle = darkTheme ? titleStyle : null
  const subCustomStyle = darkTheme ? subStyle : null
  const butCustomStyle = darkTheme ? butStyle : null

  return (
    <div className='Hero'>
      <section className='Hero__Section'>
        <h1 style={titleCustomStyle} ref={headerTitle}>
          Hi, my name is
        </h1>
        <h2 ref={headerName}>Jorge LLanque.</h2>
        <h3 style={titleCustomStyle} ref={headerSub}>
          Passionate about the web.
        </h3>
        <p style={subCustomStyle} ref={headerParg}>
          I&apos;m a frontend developer, who builds tools that empower people to
          do their best work.
        </p>
        <a
          style={butCustomStyle}
          ref={headerButton}
          href='/Resume-JorgeLLanque.pdf'
          target='_blank'
          className='First__Button'
        >
          Download CV
        </a>
      </section>
    </div>
  )
}
