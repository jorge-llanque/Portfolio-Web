import React, { useEffect, useRef } from 'react'
import './styles/About.css'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
      duration: 2.5,
      transform: 'translate(0, 0)',
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(secondPagh.current, {
      scrollTrigger: {
        trigger: secondPagh.current,
        start: 'top 100%'
      },
      duration: 2.5,
      transform: 'translate(0, 0)',
      opacity: 1,
      ease: Expo.easeInOut
    })
  }, [])

  return (
    <section className="About__Section">
        <h2 ref={aboutTitle}>About Me</h2>
        <div className="About__Resume" >
            <div className="Description">
                <p ref={firstPagh}>Hello! My name is Jorge and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p ref={secondPagh}>Fast-forward to today, and Iapos;ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
            </div>
            <div className="Photo">
                <img src="#" alt="photo"/>
            </div>
        </div>
    </section>
  )
}
