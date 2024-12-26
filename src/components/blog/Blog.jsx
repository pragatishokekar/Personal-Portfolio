import React from 'react'
import "./blog.css"
import Image1 from "../../assets/blog-1.svg"
import Image2 from "../../assets/blog-2.svg"
import Image3 from "../../assets/blog-3.svg"

const Blog = () => {
  return (
   <>
   <section className="blog container section" id="blog">
    <h2 className="section__title">Latest Post On LinkedIn</h2>

    <div className="blog__container grid">
    
    
    
    <div className="blog__card">
    <div className="blog__thumb">
      <a href="#"><span className="blog__category"> Internship</span></a>
      <a href="#"><img src={Image1} alt="" className="blog__img" /></a>
    </div>

    <div className="blog__details">
      <h3 className="blog__title"> Tic Toc Toe Project</h3>
      <div className="blog__meta">
        <span>15 Nov , 2024</span>
        <span className="blog__dot">.</span>
        <span>Shokekar</span>
      </div>
    </div>
  </div>


    <div className="blog__card">
    <div className="blog__thumb">
      <a href="#"><span className="blog__category">Internship</span></a>
      <a href="#"><img src={Image2} alt="" className="blog__img" /></a>
    </div>

    <div className="blog__details">
      <h3 className="blog__title"> Stopwatch Web Application </h3>
      <div className="blog__meta">
        <span>07 Oct ,2024</span>
        <span className="blog__dot">.</span>
        <span>Shokekar</span>
      </div>
    </div>
  </div>


    <div className="blog__card">
    <div className="blog__thumb">
      <a href="#"><span className="blog__category">Internship</span></a>
      <a href="#"><img src={Image3} alt="" className="blog__img" /></a>
    </div>

    <div className="blog__details">
      <h3 className="blog__title">Responsive Web Design</h3>
      <div className="blog__meta">
        <span>05 Sept, 2024</span>
        <span className="blog__dot">.</span>
        <span>Shokekar</span>
      </div>
    </div>
  </div>


    </div>
   </section>
   </>
  )
}

export default Blog