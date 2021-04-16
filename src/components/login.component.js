import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/authActionCreators';

const LoginForm = ({dispatchLoginAction, message}) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({login: false, password: false} );

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatchLoginAction(login, password, () => console.log("Logged if"),
            () => console.log("error"));
    }

    useEffect(() => {} , [message]);

    console.log(message)

    return (
        <React.Fragment>
            <br/>
            <main className="form-signin">
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="login">Логин</label>
                    <input type="email" className={`form-control mt-2 mb-2 ${error.login ? 'is-invalid' : ''} `} placeholder="Логин"
                           required pattern=".{2,30}"
                           name="login" value={login} onChange={(e) => setLogin(e.target.value)}
                    />

                </div>

                <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input type="password" className="form-control mt-2 mb-2" placeholder="Пароль" required pattern="^.{2,30}$"
                       title="Пароль должен содержать более 10 символов"
                       name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <button className="w-100 btn btn-lg btn-primary">Войти | <i className="fas fa-sign-in-alt"/></button>
            </form>
                {

                    message ? <p className="invalid-feedback">{message}</p> : null
                }
            </main>

        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchLoginAction : (login, password, onSuccess, onError) =>
        dispatch(loginUser({login, password}, onSuccess, onError)),

})

const mapStateToProps = state => ({
    message: state.errorMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);