import React from "react";
import { withRouter } from 'react-router-dom';
function Login(props){
    const emailInput = React.useRef();
    const passwordInput = React.useRef();

    function handleSubmit(e){
        props.onLogIn(passwordInput.current.value,emailInput.current.value)
        };

    return(
        <main className="content">
                <div className="popup__container">
                    <form  className="popup__card_theme_dark">
                        <h2 className="popup__header">Вход</h2>
                        <div className="popup__field">
                            <input ref={emailInput} className="popup__row_theme_dark" type="email" placeholder="Email"/>
                            <span className="popup__row-error_active name-error"></span>
                        </div>
                        <div className="popup__field">
                            <input ref={passwordInput} className="popup__row_theme_dark" type="password" placeholder="Пароль"/>
                            <span className="popup__row-error name-error"></span>
                        </div>
                        <button onClick={handleSubmit} className='popup__btn_theme_dark' type="button">Войти</button>
                    </form>
                </div>
        </main>
    )
}
export default Login;