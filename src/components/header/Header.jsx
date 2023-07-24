import React, { useState } from 'react';
import './header.scss';
import CV from '../../assets/data/CV_TRINH_Jerome.pdf';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const handleCollapse = () => {
    setIsCollapsed(false);
  };
  const handleDownload = () => {
    // Chemin relatif vers le fichier que vous souhaitez télécharger
    const filePath = CV

    // Crée un lien HTML
    const link = document.createElement('a');
    link.href = filePath;

    // Spécifie le nom du fichier lorsqu'il est téléchargé
    link.download = 'CV de Jerome TRINH';

    // Simule un clic sur le lien pour déclencher le téléchargement
    link.click();
  };


  const scrollToID = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div>
        <ul className="nav_bar">
          <li className="nav_item" onClick={() => scrollToID('presentation')}>
            Accueil
          </li>
          <li className="nav_item" onClick={() => scrollToID('presentation')}>
            Présentation
          </li>
          <li className="nav_item" onClick={() => scrollToID('projects')}>
            Réalisation
          </li>
          {/* Add the closing curly brace here */}
          {/* <li className="nav_item" onClick={() => scrollToID('skills')}>
            Compétences
          </li> */}
          <li className="nav_item" onClick={() => scrollToID('contact')}>
            Contact
          </li>
          <li className="nav_item" onClick={handleDownload}>
            Mon CV
          </li>
        </ul>
        <div className="nav_bar_mobile">
          <p className="nav_bar_mobile_name">JEROME TRINH</p>
          <div className="button_scroll" onClick={handleToggleCollapse}>
          <div className="button_bar"></div>
            <div className="button_bar"></div>
            <div className="button_bar"></div>
     
      </div>
   
         
          </div>
          {isCollapsed && (
           <div className={`collapse_content ${isCollapsed ? 'show' : ''}`}>
  
            <ul className="nav_bar_mobile_content">
          <li className="nav_item" onClick={() => scrollToID('presentation')}>
            ACCUEIL
          </li>
 <li
  className="nav_item"
  onClick={() => {
    scrollToID('presentation');
    handleCollapse();
  }}
>
  PRESENTATION
</li>
          <li
  className="nav_item"
  onClick={() => {
    scrollToID('projects');
    handleCollapse();
  }}
>
  REALISATION
</li>

<li
  className="nav_item"
  onClick={() => {
    scrollToID('contact');
    handleCollapse();
  }}
>
  CONTACT
</li>
          <li className="nav_item" onClick={handleDownload}>
            MON CV
          </li>
        </ul>
          </div>
        )}
        </div>
  
    </header>
  );
};

export default Header;
