import React, { useState } from 'react';
import {connect} from 'react-redux';

import { registerUser} from "../redux/actions/authActionCreators";

const RegisterForm = ({dispatchRegisterAction}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatchRegisterAction(firstName, lastName, login, password, () => console.log('Account created!'),
            (message) => console.log("error"));
    }

    return (
        <React.Fragment>
            <h2>Новый пользователь?</h2>
            <h4>Зарегистрируйтесь здесь</h4>
            <br/>
            <main className="form-signin">
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">Имя</label>
                        <input type="text" className="form-control mt-2 mb-2" placeholder="Имя" required
                               name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Фамилия</label>
                        <input type="text" className="form-control mt-2 mb-2" placeholder="Фамилия" required
                               name="lastNae" value={lastName} onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
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

                    <button className="w-100 btn btn-lg btn-primary">Зарегистрироваться | <i className="fas fa-sign-in-alt"/></button>
                </form>
            </main>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
        dispatchRegisterAction : (firstName, lastName, login, password, onSuccess, onError) =>
        dispatch(registerUser({firstName, lastName, login, password}, onSuccess, onError))
});
export default connect(null, mapDispatchToProps)(RegisterForm);