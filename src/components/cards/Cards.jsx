import React, { useState, useRef, useEffect } from 'react';
import './cards.scss';
import kasa_fiche_logement from "../../assets/images/Kasa_Fiche-Logement.png"
import kasa_a_propos from "../../assets/images/Kasa_A_Propos.png"
import kasa_home from "../../assets/images/Kasa_home.png"
import kasa_composants from "../../assets/images/Kasa_composants.png"

const Cards = ({ image }) => {
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
      <img src={image}  />

    
      
    </div>
    {modalOpen && (
        <div className='modal'>
          <div className='modal_content' ref={modalRef}>
          <button className="close-button" onClick={closeModal}>X</button>
          <div className="introduction_modal">
                <img src ={kasa_fiche_logement} />
            <div className="introduction_texte_modal">
            <h2 className='title_introduction_modal'>Kasa - Réalisation du front-end</h2>
            <p className='texte_modal'> Année: 2023</p>
            <p className='texte_modal'> Mission: <br/>
            Réalisation dans le cadre de ma formation avec OpenClassrooms.
            <br/>- Initialisation à React.js <br/>- Découpe de maquette afin de définir les divers composants.
            <br/>- Création de composants fonctionnels.
            <br/>- Respect des spécificités fonctionnels ainsi que du coding guideline.
            <br/>- Extraction de données afin de les manipuler.</p>
            <p className='texte_modal'> Technologie utilisées:</p>
            <div className="button_modal_container">
             <button className='button_technology_modal'>REACT</button>
             <button className='button_technology_modal'>SASS</button>
             </div>
            </div>
            </div>
            <div className="modal_gallery">
            <img src={kasa_a_propos} alt = "Maquette Kasa About" />
            <img src={kasa_home} alt = "Maquette Kasa Home" />
            <img src ={kasa_composants} alt = "Maquette Kasa composants" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
