import React from 'react'
import "./services.css"
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"


const data = [
  {
    id: 1,
    image: Image1,
    title: "DSA",
    description:
      "I apply problem-solving techniques and optimization strategies to develop scalable, high-performance solutions.",
  },
  {
    id: 2,
    image: Image2,
    title: " Development",
    description:
      "I specialize in frontend development, creating responsive and user-friendly interfaces using modern technologies. My focus is on delivering high-quality, interactive web experiences that enhance user engagement.",
  },
  {
    id: 3,
    image: Image3,
    title: "UI/UX",
    description:
      "I create user-friendly designs that enhance usability and provide a great experience.",
  },
];

const Services = () => {
  return (
    <>
   <section className="services container section" id='services'>
    <h2 className="section__title">Skills</h2>

    <div className="services__container grid">
      {data.map(({id,image,title,description}) =>{
        return(
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="servicse__description">{description}</p>
          </div>
        )
      })}
    </div>
   </section>
    </>
  )
}

export default Services