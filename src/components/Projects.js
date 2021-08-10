import React from 'react'
import './styles/Projects.css'
import projectImage1 from './../project-image-1.PNG'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'

export default function Projects () {
  return (
      <section className="Projects__Section">
            <h2>My Projects</h2>
            <p>I like to build pages, get up project, imagine squares and life cycles...</p>
            <div className="Projects__List">
            <article className="Projects__Item">
              <header className="Item__Title">
                <IoCheckmarkCircleSharp className="Item__Tic"/>
                <div className="Title-Techs">
                <h2><a href="/">Nutrition Recipes</a></h2>
                <span>React | JavaScript | CSS3</span>
                </div>
              </header>
              <div className="Thumbnail__Wrap">
                  <img loading="lazy" src={projectImage1} alt="img"/>
              </div>
            </article>
            <article className="Projects__Item">
              <header className="Item__Title">
              <IoCheckmarkCircleSharp className="Item__Tic"/>
                <div className="Title-Techs">
                <h2><a href="/">Nutrition Recipes</a></h2>
                <span>React | JavaScript | CSS3</span>
                </div>
              </header>
              <div className="Thumbnail__Wrap">
                  <img loading="lazy" src={projectImage1} alt="img"/>
              </div>
            </article>
            <article className="Projects__Item">
              <header className="Item__Title">
              <IoCheckmarkCircleSharp className="Item__Tic"/>
                <div className="Title-Techs">
                <h2><a href="/">Nutrition Recipes</a></h2>
                <span>React | JavaScript | CSS3</span>
                </div>
              </header>
              <div className="Thumbnail__Wrap">
                  <img loading="lazy" src={projectImage1} alt="img"/>
              </div>
            </article>
            </div>
      </section>
  )
}
