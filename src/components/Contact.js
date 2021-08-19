import React, { useRef, useEffect, useContext } from 'react'
import ThemeContext from './../context/ThemeContext'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SiLinkedin, SiTwitter, SiGithub } from 'react-icons/si'
import './styles/Contact.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact () {
  const { darkTheme } = useContext(ThemeContext)
  const titleContact = useRef(null)
  const emailContact = useRef(null)
  const listContact = useRef(null)

  useEffect(() => {
    gsap.to(titleContact.current, {
      scrollTrigger: {
        trigger: titleContact.current,
        start: 'top bottom'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(emailContact.current, {
      scrollTrigger: {
        trigger: emailContact.current,
        start: 'top bottom'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(listContact.current, {
      scrollTrigger: {
        trigger: listContact.current,
        start: 'top bottom'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
  }, [])

  const butStyle = {
    backgroundColor: '#109259',
    color: '#fefefe',
    border: 'none',
    transition: 'all 1s ease'
  }

  const butCustomStyle = darkTheme ? butStyle : null

  return (
    <section id="contact" className="Contact__Section">
        <h2 ref={titleContact} >Contact Me</h2>
        <div className="Contact__Links">
          <a style={butCustomStyle} ref={emailContact} className="Contact-Email" href="mailto:georgellanque@gmail.com">Send me an Email</a>
          <ul ref={listContact}>
            <li><a href="https://www.linkedin.com/in/jorgellanque/" target="_blank" rel="noreferrer"><SiLinkedin /></a></li>
            <li><a href="https://twitter.com/codeforever" target="_blank" rel="noreferrer" ><SiTwitter/></a></li>
            <li><a href="https://github.com/jorge-llanque" target="_blank" rel="noreferrer"><SiGithub/></a></li>
          </ul>
        </div>
    </section>
  )
}
