import React from 'react'
import './about.css'
import ME from '../../assets/me2.JPG'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt='About it'/>
          </div>
        </div>

           <div className="about__content">
            <div className="about__cards"> 
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Exprerience</h5>
                <small> 1 years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small> 200+ </small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small> 15+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Voluptate reprehenderit eius delectus maxime pariatur dolore minima 
              amet temporibus perferendis, veritatis nostrum commodi voluptatum, aliquid 
              culpa assumenda, quasi ipsa corrupti dolores.

            </p>
            <a href="#content" className='btn btn-primary'>Let's Talk</a>

           </div>
      </div>
    
    </section>
  )
}

export default About