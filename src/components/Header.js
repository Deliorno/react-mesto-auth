import logo from '../images/logo.svg';
function Header(){
    return(
        <header className="header">
            <img alt="Лого" src={logo} className="header__logo"/>
        </header>
    )
}
export default Header;