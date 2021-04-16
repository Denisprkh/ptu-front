import React from 'react';
import LoginForm from "../components/login.component";

const LoginPage = () => {
    return (
        <>
            <div className="login-page-form">
            <h4>Войдите здесь</h4>
            <LoginForm/>
            </div>
        </>
    )
}

export default LoginPage;