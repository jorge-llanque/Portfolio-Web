import React, { useEffect, useRef, useContext } from 'react'
import ThemeContext from './../context/ThemeContext'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Experience.css'

gsap.registerPlugin(ScrollTrigger)

export default function Experience () {
  const { darkTheme } = useContext(ThemeContext)
  const titleExperience = useRef(null)
  const listExperience = useRef(null)

  useEffect(() => {
    gsap.to(titleExperience.current, {
      scrollTrigger: {
        trigger: titleExperience.current,
        start: 'top bottom'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(listExperience.current, {
      scrollTrigger: {
        trigger: listExperience.current,
        start: 'top bottom'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
  }, [])

  const com1Style = {
    borderRight: '1px dashed #71DAAC',
    transition: 'all 1s ease'
  }
  const textStyle = {
    color: '#000',
    transition: 'all 1s ease'
  }

  const com1CustomStyle = darkTheme ? com1Style : null
  const textCustomStyle = darkTheme ? textStyle : null

  return (
      <section id="experience" className="Experience__Section" >
            <h2 ref={titleExperience}>My Experience</h2>
            <ul ref={listExperience} className="Experience__List">
                <li style={com1CustomStyle} className="Experience__List-Item-1">
                    <h4>Developer on Cadena Logistica SRL</h4>
                    <span>March 2019 - Feb 2020</span>
                    <p style={textCustomStyle}>Coding interfaces for client&apos;s websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</p>
                </li>
                <li className="Experience__List-Item-2">
                    <h4>Freelance on Freelance.com</h4>
                    <span>April 2020 - Present</span>
                    <p style={textCustomStyle}>Build systems from database analysis to delivery of system documentation, and more</p>
                </li>
            </ul>
        </section>
  )
}
