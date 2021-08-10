import React from 'react'
import './styles/Experience.css'

export default function Experience () {
  return (
      <section className="Experience__Section">
            <h2>My Experience</h2>
            <ul className="Experience__List">
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
