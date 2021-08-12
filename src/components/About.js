import React, { useEffect, useRef } from 'react'
import './styles/About.css'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import profile from './../profile.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function About () {
  const aboutTitle = useRef(null)
  const firstPagh = useRef(null)
  const secondPagh = useRef(null)

  useEffect(() => {
    gsap.to(aboutTitle.current, {
      scrollTrigger: {
        trigger: aboutTitle.current,
        start: 'top 100%'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(firstPagh.current, {
      scrollTrigger: {
        trigger: firstPagh.current,
        start: 'top 100%'
      },
      duration: 2,
      transform: 'translate(0, 0)',
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(secondPagh.current, {
      scrollTrigger: {
        trigger: secondPagh.current,
        start: 'top 100%'
      },
      duration: 2,
      transform: 'translate(0, 0)',
      opacity: 1,
      ease: Expo.easeInOut
    })
  }, [])

  return (
    <section id="about" className="About__Section">
        <h2 ref={aboutTitle}>About Me</h2>
        <div className="About__Resume" >
            <div className="Description" >
                <p ref={firstPagh} >In 2017 I started studying Systems Engineering at university motivated by curiosity in digitization. With the passage of time I discovered that my passion was web development, since then I have not stopped working on improving my skills.</p>
                <p ref={secondPagh}>In my last face-to-face job I had the opportunity to collaborate as a logistics systems developer and I was able to improve my team collaboration. Every day I have new challenges and I strive to be prepared to overcome them.</p>
            </div>
            <div className="Photo">
                <img src={profile} alt="photo"/>
            </div>
        </div>
    </section>
  )
}
