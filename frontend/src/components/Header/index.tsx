import logo from '../../assets/img/Logo.svg';
import './styles.css';

function header() {
    return(
      <>
<header>
  <div className="dsmeta-logo-container">
    <img src={logo} alt="DSMeta"/>
    <h1>DSMeta</h1>
    <p>Desenvolvido por 
        <a href="https://www.instagram.com/devsuperior.ig">@devsuperior</a>
    </p>
  </div>
</header>
      </>
    )  
  }
  
  export default header;