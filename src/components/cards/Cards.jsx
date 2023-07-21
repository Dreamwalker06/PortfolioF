import React, { useState, useRef, useEffect } from 'react';
import './cards.scss';


const Cards = ({ image, title, mission, technology, technology2, technology3, modalImage1, modalImage2, modalImage3, introductionImage, textHover }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
 <div className='cards_container' onClick={openModal}>
  <img src={image} />
  <div className="cards_hover_text hover-text">
  <p className='hover-text-intro'>{textHover.split('\n').map((paragraph, index) => (
    <React.Fragment key={index}>
      {paragraph}
      <br/>
    </React.Fragment>
  ))}</p>
  <p className='hover-text-more'>En savoir plus </p>
  </div>
</div>

    {modalOpen && (
        <div className='modal'>
          <div className='modal_content' ref={modalRef}>
          <button className="close-button" onClick={closeModal}>X</button>
          <div className="introduction_modal">
                <img src ={introductionImage} />
            <div className="introduction_texte_modal">
            <h2 className='title_introduction_modal'>{title}</h2>
            <p className='texte_modal'> Année: 2023</p>
           <p className="texte_modal">
  Mission: {mission.split('\n').map((paragraph, index) => (
    <React.Fragment key={index}>
      {paragraph}
      <br/>
    </React.Fragment>
  ))}
</p>

            <p className='texte_modal'> Technologie utilisées:</p>
            <div className="button_modal_container">
            {technology && <button className='button_technology_modal'>{technology}</button>}
                {technology2 && <button className='button_technology_modal'>{technology2}</button>}
                {technology3 && <button className='button_technology_modal'>{technology3}</button>}
             </div>
            </div>
            </div>
            <div className="modal_gallery">
           
            <img src={modalImage1}loading="lazy"  />
            <img src={modalImage2} loading="lazy" />
            <img src={modalImage3}loading="lazy"  /> 
            </div>
          
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
