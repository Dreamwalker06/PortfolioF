import "./header.scss";

const Header = () => {
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
        
            <li className="nav_item">Accueil</li>
      
            <li className="nav_item" onClick={() => scrollToID('presentation')}>Présentation</li>
     
          <li className="nav_item" onClick={() => scrollToID('projects')}>
            Réalisation
          </li>
          <li className="nav_item" onClick={() => scrollToID('skills')}>
            Compétences
          </li>
          <li className="nav_item" onClick={() => scrollToID('contact')}>
            Contact
          </li>
        </ul>
      </div>
    </header>
  ); 
  
};

export default Header;
