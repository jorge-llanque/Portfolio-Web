import React, { useEffect, useRef } from 'react'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/Experience.css'

gsap.registerPlugin(ScrollTrigger)
export default function Experience () {
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

  return (
      <section id="experience" className="Experience__Section" >
            <h2 ref={titleExperience}>My Experience</h2>
            <ul ref={listExperience} className="Experience__List">
                <li className="Experience__List-Item-1">
                    <h4>Developer on Cadena Logistica SRL</h4>
                    <span>March 2019 - Feb 2020</span>
                    <p>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</p>
                </li>
                <li className="Experience__List-Item-2">
                    <h4>Freelance on Freelance.com</h4>
                    <span>April 2020 - Present</span>
                    <p>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more</p>
                </li>
            </ul>
        </section>
  )
}
