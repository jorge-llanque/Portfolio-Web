import React from 'react'
import './styles/Skills.css'
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiRedux, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiSass, SiMaterialUi, SiJest, SiGithub } from 'react-icons/si'
import { DiPostgresql } from 'react-icons/di'

export default function Skills () {
  return (
      <section className="Skills__Section">
            <h2>My Skills</h2>
            <p>Here are a few technologies Ive been working with recently:</p>
            <ul className="Skills__Section-List">
                <li><FaReact />React</li>
                <li><SiRedux />Redux</li>
                <li><SiJavascript/>JavaScript</li>
                <li><SiTypescript/>TypeScript</li>
                <li><SiHtml5/>HTML5</li>
                <li><SiCss3/>CSS3</li>
                <li><SiSass/>SASS</li>
                <li><SiMaterialUi/>Material UI</li>
                <li><FaNodeJs/>NodeJs</li>
                <li>Express</li>
                <li>Sequelize</li>
                <li><DiPostgresql/>PostgreSQL</li>
                <li><SiJest/>Jest</li>
                <li><SiGithub/>GitHub</li>
                <li><FaGitAlt/>Git</li>
            </ul>
        </section>
  )
}
