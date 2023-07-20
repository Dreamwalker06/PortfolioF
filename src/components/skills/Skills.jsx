import React from 'react';
import "./skills.scss";
import SousTitre from '../sousTitre/SousTitre';
import htmlLogo from "../../assets/images/HTML5_1Color_Black.svg"

const Skills = () => {
    return (
        <div  className='skills-container'>
            <span id="skills"></span>
        <SousTitre title="MES COMPETENCES" />
        <p className='underscore'>______</p>
        <p className='skills-text'>Blabla</p>
        <div className="cards_container_skills">
            <div className="cards_skills">
                <img src={htmlLogo} />
              
            </div>
            <div className="cards_skills">
                Hello
            </div>
            <div className="cards_skills">
                Hello
            </div>
            <div className="cards_skills">
                Hello
            </div>
            <div className="cards_skills">
                Hello
            </div>
            <div className="cards_skills">
                Hello
            </div>       
             </div>
        </div>
    );
};

export default Skills;