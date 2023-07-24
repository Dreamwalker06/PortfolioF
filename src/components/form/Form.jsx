import React, { useState, useEffect, useRef } from 'react';
import "./form.scss";
import SousTitre from '../sousTitre/SousTitre';
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5qb9pqq', 'template_9zoo4iq', form.current, 'YjScpGVP2qukCp4K6')
      .then((result) => {
          console.log(result.text);
          setEmailSent(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.5 });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
    return (
<div id="contact">
      <form ref={form} onSubmit={sendEmail} className='form-container hidden'>
        <SousTitre title="CONTACT"/>
        <p className='underscore'>______</p>
          <input type="text" name="user_name" required placeholder="Nom"/>
          <input type="text" name="user_email" required placeholder="Adresse e-mail"/>
          <textarea name="message" placeholder="Votre message" ></textarea>
          <button className="button_submit" type="submit" value="Send">ME CONTACTER</button>
          {emailSent && <p className='form_email_sent'>Votre email a été envoyé avec succès !</p>}

 
      </form>
      </div>

    )
  }

export default Form;