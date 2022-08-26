import Navigation from "../../../components/Navigation/Navigation";
import './header.css'
const Header = () => {
    return ( <header className="headerContainer">
    <div>
        <a href="/"><img src={require('../../../images/logo.png')} alt="logo" className="logo"/></a>
    </div>
        <Navigation />
    </header> );
}
 
export default Header;