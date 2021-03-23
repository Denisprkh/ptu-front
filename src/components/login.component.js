import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './../redux/actions/authActionCreators';

const LoginForm = ({dispatchLoginAction}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatchLoginAction(login, password, () => console.log("Logged if"),
            () => console.log("error"))
    }

    return (
        <React.Fragment>
            <h2>Есть аккаунт?</h2>
            <h4>Войдите здесь</h4>
            <br/>
            <main className="form-signin">
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="login">Логин</label>
                    <input type="email" className="form-control mt-2 mb-2" placeholder="Логин" required
                           name="login" value={login} onChange={(e) => setLogin(e.target.value)}
                    />
                </div>

                <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input type="password" className="form-control mt-2 mb-2" placeholder="Пароль" required
                       name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <button className="w-100 btn btn-lg btn-primary">Войти | <i className="fas fa-sign-in-alt"/></button>
            </form>
            </main>

        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchLoginAction : (login, password, onSuccess, onError) =>
        dispatch(loginUser({login, password}, onSuccess, onError))
})

export default connect(null, mapDispatchToProps)(LoginForm);