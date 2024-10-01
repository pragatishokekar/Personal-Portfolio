import React, { useState } from 'react'
import "./portfolio.css"
import Menu from './Menu'

const Portfolio = () => {
  const [item,setItem] = useState(Menu);
  const filterItem=(categoryItem) => {
    const updateItem =Menu.filter((curElem) =>{
      return curElem.category===categoryItem;
    })
    setItem(updateItem);
  }

  return (
    <>
      <section className="work container section" id='work'>
        <h2 className="section__title">Project Section</h2>

        <div className="work__filters">
        
          <span className="work__item" 
          onClick={() => setItem(Menu)}
          >All projects</span>

          <span className="work__item" 
          onClick={() => filterItem ("Creative")}
          >Animation</span>

          <span className="work__item" 
          onClick={() => filterItem ("Art")}
          >Responsive</span>
          
          <span className="work__item" 
          onClick={() => filterItem ("Branding")}
          >Realtime-Projects</span>

          <span className="work__item" 
          onClick={() => filterItem ("Design")}
          >Design</span>

        </div>

        <div className="work__container grid">
          {item.map((elem) =>{
            const{id,image,title,category} =elem;

            return(
              <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
              <i className="icon-link work__button-icon"></i>
              </a>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Portfolio