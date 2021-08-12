import React from 'react'
import './styles/Contact.css'
import { SiLinkedin, SiTwitter, SiGithub } from 'react-icons/si'

export default function Contact () {
  return (
    <section id="contact" className="Contact__Section">
        <h2>Contact Me</h2>
        <div className="Contact__Links">
          <a className="Contact-Email" href="mailto:georgellanque@gmail.com">Send me an Email</a>
          <ul>
            <li><SiLinkedin/></li>
            <li><SiTwitter/></li>
            <li><SiGithub/></li>
          </ul>
        </div>
    </section>
  )
}
