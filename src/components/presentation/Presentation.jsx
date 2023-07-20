import React from 'react';
import "./presentation.scss";
import SousTitre from '../sousTitre/SousTitre';
import Collapse from '../collapse/Collapse';
import Carrousel from '../carrousel/Carrousel'; 
import image1 from "../../assets/images/Dignitas_champion.jpg";
import image2 from "../../assets/images/Dignitas_champion_2.jpg";
import image3 from "../../assets/images/JayPL2.jpg"
import image4 from "../../assets/images/Dignitas_champion_3.jpg"
import image5 from "../../assets/images/Trophee.jpg"
import image6 from "../../assets/images/backstage.jpg"
import image7 from "../../assets/images/conference_dignitas.jpg"



const Presentation = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
      

    ]
    return (
        <div  className='presentation-container'>
            <span id="presentation"></span>
            <SousTitre title="PRESENTATION" />
            <p className='underscore'>______</p>
            
        <p className='presentation-text'>Jérôme, 31ans, Nice, nouvellement <span>Développeur Web</span>, vous trouverez sur cette page les projets auxquels j'ai participé ainsi que mes diverses compétences.</p>
            
            <Collapse title="En apprendre davantage"/*  text="
En tant qu'ancien joueur professionnel sur Heroes of the Storm, j'ai eu la chance de m'épanouir dans le monde de la compétition à haut niveau dès l'âge de 21 ans. J'ai remporté plusieurs titres de champion d'Europe et j'ai également été vice-champion du monde à plusieurs reprises. Cette expérience m'a permis de voyager à travers le monde et de rencontrer de nombreuses personnalités inspirantes.
Après avoir consacré 5 ans à ce jeu, j'ai décidé de me lancer dans une carrière individuelle en explorant différents domaines tels que le streaming, la pédagogie, l'animation, et bien d'autres encore. Cependant, j'ai récemment entrepris un nouveau défi qui m'a profondément passionné : le développement web.
Je suis agréablement surpris de découvrir cette nouvelle passion qui me pousse chaque jour à me surpasser. Je m'investis pleinement dans l'apprentissage du développement web, cherchant constamment à m'améliorer et à repousser mes limites."> */
          > <p className='more_about_me'>En tant qu'ancien joueur professionnel sur Heroes of the Storm*, <br></br>j'ai eu la chance de m'épanouir dans le monde de la compétition à haut niveau dès l'âge de 21 ans. <br></br>J'ai remporté plusieurs titres de champion d'Europe et j'ai également été vice-champion du monde à plusieurs reprises. <br></br>Cette expérience m'a permis de voyager à travers le monde et de rencontrer de nombreuses personnalités inspirantes.
          <br></br>Après avoir consacré 5 ans à ce jeu, j'ai décidé de me lancer dans une carrière individuelle en explorant différents domaines tels que le streaming, la pédagogie, l'animation, et bien d'autres encore. <br></br>Cependant, j'ai récemment entrepris un nouveau défi qui m'a profondément passionné : le développement web.
          <br></br>Je suis agréablement surpris de découvrir cette nouvelle passion qui me pousse chaque jour à me surpasser. <br></br>Je m'investis pleinement dans l'apprentissage du développement web, cherchant constamment à m'améliorer et à repousser mes limites. <br></br><span className='heroes_text'>*Heroes of the storm est un jeu vidéo développé par Blizzard Entertainment</span></p>
          
          <Carrousel images={images} />
          </Collapse >
        </div>
        
    );

};

export default Presentation;