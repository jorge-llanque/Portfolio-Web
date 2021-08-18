import React, { useEffect, useRef } from 'react'
import './styles/About.css'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import profile from './../profile.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function About () {
  const aboutTitle = useRef(null)
  const firstPara = useRef(null)
  const secondPara = useRef(null)
  const photo = useRef(null)

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
    gsap.to(firstPara.current, {
      scrollTrigger: {
        trigger: firstPara.current,
        start: 'top bottom'
      },
      opacity: 1,
      ease: Expo.easeInOut,
      duration: 1.5,
      delay: 0

    })
    gsap.to(secondPara.current, {
      scrollTrigger: {
        trigger: secondPara.current,
        start: 'top bottom'
      },
      opacity: 1,
      ease: Expo.easeInOut,
      duration: 1.5,
      delay: 0
    })
    gsap.to(photo.current, {
      scrollTrigger: {
        trigger: photo.current,
        start: 'top bottom'
      },
      opacity: 1,
      ease: Expo.easeInOut,
      duration: 1.5,
      delay: 0
    })
  }, [])

  return (
    <section id="about" className="About__Section">
        <h2 ref={aboutTitle}>About Me</h2>
        <div className="About__Resume" >
            <div className="Description" >
                <p ref={firstPara} >In 2017 I started studying Systems Engineering at the university motivated by curiosity in digitization. With the passage of time I discovered that my passion was web development, since then I have not stopped working on improving my skills.</p>
                <p ref={secondPara}>In my last face-to-face job I had the opportunity to collaborate as a logistics systems developer and I was able to improve my team collaboration. Every day I have new challenges and I strive to be prepared to overcome them.</p>
            </div>
            <div className="Photo" ref={photo}>
                <img src={profile} alt="photo"/>
            </div>
        </div>
    </section>
  )
}
