import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
function Header(props){
    function handleSignOut(){
        props.signOut();
    }
    return(
        <header className="header">
            <img alt="Лого" src={logo} className="header__logo"/>
            <div className="header__info">
                <p className="header__text">{props.email}</p>
                <Link to={props.link}><p onClick={props.signOut && handleSignOut} className="header__btn">{props.title}</p></Link>
            </div>
            
        </header>
    )
}
export default Header;