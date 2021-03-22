import React, {Component} from 'react';

const NonAuthorizedButtons = () => {

    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/signUp">Регистрация</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/signIn">Вход</a>
                </li>

            </ul>
        </div>
    )
}

export default NonAuthorizedButtons;