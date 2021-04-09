import { Link, withRouter } from 'react-router-dom';
import React from "react";
function Register(props){
    const emailInput = React.useRef();
    const passwordInput = React.useRef();

    function handleSubmit(e){
        e.preventDefault();
        props.onRegister(passwordInput.current.value,emailInput.current.value)
        };
        
    return(
        <main className="content">
                <div className="popup__container">
                    <form  className="popup__card_theme_dark">
                        <h2 className="popup__header">Регистрация</h2>
                        <div className="popup__field">
                            <input ref={emailInput} defaultValue="" className="popup__row_theme_dark" name="email" type="email" minLength="2" maxLength="40" required id="Email" placeholder="Email"/>
                            <span className="popup__row-error_active name-error"></span>
                        </div>
                        <div className="popup__field">
                            <input ref={passwordInput} defaultValue="" className="popup__row_theme_dark" name="password" type="password" minLength="2" maxLength="40" required id="password"  placeholder="Пароль"/>
                            <span className="popup__row-error_active name-error"></span>
                        </div>
                        <button onClick={handleSubmit} className='popup__btn_theme_dark' type="submit">Зарегистрироваться</button>
                        <Link to="sign-in"><span className="popup__login">Уже зарегистрированы? Войти</span></Link>
                    </form>
                </div>
        </main>
    )
}
export default Register;