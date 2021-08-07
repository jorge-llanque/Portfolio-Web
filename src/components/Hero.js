import React from 'react'
import './styles/Hero.css'


export default function Hero() {
  return (
    <div className="Hero">
        <section class="introduce">
          <div class="introduce__description">
            <h1>Hi, my name is</h1>
            <h2>Jorge LLanque.</h2>
            <h3>I build things for the web.</h3>
            <p>I'm a Boston-based software engineer who specializes in building (and occasionally designing) exceptional digital experiences. Currently, I'm an engineer at Upstatement focused on building accessible, human-centered products.</p>
            <button class="First__Button" >Get In Touch</button>
          </div>
          <div class="introduce__photo">
              <img src="./static/profile-photo.png" alt="profile-photo"/>
          </div>
        </section>
      
    </div>
  )
}
