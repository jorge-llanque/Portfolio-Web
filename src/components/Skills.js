import React, { useEffect, useRef } from 'react'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiNextDotJs, SiRedux, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiSass, SiMaterialUi, SiJest, SiGithub, SiWebpack } from 'react-icons/si'
import { DiPostgresql } from 'react-icons/di'
import './styles/Skills.css'

gsap.registerPlugin(ScrollTrigger)

export default function Skills () {
  const titleSkills = useRef(null)
  const paraSkills = useRef(null)
  const listSkills = useRef(null)

  useEffect(() => {
    gsap.to(titleSkills.current, {
      scrollTrigger: {
        trigger: titleSkills.current,
        start: 'top 100%'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(paraSkills.current, {
      scrollTrigger: {
        trigger: paraSkills.current,
        start: 'top 100%'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(listSkills.current, {
      scrollTrigger: {
        trigger: listSkills.current,
        start: 'top 100%'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
  }, [])

  return (
      <section id="skills" className="Skills__Section" >
            <h2 ref={titleSkills}>My Skills</h2>
            <p ref={paraSkills}>Here are a few technologies Ive been working with recently:</p>
            <ul className="Skills__Section-List" ref={listSkills} >
                <li>
                  <i><FaReact /></i>
                  <span>React</span></li>
                <li>
                <i><SiRedux /></i>
                <span>Redux</span></li>
                <li>
                  <i><SiJavascript/></i>
                  <span>JavaScript</span></li>
                <li>
                  <i><SiTypescript/></i>
                  <span>TypeScript</span></li>
                <li>
                  <i><SiHtml5/></i>
                  <span>HTML5</span></li>
                <li>
                  <i><SiCss3/></i>
                  <span>CSS3</span></li>
                <li>
                  <i><SiSass/></i>
                  <span>SASS</span></li>
                <li>
                  <i><SiMaterialUi/></i>
                  <span>Material UI</span></li>
                <li>
                  <i><FaNodeJs/></i>
                  <span>NodeJs</span></li>
                <li>
                  <i><DiPostgresql/></i>
                  <span>PostgreSQL</span></li>
                <li>
                  <i><SiJest/></i>
                  <span>Jest</span></li>
                <li>
                  <i><SiGithub/></i>
                  <span>GitHub</span></li>
                <li>
                  <i><FaGitAlt/></i>
                  <span>Git</span></li>
                <li>
                  <i><SiWebpack/></i>
                  <span>Webpack</span></li>
                <li>
                  <i><SiNextDotJs/></i>
                  <span>NextJs</span></li>
            </ul>
        </section>
  )
}
