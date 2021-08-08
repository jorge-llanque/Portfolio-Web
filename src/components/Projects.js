import React from 'react'
import './styles/Projects.css'

export default function Projects () {
  return (
      <section className="Projects__Section">
            <h2>My projects</h2>
            <p>I like to build pages, get up project, imagine squares and life cycles...</p>
            <ol className="Projects__Section-List">
                <li>Badge Creator</li>
                <li>Hospital System Administration</li>
                <li>E-commerce System</li>
                <li>Calories counter</li>
                <li>Blog Platzi</li>
                <li>Video Platzi</li>
                <li>Landing Page - Starlink</li>
                <li>Landing Page - Artists</li>
            </ol>
      </section>
  )
}
