import React from 'react'
import './styles/Skills.css'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiRedux, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiSass, SiMaterialUi, SiJest, SiGithub } from 'react-icons/si'
import { DiPostgresql } from 'react-icons/di'

export default function Skills () {
  return (
      <section className="Skills__Section" >
            <h2>My Skills</h2>
            <p>Here are a few technologies Ive been working with recently:</p>
            <ul className="Skills__Section-List">
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
                  <i><FaGitAlt/></i>
                  <span>Webpack</span></li>
            </ul>
        </section>
  )
}
