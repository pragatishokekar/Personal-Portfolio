import React from 'react'
import "./about.css"
import Image from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox'

const About = () => {
  return (
    <>
      <section className="about container section" id='about'>
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid">
          <img src={Image} alt="" className="about__img" />

          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">
              My name is Pragati Shokekar, and I am a web developer based in Indore, Madhya Pradesh. I have extensive experience in website design, development, and customization. Additionally, I specialize in frontend development and am proficient in creating responsive and user-friendly web interfaces </p>

              <a href="" className="btn">Download CV</a>
            </div>

            <div className="about__skills grid">


              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Development</h3>
                  <span className="skills__number ">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage development"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">DSA</h3>
                  <span className="skills__number ">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage dsa"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__title">
                  <h3 className="skills__name">Core subjects</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage core"></span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <AboutBox/>
      </section>

    </>
  )
}

export default About