import React from 'react'
import './styles/About.css'

export default function About () {
  return (
    <section className="About__Section">
        <h2>About Me</h2>
        <div className="About__Resume" >
            <div className="Description">
                <p>Hello! My name is Jorge and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, and Iapos;ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
            </div>
            <div className="Photo">
                <img src="#" alt="photo"/>
            </div>
        </div>
    </section>
  )
}
