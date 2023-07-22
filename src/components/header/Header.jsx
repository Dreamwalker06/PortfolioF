import "./header.scss";
import CV from "../../assets/data/CV_TRINH_Jerome.pdf"

const Header = () => {
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
        <ul className="nav_bar" >
        
            <li className="nav_item" onClick={() => scrollToID('presentation')}>Accueil</li>
      
            <li className="nav_item" onClick={() => scrollToID('presentation')}>Présentation</li>
     
          <li className="nav_item" onClick={() => scrollToID('projects')}>
            Réalisation
          </li>
      {/*     <li className="nav_item" onClick={() => scrollToID('skills')}>
            Compétences
          </li> */}
          <li className="nav_item" onClick={() => scrollToID('contact')}>
            Contact
          </li>
          <li className="nav_item" onClick={handleDownload} >
            Mon CV
          </li>

        </ul>
      </div>
    </header>
  ); 
  
};

export default Header;
