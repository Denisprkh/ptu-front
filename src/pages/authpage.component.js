import React from 'react';
import LoginForm from "../components/login.component";
import RegisterForm from "../components/register.component";

const AuthPage = () => (
    <div className="row justify-content-between ">
        <div className="col-md-5">
            <h2>Есть аккаунт?</h2>
            <h4>Войдите здесь</h4>
            <LoginForm/>
        </div>

        {/*<div style={{border: '1px solid  #ababab'}}></div>*/}

        <div className="col-md-6">
            <h2>Новый пользователь?</h2>
            <h4>Зарегистрируйтесь здесь</h4>
            <RegisterForm/>
        </div>
    </div>
)

export default AuthPage;