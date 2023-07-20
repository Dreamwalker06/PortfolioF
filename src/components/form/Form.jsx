import React, { useState, useEffect } from 'react';
import "./form.scss";
import SousTitre from '../sousTitre/SousTitre';

function Form() {
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
      <form  className='form-container hidden'>
        <SousTitre title="CONTACT"/>
        <p className='underscore'>______</p>
          <input type="text" required placeholder="Nom"/>
          <input type="text" required placeholder="Adresse e-mail"/>
          <textarea placeholder="Votre message" ></textarea>
          <button className="button_submit" type="submit">ME CONTACTER</button>

 
      </form>
      </div>

    )
  }

export default Form;