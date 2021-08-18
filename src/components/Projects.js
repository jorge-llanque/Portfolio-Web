import React, { useEffect, useRef } from 'react'
import { gsap, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projectImage1 from './../assets/project-image-1.PNG'
import projectImage2 from './../assets/project-image-2.PNG'
import projectImage3 from './../assets/project-image-3.PNG'
import projectImage4 from './../assets/project-image-4.PNG'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import './styles/Projects.css'

gsap.registerPlugin(ScrollTrigger)

export default function Projects () {
  const titleProjects = useRef(null)
  const paraProjects = useRef(null)
  const listProjects = useRef(null)

  useEffect(() => {
    gsap.to(titleProjects.current, {
      scrollTrigger: {
        trigger: titleProjects.current,
        start: 'top bottom'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(paraProjects.current, {
      scrollTrigger: {
        trigger: paraProjects.current,
        start: 'top bottom'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
    gsap.to(listProjects.current, {
      scrollTrigger: {
        trigger: listProjects.current,
        start: 'top bottom'
      },
      duration: 1,
      opacity: 1,
      ease: Expo.easeInOut
    })
  }, [])
  return (
      <section id="projects" className="Projects__Section" >
            <h2 ref={titleProjects} >My Projects</h2>
            <p ref={paraProjects}>I love to code ideas, making layouts, designing prototypes, deploying results, and fulfilling dreams.</p>
            <div ref={listProjects} className="Projects__List">
              <article className="Projects__Item">
                <header className="Item__Title">
                  <IoCheckmarkCircleSharp className="Item__Tic"/>
                  <div className="Title-Techs">
                    <h2><a href="/">Nutrition Recipes</a></h2>
                    <span>React | JavaScript | CSS3 | API Edamam</span>
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
                  <h2><a href="/">Favorite Videos</a></h2>
                  <span>SCSS | Redux | React | Jest | Webpack</span>
                  </div>
                </header>
                <div className="Thumbnail__Wrap">
                    <img loading="lazy" src={projectImage2} alt="img"/>
                </div>
              </article>
              <article className="Projects__Item">
                <header className="Item__Title">
                <IoCheckmarkCircleSharp className="Item__Tic"/>
                  <div className="Title-Techs">
                  <h2><a href="/">Your Friendly Store</a></h2>
                  <span>React | Redux | SCSS | API Paypal | API Asos</span>
                  </div>
                </header>
                <div className="Thumbnail__Wrap">
                    <img loading="lazy" src={projectImage3} alt="img"/>
                </div>
              </article>
              <article className="Projects__Item">
                <header className="Item__Title">
                <IoCheckmarkCircleSharp className="Item__Tic"/>
                  <div className="Title-Techs">
                  <h2><a href="/">Shuriken Gif</a></h2>
                  <span>React | CSS3 | API Giffy | Jest</span>
                  </div>
                </header>
                <div className="Thumbnail__Wrap">
                    <img loading="lazy" src={projectImage4} alt="img"/>
                </div>
              </article>
            </div>
            <a>All projects on Github ...</a>
      </section>
  )
}
