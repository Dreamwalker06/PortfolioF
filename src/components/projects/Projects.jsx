import "./projects.scss";
import SousTitre from "../sousTitre/SousTitre";
import Cards from "../cards/Cards";
import Kasa from "../../assets/images/LOGO-Kasa.webp"
import React, { useState} from "react";
import Grimoire from "../../assets/images/MonVieuxGrimoire_1.webp"
import SophieBluel from "../../assets/images/SophieBluel_1.webp"
import Booki from "../../assets/images/Booki.png"
import Nina from "../../assets/images/Nina_carducci.webp"
import BookiMockup from "../../assets/images/Booki_mockupR.png"
import NinaMockup from "../../assets/images/Nina_mockupR.png"
import KasaMockup from "../../assets/images/Kasa_mockup.png"
import SophieIntro from "../../assets/images/Sophie_Intro.png"
import GrimoireIntro from "../../assets/images/Grimoire_Intro.png"
import Kasa1 from "../../assets/images/Kasa_Fiche-Logement.png"
import Kasa2 from "../../assets/images/Kasa_A_Propos.png"
import Kasa3 from "../../assets/images/Kasa_composants.png"
import Sophie1 from "../../assets/images/SophieBluel_2.webp"
import Sophie2 from "../../assets/images/SophieBluel_3.webp"
import Grimoire1 from  "../../assets/images/Grimoire1.webp"
import Grimoire2 from "../../assets/images/Grimoire2.webp"
import Booki1 from "../../assets/images/Booki_modal_1.webp"
import Booki2 from "../../assets/images/Booki_modal_2.webp"
 
const Projects = () => {
  const [filter, setFilter] = useState("Tous");

  const handleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filterCards = (card) => {
    if (filter === "Tous") {
      return true; // Afficher toutes les cartes
    }
    return (
      card.props.technologies &&
      card.props.technologies.includes(filter)
    ); // Vérifier si la carte contient la technologie du filtre
  };
  
 

  return (
    <div className="projects_container" >
      <span id="projects"></span>
      <div className="projets-container">
        <SousTitre title="MES PROJETS" />
        <p className="underscore">______</p>
        <div className="projects_button_container">
        <button
            className="projects_button"   // Add "active" class if "Tous" is active
            onClick={() => handleFilter("Tous")}
          >
            TOUS
          </button>
          <button className="projects_button"onClick={() => handleFilter("React")}>REACT</button>
          <button className="projects_button"onClick={() => handleFilter("Node")}>NODE</button>
          <button className="projects_button"onClick={() => handleFilter("Javascript")}>JAVASCRIPT</button>
        </div>
        <div className="cards-container card-row">
  {filterCards(<Cards image={Kasa} technologies={["React"]} />) && (
    <Cards title="Kasa - Réalisation du front-end" 
    mission={`Réalisation dans le cadre de ma formation avec OpenClassrooms.\n 
    - Initiation à React.js\n - Découpe de maquette afin de définir les divers composants.\n - Création de composants fonctionnels ; carousel, collapse...\n - Respect des spécificités fonctionnels ainsi que du coding guideline.\n - Extraction de données afin de les manipuler dynamiquement.`}
    technology="React" technology2="Sass" technology3="Figma"
  introductionImage={KasaMockup} 
    image={Kasa} 
    textHover={`Kasa - Découverte de Paradis.\n 
    Réalisation du front-end.`}
    technologies={["React"]}
    modalImage1={Kasa1} modalImage2={Kasa2} modalImage3={Kasa3}
    link_projet="https://dreamwalker06.github.io/P6Final/"
    buttonClass="button_kasa_visit"
    externalLink="https://dreamwalker06.github.io/P6Final/" />
  )}
  {filterCards(<Cards image={Grimoire} technologies={["Node"]} />) && (
    <Cards title ="Mon Vieux Grimoire - Réalisation du back-end" 
    mission={`Réalisation dans le cadre de ma formation avec OpenClassrooms.\n
     - Initiation à Node, Express & MongoDB. \n - Création & Sécurisation de base de données. \n - Création & paramètrage d'un serveur Express \n - Création d'une API RESTful \n - Mise en place d'un système d'authentification. \n - Implémentation d'un modèle logique de données conformément à la réglementation. \n - Mise en oeuvre des opérations CRUD de manière sécurisée. `}
     technology="Node" technology2="Express" technology3="Mongodb"
     introductionImage={GrimoireIntro}
     textHover={`Mon Vieux Grimoire.\n\nRéalisation du back-end`}
     image={Grimoire} technologies={["Node"]} 
     modalImage1={Grimoire1} modalImage2={Grimoire2}
     buttonClass="button_grimoire_visit" />
     
  )}
    {filterCards(<Cards image={SophieBluel} technologies={["Javascript"]} />) && (
    <Cards title ="Sophie Bluel - Réalisation du front-end" 
    mission={`Réalisation dans le cadre de ma formation avec OpenClassrooms.\n
    - Initiation à Javascript & Node.\n - Récupération de données en utilisant des API. \n - Mise en place d'un système d'authentification. \n - Création de modales. \n - Manipulation du DOM.  `}
    technology="JSnative" technology2="Figma" 
    introductionImage={SophieIntro}
    textHover={`Sophie Bluel - Architecte.\n\nImplémentation de fonctionnalités`}
    image={SophieBluel} technologies={["Javascript"]}
    modalImage1={Sophie1} modalImage2={Sophie2}
    buttonClass="button_sophie_visit"
     /> 
    
 )}
      {filterCards(<Cards image={Booki}  />) && (
    <Cards title ="Booki - Structure du code HTML & CSS" 
    mission={`Réalisation dans le cadre de ma formation avec OpenClassrooms.\n 
    - Initiation à HTML & CSS. \n - Utilisation et approche de Figma. \n - Compréhension du Web Sémantique. \n - Compréhension de l'architecture HTML. \n - Mise en place du Responsive Design. `}
    technology="HTML" technology2="CSS" technology3="Figma"  
    introductionImage={BookiMockup}
        textHover={`Booki - Agence de location.\n\nLanding Page & Responsive Design`}
    image={Booki}
    modalImage1={Booki1} modalImage2={Booki2} 
    link_projet="https://dreamwalker06.github.io/p2final/"
    buttonClass="button_booki_visit" 
    externalLink="https://dreamwalker06.github.io/p2final/"/>
      )}
          {filterCards(<Cards image={Nina}  />) && (
    <Cards title ="Nina Carducci - Optimisation du site" 
    mission={`Réalisation dans le cadre de ma formation avec OpenClassrooms.\n
    - Optimisation des performances, de l'accessibilité, du SEO technique d'un site web. \n - Ajout du référencement local et réseaux sociaux. \n - Déboggage d'un site web. \n - Génération des rapports finaux d'intervention. \n - Optimisation des images : Reconversion & Redimension`}
    technology="GTMetrix" technology2="GIMP" 
    introductionImage={NinaMockup}
    textHover={`Ninca Carducci - Photographe.\n
     Optimisation & Référencement.`}
    image={Nina}
    buttonClass="button_nina_visit" 
    externalLink="https://dreamwalker06.github.io/P5F/" />
      )}
</div>
      </div>
    </div>
  );
};

export default Projects;
