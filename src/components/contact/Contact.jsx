import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
   <>
    <div className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lets's talk about everything !</h3>
          <p className="contact__details"> Don't like forms? Send me an email. 👋</p>
          </div>
         <form action="" className="contact__form">
          <div className="contact__form-group">

            <div className="contact__form-div">
              <input type="text" className="contact__form-input"  placeholder='Insert your name' />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input"  placeholder='Insert your email' />
            </div>
          </div>

          <div className="contact__form-div">
              <input type="text" className="contact__form-input"  placeholder='Insert your subject' />
            </div>
          <div className="contact__form-div contact__form-area">
             <textarea name=""
              id="" 
              cols="30"
               rows="10"
                className='contact__form-input ' 
                placeholder='Write message'>

                </textarea>
             </div>

             <button className='btn'>send message</button>
         </form>
      </div>
    </div>
   </>
  )
}

export default Contact